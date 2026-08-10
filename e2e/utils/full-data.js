// بيانات شاملة لكل الأدوار: صفحات الواجهة وبيانات الدخول (لأغراض الاختبار الشامل)

const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:3000';
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:3001';

module.exports = {
  FRONTEND_URL,
  BACKEND_URL,

  ADMIN: {
    email: 'admin@anmat.test',
    password: 'anmatAdmin123',
    loginPath: '/api/admin/auth/login',
  },
  SUBSCRIBER: {
    email: 'nextsub1@anmat.test',
    password: 'aA@123456',
    loginPath: '/api/user/auth/login',
  },
  EMPLOYEE: {
    email: 'org1emp1@anmat.test',
    password: 'aA@123456',
    loginPath: '/api/user/auth/login',
  },

  // كل صفحات الأدمن (من menuItems + مسارات إضافية معروفة)
  ADMIN_PAGES: [
    { route: '/dashboard', name: 'dashboard' },
    { route: '/system-admins', name: 'system-admins' },
    { route: '/roles/admins', name: 'roles-admins' },
    { route: '/permissions/admins', name: 'permissions-admins' },
    { route: '/industries', name: 'industries' },
    { route: '/subscribers', name: 'subscribers' },
    { route: '/plans', name: 'plans' },
    { route: '/plans/ai-plans', name: 'plans-ai-plans' },
    { route: '/money-receiving', name: 'money-receiving' },
    { route: '/translations', name: 'translations' },
    { route: '/analytics', name: 'analytics' },
    { route: '/ai', name: 'ai' },
    { route: '/ai-analytics', name: 'ai-analytics' },
    { route: '/notifications', name: 'notifications' },
    { route: '/support-tickets', name: 'support-tickets' },
    { route: '/setting', name: 'setting' },
    { route: '/conversations', name: 'conversations' },
    { route: '/profile', name: 'profile' },
    { route: '/subscriptions', name: 'subscriptions' },
  ],

  // كل صفحات المشترك (Subscriber)
  SUBSCRIBER_PAGES: [
    { route: '/dashboard', name: 'dashboard' },
    { route: '/projects', name: 'projects' },
    { route: '/projects/create', name: 'projects-create' },
    { route: '/tasks', name: 'tasks' },
    { route: '/tasks/create', name: 'tasks-create' },
    { route: '/appointments', name: 'appointments' },
    { route: '/appointments/create', name: 'appointments-create' },
    { route: '/hr', name: 'hr' },
    { route: '/hr/employees', name: 'hr-employees' },
    { route: '/hr/departments', name: 'hr-departments' },
    { route: '/hr/teams', name: 'hr-teams' },
    { route: '/hr/positions', name: 'hr-positions' },
    { route: '/hr/meetings', name: 'hr-meetings' },
    { route: '/hr/holidays', name: 'hr-holidays' },
    { route: '/hr/attendances', name: 'hr-attendances' },
    { route: '/hr/leaves', name: 'hr-leaves' },
    { route: '/hr/requests', name: 'hr-requests' },
    { route: '/hr/salary', name: 'hr-salary' },
    { route: '/roles/employees', name: 'roles-employees' },
    { route: '/permissions', name: 'permissions' },
    { route: '/conversations', name: 'conversations' },
    { route: '/social-media', name: 'social-media' },
    { route: '/social-media/categories', name: 'social-media-categories' },
    { route: '/analytics', name: 'analytics' },
    { route: '/ai', name: 'ai' },
    { route: '/ai-analytics', name: 'ai-analytics' },
    { route: '/notifications', name: 'notifications' },
    { route: '/support-tickets', name: 'support-tickets' },
    { route: '/subscriptions', name: 'subscriptions' },
    { route: '/setting', name: 'setting' },
    { route: '/profile', name: 'profile' },
  ],

  // كل صفحات الموظف (Employee)
  EMPLOYEE_PAGES: [
    { route: '/dashboard', name: 'dashboard' },
    { route: '/employee/projects', name: 'employee-projects' },
    { route: '/employee/tasks', name: 'employee-tasks' },
    { route: '/appointments', name: 'appointments' },
    { route: '/attendance', name: 'attendance' },
    { route: '/salary', name: 'salary' },
    { route: '/leaves', name: 'leaves' },
    { route: '/requests', name: 'requests' },
    { route: '/conversations', name: 'conversations' },
    { route: '/analytics', name: 'analytics' },
    { route: '/ai', name: 'ai' },
    { route: '/ai-analytics', name: 'ai-analytics' },
    { route: '/notifications', name: 'notifications' },
    { route: '/support-tickets', name: 'support-tickets' },
    { route: '/setting', name: 'setting' },
    { route: '/profile', name: 'profile' },
  ],
};
