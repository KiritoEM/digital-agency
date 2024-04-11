import { Imeta, InavData, IservicesData } from "@/utils/interfaces";

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

  const servicesData: IservicesData[] = [
    {
      icon: "icon-1.png",
      text: "At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.",
      title: "Design",
    },
    {
      icon: "icon-2.png",
      text: "Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.",
      title: "Engineering",
    },
    {
      icon: "icon-3.png",
      text: "Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.",
      title: "Project Management",
    },
  ];

  return { metaData, navData, servicesData };
}
