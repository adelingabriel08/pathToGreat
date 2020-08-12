import { QuestionModel } from "../Models/QuestionModel";

export const Questions: QuestionModel[] = [
  {
    id: "0",
    type: "Engagement",
    sectionTitle: "Curiosity",
    sectionDescription:
      "The extent to which someone is curious about themselves, others and the world around them",
    title: "Opinions",
    vPositive: "Seeks to understand other peoples opinions",
    positive:
      "Interested & listens to points being made, positively shares own opinions",
    negative: "Disengaged, imposing own opinions",
  },
  {
    id: "1",
    type: "Engagement",
    sectionTitle: "Curiosity",
    sectionDescription:
      "The extent to which someone is curious about themselves, others and the world around them",
    title: "Making Things Better",
    vPositive: "Actively look for things to improve & bring solutions",
    positive:
      "Willing to help  improve, gets involved; Considers customer/user impact ",
    negative: "Happy with how things done for ease",
  },
  {
    id: "2",
    type: "Engagement",
    sectionTitle: "Resilience",
    sectionDescription:
      "Ability to bounce back from setbacks or overcome barriers",
    title: "Deals with change",
    vPositive:
      "Knows how to manage themselves through a period of change and acts on it ",
    positive: "Healthy response to change (inc. positive challenge) ",
    negative: "Burys head in the sand, refuses to accept changes",
  },
  {
    id: "3",
    type: "Engagement",
    sectionTitle: "Flexibility",
    sectionDescription: "Ability to be flexible and adapt, constantly evolving",
    title: "Change",
    vPositive:
      "Asks to be involved in new things, makes change happen, sees change as an opportunity",
    positive:
      "Open to change, welcomes different thinking, adapts to new situations",
    negative: "Focusses on downside of change, digs heals in to keep the past",
  },
  {
    id: "4",
    type: "Engagement",
    sectionTitle: "Relating",
    sectionDescription:
      "The way that someone relates to other people and teams",
    title: "Relationships",
    vPositive:
      "Understands the importance of having a network and builds one, goes beyond own team ",
    positive:
      "Builds rapport, has great relations with their team or customer; approachable",
    negative: "Unapproachable, self absorbed",
  },
];
