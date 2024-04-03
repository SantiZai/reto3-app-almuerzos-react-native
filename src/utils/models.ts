export interface Employee {
  fullname: string;
  identifier: string;
  position: string;
}

export interface Menu {
  id: string;
  name: string;
  position: string;
  type: string;
}

export interface Order {
  employeeid: string;
  menus: {
    entradaId: string;
    principalId: string;
    postreId: string;
  };
}
