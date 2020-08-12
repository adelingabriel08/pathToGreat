import React from "react";
import { TagText } from "@tag/tag-components-react-v2";

type StepHeaderProps = {
  title: string;
  description: string;
};

export const StepHeaderComponent = (props: StepHeaderProps) => {
  return (
    <div className="d-flex flex-column">
      <TagText text={props.title} type="h2" />
      <TagText text={props.description} />
    </div>
  );
};
