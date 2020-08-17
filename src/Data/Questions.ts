import { QuestionModel } from "../Models/QuestionModel";

export const Questions: QuestionModel[] = [
  {
    id: 0,
    category: "Curiosity",
    categoryDescription:
      "The extent to which someone is curious about themselves, others and the world around them",
    title: "Opinions",
    answers: [
      "Seeks to understand other peoples opinions",
      "Interested & listens to points being made, positively shares own opinions",
      "Disengaged, imposing own opinions",
    ],
  },
  {
    id: 1,
    category: "Curiosity",
    categoryDescription:
      "The extent to which someone is curious about themselves, others and the world around them",
    title: "Making Things Better",
    answers: [
      "Actively look for things to improve & bring solutions",
      "Willing to help  improve, gets involved; Considers customer/user impact ",
      "Happy with how things done for ease",
    ],
  },
  {
    id: 2,
    category: "Resilience",
    categoryDescription:
      "Ability to bounce back from setbacks or overcome barriers",
    title: "Deals with change",
    answers: [
      "Knows how to manage themselves through a period of change and acts on it ",
      "Healthy response to change (inc. positive challenge) ",
      "Burys head in the sand, refuses to accept changes",
    ],
  },
  {
    id: 3,
    category: "Flexibility",
    categoryDescription:
      "Ability to be flexible and adapt, constantly evolving",
    title: "Change",
    answers: [
      "Asks to be involved in new things, makes change happen, sees change as an opportunity",
      "Open to change, welcomes different thinking, adapts to new situations",
      "Focusses on downside of change, digs heals in to keep the past",
    ],
  },
  {
    id: 4,
    category: "Relating",
    categoryDescription:
      "The way that someone relates to other people and teams",
    title: "Relationships",
    answers: [
      "Understands the importance of having a network and builds one, goes beyond own team ",
      "Builds rapport, has great relations with their team or customer; approachable",
      "Unapproachable, self absorbed",
    ],
  },
];
