"use client";

import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { Plate } from "@udecode/plate/react";

import { useCreateEditor } from "@/components/editor/use-create-editor";
import { Editor, EditorContainer } from "@/components/plate-ui/editor";
import { serializeMd } from "@udecode/plate-markdown";

import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";

export function PlateEditor() {
  const editor = useCreateEditor();
  const handleChange = () => {
    const content = serializeMd(editor);
    console.log(content);
  };

  const handleSaveDraft = () => {
    alert("Blog saved as draft!");
  };

  const handlePublish = async () => {
    const content = serializeMd(editor);
    console.log(content);

    const res = await fetch("http://localhost:1337/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          title: "Eid Mubarak Said",
          content: content,
          slug: "eid-mubarak",
          summary: "I did it summary",
        },
      }),
    });

    const result = await res.json();
    console.log(result);
  };

  return (
    <div>
      <DndProvider backend={HTML5Backend}>
        <Plate editor={editor} onValueChange={handleChange}>
          <EditorContainer>
            <Editor variant="demo" />
          </EditorContainer>

          {/* <SettingsDialog /> */}
        </Plate>
      </DndProvider>

      <div className="flex justify-end gap-4">
        <Button variant="outline" onClick={handleSaveDraft}>
          <Save className="mr-2 h-4 w-4" />
          Save Draft
        </Button>
        <Button onClick={handlePublish}>Publish</Button>
      </div>
    </div>
  );
}
