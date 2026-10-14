import { Child } from "./child";


export interface User {
  id: string | null;
  familyName: string;
  email: string;
  password: string;
  confirmPassword: string;
  childs: Child[]
}
