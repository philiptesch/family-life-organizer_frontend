import { Child } from "./child";


export interface User {
  id: string | null;
  familyName: string;
  email: string;
  passsword: string;
  confirmPassword: string;
  childs: Child[]
}
