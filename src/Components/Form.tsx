import * as React from "react";
import {
  TagWizard,
  TagWizardStep,
  TagCheckbox,
  TagEditField,
  TagText,
} from "@tag/tag-components-react-v2";
import { Questions } from "../Data/Questions";
import { extname } from "path";
import { Container } from "react-bootstrap";

export const FormComponent = () => {
  const labelStyle = { fontWeight: "normal" };
  return (
    <React.Fragment>
      <TagWizard heading="Engages" height="500px">
        <Container className="d-flex flex-column justify-content-center">
          <div className="d-flex flex-column">
            <TagWizardStep
              name="step1"
              heading="Curiosity"
              contentContainerStyle={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <TagText text="Curiosity" type="h2" />
              <TagText text="The extent to which someone is curious about themselves, others and the world around them " />
              <TagText
                text="Opinions "
                type="h5"
                style={{ marginBottom: "10px" }}
              />
              {/* <TagEditField
                label="Opinions"
                editor="dropdown"
                options={[
                  { label: "" },
                  {
                    label:
                      "Very Positive - Seeks to understand other peoples opinions",
                    value: 1,
                  },
                  {
                    label:
                      "Positive - Interested  & listens to points being made, positively shares own opinions",
                    value: 2,
                  },
                  {
                    label: "Negative - Disengaged, imposing own opinions",
                    value: 3,
                  },
                ]}
              /> */}
              <TagEditField
                editor="checkbox"
                label="Very Positive - Seeks to understand other peoples opinions"
                labelStyle={{ fontWeight: "normal" }}
                rounded
              />
              <TagEditField
                editor="checkbox"
                label="Positive - Interested  & listens to points being made, positively shares own opinions"
                labelStyle={{ fontWeight: "normal" }}
                rounded
              />
              <TagEditField
                editor="checkbox"
                label="Negative - Disengaged, imposing own opinions"
                labelStyle={{ fontWeight: "normal" }}
                rounded
              />

              <TagEditField
                containerStyle={{ marginTop: "30px" }}
                label="Please add examples from the last 6 month that would highlight your current mapping"
                placeholder="Your opinion"
                editor="multilinetextbox"
              />
            </TagWizardStep>
          </div>
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
        </Container>
      </TagWizard>
      {/* <TagForm
        submit-button-text="Save"
        submit-button-icon="Save"
        submit-button-icon-accent="white"
        submit-button-accent="viridiangreen"
        submit-button-align="right"
        className="m-5"
        submitButtonStyle={{ marginTop: "5vh" }}
      >
        {items}
      </TagForm> */}
    </React.Fragment>
  );
};
