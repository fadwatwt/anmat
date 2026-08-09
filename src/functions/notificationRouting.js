// Maps a notification to the frontend route of the related resource
// (task, project, leave, ...) so clicking a notification navigates to it.

const MODEL_TYPE_ROUTES = {
  Task: ({ model_id }) => (model_id ? `/tasks/${model_id}/details` : "/tasks"),
  Project: ({ model_id }) => (model_id ? `/projects/${model_id}/details` : "/projects"),
  Appointment: () => "/appointments",
  Leave: () => "/leaves",
  Attendance: () => "/attendance",
  SalaryTransaction: () => "/salary",
  EmployeeRequest: () => "/requests",
  EmployeeDetail: () => "/profile",
  Employee: () => "/profile",
  Department: ({ model_id }) => (model_id ? `/hr/departments/${model_id}/profile` : "/hr/departments"),
  support_tickets: () => "/support-tickets",
  EscalationRequest: () => "/escalation",
  Subscription: () => "/subscriptions",
  SubscriptionPlan: () => "/plans",
  Organization: () => "/setting",
  EmailVerification: () => "/setting",
  User: () => null,
  Custom: ({ action_url }) => {
    if (typeof action_url === "string" && action_url.startsWith("/")) return action_url;
    return null;
  },
};

export function getNotificationRoute(notification = {}) {
  const builder = MODEL_TYPE_ROUTES[notification.model_type];
  if (builder) {
    const route = builder(notification);
    if (route) return route;
  }
  return null;
}
