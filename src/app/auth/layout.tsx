import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="min-h-dvh flex items-center justify-center py-4">
      <div className="shadow py-6 px-4 w-[420px] max-[450px]:w-full max-[450px]:mx-4">
        {children}
      </div>
    </main>
  );
}

export default AuthLayout;
