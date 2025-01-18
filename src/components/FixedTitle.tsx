import { ComponentProps } from "react";

interface IFixedTitleProps {
  title: string;
}

function FixedTitle(props: ComponentProps<"h3"> & IFixedTitleProps) {
  return (
    <h3
      {...props}
      className="bg-blue-dark text-white uppercase text-[0.75rem] leading-3 py-3 px-4 absolute top-0 left-0"
    >
      {props.title}
    </h3>
  );
}

export default FixedTitle;
