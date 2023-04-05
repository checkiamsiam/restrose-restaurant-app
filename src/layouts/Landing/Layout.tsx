import { LayoutProps } from "@/Types/Interface/ComponentProps/LayoutsProps";
import Header from "./Header/Header";
import logoSrc from '@/assets/svg/chef-restaurant-logo-publicdomainvectors.svg'
import { navConfig } from "@/utils/navConfig";

const LandingLayout = ({ children }: LayoutProps) => (
  <div>
    <Header logoSrc={logoSrc} navConfig={navConfig}/>
    {children}
  </div>
);

export default LandingLayout;
