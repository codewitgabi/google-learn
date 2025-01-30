import MainContent from "@/components/MainContent";
import Sidebar from "@/components/Sidebar";
import AuthLayout from "@/components/AuthLayout";
import EditProfileForm from "./_components/EditProfileForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit profile",
  description: "Edit profile",
};

function ProfilePage() {
  return (
    <AuthLayout>
      {/* Sidebar */}

      <Sidebar />

      <MainContent>
        <EditProfileForm />
      </MainContent>
    </AuthLayout>
  );
}

export default ProfilePage;
