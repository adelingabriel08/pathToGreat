import * as React from "react";
import { TagForm, TagText, TagEditField } from "@tag/tag-components-react-v2";
import { Questions } from "../Data/Questions";
import { extname } from "path";

export const FormComponent = () => {
  const [values, setValues] = React.useState<any>();
  const labelStyle = { fontSize: "20px" };
  const items = Questions.map((q) => {
    if (q.dropdown)
      return (
        <TagEditField
          label={q.title}
          editor="dropdown"
          labelStyle={labelStyle}
          options={q.dropdown}
          validation={[{ rule: "required" }]}
          className="m-3"
        />
      );
  });

  return (
    <React.Fragment>
      <TagText
        text="Path to Great Questions"
        type="h2"
        accent="keppel"
        className="m-5"
      />
      <TagForm
        submit-button-text="Save"
        submit-button-icon="Save"
        submit-button-icon-accent="white"
        submit-button-accent="viridiangreen"
        submit-button-align="right"
        className="m-5"
        submitButtonStyle={{ marginTop: "5vh" }}
      >
        {items}
      </TagForm>
    </React.Fragment>
  );
};
