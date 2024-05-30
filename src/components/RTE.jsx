import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";

function RTE({ name, control, label, defaultValue ="" }) {
  return (
    <Controller
      name={name || "content"}
      control={control}
      render={(
        { field: { onChange } } //onchange in parent
      ) => (
        <Editor
        initialValue={defaultValue}
        label={label}
          apiKey="7o94i3d8dz5rux91rblpa7lm4kn2mzfoluts0qtstcpsq8l4"
          init={{
            height: 500,
            menubar: true,
            plugins: [
              "advlist",
              "autolink",
              "lists",
              "link",
              "image",
              "charmap",
              "preview",
              "anchor",
              "searchreplace",
              "visualblocks",
              "code",
              "fullscreen",
              "insertdatetime",
              "media",
              "table",
              "code",
              "help",
              "wordcount",
            ],
            toolbar:
              "undo redo | blocks | " +
              "bold italic forecolor | alignleft aligncenter " +
              "alignright alignjustify | bullist numlist outdent indent | " +
              "removeformat | help",
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
          onEditorChange={onChange}
        /> 
        //Note
      )}
    />
  );
}

export default RTE;
