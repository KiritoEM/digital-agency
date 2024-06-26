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

interface Iheader {
  title: string;
  text: string;
}

interface Itestimonial {
  title: string;
  text: string;
  author: {
    picture: string;
    name: string;
    job: string;
  };
}

interface Ilinks {
  icon: string;
  label: string;
}

interface Ianimation {
  direction: string;
  children: ReactNode;
}

interface InavProps {
  toogle?: () => void;
  overlay?: () => boolean;
}

export type {
  Ichildren,
  Ititle,
  Imeta,
  InavData,
  IservicesData,
  IservicesCardData,
  Iheader,
  Itestimonial,
  Ilinks,
  Ianimation,
  InavProps
};
