"use client";

function ChangePasswordForm() {
  return (
    <form action="" className="w-[450px] space-y-4 max-md:w-full">
      {/* Old password fieldset */}

      <fieldset>
        <label htmlFor="old-password" className="mb-1 inline-block">
          <span className="text-sm">Old password</span>
          <span className="text-red-500">*</span>
        </label>
        <input
          type="password"
          name="oldPassword"
          id="old-password"
          required
          className="w-full outline-none rounded-md border border-gray-500 border-opacity-30 py-2 px-4 text-sm focus:border-blue-dark transition-all duration-300 "
        />
      </fieldset>

      {/* New password fieldset */}

      <fieldset>
        <label htmlFor="new-password" className="mb-1 inline-block">
          <span className="text-sm">New password</span>
          <span className="text-red-500">*</span>
        </label>
        <input
          type="password"
          name="newPassword"
          id="new-password"
          required
          className="w-full outline-none rounded-md border border-gray-500 border-opacity-30 py-2 px-4 text-sm focus:border-blue-dark transition-all duration-300 "
        />
      </fieldset>

      {/* Confirm new  password fieldset */}

      <fieldset>
        <label htmlFor="confirm-password" className="mb-1 inline-block">
          <span className="text-sm">Confirm password</span>
          <span className="text-red-500">*</span>
        </label>
        <input
          type="password"
          name="confirmPassword"
          id="confirm-password"
          required
          className="w-full outline-none rounded-md border border-gray-500 border-opacity-30 py-2 px-4 text-sm focus:border-blue-dark transition-all duration-300 "
        />
      </fieldset>

      {/* Submit button */}

      <button className="bg-blue-dark text-white py-2 px-6 rounded-lg text-sm inline-block !mt-12 hover:bg-opacity-80">
        Continue
      </button>
    </form>
  );
}

export default ChangePasswordForm;
