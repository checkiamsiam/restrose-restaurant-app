export interface BreadcrumbBannerItem {
  label: string;
  link: string;
}

export interface BreadcrumbBannerProps {
  title: string;
  description?: string ;
  crumbs: BreadcrumbBannerItem[];
}
