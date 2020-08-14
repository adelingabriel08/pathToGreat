import * as React from "react";
import {
  TagWizard,
  TagWizardStep,
  TagEditField,
} from "@tag/tag-components-react-v2";
import { StepHeaderComponent } from "./StepHeader";
import { StepListComponent } from "./StepList";
import { Questions } from "../Data/Questions";

export const FormComponent = () => {
  let wizardSteps = Questions.map((q) => (
    <TagWizardStep
      name={q.id}
      heading={q.sectionTitle}
      contentContainerStyle={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
    >
      <StepHeaderComponent
        title={q.sectionTitle}
        description={q.sectionDescription}
      />
      <StepListComponent
        title={q.title}
        vPositive={q.vPositive}
        positive={q.positive}
        negative={q.negative}
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
      />
    </TagWizardStep>
  ));
  return (
    <React.Fragment>
      <TagWizard heading="Engages">{wizardSteps}</TagWizard>
    </React.Fragment>
  );
};
