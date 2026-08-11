# تقرير مراجعة الدارك مود — أنماط أنماات (anmat_front-main)

## ملخص

- تم فحص **605** ملف (JSX/JS/TSX/TS)
- عدد الملفات التي تحتوي ألواناً ثابتة بدون معالجة دارك مود: **239** ملف

### الفئات
- **breaking**: ألوان ستكسر التباين/القراءة فعلياً في الدارك مود (خلفيات بيضاء صلبة، نصوص داكنة على خلفية داكنة، ستايلات inline بلون ثابت)
- **needs-dark**: ألوان تحتاج إضافة `dark:` (نصوص رمادية، حدود، خلفيات فاتحة/badges)
- **ok**: ألوان مقصودة تعمل في الوضعين (أزرار ملونة، نصوص بيضاء على خلفيات ملونة، ألوان حالة)

## الملفات حسب الخطورة

| الملف | خطير (breaking) | يحتاج دارك | مقبول |
|---|---|---|---|
| /components/FloatingAiButton.jsx | 3 | 9 | 22 |
| /components/DashboardFloatingButton.jsx | 3 | 5 | 19 |
| /app/(dashboard)/plans/[slug]/details/page.jsx | 4 | 2 | 4 |
| /components/Call/ActiveGroupCallBar.jsx | 3 | 4 | 3 |
| /app/(dashboard)/attendance/page.jsx | 4 | 0 | 0 |
| /app/(dashboard)/ai/ChatInput.jsx | 0 | 7 | 7 |
| /app/dashboard/knowledge-base/page.jsx | 2 | 3 | 4 |
| /app/dashboard/ai/page.jsx | 1 | 4 | 2 |
| /components/Call/IncomingCall.jsx | 1 | 4 | 2 |
| /components/Call/IncomingGroupCall.jsx | 1 | 4 | 2 |
| /app/(dashboard)/hr/employees/tabs/AttendanceTab.jsx | 2 | 2 | 1 |
| /components/Call/CallProvider.jsx | 2 | 1 | 0 |
| /app/(dashboard)/ai/page.jsx | 1 | 2 | 10 |
| /app/(dashboard)/appointments/[id]/page.jsx | 1 | 2 | 3 |
| /app/(dashboard)/hr/teams/page.jsx | 1 | 2 | 3 |
| /app/(auth)/(auth-layout)/register/subscriber/complete-profile/page.jsx | 1 | 2 | 1 |
| /components/Agenda/EditReminderModal.jsx | 1 | 2 | 1 |
| /components/Call/OutgoingCall.jsx | 1 | 2 | 1 |
| /components/Appointments/TodayAppointments.jsx | 1 | 2 | 0 |
| /components/Loading.jsx | 2 | 0 | 1 |
| /app/page.jsx | 0 | 3 | 4 |
| /components/Call/ActiveCallBar.jsx | 0 | 3 | 3 |
| /app/(dashboard)/notifications/page.jsx | 0 | 3 | 2 |
| /app/admin/page.jsx | 0 | 3 | 2 |
| /app/old_dashboard/page.jsx | 0 | 3 | 2 |
| /app/mail-invitation/page.jsx | 1 | 1 | 2 |
| /app/(dashboard)/hr/_Tabs/RotationTap.jsx | 1 | 1 | 1 |
| /components/Agenda/DayDetailSidebar.jsx | 0 | 3 | 0 |
| /components/Agenda/AgendaSearch.jsx | 1 | 1 | 0 |
| /components/Appointments/CountdownWidget.jsx | 1 | 1 | 0 |
| /app/(dashboard)/hr/employees/tabs/Employees.tap.jsx | 1 | 0 | 11 |
| /app/(dashboard)/hr/chats/tabs/ChatsTab.jsx | 0 | 2 | 4 |
| /app/(dashboard)/ai/pricing/page.jsx | 0 | 2 | 2 |
| /app/(dashboard)/hr/employees/tabs/SalaryTab.jsx | 0 | 2 | 2 |
| /app/(dashboard)/profile/_components/CompanyManagerProfile.jsx | 0 | 2 | 2 |
| /components/Agenda/DailyTaskCard.jsx | 0 | 2 | 2 |
| /components/Agenda/MonthlyCalendar.jsx | 1 | 0 | 3 |
| /components/Dropdowns/NotificationsDropdown.jsx | 0 | 2 | 2 |
| /app/(dashboard)/escalation/page.jsx | 0 | 2 | 1 |
| /app/(dashboard)/hr/holidays/modals/AddHolidayModal.jsx | 0 | 2 | 1 |
| /app/(dashboard)/hr/holidays/modals/DeleteHolidayModal.jsx | 0 | 2 | 1 |
| /app/(dashboard)/leaves/modals/DeleteMyLeaveModal.jsx | 0 | 2 | 1 |
| /app/(dashboard)/projects/_modal/SaveAsTemplateModal.jsx | 0 | 2 | 1 |
| /app/(dashboard)/support-tickets/[id]/page.jsx | 0 | 2 | 1 |
| /app/(dashboard)/analytics/_components/company_manager/departments/DepartmentsRankingTable.jsx | 1 | 0 | 1 |
| /app/(dashboard)/profile/_components/company_manager/RotationTable.jsx | 1 | 0 | 1 |
| /app/(dashboard)/projects/[slug]/_components/MembersListXLine.jsx | 0 | 2 | 0 |
| /app/(dashboard)/subscriptions/_components/company_manager/PaymentMethods.jsx | 1 | 0 | 1 |
| /components/Agenda/AddToAgendaModal.jsx | 1 | 0 | 1 |
| /components/Agenda/CreateAgendaModal.jsx | 1 | 0 | 1 |
| /components/Agenda/EditDailyTaskModal.jsx | 1 | 0 | 1 |
| /components/Agenda/HourlyTimeline.jsx | 0 | 2 | 0 |
| /components/Appointments/CreateAppointmentFromTaskModal.jsx | 1 | 0 | 1 |
| /components/Appointments/EditAppointmentModal.jsx | 1 | 0 | 1 |
| /components/Chat/ChatDetailsModal.jsx | 1 | 0 | 1 |
| /app/(dashboard)/layout.jsx | 1 | 0 | 0 |
| /app/(dashboard)/tasks/_components/KanbanColumn.jsx | 1 | 0 | 0 |
| /components/Appointments/ShareAppointment.jsx | 1 | 0 | 0 |
| /components/Appointments/TaskAppointmentLink.jsx | 1 | 0 | 0 |
| /components/Chat/CreatePollModal.jsx | 1 | 0 | 0 |
| /app/(dashboard)/hr/departments/[slug]/profile/page.jsx | 0 | 1 | 5 |
| /app/(dashboard)/plans/_components/AIPlansTab.jsx | 0 | 1 | 5 |
| /components/Dropdowns/MessagesDropdown.jsx | 0 | 1 | 4 |
| /components/Modal/Methods/Tabs/Post/PostManually.method.jsx | 0 | 1 | 3 |
| /components/StarRating.jsx | 0 | 1 | 3 |
| /components/Chat/ChatWindow.jsx | 0 | 1 | 2 |
| /components/Chat/MessageInput.jsx | 0 | 1 | 2 |
| /components/Chat/ChatList.jsx | 0 | 1 | 1 |
| /components/Tables/Table.jsx | 0 | 1 | 1 |
| /app/(auth)/(account-setup)/payment/components/SavedPaymentMethods.jsx | 0 | 1 | 0 |
| /app/(auth)/(auth-layout)/(common)/sign-in/page.jsx | 0 | 1 | 0 |
| /app/(auth)/(auth-layout)/register/employee/page.jsx | 0 | 1 | 0 |
| /app/(dashboard)/analytics/_components/charts/ProjectsPerformanceList.jsx | 0 | 1 | 0 |
| /app/(dashboard)/employee/projects/page.jsx | 0 | 1 | 0 |
| /app/(dashboard)/hr/chats/modals/CreateChatGroupModal.jsx | 0 | 1 | 0 |
| /app/dashboard/ai/ChatInput.jsx | 0 | 1 | 0 |
| /components/Appointments/AppointmentCard.jsx | 0 | 1 | 0 |
| /components/Chat/NewConversationModal.jsx | 0 | 1 | 0 |
| /components/containers/PlanCard.jsx | 0 | 1 | 0 |
| /app/(dashboard)/projects/_components/TableInfo/Status.jsx | 0 | 0 | 12 |
| /app/(dashboard)/hr/meetings/page.jsx | 0 | 0 | 6 |
| /app/(dashboard)/projects/tabs/ProjectsTab.jsx | 0 | 0 | 6 |
| /components/Modal/SendAdminNotificationModal.jsx | 0 | 0 | 6 |
| /app/(dashboard)/plans/page.jsx | 0 | 0 | 5 |
| /app/(dashboard)/projects/tabs/TemplatesTab.jsx | 0 | 0 | 5 |
| /app/(dashboard)/industries/page.jsx | 0 | 0 | 4 |
| /app/(dashboard)/money-receiving/page.jsx | 0 | 0 | 4 |
| /app/(dashboard)/profile/_components/components/Alerts.jsx | 0 | 0 | 4 |
| /app/(dashboard)/projects/[slug]/_components/ProjectMembers.jsx | 0 | 0 | 4 |
| /app/(dashboard)/subscribers/page.jsx | 0 | 0 | 4 |
| /app/(dashboard)/subscriptions/_components/AdminCompaniesSubscriptions.jsx | 0 | 0 | 4 |
| /app/(dashboard)/subscriptions/_components/company_manager/Orders.jsx | 0 | 0 | 4 |
| /app/(dashboard)/tasks/page.jsx | 0 | 0 | 4 |
| /app/(dashboard)/translations/page.jsx | 0 | 0 | 4 |
| /app/(dashboard)/_components/EmployeeStates.jsx | 0 | 0 | 4 |
| /components/Agenda/TodayRightPanel.jsx | 0 | 0 | 4 |
| /components/Alerts/Alert.jsx | 0 | 0 | 4 |
| /components/CommentInput.jsx | 0 | 0 | 4 |
| /app/(dashboard)/appointments/create/page.jsx | 0 | 0 | 3 |
| /app/(dashboard)/hr/employees/[slug]/profile/page.jsx | 0 | 0 | 3 |
| /app/(dashboard)/hr/Rating.jsx | 0 | 0 | 3 |
| /app/(dashboard)/money-receiving/modal/CreateMoneyReceiving.modal.jsx | 0 | 0 | 3 |
| /app/(dashboard)/projects/Components/TableInfo/Status.jsx | 0 | 0 | 3 |
| /app/(dashboard)/tasks/CompanyManagerTasksPage.jsx | 0 | 0 | 3 |
| /app/(dashboard)/tasks/EmployeeTasksPage.jsx | 0 | 0 | 3 |
| /components/Alerts/ApprovalAlert.jsx | 0 | 0 | 3 |
| /components/Alerts/CheckِِAlert.jsx | 0 | 0 | 3 |
| /components/tags/EmpoyeeRequestStatus.jsx | 0 | 0 | 3 |
| /app/(auth)/account-setup/layout.jsx | 0 | 0 | 2 |
| /app/(dashboard)/analytics/_components/AdminAnalytics.jsx | 0 | 0 | 2 |
| /app/(dashboard)/analytics/_components/CompanyManagerAnalytics.jsx | 0 | 0 | 2 |
| /app/(dashboard)/analytics/_components/EmployeeAnalytics.jsx | 0 | 0 | 2 |
| /app/(dashboard)/appointments/page.jsx | 0 | 0 | 2 |
| /app/(dashboard)/employee/projects/[slug]/details/page.jsx | 0 | 0 | 2 |
| /app/(dashboard)/employee/tasks/page.jsx | 0 | 0 | 2 |
| /app/(dashboard)/hr/departments/page.jsx | 0 | 0 | 2 |
| /app/(dashboard)/hr/employees/modals/AddAttendanceModal.jsx | 0 | 0 | 2 |
| /app/(dashboard)/hr/employees/modals/AddSalaryModal.jsx | 0 | 0 | 2 |
| /app/(dashboard)/hr/employees/modals/CompleteEmployeeProfileModal.jsx | 0 | 0 | 2 |
| /app/(dashboard)/hr/employees/modals/EditAttendanceModal.jsx | 0 | 0 | 2 |
| /app/(dashboard)/hr/positions/page.jsx | 0 | 0 | 2 |
| /app/(dashboard)/hr/_modals/EditAnEmployeeModal.jsx | 0 | 0 | 2 |
| /app/(dashboard)/hr/_modals/EditFinancialModal.jsx | 0 | 0 | 2 |
| /app/(dashboard)/money-receiving/components/IntegrationSettingsForm.jsx | 0 | 0 | 2 |
| /app/(dashboard)/plans/_components/PlanTranslations.modal.jsx | 0 | 0 | 2 |
| /app/(dashboard)/projects/[slug]/_components/TaskComments.jsx | 0 | 0 | 2 |
| /app/(dashboard)/projects/_components/EmployeeProjectsPage.jsx | 0 | 0 | 2 |
| /app/(dashboard)/roles/admins/page.jsx | 0 | 0 | 2 |
| /app/(dashboard)/roles/employees/page.jsx | 0 | 0 | 2 |
| /app/(dashboard)/setting/Tabs/TasksTab/SidebarItems/Rating.jsx | 0 | 0 | 2 |
| /app/(dashboard)/social-media/_Tabs/_components/AccountQuotaCard.jsx | 0 | 0 | 2 |
| /app/(dashboard)/system-admins/page.jsx | 0 | 0 | 2 |
| /app/(dashboard)/tasks/[slug]/details/page.jsx | 0 | 0 | 2 |
| /app/(dashboard)/tasks/[slug]/edit/page.jsx | 0 | 0 | 2 |
| /app/(dashboard)/translations/_components/FeatureTypeTranslations.modal.jsx | 0 | 0 | 2 |
| /app/(dashboard)/translations/_components/IndustriesTranslations.modal.jsx | 0 | 0 | 2 |
| /app/(dashboard)/translations/_components/PlanTranslations.modal.jsx | 0 | 0 | 2 |
| /app/(dashboard)/translations/_components/TokenPackagesTranslations.modal.jsx | 0 | 0 | 2 |
| /components/Appointments/QuickAddAppointment.jsx | 0 | 0 | 2 |
| /components/Form/DefaultSelect.jsx | 0 | 0 | 2 |
| /components/Form/MultiSelect.jsx | 0 | 0 | 2 |
| /components/Form/TimeInput.jsx | 0 | 0 | 2 |
| /components/Modal/Methods/LoginAccountsModal.jsx | 0 | 0 | 2 |
| /components/Modal/Methods/Tabs/Follow.method.jsx | 0 | 0 | 2 |
| /components/Modal/Methods/Tabs/Replay.method.jsx | 0 | 0 | 2 |
| /components/Modal/Methods/Tabs/UnFollow.method.jsx | 0 | 0 | 2 |
| /components/Modal/SocialMedia/AddTwitterAccountModal.jsx | 0 | 0 | 2 |
| /components/Modal/SocialMedia/EditTwitterAccountModal.jsx | 0 | 0 | 2 |
| /components/PermissionGuard.jsx | 0 | 0 | 2 |
| /app/(dashboard)/dashboard/_components/employee/EmployeeRequests.jsx | 0 | 0 | 1 |
| /app/(dashboard)/hr/departments/modals/CreateDepartment.modal.jsx | 0 | 0 | 1 |
| /app/(dashboard)/hr/departments/modals/EditDepartmentModal.jsx | 0 | 0 | 1 |
| /app/(dashboard)/hr/employees/modals/AssignDepartmentModal.jsx | 0 | 0 | 1 |
| /app/(dashboard)/hr/employees/modals/CreateEmployee.modal.jsx | 0 | 0 | 1 |
| /app/(dashboard)/hr/employees/modals/EditSalaryModal.jsx | 0 | 0 | 1 |
| /app/(dashboard)/hr/employees/modals/SendNotification.modal.jsx | 0 | 0 | 1 |
| /app/(dashboard)/hr/employees/modals/ViewRequestModal.jsx | 0 | 0 | 1 |
| /app/(dashboard)/hr/employees/tabs/LeavesTab.jsx | 0 | 0 | 1 |
| /app/(dashboard)/hr/employees/tabs/RequestsTab.jsx | 0 | 0 | 1 |
| /app/(dashboard)/hr/holidays/page.jsx | 0 | 0 | 1 |
| /app/(dashboard)/hr/_modals/AddingAnEmployeeModal.jsx | 0 | 0 | 1 |
| /app/(dashboard)/hr/_modals/InviteEmployeeModal.jsx | 0 | 0 | 1 |
| /app/(dashboard)/leaves/page.jsx | 0 | 0 | 1 |
| /app/(dashboard)/permissions/page.jsx | 0 | 0 | 1 |
| /app/(dashboard)/plans/_components/EditPlan.modal.jsx | 0 | 0 | 1 |
| /app/(dashboard)/profile/_components/AdminProfile.jsx | 0 | 0 | 1 |
| /app/(dashboard)/profile/_components/company_manager/AttendanceTable.jsx | 0 | 0 | 1 |
| /app/(dashboard)/profile/_components/EmployeeProfile.jsx | 0 | 0 | 1 |
| /app/(dashboard)/projects/create/page.jsx | 0 | 0 | 1 |
| /app/(dashboard)/projects/templates/[slug]/edit/page.jsx | 0 | 0 | 1 |
| /app/(dashboard)/projects/templates/[slug]/page.jsx | 0 | 0 | 1 |
| /app/(dashboard)/projects/[slug]/details/page.jsx | 0 | 0 | 1 |
| /app/(dashboard)/projects/_components/CreateProjectForm/SubComponents/TaskMainInfo.jsx | 0 | 0 | 1 |
| /app/(dashboard)/projects/_components/TableInfo/Rating.jsx | 0 | 0 | 1 |
| /app/(dashboard)/setting/Tabs/AiSettings.tab.jsx | 0 | 0 | 1 |
| /app/(dashboard)/social-media/categories/page.jsx | 0 | 0 | 1 |
| /app/(dashboard)/subscribers/[slug]/page.jsx | 0 | 0 | 1 |
| /app/(dashboard)/subscriptions/_components/company_manager/Details.jsx | 0 | 0 | 1 |
| /app/(dashboard)/support-tickets/page.jsx | 0 | 0 | 1 |
| /app/(dashboard)/support-tickets/_modals/CreateTicketModal.jsx | 0 | 0 | 1 |
| /app/(dashboard)/tasks/create/page.jsx | 0 | 0 | 1 |
| /app/(general)/subscription-inactive/page.jsx | 0 | 0 | 1 |
| /app/old_dashboard/tasks/page.jsx | 0 | 0 | 1 |
| /components/Agenda/AgendaHeader.jsx | 0 | 0 | 1 |
| /components/Agenda/AppointmentNotes.jsx | 0 | 0 | 1 |
| /components/Form/DateInput.jsx | 0 | 0 | 1 |
| /components/Form/ElementsSelect.jsx | 0 | 0 | 1 |
| /components/Form/InputAndLabel.jsx | 0 | 0 | 1 |
| /components/Form/InputWithIcon.jsx | 0 | 0 | 1 |
| /components/Form/MonthInput.jsx | 0 | 0 | 1 |
| /components/Form/PasswordInput.jsx | 0 | 0 | 1 |
| /components/Form/SelectAndLabel.jsx | 0 | 0 | 1 |
| /components/Form/SelectWithoutLabel.jsx | 0 | 0 | 1 |
| /components/Form/TagInput.jsx | 0 | 0 | 1 |
| /components/Form/TextAreaWithLabel.jsx | 0 | 0 | 1 |
| /components/Form/UserSelect.jsx | 0 | 0 | 1 |
| /components/Modal/IncreaseFeaturesModal.jsx | 0 | 0 | 1 |
| /components/Modal/Methods/Tabs/Like.method.jsx | 0 | 0 | 1 |
| /components/Modal/Methods/Tabs/UnLike.method.jsx | 0 | 0 | 1 |
| /components/Modal/SocialMedia/AccountPicker.jsx | 0 | 0 | 1 |
| /components/Modal/SocialMedia/ImportAccountsModal.jsx | 0 | 0 | 1 |

