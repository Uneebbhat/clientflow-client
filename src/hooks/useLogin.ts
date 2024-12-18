import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      setTimeout(() => {
        console.log(formData);
        setLoading(false);
        toast({
          title: "Login successfully",
        });
        navigate("/");
      }, 2000);
    } catch (error: any) {
      console.log(error.message);
      setLoading(false);
    }
  };

  return { formData, handleInput, handleSubmit, loading };
};

export default useLogin;
