export interface Trainer {
  id: number;
  fullName: string;
  avatar: string;
}

export interface TrainerHeader {
  trainer: Trainer;
  station: string;
}
