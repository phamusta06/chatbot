import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const useLogin = () => {
  const urlApi: string = import.meta.env.VITE_API_URL;
  const [loading, setLoading] = useState(false);

  const login = async ({ email, password }: { email: string; password: string }) => {
    try {
      setLoading(true);
      const res = await axios.post(
        `${urlApi}/api/v1/login`,
        { email, password },
        { withCredentials: true }
      );

      if (res.data.success) {
        const token = res.data?.token;
        if (token) {
          localStorage.setItem("token", token);
          window.location.href = "/";
        } else {
          toast.error("An unexpected error occurred. Please try again.");
        }
      } else {
        toast.error("Login failed. Please check your credentials and try again.");
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};

export default useLogin;