## تفاصيل الملفات الحرجة (breaking)

### /components/FloatingAiButton.jsx
- **surface-solid**:
  - `bg-white/20`
- **surface-inline**:
  - `inline-style: style={{ backgroundColor: !input.trim() ? "#d1d5db" : "#3b82f6", c`
  - `inline-style: style={{ backgroundColor: !input.trim() || isLoading ? "#d1d5db" :`

### /components/DashboardFloatingButton.jsx
- **surface-solid**:
  - `bg-white/20`
- **surface-inline**:
  - `inline-style: style={{ backgroundColor: !input.trim() ? "#d1d5db" : "#3b82f6", c`
  - `inline-style: style={{ backgroundColor: !input.trim() || isLoading ? "#d1d5db" :`

### /app/(dashboard)/plans/[slug]/details/page.jsx
- **surface-solid**:
  - `bg-black/30`
  - `hover:bg-black/50`
  - `bg-black/30`
  - `hover:bg-black/50`

### /components/Call/ActiveGroupCallBar.jsx
- **surface-solid**:
  - `bg-gray-900`
  - `bg-black/50`
  - `bg-black`

### /app/(dashboard)/attendance/page.jsx
- **text-dark**:
  - `text-[#C2540A]`
  - `text-[#C2540A]`
  - `text-[#C2540A]`
