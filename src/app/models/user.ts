export interface User {
  id: number;
  name: string;
  phone: string;
  email: string;
  IdProfession: {
    id: number;
    name: string;
  };
}

export interface UserFromType {
  name: string;
  phone: string;
  email: string;
  IdProfession: number;
}
