import React from "react";
import { TagText, TagList } from "@tag/tag-components-react-v2";
import { QuestionResultModel } from "../Models/QuestionResultModel";

type ListProps = {
  id: string;
  title: string;
  vPositive: string;
  positive: string;
  negative: string;
  setResult: (e: QuestionResultModel) => void;
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
        onListItemSelected={(selected) =>
          props.setResult({
            id: props.id,
            result: selected.detail.item.description,
          })
        }
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
