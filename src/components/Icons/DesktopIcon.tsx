import { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {
  fill?: string;
}

const DesktopIcon: React.FC<Props> = (props) => {
  const { fill = "#212121" } = props;

  return (
    <svg
      width="22"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20.25 4.5C20.6642 4.5 21 4.83579 21 5.25V16.5H3V5.25C3 4.83579 3.33579 4.5 3.75 4.5H20.25ZM3.75 3C2.50736 3 1.5 4.00736 1.5 5.25V18H22.5V5.25C22.5 4.00736 21.4926 3 20.25 3H3.75Z"
        fill={fill}
      />
      <path
        d="M0 18.75H24C24 19.9926 22.9926 21 21.75 21H2.25C1.00736 21 0 19.9926 0 18.75Z"
        fill={fill}
      />
    </svg>
  );
};

export { DesktopIcon };
