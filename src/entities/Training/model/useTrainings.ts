import { useSuspenseQuery } from "@tanstack/react-query";
import { getTrainings } from "../api/getTrainings";

export function useTrainings() {
  return useSuspenseQuery({
    queryKey: ["trainings"],
    queryFn: getTrainings,
  });
}
