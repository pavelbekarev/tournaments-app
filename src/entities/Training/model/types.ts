import type { Trainer } from "#entities/Trainer";

export interface Training {
  id: number;
  title: string;
  trainer: Trainer;
  station: string;
  time: string;
  duration: string;
  freeSlots: number;
  maxSlots: number;
}
