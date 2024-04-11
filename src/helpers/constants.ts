import { IcompaniesLogo, Imeta, InavData } from "@/utils/interfaces";

export default function constants() {
  const metaData: Imeta = {
    home: "Bienvenue sur Digital Agency",
  };

  const navData: InavData[] = [
    {
      url: "/",
      label: "Home",
    },
    {
      url: "",
      label: "Services",
    },
    {
      url: "",
      label: "Work",
    },
    {
      url: "",
      label: "Process",
    },
    {
      url: "",
      label: "About",
    },
    {
      url: "",
      label: "Careers",
    },
  ];

  const companiesLogo: IcompaniesLogo[] = [
    {
        src:""
    }
  ];

  return { metaData, navData };
}
