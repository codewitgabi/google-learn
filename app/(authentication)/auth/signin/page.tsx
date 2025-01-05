"use client";

import { createAccountAction } from "@/actions/auth.actions";
import { useActionState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

function SigninPage() {
  const [state, action, pending] = useActionState(
    createAccountAction,
    undefined
  );
  const router = useRouter();

  const handleSignin = async () => {
    if (state) {
      const result = await signIn("credentials", {
        phone: state.email,
        password: state.password,
        redirect: false,
      });

      if (result?.error) {
        console.error("Failed to sign in", result.error);
        return;
      }

      router.push("/"); // Redirect to homepage
    }
  };

  if (state) {
    handleSignin();
  }

  return (
    <>
      <div className="flex items-center justify-center min-h-dvh">
        <form
          action={action}
          className="w-[400px] border border-gray-300 p-6 rounded-md"
        >
          <h4 className="text-[0.7rem] font-semibold">WELCOME BACK</h4>
          <legend className="text-base font-medium mt-1">
            Signin to your account
          </legend>

          {/* Show form errors */}

          {state?.errors && (
            <ul className="mt-4 text-[0.75rem]">
              {/* Form validation messages */}
              {Object.values(state.errors).map((error, index) => (
                <li key={index} className="text-red-600">
                  {error}
                </li>
              ))}
            </ul>
          )}

          {/* Email field */}

          <fieldset className="mt-6">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              required
              className="w-full outline-none py-2 px-4 bg-[#fafafa] text-sm"
            />
          </fieldset>

          {/* Password field */}

          <fieldset className="mt-2">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              required
              className="w-full outline-none py-2 px-4 bg-[#fafafa] text-sm"
            />
          </fieldset>

          <button className="inline-block bg-[#27282c] text-[0.75rem] mt-12 text-white py-2 px-4 rounded-md hover:bg-black/80 transition-all duration-200">
            {pending ? "Loading..." : "Login to your account"}
          </button>
        </form>
      </div>
    </>
  );
}

export default SigninPage;
