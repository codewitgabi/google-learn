import AuthLayout from "@/components/AuthLayout";
import MainContent from "@/components/MainContent";
import Sidebar from "@/components/Sidebar";
import ChangePasswordForm from "../../_components/ChangePasswordForm";

function ChangePasswordPage() {
  return (
    <AuthLayout>
      {/* Sidebar */}

      <Sidebar />

      <MainContent>
        <ChangePasswordForm />
      </MainContent>
    </AuthLayout>
  );
}

export default ChangePasswordPage;
