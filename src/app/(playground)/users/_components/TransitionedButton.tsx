"use client";

import { ComponentProps, useTransition } from "react";
import { twMerge } from "tailwind-merge";

interface ITransitionedButtonProps {
  value: string;
  className?: string;
}

function TransitionedButton({
  value,
  className,
  ...props
}: ITransitionedButtonProps &
  Omit<ComponentProps<"button">, "className" | "onClick">) {
  const [isPending, startTransition] = useTransition();

  const action = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => console.log({ data }))
      .catch((error) => console.error({ error }));
  };

  const handleClick = () => {
    startTransition(action);
  };

  return (
    <button
      className={twMerge(className, isPending && "cursor-not-allowed")}
      onClick={handleClick}
      disabled={isPending}
      {...props}
    >
      {value}
    </button>
  );
}

export default TransitionedButton;
