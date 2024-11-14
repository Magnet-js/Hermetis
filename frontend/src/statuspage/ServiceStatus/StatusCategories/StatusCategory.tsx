import { Category } from "@/lib/types/statuspage";
import { ServiceStatusItem } from "../ServiceStatusItem";

type Props = {
  category: Category;
};

export const StatusCategory = (props: Props) => {
  const { category } = props;
  return category.services.map((service, serviceIndex) => (
    <ServiceStatusItem key={serviceIndex} service={service} />
  ));
};
