import { ReactNode } from "react";

interface Ichildren {
  children: ReactNode;
}

interface Ititle {
  title: string;
}

interface Imeta {
  home: string;
}

interface InavData {
  url: string;
  label: string;
}

interface IcompaniesLogo {
  src: string;
}

export type { Ichildren, Ititle, Imeta, InavData, IcompaniesLogo };
