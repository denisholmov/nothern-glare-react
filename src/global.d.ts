declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}
declare module "*.css" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.svg?react" {
  import { FC, SVGProps } from "react";
  const content: FC<SVGProps<SVGSVGElement>>;
  export default content;
}
