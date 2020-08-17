import React from "react";
import { TagText, TagList } from "@tag/tag-components-react-v2";

type SelectableListProps = {
  id: number;
  title: string;
  answers: string[];
  selectedItemIndex: number;
  setAnswer: (e: number) => void;
};
export const SelectableList = (props: SelectableListProps) => {
  console.log("rerender");

  const data = [
    {
      title: props.answers[0],
      icon: "Plus",
      accent: "dolphinblue",
      description: "Very Positive",
    },
    {
      title: props.answers[1],
      icon: "PlusThin",
      accent: "dolphinblue",
      description: "Positive",
    },
    {
      title: props.answers[2],
      icon: "Minus",
      accent: "access",
      description: "Negative",
    },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <TagText
        text={props.title}
        type="h5"
        style={{ marginBottom: "10px", marginTop: "20px" }}
      />
      <TagList
        primaryField="title"
        selectable
        selectedItem={data[props.selectedItemIndex]}
        leftIconField="icon"
        leftIconAccentField="accent"
        primaryFieldStyle={{ fontWeight: "normal" }}
        secondaryField="description"
        onListItemClicked={(selected) =>
          props.setAnswer(selected.detail.itemIndex)
        }
        data={data}
      />
    </div>
  );
};
