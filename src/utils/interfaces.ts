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

interface IservicesData {
  icon: string;
  title: string;
  text: string;
}

interface IservicesCardData {
  icon: string;
  title: string;
  text: string;
}

export type {
  Ichildren,
  Ititle,
  Imeta,
  InavData,
  IservicesData,
  IservicesCardData,
};
