import { trainings } from "../model/mock";
import type { Training } from "../model/types";

export function getTrainings(): Promise<Training[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(trainings);
    }, 600);
  });
}
