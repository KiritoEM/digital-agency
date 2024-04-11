import {
  Imeta,
  InavData,
  IservicesData,
  Itestimonial,
} from "@/utils/interfaces";

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

  const choicesData: IservicesData[] = [
    {
      icon: "icon-4.png",
      text: "Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.",
      title: "Expertise",
    },
    {
      icon: "icon-5.png",
      text: "We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, and tailor our services to meet your specific requirements. Your success is our success.",
      title: "Client-Centric Approach",
    },
    {
      icon: "icon-6.png",
      text: "Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage.",
      title: "Results-Driven Solutions",
    },
    {
      icon: "icon-7.png",
      text: "We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive.",
      title: "Collaborative Partnership",
    },
  ];

  const testimonialsData: Itestimonial[] = [
    {
      text: "",
      title: "",
      author: {
        job: "",
        name: "",
        picture: "",
      },
    },
  ];

  return { metaData, navData, servicesData, choicesData, testimonialsData };
}
