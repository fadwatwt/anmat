import {rowsEmployees} from "../../../functions/FactoryData.jsx";
import Table from "../../../components/Tables/Table.jsx";
import {useTranslation} from "react-i18next";

function EmployeesTap() {
    const {t} = useTranslation()
    const headers = [
        {label: t("Employees"), width: "200px"},
        {label: t("Department"), width: "150px"},
        {label: t("Work type"), width: "150px"},
        {label: t("Salary"), width: "100px"},
        {label: t("Score"), width: "100px"},
        {label: "", width: "50px"},
    ];
    return (
        <div className={"flex flex-col gap-6"}>
            <div className="flex flex-col gap-2 h-full">
                <Table className="custom-class" title={"All Employees"} headers={headers}
                       handelDelete={() => {}} handelEdit={() => {}} isActions={true}
                       rows={rowsEmployees}
                       isFilter={true}/>
            </div>
        </div>
    );
}

export default EmployeesTap;