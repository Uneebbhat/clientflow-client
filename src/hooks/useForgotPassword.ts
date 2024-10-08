import { useState } from "react";

const useForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      setTimeout(() => {
        console.log(email);
        setLoading(false);
        setEmail("");
        setEmailSent(true);
      }, 2000);
    } catch (error: any) {
      console.log(error.message);
      setLoading(false);
    }
  };

  return { email, loading, emailSent, handleInput, handleSubmit };
};

export default useForgotPassword;
