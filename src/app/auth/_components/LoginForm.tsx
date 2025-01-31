"use client";

import Image from "next/image";
import { useActionState, useEffect, useState, useTransition } from "react";
import { LoginUserAction } from "../_actions/auth.actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { signIn } from "next-auth/react";

function LoginForm() {
  const [state, action, pending] = useActionState(LoginUserAction, undefined);
  const router = useRouter();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const handler = async () => {
      if (state === undefined) {
        return;
      }

      if (state?.success === false) {
        toast.error(state?.message);
      } else {
        // handle session login

        startTransition(async () => {
          const result = await signIn("credentials", {
            ...state.inputs,
            redirect: false,
          });

          if (result?.error) {
            toast.error(result.error);
            return;
          }

          console.log(result)

          toast.success("Login successful");
          router.push("/"); // Navigate to homepage
        });
      }
    };

    handler();
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
          Welcome back
        </p>
        <h3 className="font-medium opacity-85">
          <legend className="">Continue to your account</legend>
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
            defaultValue={isPending ? (state?.inputs.password as string) : ""}
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
        disabled={pending || isPending}
        type="submit"
        className="!mt-12 w-full text-sm bg-black text-white py-2 rounded-full hover:bg-black/80 transition-all duration-300 disabled:bg-black/50 disabled:cursor-wait"
      >
        {pending || isPending ? (
          <span className="loading loading-spinner loading-md"></span>
        ) : (
          <span>Login</span>
        )}
      </button>
    </form>
  );
}

export default LoginForm;
