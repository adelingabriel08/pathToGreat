import * as React from "react";
import { TagWizard } from "@tag/tag-components-react-v2";
import { Questions } from "../Data/Questions";
import { QuestionResultModel } from "../Models/QuestionResultModel";
import { WizardStep } from "./WizardStep";

export const FormComponent = () => {
  const [answers, setAnswers] = React.useState<QuestionResultModel[]>([]);

  const handleButtonsClick = (answer: QuestionResultModel) => {
    if (answers[answer.id] === answer) return;
    if (answers[answer.id]) {
      const arr = answers;
      arr[answer.id] = answer;
      setAnswers(arr);
    } else {
      const arr = answers;
      arr.push(answer);
      setAnswers(arr);
    }
    console.log(answers);
  };
  const handleFinish = (answer: QuestionResultModel) => {
    handleButtonsClick(answer);
    // post request
  };
  let wizardSteps = Questions.map((q) => (
    <WizardStep
      key={q.id}
      question={q}
      handleButtonsClick={handleButtonsClick}
      handleFinish={handleFinish}
    />
  ));
  return (
    <React.Fragment>
      <TagWizard heading="Engages">{wizardSteps}</TagWizard>
    </React.Fragment>
  );
};
