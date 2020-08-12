import * as React from "react";
import {
  TagWizard,
  TagWizardStep,
  TagEditField,
  TagText,
  TagList,
} from "@tag/tag-components-react-v2";
import { StepHeaderComponent } from "./StepHeader";
import { Questions } from "../Data/Questions";

export const FormComponent = () => {
  return (
    <React.Fragment>
      <TagWizard heading="Engages">
        <TagWizardStep
          name="step1"
          heading="Curiosity"
          contentContainerStyle={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <StepHeaderComponent title="abracadabra" description="ceva ceva" />
          <div className="d-flex flex-column">
            <TagText
              text="Opinions "
              type="h5"
              style={{ marginBottom: "10px", marginTop: "30px" }}
            />
            <TagList
              primaryField="name"
              selectable
              leftIconField="icon"
              leftIconAccentField="accent"
              primaryFieldStyle={{ fontWeight: "normal" }}
              secondaryField="description"
              data={[
                {
                  name: "Seeks to understand other peoples opinions",
                  icon: "Plus",
                  accent: "dolphinblue",
                  description: "Very Positive",
                },
                {
                  name:
                    "Interested & listens to points being made, positively shares own opinions",
                  icon: "PlusThin",
                  accent: "dolphinblue",
                  description: "Positive",
                },
                {
                  name: "Disengaged, imposing own opinions",
                  icon: "Minus",
                  accent: "access",
                  description: "Negative",
                },
              ]}
            />
          </div>
          <div className="d-flex flex-column">
            <TagEditField
              containerStyle={{ marginTop: "30px" }}
              label="Please add examples from the last 6 month that would highlight your current mapping"
              placeholder="Your opinion"
              editor="multilinetextbox"
              rows={4}
            />
          </div>
        </TagWizardStep>
        <TagWizardStep name="step2" heading="Step 2">
          <div>Content 2</div>
        </TagWizardStep>
        <TagWizardStep name="step3" heading="Step 3">
          <div>Content 3</div>
        </TagWizardStep>
        <TagWizardStep name="step3" heading="Step 3">
          <div>Content 3</div>
        </TagWizardStep>
        <TagWizardStep name="step3" heading="Step 3">
          <div>Content 3</div>
        </TagWizardStep>
      </TagWizard>
    </React.Fragment>
  );
};