- **surface-solid**:
  - `bg-[#C2540A]`

### /app/dashboard/knowledge-base/page.jsx
- **surface-solid**:
  - `bg-black/40`
  - `bg-black/40`

### /app/dashboard/ai/page.jsx
- **surface-solid**:
  - `bg-black`

### /components/Call/IncomingCall.jsx
- **surface-solid**:
  - `bg-black/50`

### /components/Call/IncomingGroupCall.jsx
- **surface-solid**:
  - `bg-black/50`

### /app/(dashboard)/hr/employees/tabs/AttendanceTab.jsx
- **text-dark**:
  - `text-[#C2540A]`
  - `text-[#C2540A]`

### /components/Call/CallProvider.jsx
- **surface-solid**:
  - `bg-black`
  - `bg-gray-900`

### /app/(dashboard)/ai/page.jsx
- **surface-solid**:
  - `bg-black/30`

### /app/(dashboard)/appointments/[id]/page.jsx
- **surface-inline**:
  - `inline-style: style={{ backgroundColor: appointment.color || "#3B82F6" }}
     `

### /app/(dashboard)/hr/teams/page.jsx
- **surface-solid**:
  - `bg-[#375DFB]`

### /app/(auth)/(auth-layout)/register/subscriber/complete-profile/page.jsx
- **surface-solid**:
  - `bg-black/20`

