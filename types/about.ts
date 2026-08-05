export type NowStatus = {
  status: string;
  focus: string[];
  building: string;
  learning: string[];
};

export type AboutConfig = {
  label: string;
  heading: string;
  story: string[];
  note: string;
  principles: string[];
  now: NowStatus;
};
