import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { iFormLogin } from "../../pages/login";
import { iFormRegister } from "../../pages/register";
import { api } from "../../services/api";
import {
  iAuthContext,
  iAuthProvider,
  iLoginRegisterRequest,
  iUser,
} from "./@types";

const AuthContext = createContext<iAuthContext>({} as iAuthContext);

export const AuthProvider = ({ children }: iAuthProvider) => {
  const [user, setUser] = useState<iUser | null>(null);
  const naviage = useNavigate();
  const toast = useToast({
    position: "bottom-right",
    duration: 2500,
  });

  const handleLogin = async (data: iFormLogin): Promise<void> => {
    try {
      const response = await api.post<iLoginRegisterRequest>("/login", data);
      const { accessToken, user } = response.data;

      localStorage.setItem("@financialControl:token", accessToken);
      localStorage.setItem("@financialControl:userId", String(user.id));

      setUser(user);
      toast({ description: "Login efetuado com sucesso", status: "success" });
      naviage("/dashboard", { replace: true });
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = (): void => {
    localStorage.removeItem("@financialControl:token");
    localStorage.removeItem("@financialControl:userId");
    toast({ description: "Volte sempre xD", status: "success" });
    naviage("/", { replace: true });
  };

  const handleRegister = async (data: iFormRegister): Promise<void> => {
    try {
      await api.post<iLoginRegisterRequest>("/users", data);
      toast({
        description: "Conta criada com sucesso",
        status: "success",
      });
      naviage("/");
    } catch (error) {
      toast({
        description: "Oops: algo de errado não está certo! xD",
        status: "error",
      });
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ handleLogin, user, handleLogout, handleRegister }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  return context;
};
