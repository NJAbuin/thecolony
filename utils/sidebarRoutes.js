export const recruiterSidebar = {
  Dashboard: "/auth/recruiter/dashboard",
  Busquedas: "/auth/recruiter/jobpostings",
  Candidatos: "/auth/recruiter/candidates"
};

export const adminSidebar = {
  Dashboard: "/auth/admin/dashboard",
  Busquedas: "/auth/admin/jobpostings",
  Candidatos: "/auth/admin/candidates"
};

export const clientSidebar = {
  Dashboard: "/auth/client/dashboard",
  Busquedas: "/auth/client/jobpostings",
  Candidatos: "/auth/client/candidates"
};

export function mapSidebar(roleSidebarObj) {
  return [Object.keys(roleSidebarObj), Object.values(roleSidebarObj)];
}
