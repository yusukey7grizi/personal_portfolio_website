type UserInfo = {
  userId: number;
  englishName: string;
  japaneseName: string;
  school: string;
  yearOfGraduation: number;
  gmail: string;
  githubUserName: string;
  introduction: string;
  skills: { id: number; title: string; years: string }[];
  degrees: { id: number; title: string }[];
  achievements: { id: number; title: string }[];
  education: Education[];
  experience: Experience[];
  project: Project[];
  careerPlan: string;
  goal: string;
};

type Education = {
  id: number;
  school: string;
  yearOfEnrollment: number;
  yearOfGraduation: number;
  description: string;
};

type Experience = {
  id: number;
  title: string;
  type: 'アルバイト' | 'インターン';
  startedAt: number;
  endsAt: number;
  overview: string;
  effort: string;
  hardship: string;
};

type Project = {
  id: number;
  title: string;
  skills: [string];
  overview: string;
  effort: string;
  hardship: string;
  link: string;
};

export type { UserInfo, Education, Experience, Project };
