import { SEOInterface } from "@/Types/Interface/ComponentProps/SEOInterface";
import Head from "next/head";

const SEO = ({ title, description = "weero restaurant app" }: SEOInterface) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default SEO;
