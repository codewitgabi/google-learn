"use client";

import Image from "next/image";
import DefaultProfilePicture from "../../../../public/default-profile-avatar.webp";
import { useState } from "react";

function EditProfileForm() {
  const [editable, setEditable] = useState<boolean>(false);

  return (
    <form action="">
      <div className="w-[800px] mx-auto max-[1110px]:w-full">
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image
              src={DefaultProfilePicture}
              alt="user profile picture"
              className="w-[60px] h-[60px] rounded-full"
            />

            <div className="space-y-1">
              <h2 className="text-sm text-blue-dark font-medium">
                Jide Peters
              </h2>
              <small className="text-gray-700 opacity-60 text-[0.75rem]">
                Date Joined: 1st May, 2023
              </small>
            </div>
          </div>

          <button
            className="text-blue-dark text-sm font-medium"
            onClick={() => setEditable(!editable)}
            type="button"
          >
            Edit
          </button>
        </div>

        {/* Editable fields */}

        <div className="w-[700px] mx-auto mt-12 space-y-16 max-[1110px]:w-full">
          <div className="space-y-6">
            {/* Phone field */}

            <div className="border-b border-gray-700 border-opacity-20 flex items-center justify-between gap-4 pb-2">
              <legend className="text-gray-700 text-sm opacity-70">
                Phone:
              </legend>
              <input
                type="text"
                name="phone"
                id="phone"
                defaultValue={"+2349020617734"}
                className="outline-none text-sm text-right font-medium opacity-80"
                readOnly={!editable}
              />
            </div>

            {/* Email field */}

            <div className="border-b border-gray-700 border-opacity-20 flex items-center justify-between gap-4 pb-2">
              <legend className="text-gray-700 text-sm opacity-70">
                Email:
              </legend>
              <input
                type="email"
                name="email"
                id="email"
                defaultValue={"codewitgabi222@gmail.com"}
                className="outline-none text-sm text-right font-medium opacity-80"
                readOnly={!editable}
              />
            </div>

            {/* Address field */}

            <div className="border-b border-gray-700 border-opacity-20 flex items-center justify-between gap-4 pb-2">
              <legend className="text-gray-700 text-sm opacity-70">
                Address:
              </legend>
              <input
                type="text"
                name="address"
                id="address"
                defaultValue={"No. 23, Old Airport Offa rd."}
                className="outline-none text-sm text-right font-medium opacity-80"
                readOnly={!editable}
              />
            </div>

            {/* Gender field */}

            <div className="border-b border-gray-700 border-opacity-20 flex items-center justify-between gap-4 pb-2">
              <legend className="text-gray-700 text-sm opacity-70">
                Gender:
              </legend>
              <input
                type="text"
                name="gender"
                id="gender"
                defaultValue={"Male"}
                className="outline-none text-sm text-right font-medium opacity-80"
                readOnly={!editable}
              />
            </div>

            {/* Nationality field */}

            <div className="border-b border-gray-700 border-opacity-20 flex items-center justify-between gap-4 pb-2">
              <legend className="text-gray-700 text-sm opacity-70">
                Nationality:
              </legend>
              <input
                type="text"
                name="nationality"
                id="nationality"
                defaultValue={"Nigeria"}
                className="outline-none text-sm text-right font-medium opacity-80"
                readOnly={!editable}
              />
            </div>

            {/* DOB field */}

            <div className="border-b border-gray-700 border-opacity-20 flex items-center justify-between gap-4 pb-2">
              <legend className="text-gray-700 text-sm opacity-70">DOB:</legend>
              <input
                type="date"
                name="dob"
                id="dob"
                defaultValue={""}
                className="outline-none text-sm text-right font-medium opacity-80"
                readOnly={!editable}
              />
            </div>

            {/* Nearest location field */}

            <div className="border-b border-gray-700 border-opacity-20 flex items-center justify-between gap-4 pb-2">
              <legend className="text-gray-700 text-sm opacity-70">
                Nearest location:
              </legend>
              <input
                type="text"
                name="nearest-location"
                id="nearest-location"
                defaultValue={"FESTAC"}
                className="outline-none text-sm text-right font-medium opacity-80"
                readOnly={!editable}
              />
            </div>
          </div>

          {/* Emergency contact */}

          <div className="">
            <h3 className="text-lg text-blue-dark font-medium opacity-80">
              Emergency Contact
            </h3>

            <div className="space-y-6 mt-6">
              {/* Name field */}

              <div className="border-b border-gray-700 border-opacity-20 flex items-center justify-between gap-4 pb-2">
                <legend className="text-gray-700 text-sm opacity-70">
                  Name:
                </legend>
                <input
                  type="text"
                  name="name"
                  id="name"
                  defaultValue={"Lila Peters"}
                  className="outline-none text-sm text-right font-medium opacity-80"
                  readOnly={!editable}
                />
              </div>

              {/* Relationship field */}

              <div className="border-b border-gray-700 border-opacity-20 flex items-center justify-between gap-4 pb-2">
                <legend className="text-gray-700 text-sm opacity-70">
                  Relationship:
                </legend>
                <input
                  type="text"
                  name="relationship"
                  id="relationship"
                  defaultValue={"Wife"}
                  className="outline-none text-sm text-right font-medium opacity-80"
                  readOnly={!editable}
                />
              </div>

              {/* Emergency phone field */}

              <div className="border-b border-gray-700 border-opacity-20 flex items-center justify-between gap-4 pb-2">
                <legend className="text-gray-700 text-sm opacity-70">
                  Phone:
                </legend>
                <input
                  type="text"
                  name="emergency-phone"
                  id="emergency-phone"
                  defaultValue={"+2348036087586"}
                  className="outline-none text-sm text-right font-medium opacity-80"
                  readOnly={!editable}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default EditProfileForm;
