import { BreadcrumbBannerItem, BreadcrumbBannerProps } from "@/Types/Interface/ComponentProps/BreadcrumbBanner";
import { motion } from "framer-motion";
import Link from "next/link";

const BreadcrumbBanner = ({ crumbs, title, description }: BreadcrumbBannerProps) => {
  return (
    <motion.div
      className="bg-gradient-to-r from-purple-500 to-indigo-500 py-6 px-10 w-full h-screen flex flex-col justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <h1 className="text-white text-4xl font-bold mb-8">{title}</h1>
      <nav className="text-white text-lg" aria-label="Breadcrumb">
        <ol className="list-none p-0 inline-flex">
          {crumbs.map((crumb: BreadcrumbBannerItem, index: number) => (
            <li key={index} className="flex items-center">
              {crumb.link ? (
                <Link href={crumb.link} className="text-white hover:text-white hover:underline">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-white">{crumb.label}</span>
              )}
              {index < crumbs.length - 1 && (
                <svg className="flex-shrink-0 w-5 h-5 mx-3 fill-current text-white" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5.293 5.293a1 1 0 0 1 0 1.414L1.414 10l3.879 3.879a1 1 0 0 1-1.414 1.414l-4.586-4.586a1 1 0 0 1 0-1.414l4.586-4.586a1 1 0 0 1 1.414 0z"
                  />
                </svg>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <p className="text-white text-center mt-8">{description}</p>
    </motion.div>
  );
};

export default BreadcrumbBanner;
