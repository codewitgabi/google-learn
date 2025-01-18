"use client";

import Link from "next/link";
import { ReactNode, useEffect, useRef, useState } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";

export function DropDownButton({ children }: { children: ReactNode }) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setShowModal(false);
    }
  };

  const handleEscapeKey = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setShowModal(false);
    }
  };

  useEffect(() => {
    if (showModal) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscapeKey);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [showModal]);

  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <div className="relative">
      <button onClick={handleClick}>
        <HiOutlineDotsVertical />
      </button>

      {showModal && <div ref={modalRef}>{children}</div>}
    </div>
  );
}

export function DropDownModal({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white shadow-lg w-[200px] flex flex-col divide-y divide-gray-500 absolute top-0 right-0 z-20 backdrop-blur-sm">
      {children}
    </div>
  );
}

export function DropDownLink({
  href,
  label,
  className = "",
}: {
  href: string;
  label: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`text-[0.75rem] hover:bg-[#fafafa] transition-all duration-200 ${className} py-2 px-4`}
    >
      {label}
    </Link>
  );
}

export function UserDropDownList({ userId }: { userId: string | number }) {
  return (
    <DropDownModal>
      <DropDownLink href={`/users/${userId}`} label="View profile" />
    </DropDownModal>
  );
}
