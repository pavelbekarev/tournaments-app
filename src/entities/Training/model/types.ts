import type { Trainer } from "#entities/Trainer";

export interface Training {
  id: number;
  title: string;
  trainer: Trainer;
  station: string;
  time: string;
  date: string;
  duration: string;
  freeSlots: number;
  maxSlots: number;
}

export type TrainingCard = Omit<Training, "id">;

export type TrainingSlotsProps = Pick<Training, "maxSlots" | "freeSlots">;
