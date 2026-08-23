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

  const showProjectBtn = canCreateProject;
  const showTemplateBtn = canCreateTemplate;
  const bothCreatable = showProjectBtn && showTemplateBtn;

  const CreateActions = () => {
    if (!showProjectBtn && !showTemplateBtn) return null;
    // لا يوجد dropdown — إذا كان يملك الصلاحيتين يظهر زرّان مباشران، وإلا زر واحد
    if (bothCreatable) {
      return (
        <div className="flex items-center gap-2">
          <button
            onClick={() => router.push("/projects/create")}
            className="bg-primary-base dark:bg-primary-200 flex gap-1.5 items-center px-4 py-2.5 rounded-xl text-white dark:text-black font-medium shadow-sm hover:opacity-90 transition-opacity"
          >
            <span className="text-sm whitespace-nowrap">{t("Create a Project")}</span>
          </button>
          <button
            onClick={() => router.push("/projects/templates/create")}
            className="bg-surface border border-status-border flex gap-1.5 items-center px-4 py-2.5 rounded-xl text-cell-primary font-medium shadow-sm hover:bg-status-bg transition-colors"
          >
            <span className="text-sm whitespace-nowrap">{t("Create a Template")}</span>
          </button>
        </div>
      );
    }
    const singlePath = showProjectBtn ? "/projects/create" : "/projects/templates/create";
    const singleTitle = showProjectBtn ? t("Create a Project") : t("Create a Template");
    return (
      <button
        onClick={() => router.push(singlePath)}
        className="bg-primary-base dark:bg-primary-200 flex gap-1.5 items-center px-4 py-2.5 rounded-xl text-white dark:text-black font-medium shadow-sm hover:opacity-90 transition-opacity"
      >
        <span className="text-sm whitespace-nowrap">{singleTitle}</span>
      </button>
    );
  };

  return (
    <Page
      title={t("Projects")}
      isTitle={true}
      otherHeaderActions={<CreateActions />}
    >
      <div className="flex flex-col gap-4">
        <Tabs tabs={tabsData} activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    </Page>
  );
}

export default ProjectPage;
