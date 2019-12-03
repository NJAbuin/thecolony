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
  Admins: "/auth/admin/admins"
};

export const clientSidebar = {
  Dashboard: "/auth/client/dashboard",
  Busquedas: "/auth/client/jobposting"
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

class Stack {
  constructor() {
    this.top = null;
    this.history = new Stack();
  }

  minimumValue() {
    return this.history.peek();
  }

  peek() {
    return this.top.value;
  }

  pop() {
    if (!this.top) return "No top to pop";
    let toReturn = this.top;
    this.history.pop();
    this.top = this.top.next;
    return toReturn.value;
  }

  push(value) {
    let toBePushed = new Node(value);
    if (this.history.peek() < toBePushed.value) {
      this.history.push(this.history.peek());
    } else {
      this.history.push(toBePushed.value);
    }
    if (this.top) {
      toBePushed.next = this.top;
      this.top = toBePushed;
    } else {
      this.top = toBePushed;
    }
  }
}

class Node {
  constructor(value) {
    this.next = null;
    this.value = value;
  }
}
