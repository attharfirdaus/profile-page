import { Icon } from "@iconify/react";
import { HTMLAttributes } from "react";

interface TailwindIconifyProps extends HTMLAttributes<HTMLDivElement> {
  icon: string;
}

function Iconify({ icon, className, ...rest }: TailwindIconifyProps) {
  return (
    <div className={className} {...rest}>
      <Icon icon={icon} />
    </div>
  );
}

export default Iconify;
