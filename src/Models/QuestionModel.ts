export type QuestionModel = {
  id: string;
  type: "Engagement" | "Performance";
  sectionTitle: string;
  sectionDescription: string;
  title: string;
  vPositive: string;
  positive: string;
  negative: string;
};