### /components/Agenda/EditReminderModal.jsx
- **surface-solid**:
  - `bg-black/50`

### /components/Call/OutgoingCall.jsx
- **surface-solid**:
  - `bg-black/50`

### /components/Appointments/TodayAppointments.jsx
- **surface-inline**:
  - `inline-style: style={{ backgroundColor: appointment.color || "#3B82F6" }}
     `

### /components/Loading.jsx
- **surface-solid**:
  - `bg-white/20`
  - `bg-white`

### /app/mail-invitation/page.jsx
- **surface-solid**:
  - `bg-[#3B63F6]`

### /app/(dashboard)/hr/_Tabs/RotationTap.jsx
- **surface-solid**:
  - `bg-gray-400`

### /components/Agenda/AgendaSearch.jsx
- **surface-inline**:
  - `inline-style: style={{ backgroundColor: apt.color || "#3B82F6" }}
             `

### /components/Appointments/CountdownWidget.jsx
- **surface-inline**:
  - `inline-style: style={{ backgroundColor: appointment.color || "#3B82F6" }}
     `

### /app/(dashboard)/hr/employees/tabs/Employees.tap.jsx
- **surface-solid**:
  - `bg-[#375DFB]`

### /components/Agenda/MonthlyCalendar.jsx
- **surface-inline**:
  - `inline-style: style={{ backgroundColor: `${apt.color || "#3B82F6"}20`, color: ap`

