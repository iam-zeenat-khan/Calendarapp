import React from "react";
import { Button } from "@mui/material";

const ExportButton = ({ events }) => {
  const handleExport = (format) => {
    const data =
      format === "json"
        ? JSON.stringify(events, null, 2)
        : events.map((e) => `${e.name},${e.time}`).join("\n");
    const blob = new Blob([data], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `events.${format}`;
    link.click();
  };

  return (
    <div className="flex gap-2">
      <Button
       className="bg-green-200"
        variant="outlined"
        onClick={() => handleExport("json")}
      >
        Export JSON
      </Button>
      
    </div>
  );
};

export default ExportButton;
