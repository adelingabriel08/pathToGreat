import React, { useState } from "react";
import { QuestionModel } from "../Models/QuestionModel";
import { TagWizardStep, TagEditField } from "@tag/tag-components-react-v2";
import { WizardStepHeader } from "./WizardStepHeader";
import { SelectableList } from "./SelectableList";
import { QuestionResultModel } from "../Models/QuestionResultModel";

type WizardStepProps = {
  question: QuestionModel;
  handleButtonsClick: (a: any) => void;
  handleFinish: (a: any) => void;
};
export const WizardStep = (props: WizardStepProps) => {
  const [answer, setAnswer] = useState<number>(-1);
  const [reason, setReason] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);
  return (
    <TagWizardStep
      heading={props.question.category}
      contentContainerStyle={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
      nextDisabled={buttonDisabled}
      onNextClick={() =>
        props.handleButtonsClick({
          id: props.question.id,
          answer: answer,
          reason: reason,
        })
      }
      onPreviousClick={() =>
        props.handleButtonsClick({
          id: props.question.id,
          answer: answer,
          reason: reason,
        })
      }
      onFinishClick={() =>
        props.handleFinish({
          id: props.question.id,
          answer: answer,
          reason: reason,
        })
      }
    >
      <WizardStepHeader
        title={props.question.category}
        description={props.question.categoryDescription}
      />
      <SelectableList
        id={props.question.id}
        title={props.question.title}
        answers={props.question.answers}
        selectedItemIndex={answer}
        setAnswer={(a: number) => {
          setAnswer(a);
          setButtonDisabled(false);
        }}
      />
      <TagEditField
        containerStyle={{
          marginTop: "30px",
          display: "flex",
          flexDirection: "column",
        }}
        value={reason}
        label="Please add examples from the last 6 month that would highlight your current mapping"
        placeholder="Your opinion"
        editor="multilinetextbox"
        rows={3}
        onValueChange={(e) => setReason(e.detail.value)}
      />
    </TagWizardStep>
  );
};
