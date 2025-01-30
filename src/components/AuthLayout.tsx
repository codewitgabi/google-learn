"use client";

import { useSession } from "next-auth/react";
import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

function AuthLayout({ children }: AuthLayoutProps) {
  const {} = useSession({ required: true });
  
  return children;
}

export default AuthLayout;
