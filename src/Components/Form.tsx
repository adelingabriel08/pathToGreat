import * as React from "react";
import {
  TagWizard,
  TagWizardStep,
  TagEditField,
} from "@tag/tag-components-react-v2";
import { StepHeaderComponent } from "./StepHeader";
import { StepListComponent } from "./StepList";
import { Questions } from "../Data/Questions";
import { QuestionResultModel } from "../Models/QuestionResultModel";

export const FormComponent = () => {
  const [disabled, setDisabled] = React.useState(true);
  let results: QuestionResultModel[] = [];
  let result: any;
  const handleResult = (r: QuestionResultModel) => {
    result = r;
    setDisabled(false);
  };
  const handleTagEditFieldChange = (e: string) => {
    result.argument = e;
  };
  const handleNext = () => {
    if (result) {
      let item = results.findIndex((e) => result.id === e.id);
      item >= 0 ? (results[item] = result) : results.push(result);
      result = null;
    }

    console.log(results);
  };
  const handleFinish = () => {
    handleNext();
    // post request
  };
  let wizardSteps = Questions.map((q) => (
    <TagWizardStep
      key={q.id}
      heading={q.sectionTitle}
      contentContainerStyle={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
      nextDisabled={disabled}
      onNextClick={handleNext}
      onFinishClick={handleFinish}
    >
      <StepHeaderComponent
        title={q.sectionTitle}
        description={q.sectionDescription}
      />
      <StepListComponent
        id={q.id}
        title={q.title}
        vPositive={q.vPositive}
        positive={q.positive}
        negative={q.negative}
        setResult={handleResult}
      />
      <TagEditField
        containerStyle={{
          marginTop: "30px",
          display: "flex",
          flexDirection: "column",
        }}
        label="Please add examples from the last 6 month that would highlight your current mapping"
        placeholder="Your opinion"
        editor="multilinetextbox"
        rows={3}
        onValueChange={(e) => handleTagEditFieldChange(e.detail.value)}
      />
    </TagWizardStep>
  ));
  return (
    <React.Fragment>
      <TagWizard heading="Engages">{wizardSteps}</TagWizard>
    </React.Fragment>
  );
};
