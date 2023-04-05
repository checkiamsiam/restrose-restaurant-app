import React from "react";
import { navConfigInterface } from "../common/navConfig";

export interface LayoutProps  {
  children: React.ReactNode;
}

export interface LandingLayoutHeaderProps  {
  logoSrc: string;
  navConfig: navConfigInterface[];
}