### /app/(dashboard)/analytics/_components/company_manager/departments/DepartmentsRankingTable.jsx
- **surface-solid**:
  - `bg-black/40`

### /app/(dashboard)/profile/_components/company_manager/RotationTable.jsx
- **surface-solid**:
  - `bg-gray-400`

### /app/(dashboard)/subscriptions/_components/company_manager/PaymentMethods.jsx
- **surface-solid**:
  - `bg-[#2D9F7517]`

### /components/Agenda/AddToAgendaModal.jsx
- **surface-solid**:
  - `bg-black/50`

### /components/Agenda/CreateAgendaModal.jsx
- **surface-solid**:
  - `bg-black/50`

### /components/Agenda/EditDailyTaskModal.jsx
- **surface-solid**:
  - `bg-black/50`

### /components/Appointments/CreateAppointmentFromTaskModal.jsx
- **surface-solid**:
  - `bg-black/50`

### /components/Appointments/EditAppointmentModal.jsx
- **surface-solid**:
  - `bg-black/50`

### /components/Chat/ChatDetailsModal.jsx
- **surface-solid**:
  - `bg-black/50`

### /app/(dashboard)/layout.jsx
- **surface-solid**:
  - `bg-black/50`

### /app/(dashboard)/tasks/_components/KanbanColumn.jsx
- **surface-inline**:
  - `inline-style: style={{
            backgroundColor: column.color,
            `

