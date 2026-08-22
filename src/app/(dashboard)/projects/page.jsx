"use client";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import Page from "@/components/Page.jsx";
import Tabs from "@/components/Tabs.jsx";
import ProjectsTab from "@/app/(dashboard)/projects/tabs/ProjectsTab.jsx";
import TemplatesTab from "@/app/(dashboard)/projects/tabs/TemplatesTab.jsx";
import { usePermission } from "@/Hooks/usePermission";
import { selectUserType } from "@/redux/auth/authSlice";
import toast from "react-hot-toast";

function ProjectPage() {
  const { t } = useTranslation();
  const router = useRouter();
  const userType = useSelector(selectUserType);

  const [activeTab, setActiveTab] = useState(0);
  const canCreateProject = usePermission("projects.create");
  const canCreateTemplate = usePermission("project_templates.create");
  const canTrackAll = usePermission("projects.track_all");
  const canTrackDept = usePermission("projects.track_department");
  const canListTemplates = usePermission("project_templates.list");
  const canListProjects = usePermission("projects.list") || canTrackAll || canTrackDept;

  const isEmployee = userType === "Employee";
  const employeeAuthorized = canTrackAll || canTrackDept;

  // Redirect Employees without management permission to their personal view.
  // Show an explanation first — a silent redirect looks like the page is broken.
  useEffect(() => {
    if (isEmployee && !employeeAuthorized) {
      toast.info(
        t("You do not have access to project management. Opening your personal projects instead...")
      );
      router.replace("/employee/projects");
    }
  }, [isEmployee, employeeAuthorized, router, t]);

  if (isEmployee && !employeeAuthorized) return null;

  const handleCreateBtn = () => {
    if (activeTab === 0) {
      router.push("/projects/create");
    } else {
      router.push("/projects/templates/create");
    }
  };

  const tabsData = [
    ...(canListProjects ? [{
      title: t("Projects"),
      content: <ProjectsTab />,
    }] : []),
    ...(canListTemplates ? [{
      title: t("Templates"),
      content: <TemplatesTab />,
    }] : []),
  ];

  const currentTab = tabsData[activeTab];
  const isProjectsTab = currentTab?.title === t("Projects");
  const showCreateBtn = isProjectsTab ? canCreateProject : canCreateTemplate;
  const btnTitle = isProjectsTab ? t("Create a Project") : t("Create a Template");

  return (
    <Page
      title={t("Projects")}
      isBtn={showCreateBtn}
      btnOnClick={handleCreateBtn}
      btnTitle={btnTitle}
    >
      <div className="flex flex-col gap-4">
        <Tabs tabs={tabsData} activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    </Page>
  );
}

export default ProjectPage;
