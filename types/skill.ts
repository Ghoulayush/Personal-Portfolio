export type Skill = {
  name: string;
  description: string;
};

export type SkillCategory = {
  name: string;
  skills: Skill[];
};