### /components/Appointments/ShareAppointment.jsx
- **surface-solid**:
  - `bg-black/50`

### /components/Appointments/TaskAppointmentLink.jsx
- **surface-solid**:
  - `bg-black/50`

### /components/Chat/CreatePollModal.jsx
- **surface-solid**:
  - `bg-black/50`

## تفاصيل الملفات التي تحتاج دارك (needs-dark) — أعلى 60 ملف

### /components/FloatingAiButton.jsx
- **surface-light**:
  - `bg-green-400`
  - `bg-emerald-500`
  - `bg-blue-500`
  - `bg-orange-500`
  - `hover:bg-orange-600`
  - `bg-emerald-500`
  - `bg-red-500`
- **border-muted**:
  - `border-white`
- **text-inline**:
  - `inline-style: style={{ [isAr ? "left" : "right"]: "24px" }}
      >
        {isO`

### /components/DashboardFloatingButton.jsx
- **surface-light**:
  - `bg-green-400`
  - `bg-emerald-500`
  - `bg-red-500`
- **border-muted**:
  - `border-white`
- **text-inline**:
  - `inline-style: style={{ [isAr ? "left" : "right"]: "24px" }}
      >
        {isO`

### /app/(dashboard)/plans/[slug]/details/page.jsx
- **border-muted**:
  - `border-white/20`
  - `border-white/20`

