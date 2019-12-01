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

export function mapSidebar(user) {
  switch (user.type) {
    case "Admin":
      return [Object.keys(adminSidebar), Object.values(adminSidebar)];

    case "Recruiter":
      return [Object.keys(recruiterSidebar), Object.values(recruiterSidebar)];

    case "Client":
      return [Object.keys(clientSidebar), Object.values(clientSidebar)];
  }
}
