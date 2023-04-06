import { StaticImageData } from "next/image";

export interface Service {
  title: string;
  description?: string;
  icon?: React.ReactElement;
}

export interface ServiceData {
  category?: string;
  services?: Service[];
}

export interface Menu extends  Service{
  price?: string ;
  image : StaticImageData | string

}
export interface CustomerReview{
  name: string ;
  profileImg: StaticImageData | string ;
  review:string ;
  date: string

}


