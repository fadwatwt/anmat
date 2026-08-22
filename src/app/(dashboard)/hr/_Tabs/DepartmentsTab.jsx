import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Table from "@/components/Tables/Table.jsx";
import BulkDeleteButton from "@/components/Tables/BulkDeleteButton.jsx";
import EditDepartmentModal from "@/app/(dashboard)/hr/_modals/EditDepartmentModal.jsx";
import Alert from "@/components/Alerts/Alert.jsx";
import ApiResponseAlert from "@/components/Alerts/ApiResponseAlert.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDepartments,
  deleteDepartment,
} from "@/redux/departments/departmentAPI";
import {
  useDeleteManyDepartmentsMutation,
} from "@/redux/departments/departmentsApi";

function DepartmentsTab() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { departments } = useSelector(
    (state) => state.departments
  );
  const [deleteManyDepartments] = useDeleteManyDepartmentsMutation();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [selectedDeleteDepartment, setSelectedDeleteDepartment] =
    useState(null);
  const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false);
  const [isSuccessAlertOpen, setIsSuccessAlertOpen] = useState(false);
  const [isEditSuccessAlertOpen, setIsEditSuccessAlertOpen] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);
  const [tableKey, setTableKey] = useState(0);
  const [responseAlert, setResponseAlert] = useState({
    isOpen: false,
    status: "",
    message: "",
  });

  const headers = [
    { label: t("Name"), width: "200px" },
    { label: t("Manager"), width: "100px" },
    { label: t("No. of Active Tasks / Projects"), width: "200px" },
    { label: t("No. of Employees"), width: "150px" },
    { label: t("Score"), width: "200px" },
    { label: "", width: "50px" },
  ];

  useEffect(() => {
    dispatch(fetchDepartments());
  }, [dispatch]);

  const DepartmentRowTable = () => {
    return departments?.map((dept) => [
      dept.name,
      dept.manager?.name || t("Not assigned"),
      dept.employeeCount || 0,
      dept.description || t("No description"),
      dept.score || 0,
    ]);
  };

  const handleEditSuccess = () => {
    setIsEditSuccessAlertOpen(true);
    dispatch(fetchDepartments());
  };

  const handleSelectionChange = (indices) => {
    setSelectedIds(indices.map((i) => departments[i]?._id).filter(Boolean));
  };

  const confirmBulkDelete = async () => {
    try {
      const result = await deleteManyDepartments(selectedIds).unwrap();
      const failedCount = result?.data?.failed?.length || 0;
      setResponseAlert({
        isOpen: true,
        status: failedCount > 0 ? "warning" : "success",
        message:
          failedCount > 0
            ? t("{{count}} item(s) deleted, {{failed}} failed", {
                count: result?.data?.deleted ?? 0,
                failed: failedCount,
              })
            : t("{{count}} departments deleted successfully", {
                count: selectedIds.length,
              }),
      });
      setSelectedIds([]);
      setTableKey((k) => k + 1);
      dispatch(fetchDepartments());
    } catch (error) {
      setResponseAlert({
        isOpen: true,
        status: "error",
        message: error?.data?.message || t("Failed to delete selected items"),
      });
    }
  };

  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2 h-full">
          <Table
            key={tableKey}
            title={"All Departments"}
            headers={headers}
            handelDelete={(index) => {
              setSelectedDeleteDepartment(departments[index]);
              setIsDeleteAlertOpen(true);
            }}
            handelEdit={(index) => {
              setSelectedDepartment(departments[index]);
              setIsEditModalOpen(true);
            }}
            isActions={true}
            rows={DepartmentRowTable()}
            isFilter={true}
            onSelectionChange={handleSelectionChange}
            headerActions={
              <BulkDeleteButton
                count={selectedIds.length}
                onConfirm={confirmBulkDelete}
                permission="departments.delete"
              />
            }
          />
        </div>
      </div>

      <EditDepartmentModal
        isOpen={isEditModalOpen}
        department={selectedDepartment}
        onClose={() => setIsEditModalOpen(false)}
        onSuccess={handleEditSuccess}
      />

      {/* Delete Alerts */}
      <Alert
        type="warning"
        title={t("Delete Department?")}
        message={t("Are you sure you want to delete this department?")}
        onSubmit={(confirmed) => {
          if (confirmed && selectedDeleteDepartment) {
            dispatch(deleteDepartment(selectedDeleteDepartment._id))
              .then(() => setIsSuccessAlertOpen(true))
              .catch(console.error);
          }
          setIsDeleteAlertOpen(false);
        }}
        titleCancelBtn={t("Cancel")}
        titleSubmitBtn={t("Delete")}
        isOpen={isDeleteAlertOpen}
        onClose={() => setIsDeleteAlertOpen(false)}
        isBtns={true}
      />

      <Alert
        type="success"
        title={t("Department Deleted")}
        message={t("The department has been successfully deleted.")}
        isOpen={isSuccessAlertOpen}
        onClose={() => setIsSuccessAlertOpen(false)}
      />

      {/* Edit Success Alert */}

      <Alert
        type="success"
        title={t("Department Updated")}
        message={t("The department has been successfully updated.")}
        isOpen={isEditSuccessAlertOpen}
        onClose={() => setIsEditSuccessAlertOpen(false)}
      />

      <ApiResponseAlert
        isOpen={responseAlert.isOpen}
        status={responseAlert.status}
        message={responseAlert.message}
        onClose={() => setResponseAlert({ ...responseAlert, isOpen: false })}
      />
    </>
  );
}

export default DepartmentsTab;
