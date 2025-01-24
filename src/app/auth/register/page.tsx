import { Metadata } from "next";
import RegisterForm from "../_components/RegisterForm";

export const metadata: Metadata = {
  title: "Register | Complete Nextjs Learn and Playground",
  description: "Create a new account for your website",
  openGraph: {
    title: "Register | Nextjs Learn and Playground",
    description: "Create an account to get started",
  },
};

function RegisterPage() {
  return (
    <>
      <RegisterForm />
    </>
  );
}

export default RegisterPage;
