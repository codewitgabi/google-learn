import { notFound } from "next/navigation";
import type { IUserCardProps } from "../../types";
import { getUser, getUsers } from "../_actions/user.actions";

export async function generateStaticParams() {
  const users: IUserCardProps[] = await getUsers();

  return users.map((user) => ({
    id: String(user.id),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const user = await getUser({ id });

  if (!user) return notFound();

  return {
    title: `@${user.username}`,
    description: `${user.name} profile. ${user.company.name}`,
    openGraph: {
      type: "profile",
      url: `http://localhost:3000${id}`,
      title: `${user.name} @${user.username}`,
      description: user.company.catchPhrase,
      // images: [
      //   {
      //     url: user.avatar,
      //     width: 1200,
      //     height: 630,
      //   },
      // ],
      siteName: "CodeBlueCross",
    },
    keywords: [user.name, user.username, user.company.catchPhrase],
  };
}

async function UserDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return <div className="">Page for user {id}</div>;
}

export default UserDetailPage;