### /components/Call/ActiveGroupCallBar.jsx
- **border-muted**:
  - `border-white/10`
- **surface-light**:
  - `bg-green-500`
  - `bg-red-500`
  - `hover:bg-red-600`

### /app/(dashboard)/ai/ChatInput.jsx
- **surface-light**:
  - `from-red-500`
  - `to-orange-500`
  - `bg-red-500`
  - `bg-red-500`
  - `bg-red-500`
  - `hover:bg-red-600`
  - `bg-red-500`

### /app/dashboard/knowledge-base/page.jsx
- **text-muted**:
  - `text-gray-300`
- **surface-light**:
  - `bg-red-500`
  - `hover:bg-red-600`

### /app/dashboard/ai/page.jsx
- **surface-light**:
  - `bg-blue-500`
  - `bg-blue-500`
  - `bg-blue-500`
  - `bg-blue-400`

### /components/Call/IncomingCall.jsx
- **surface-light**:
  - `bg-red-500`
  - `hover:bg-red-600`
  - `bg-green-500`
  - `hover:bg-green-600`

### /components/Call/IncomingGroupCall.jsx
- **surface-light**:
  - `bg-red-500`
  - `hover:bg-red-600`
  - `bg-green-500`
  - `hover:bg-green-600`

### /app/(dashboard)/hr/employees/tabs/AttendanceTab.jsx
- **surface-light**:
  - `bg-blue-600`
  - `hover:bg-blue-700`

### /components/Call/CallProvider.jsx
- **border-muted**:
  - `border-white/30`

### /app/(dashboard)/ai/page.jsx
- **surface-light**:
  - `from-blue-500`
  - `from-blue-500`

### /app/(dashboard)/appointments/[id]/page.jsx
- **surface-light**:
  - `bg-green-500`
  - `hover:bg-green-600`

### /app/(dashboard)/hr/teams/page.jsx
- **border-muted**:
  - `border-white`
  - `border-white`

### /app/(auth)/(auth-layout)/register/subscriber/complete-profile/page.jsx
- **surface-light**:
  - `bg-red-500`
  - `hover:bg-red-600`

### /components/Agenda/EditReminderModal.jsx
- **surface-light**:
  - `bg-amber-500`
  - `hover:bg-amber-600`

### /components/Call/OutgoingCall.jsx
- **surface-light**:
  - `bg-red-500`
  - `hover:bg-red-600`

### /components/Appointments/TodayAppointments.jsx
- **text-muted**:
  - `text-gray-300`
