export const recruiterSidebar = {
  Dashboard: "/auth/recruiter/dashboard",
  Busquedas: "/auth/recruiter/jobpostings",
  Candidatos: "/auth/recruiter/candidates"
};

export const adminSidebar = {
  Dashboard: "/auth/admin/dashboard",
  Clientes: "/auth/admin/clients",
  Reclutadoras: "/auth/admin/recruiters",
  Candidatos: "/auth/admin/candidates",
  Admins: "/auth/admin/admins",
  Busquedas: "/auth/admin/jobpostings"
};

export const clientSidebar = {
  Dashboard: "/auth/client/dashboard",
  Busquedas: "/auth/client/jobpostings"
};

export function mapSidebar(userType) {
  switch (userType) {
    case "admin":
      return [Object.keys(adminSidebar), Object.values(adminSidebar)];

    case "recruiter":
      return [Object.keys(recruiterSidebar), Object.values(recruiterSidebar)];

    case "client":
      return [Object.keys(clientSidebar), Object.values(clientSidebar)];
  }
}
