import {
  Ilinks,
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
      text: "Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier.",
      title:
        "SquareUp has been In strumental in Transforming our Online Presence. ",
      author: {
        job: "John Smith",
        name: "CEO of Chic Boutique",
        picture: "Profile.png",
      },
    },
    {
      text: "FitLife Tracker wanted a mobile app that tracked fitness activities and provided personalized workout plans.",
      title: "Working with SquareUp was a breeze.",
      author: {
        job: "John Smith",
        name: "CEO of Chic Boutique",
        picture: "Profile1.png",
      },
    },
    {
      text: "Their attention to detail and commitment to delivering a user-friendly platform was evident throughout the project. The system has streamlined our operations and enhanced our clients' event experiences.",
      title:
        "SquareUp developed a comprehensive booking and reservation system for our event management company",
      author: {
        job: "Mark Thompson",
        name: "CEO of EventMasters",
        picture: "Profile2.png",
      },
    },
    {
      text: "They delivered an exceptional custom software solution. The system has significantly increased our productivity and reduced manual errors. SquareUp's expertise and professionalism have made them a trusted technology partner.",
      title: "ProTech Solutions turned to SquareUp to automate our workflow",
      author: {
        job: "Laura Adams",
        name: "COO of ProTech Solutions.",
        picture: "Profile3.png",
      },
    },
  ];

  const links: Ilinks[] = [
    {
      icon: "/link1.png",
      label: "hello@squareup.com",
    },
    {
      icon: "/link2.png",
      label: "+91 91813 23 2309",
    },
    {
      icon: "/link3.png",
      label: "Somewhere in the World",
    },
  ];

  return { metaData, navData, servicesData, choicesData, testimonialsData, links };
}
