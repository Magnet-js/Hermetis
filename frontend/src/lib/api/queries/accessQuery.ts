import { Category } from "@/lib/types/statuspage";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import apiClient from "../apiClient";
import { ENDPOINTS } from "../endpoints";

type Status = {
  status: string;
  categories: Category[];
};

const getStatus = async (): Promise<Status> => {
  const { data } = await apiClient.get<Status>(ENDPOINTS.STATUS);
  return data;
};

export const fetchStatus = (): UseQueryResult<Status, Error> => {
  return useQuery({
    queryKey: ["status"],
    queryFn: () => getStatus(),
  });
};
