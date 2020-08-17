import React from "react";
import { TagText } from "@tag/tag-components-react-v2";

type WizardStepHeaderProps = {
  title: string;
  description: string;
};

export const WizardStepHeader = (props: WizardStepHeaderProps) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <TagText text={props.title} type="h2" />
      <TagText text={props.description} />
    </div>
  );
};
