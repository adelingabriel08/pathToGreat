import React from "react";
import { TagText, TagList } from "@tag/tag-components-react-v2";

type ListProps = {
  title: string;
  vPositive: string;
  positive: string;
  negative: string;
};
export const StepListComponent = (props: ListProps) => {
  return (
    <div className="d-flex flex-column">
      <TagText
        text={props.title}
        type="h5"
        style={{ marginBottom: "10px", marginTop: "20px" }}
      />
      <TagList
        primaryField="title"
        selectable
        leftIconField="icon"
        leftIconAccentField="accent"
        primaryFieldStyle={{ fontWeight: "normal" }}
        secondaryField="description"
        data={[
          {
            title: props.vPositive,
            icon: "Plus",
            accent: "dolphinblue",
            description: "Very Positive",
          },
          {
            title: props.positive,
            icon: "PlusThin",
            accent: "dolphinblue",
            description: "Positive",
          },
          {
            title: props.negative,
            icon: "Minus",
            accent: "access",
            description: "Negative",
          },
        ]}
      />
    </div>
  );
};
