import { useState } from "react";

const useResetPassword = () => {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordReset, setPasswordReset] = useState(false);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      setTimeout(() => {
        console.log(password);
        setLoading(false);
        setPassword("");
        setPasswordReset(true);
      }, 2000);
    } catch (error: any) {
      console.log(error.message);
      setLoading(false);
    }
  };

  return { password, loading, passwordReset, handleInput, handleSubmit };
};

export default useResetPassword;
