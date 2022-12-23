import { ReactNode } from "react";
import { iFormLogin } from "../../pages/login";
import { iFormRegister } from "../../pages/register";

export interface iUser {
  id: number;
  name: string;
  email: string;
}

export interface iAuthContext {
  handleLogin: (data: iFormLogin) => Promise<void>;
  user: iUser | null;
  handleLogout: () => void;
  handleRegister: (data: iFormRegister) => Promise<void>;
}

export interface iLoginRegisterRequest {
  accessToken: string;
  user: iUser;
}

export interface iAuthProvider {
  children: ReactNode;
}
