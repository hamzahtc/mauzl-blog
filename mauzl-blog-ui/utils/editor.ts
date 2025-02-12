import type EditorJS from "@editorjs/editorjs";

export const loadEditor = async (): Promise<EditorJS> => {
  const Editor = (await import("@editorjs/editorjs")).default;
  return new Editor({
    holder: "editorjs",
    placeholder: "Write your blog content here...",
    autofocus: true,
    tools: {}, // Add Editor.js plugins here if needed
    onReady: () => console.log("Editor.js is ready!"),
  });
};
