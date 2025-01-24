import { Metadata } from "next";
import LoginForm from "../_components/LoginForm";

export const metadata: Metadata = {
  title: "Login | Complete Nextjs Learn and Playground",
  description: "Login to your account",
  openGraph: {
    title: "Login | Nextjs Learn and Playground",
    description: "Login to your account",
  },
};

function LoginPage() {
  return (
    <>
      <LoginForm />
    </>
  );
}

export default LoginPage;
