import { Ititle } from "@/utils/interfaces";
import Head from "next/head";

const MetaTitle = ({ title }: Ititle) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

export default MetaTitle;
