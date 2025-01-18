"use client";

import MDEditor from "@uiw/react-md-editor";
import React, { useState } from "react";
import rehypeSanitize from "rehype-sanitize";

function CreatePostForm() {
  const [value, setValue] = useState<string | undefined>(undefined);

  return (
    <div className="h-[84dvh]">
      <form action="">
        <fieldset className="">
          <label htmlFor="title" className="text-sm font-semibold">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Content title"
            required
            className="w-full outline-none py-2 px-4 text-sm bg-[#fafafa] border border-gray-200 rounded-sm inline-block mt-1"
          />
        </fieldset>

        <fieldset>
          <input type="file" name="thumbnail" id="thumbnail" className="text-sm inline-block mt-4" />
        </fieldset>

        <fieldset data-color-mode="light" className="mt-6">
          <MDEditor
            value={value}
            onChange={(value: string | undefined) => {
              setValue(value);
            }}
            previewOptions={{
              rehypePlugins: [[rehypeSanitize]],
            }}
            className=""
          />
        </fieldset>
      </form>
    </div>
  );
}

export default CreatePostForm;
