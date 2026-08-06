export type GameStatus = "currently-playing" | "finished" | "favorite";

export type Game = {
  id: string;
  title: string;
  status: GameStatus;
  genre: string;
  platform?: string;
  note?: string;
  placeholder?: boolean;
};
