"use client";

import Link from "next/link";
import { use } from "react";
import type { IUserCardProps, IUserGridProps } from "../../types";
import {
  DropDownButton,
  UserDropDownList,
} from "../../_components/DropDownModal";

export function UserCard({
  name,
  username,
  address,
  website,
  company,
}: IUserCardProps) {
  return (
    <div className="shadow-sm p-6 border border-gray-300">
      <h3 className="font-semibold text-lg opacity-75">
        {name} @[{username}]
      </h3>

      <div className="mt-4 flex flex-col gap-2 text-sm">
        <p>
          Address: {address.street}, {address.city}
        </p>
        <p>
          Website: <a href={website}>{website}</a>
        </p>
        <p>Company: {company.name}</p>
        <p>Catchphrase: {company.catchPhrase}</p>
      </div>
    </div>
  );
}

function UserGrid({ users }: IUserGridProps) {
  const userData = use(users);
  const rows = userData.map(
    ({ id, username, name, address: { city }, website, company }) => ({
      id,
      username,
      name,
      city,
      website,
      company,
    })
  );

  return (
    <table className="w-full overflow-auto">
      <thead className="font-medium">
        <tr className="w-full">
          <td className="pb-6 pl-4">ID</td>
          <td className="pb-6">Username</td>
          <td className="pb-6">Fullname</td>
          <td className="pb-6">City</td>
          <td className="pb-6">Website</td>
          <td className="pb-6">Company</td>
          <td className="pb-6"></td>
        </tr>
      </thead>

      <tbody className="text-sm opacity-80">
        {rows.map(({ id, username, name, city, website, company }) => (
          <tr
            key={id}
            className="border-b border-gray-500 w-full"
            suppressHydrationWarning
          >
            <td className="py-3 pl-4">{id}</td>
            <td>
              <Link href={`/users/${id}`}>{username}</Link>
            </td>
            <td>{name}</td>
            <td>{city}</td>
            <td>{website}</td>
            <td>{company.name}</td>
            <td>
              <DropDownButton>
                <UserDropDownList userId={id} />
              </DropDownButton>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserGrid;
