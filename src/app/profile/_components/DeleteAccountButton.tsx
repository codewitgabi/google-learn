"use client";

import { Dialog, Button, Flex } from "@radix-ui/themes";
import { MdOutlineDelete } from "react-icons/md";

function DeleteAccountButton() {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <button className="flex items-center gap-2 text-red-500 font-medium">
          <MdOutlineDelete className="text-2xl" />
          <span className="text-sm">Delete account</span>
        </button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="450px">
        <div className="flex items-center justify-center mb-4">
          <svg
            width="35"
            height="44"
            viewBox="0 0 50 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.82583 43.3326C2.39416 43.3326 2.01396 43.2297 1.68524 43.0238C1.35651 42.818 1.10179 42.5503 0.921069 42.2209C0.726546 41.899 0.620652 41.545 0.603385 41.1588C0.58608 40.7727 0.691994 40.3871 0.921127 40.0021L23.0789 1.71594C23.308 1.33549 23.5913 1.05741 23.9288 0.881711C24.2664 0.706011 24.6249 0.618164 25.0045 0.618164C25.3839 0.618164 25.742 0.706011 26.0785 0.881711C26.4152 1.05741 26.698 1.33549 26.9271 1.71594L49.085 40.0021C49.3141 40.3871 49.42 40.7727 49.4027 41.1588C49.3854 41.545 49.2795 41.899 49.085 42.2209C48.9026 42.5466 48.6475 42.8133 48.3196 43.021C47.9916 43.2287 47.6118 43.3326 47.1802 43.3326H2.82583ZM25.1655 36.2167C25.7249 36.2167 26.1978 36.0213 26.5841 35.6305C26.9704 35.2397 27.1635 34.7645 27.1635 34.205C27.1635 33.6455 26.9681 33.1749 26.5773 32.7933C26.1865 32.4117 25.7113 32.2209 25.1518 32.2209C24.5923 32.2209 24.1194 32.414 23.7331 32.8001C23.3469 33.1863 23.1537 33.6592 23.1537 34.2187C23.1537 34.7782 23.3491 35.2511 23.74 35.6374C24.1308 36.0236 24.6059 36.2167 25.1655 36.2167ZM25.1655 29.5993C25.7183 29.5993 26.1794 29.4129 26.5489 29.0403C26.9183 28.6676 27.1031 28.2058 27.1031 27.6548V19.0692C27.1031 18.5183 26.9161 18.0565 26.5421 17.6838C26.1681 17.3111 25.7046 17.1248 25.1518 17.1248C24.5989 17.1248 24.1378 17.3111 23.7684 17.6838C23.3989 18.0565 23.2142 18.5183 23.2142 19.0692V27.6548C23.2142 28.2058 23.4012 28.6676 23.7752 29.0403C24.1491 29.4129 24.6126 29.5993 25.1655 29.5993Z"
              fill="#EB5757"
            />
          </svg>
        </div>

        <Dialog.Title className="text-center text-blue-dark font-medium opacity-90 text-[1.1rem]">
          Delete User Account
        </Dialog.Title>

        <Dialog.Description
          className="opacity-85 text-center text-gray-700"
          size="2"
          mb="4"
          mt={"2"}
        >
          Deleting your Account will remove all of your Information from our
          database. This Action cannot be undone.
        </Dialog.Description>

        <Flex gap="3" mt="6" justify="center">
          <Dialog.Close>
            <Button variant="soft" color="gray" className="cursor-pointer">
              Cancel
            </Button>
          </Dialog.Close>

          <Dialog.Close>
            <Button
              variant="solid"
              color="red"
              className="cursor-pointer text-sm"
            >
              Delete account
            </Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
}

export default DeleteAccountButton;
