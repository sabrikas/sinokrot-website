import { ComponentType, SVGProps } from "react";

export type ProcessCard = {
  title: string;
  text: string;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
};

export type StatItem = {
  value: string;
  label: string;
};
