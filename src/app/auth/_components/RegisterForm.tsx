"use client";

import Image from "next/image";
import { useActionState, useEffect, useState } from "react";
import { RegisterUserAction } from "../_actions/auth.actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

function RegisterForm() {
  const [state, action, pending] = useActionState(
    RegisterUserAction,
    undefined
  );
  const router = useRouter();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  useEffect(() => {
    if (state === undefined) {
      return;
    }

    if (state?.success === false) {
      toast.error(state?.message);
    } else {
      toast.success("Account created successfully!");
      router.push("/"); // Navigate to homepage
    }
  }, [router, state]);

  return (
    <form action={action} className="space-y-2">
      {/* Form header */}

      <div className="!mb-12 text-center">
        <Image
          src={"/next.svg"}
          alt="app-logo"
          width={60}
          height={60}
          className="mx-auto"
        />

        <p className="uppercase text-[0.7rem] text-gray-500 opacity-90 mt-4">
          Personalize your experience
        </p>
        <h3 className="font-medium opacity-85">
          <legend className="">Create an account to get started</legend>
        </h3>
      </div>

      {/* Form error message */}

      {state?.message && (
        <div
          className={`py-2 px-4 border ${
            state?.success
              ? "border-green-500 bg-green-50 text-green-500"
              : "bg-red-50 border-red-500 text-red-500"
          }  text-sm rounded-lg !mb-4`}
        >
          {state.message}
        </div>
      )}

      {/* Username fieldset */}

      <fieldset className="space-y-1">
        <label htmlFor="username" className="text-sm">
          <span className="">Username</span>
          <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="username"
          name="username"
          className={`w-full outline-none text-sm p-2 border border-gray-300 focus:border-black rounded-lg ${
            state?.errors?.username ? "border-red-500" : ""
          }`}
          defaultValue={state?.inputs?.username as string}
          placeholder="Username"
          required
        />
        {state?.errors?.username && (
          <p className="text-[12px] text-red-500">{state.errors.username[0]}</p>
        )}
      </fieldset>

      {/* End username fieldset */}

      {/* Email fieldset */}

      <fieldset className="space-y-1">
        <label htmlFor="email" className="text-sm">
          <span className="">Email</span>
          <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className={`w-full outline-none text-sm p-2 border border-gray-300 focus:border-black rounded-lg ${
            state?.errors?.email ? "border-red-500" : ""
          }`}
          defaultValue={state?.inputs?.email as string}
          placeholder="Email Address"
          required
        />
        {state?.errors?.email && (
          <p className="text-[12px] text-red-500">{state.errors.email[0]}</p>
        )}
      </fieldset>

      {/* End email fieldset */}

      <div className="grid grid-cols-2 gap-4 max-[450px]:grid-cols-1">
        <fieldset className="space-y-1">
          <label htmlFor="firstName" className="text-sm">
            <span className="">First name</span>
            <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className={`w-full outline-none text-sm p-2 border border-gray-300 focus:border-black rounded-lg ${
              state?.errors?.firstName ? "border-red-500" : ""
            }`}
            defaultValue={state?.inputs?.firstName as string}
            placeholder="First name"
            required
          />
          {state?.errors?.firstName && (
            <p className="text-[12px] text-red-500">
              {state.errors.firstName[0]}
            </p>
          )}
        </fieldset>

        <fieldset className="space-y-1">
          <label htmlFor="lastName" className="text-sm">
            <span className="">Last name</span>
            <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className={`w-full outline-none text-sm p-2 border border-gray-300 focus:border-black rounded-lg ${
              state?.errors?.lastName ? "border-red-500" : ""
            }`}
            defaultValue={state?.inputs?.lastName as string}
            placeholder="Last name"
            required
          />
          {state?.errors?.lastName && (
            <p className="text-[12px] text-red-500">
              {state.errors.lastName[0]}
            </p>
          )}
        </fieldset>
      </div>

      {/* Password fieldset */}

      <fieldset className="space-y-1">
        <label htmlFor="password" className="text-sm">
          <span className="">Password</span>
          <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            className={`w-full outline-none text-sm p-2 border border-gray-300 focus:border-black rounded-lg ${
              state?.errors?.password ? "border-red-500" : ""
            }`}
            placeholder="Password"
            required
          />

          <button
            type="button"
            className="absolute top-1/2 right-2 -translate-y-1/2"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <VscEyeClosed className="text-2xl" />
            ) : (
              <VscEye className="text-2xl" />
            )}
          </button>
        </div>
        {state?.errors?.password && (
          <p className="text-[12px] text-red-500">{state.errors.password[0]}</p>
        )}
      </fieldset>

      {/* End password fieldset */}

      <button
        disabled={pending}
        type="submit"
        className="!mt-12 w-full text-sm bg-black text-white py-2 rounded-full hover:bg-black/80 transition-all duration-300 disabled:bg-black/50 disabled:cursor-wait"
      >
        {pending ? (
          <span className="loading loading-spinner loading-md"></span>
        ) : (
          <span>Create Account</span>
        )}
      </button>
    </form>
  );
}

export default RegisterForm;
