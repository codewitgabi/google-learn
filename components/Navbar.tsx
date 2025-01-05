import Image from "next/image";
import Link from "next/link";
import { VscSignIn } from "react-icons/vsc";
import { Tooltip } from "@nextui-org/tooltip";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import LogoutButton from "./LogoutButton";

async function Navbar() {
  const session = await getServerSession(authOptions);

  return (
    <header className="sticky top-0 left-0 w-full bg-white shadow-sm border-b border-slate-300 py-4">
      <nav className="w-[1024px] mx-auto flex items-center justify-between">
        <Image src="/next.svg" alt="app-logo" width={60} height={60} />

        {!session ? (
          <Link href="/auth/signin">
            <Tooltip
              content="Login"
              color="foreground"
              className="text-sm opacity-65"
            >
              <VscSignIn className="text-2xl" />
            </Tooltip>
          </Link>
        ) : (
          <div className="flex items-center gap-6">
            <Image
              src={session?.user?.profile_picture}
              alt={`${session?.user?.fullname} profile pic`}
              width={30}
              height={30}
              className="object-cover"
            />

            <LogoutButton />
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
