import MainContent from "@/components/MainContent";
import Sidebar from "@/components/Sidebar";
import AuthLayout from "@/components/AuthLayout";
import EditProfileForm from "./_components/EditProfileForm";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import { getUserDetail } from "@/actions/user.actions";
import authService from "@/services/auth.service";

export const metadata: Metadata = {
  title: "Edit profile",
  description: "Edit profile",
};

async function ProfilePage() {
  const { hasUserId, userId } = await authService.getUserId();

  if (!hasUserId) {
    redirect("/auth/login");
  }

  // Fetch user detail

  const user = await getUserDetail(userId as string);

  return (
    <AuthLayout>
      {/* Sidebar */}

      <Sidebar />

      <MainContent>
        <EditProfileForm user={user} />
      </MainContent>
    </AuthLayout>
  );
}

export default ProfilePage;
