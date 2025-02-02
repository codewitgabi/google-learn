import AuthLayout from "@/components/AuthLayout";
import MainContent from "@/components/MainContent";
import Sidebar from "@/components/sidebar/Sidebar";
import Link from "next/link";
import { MdSecurity } from "react-icons/md";
import { GoChevronRight } from "react-icons/go";
import DeleteAccountButton from "../_components/DeleteAccountButton";

function SettingsPage() {
  return (
    <AuthLayout>
      {/* Sidebar */}

      <Sidebar />

      <MainContent>
        <div className="space-y-4">
          <Link
            href="/profile/settings/change-password"
            className="flex items-center justify-between gap-6 border-b pb-1 w-1/2 max-md:w-full"
          >
            <div className="flex items-center gap-2 opacity-80">
              <MdSecurity className="text-2xl opacity-50" />
              <span className="text-sm">Change password</span>
            </div>

            <GoChevronRight className="text-2xl opacity-50" />
          </Link>

          {/* Delete account button */}

          <DeleteAccountButton />
        </div>
      </MainContent>
    </AuthLayout>
  );
}

export default SettingsPage;
