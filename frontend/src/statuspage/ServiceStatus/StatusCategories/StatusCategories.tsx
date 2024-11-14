import { Category } from "@/lib/types/statuspage";
import { StatusCategory } from "./StatusCategory";

type Props = {
  categories: Category[];
};

export const StatusCategories = (props: Props) => {
  const { categories } = props;
  return categories.map((category, index) => (
    <div key={index} className="mb-8">
      <h2 className="text-xl font-semibold mb-4">{category.name}</h2>
      <StatusCategory category={category} />
    </div>
  ));
};
