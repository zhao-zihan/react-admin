import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { Link } from "react-router-dom";
import "../css/DragDrop.css";

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
    <>
      <div className="d-flex flex-column align-items-center">
        <FileUploader
          handleChange={handleChange}
          name="file"
          types={fileTypes}
        />
        <Link
          className="link-download mt-2"
          to="../assets/import_shipment_template.xlsx"
          target="_blank"
          download
        >
          Download Template
        </Link>
      </div>
    </>
  );
}

export default DragDrop;
