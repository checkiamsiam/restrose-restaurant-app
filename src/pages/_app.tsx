import LandingLayout from "@/layouts/Landing/Layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: any) {
  const getLayout = Component.getLayout || ((page: React.ReactNode) => <LandingLayout>{page}</LandingLayout>);
  return getLayout(<Component {...pageProps} />);
}
