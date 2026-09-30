import { Child } from "./child";


export interface User {
  id: number;
  familyName: string;
  email: string;
  passsword: string;
  confirmPassword: string;
  childs: Child[]
}
