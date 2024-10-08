import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const useSignup = () => {
  const [formData, setFormData] = useState({
    profilePic: null,
    name: "",
    email: "",
    password: "",
    occupation: "",
    companySize: "",
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImage = (e: any) => {
    setFormData({ ...formData, profilePic: e.target.files[0] });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      setTimeout(() => {
        console.log(formData);
        setLoading(false);
        toast({
          title: "Account created successfully",
        });
      }, 2000);
    } catch (error: any) {
      console.log(error.message);
      setLoading(false);
    }
  };

  const handleValueChange = (value: any) => {
    setFormData({ ...formData, occupation: value });
  };

  const handleCompanySizeChange = (value: any) => {
    setFormData({ ...formData, companySize: value });
  };

  return {
    formData,
    handleInput,
    handleImage,
    handleSubmit,
    handleValueChange,
    handleCompanySizeChange,
    loading,
  };
};

export default useSignup;