- **text-inline**:
  - `inline-style: style={{ borderRight: `3px solid ${appointment.color || "#3B82F6"}`

### /app/page.jsx
- **border-muted**:
  - `border-white/30`
  - `border-white/20`
  - `border-white/30`

### /components/Call/ActiveCallBar.jsx
- **surface-light**:
  - `bg-green-500`
  - `bg-red-500`
  - `hover:bg-red-600`

### /app/(dashboard)/notifications/page.jsx
- **surface-light**:
  - `bg-blue-500`
  - `bg-red-500`
- **text-muted**:
  - `text-gray-300`

### /app/admin/page.jsx
- **border-muted**:
  - `border-white`
  - `border-gray-700`
- **text-inline**:
  - `inline-style: style={{ transform: "rotate(-90deg)" }}>
      <circle cx="0" cy=`

### /app/old_dashboard/page.jsx
- **border-muted**:
  - `border-white`
  - `border-gray-700`
- **text-inline**:
  - `inline-style: style={{ transform: "rotate(-90deg)" }}>
      <circle cx="0" cy=`

### /app/mail-invitation/page.jsx
- **surface-light**:
  - `hover:bg-blue-700`

### /app/(dashboard)/hr/_Tabs/RotationTap.jsx
- **surface-light**:
  - `bg-purple-500`

### /components/Agenda/DayDetailSidebar.jsx
- **text-muted**:
  - `text-gray-300`
  - `text-gray-300`
- **text-inline**:
  - `inline-style: style={{ borderRight: `3px solid ${apt.color || "#3B82F6"}` }}
  `

### /components/Agenda/AgendaSearch.jsx
- **surface-light**:
  - `bg-green-500`

### /components/Appointments/CountdownWidget.jsx
- **text-muted**:
  - `text-gray-300`

### /app/(dashboard)/hr/chats/tabs/ChatsTab.jsx
- **border-muted**:
  - `border-white`
  - `border-white`

### /app/(dashboard)/ai/pricing/page.jsx
- **surface-light**:
  - `from-amber-500`
  - `to-orange-500`

### /app/(dashboard)/hr/employees/tabs/SalaryTab.jsx
- **surface-light**:
  - `bg-blue-600`
  - `hover:bg-blue-700`

### /app/(dashboard)/profile/_components/CompanyManagerProfile.jsx
- **surface-light**:
  - `bg-blue-700`
  - `hover:bg-blue-800`

### /components/Agenda/DailyTaskCard.jsx
- **text-inline**:
  - `inline-style: style={{ borderRight: `4px solid ${task.color || "#22C55E"}` }}
 `
  - `inline-style: style={{ borderRight: `4px solid ${task.color || "#22C55E"}` }}
 `

### /components/Dropdowns/NotificationsDropdown.jsx
- **surface-light**:
  - `bg-red-500`
  - `bg-blue-500`

### /app/(dashboard)/escalation/page.jsx
- **surface-light**:
  - `bg-emerald-600`
  - `hover:bg-emerald-700`

### /app/(dashboard)/hr/holidays/modals/AddHolidayModal.jsx
- **surface-light**:
  - `bg-blue-600`
  - `hover:bg-blue-700`

### /app/(dashboard)/hr/holidays/modals/DeleteHolidayModal.jsx
- **surface-light**:
  - `bg-red-600`
  - `hover:bg-red-700`

### /app/(dashboard)/leaves/modals/DeleteMyLeaveModal.jsx
- **surface-light**:
  - `bg-red-600`
  - `hover:bg-red-700`

### /app/(dashboard)/projects/_modal/SaveAsTemplateModal.jsx
- **surface-light**:
  - `bg-blue-600`
  - `hover:bg-blue-700`

### /app/(dashboard)/support-tickets/[id]/page.jsx
- **border-muted**:
  - `border-white/30`
- **text-inline**:
  - `inline-style: style={{ color: isMe ? '#ffffff' : 'inherit' }}>
                 `

### /app/(dashboard)/projects/[slug]/_components/MembersListXLine.jsx
- **border-muted**:
  - `border-white`
  - `border-white`

### /components/Agenda/HourlyTimeline.jsx
- **surface-light**:
  - `bg-red-500`
  - `bg-red-500`

### /app/(dashboard)/hr/departments/[slug]/profile/page.jsx
- **surface-light**:
  - `bg-purple-500`

### /app/(dashboard)/plans/_components/AIPlansTab.jsx
- **surface-light**:
  - `bg-violet-400`

### /components/Dropdowns/MessagesDropdown.jsx
- **surface-light**:
  - `bg-red-500`

### /components/Modal/Methods/Tabs/Post/PostManually.method.jsx
- **surface-light**:
  - `bg-red-500`

### /components/StarRating.jsx
- **text-muted**:
  - `text-gray-300`

### /components/Chat/ChatWindow.jsx
- **surface-light**:
  - `bg-green-500`

### /components/Chat/MessageInput.jsx
- **border-muted**:
  - `border-white/30`

### /components/Chat/ChatList.jsx
- **surface-light**:
  - `bg-green-500`

### /components/Tables/Table.jsx
- **text-muted**:
  - `text-gray-200`

### /app/(auth)/(account-setup)/payment/components/SavedPaymentMethods.jsx
- **surface-light**:
  - `bg-blue-600`

### /app/(auth)/(auth-layout)/(common)/sign-in/page.jsx
- **border-muted**:
  - `border-gray-400`

### /app/(auth)/(auth-layout)/register/employee/page.jsx
- **border-muted**:
  - `border-white`

### /app/(dashboard)/analytics/_components/charts/ProjectsPerformanceList.jsx
- **surface-light**:
  - `bg-emerald-400`

### /app/(dashboard)/employee/projects/page.jsx
- **text-muted**:
  - `text-gray-100`

### /app/(dashboard)/hr/chats/modals/CreateChatGroupModal.jsx
- **surface-light**:
  - `bg-blue-500`

### /app/dashboard/ai/ChatInput.jsx
- **surface-light**:
  - `bg-red-500`

### /components/Appointments/AppointmentCard.jsx
- **text-inline**:
  - `inline-style: style={{ borderRight: `4px solid ${appointment.color || "#3B82F6"}`

### /components/Chat/NewConversationModal.jsx
- **surface-light**:
  - `bg-blue-500`

