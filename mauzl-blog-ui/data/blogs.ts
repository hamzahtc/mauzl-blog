import { OutputData } from "@editorjs/editorjs";

export const staticBlog: OutputData = {
  time: 1635603431943,
  blocks: [
    {
      type: "header",
      data: {
        text: "Welcome to My Blog",
        level: 2,
      },
    },
    {
      type: "paragraph",
      data: {
        text: "This is an example blog post written using Editor.js.",
      },
    },
    {
      type: "list",
      data: {
        style: "unordered",
        items: ["Item 1", "Item 2", "Item 3"],
      },
    },
  ],
};
