import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = [
  "xlsx",
  "xlsm",
  "xlsb",
  "xltx",
  "xltm",
  "xls",
  "xlt",
  "xml",
  "xlam",
  "xla",
  "xlw",
  "xlr",
];

function DragDrop() {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  return (
    <FileUploader
      className="mx-auto"
      handleChange={handleChange}
      name="file"
      types={fileTypes}
    />
  );
}

export default DragDrop;
