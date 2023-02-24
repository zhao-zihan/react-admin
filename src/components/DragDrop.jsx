import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { Link } from "react-router-dom";
import "../css/DragDrop.css";
import readXlsxFile from "read-excel-file";

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
  const map = {
    "Customer Code": "customerCode",
    "Customer Order ID": "orderId",
    "Service Code": "serviceCode",
    "Sales Platform": "salesPlatform",
    "Weight Unit": "weightUnits",
    "Length Unit": "dimensionsUnits",
    Sender: {
      sender: { "Shipper Warehouse Code": "warehouseCode" },
    },
    Receiver: {
      receiver: {
        "Receiver Name": "name",
        "Receiver Company Name": "companyName",
        "Receiver Country": "country",
        "Receiver State": "province",
        "Receiver City": "city",
        "Receiver Address 1": "address",
        "Receiver Address 2": "address2",
        "Receiver Address 3": "address3",
        "Receiver Phone Number": "mobile",
        "Receiver Email": "email",
        "Receiver Postcode": "zipCode",
      },
    },
    PackageInfos: {
      packageInfos: {
        "Package ID": "packageID",
        "Package Weight": "weight",
        "Package Length": "length",
        "Package Width": "width",
        "Package Height": "height",
        Goods: {
          goods: {
            "Product Code": "goodsCode",
            "Product Name": "goodsName",
            "Product Quantity": "goodsCount",
            "Product Value": "worth",
            Currency: "currency",
            "Product Weight": "weight",
            "Product Length": "length",
            "Product Width": "width",
            "Product Height": "height",
          },
        },
      },
    },
  };

  const handleChange = (file) => {
    setFile(file);
    readXlsxFile(file, {
      map,
      transformData(data) {
        data.shift();
        console.log(data[0]);
        data.shift();
        return [
          [
            "Customer Code",
            "Customer Order ID",
            "Service Code",
            "Sales Platform",
            "Weight Unit",
            "Length Unit",
            "Shipper Warehouse Code",
            "Shipper Name",
            "Shipper Company",
            "Shipper Country",
            "Shipper State",
            "Shipper City",
            "Shipper Address 1",
            "Shipper Address 2",
            "Shipper Address 3",
            "Shipper Phone Number",
            "Shipper Email",
            "Shipper Postcode",
            "Receiver Name",
            "Receiver Company Name",
            "Receiver Country",
            "Receiver State",
            "Receiver City",
            "Receiver Address 1",
            "Receiver Address 2",
            "Receiver Address 3",
            "Receiver Phone Number",
            "Receiver Email",
            "Receiver Postcode",
            "Package ID",
            "Package Weight",
            "Package Length",
            "Package Width",
            "Package Height",
            "Product Code",
            "Product Quantity",
            "Product Name",
            "Product Weight",
            "Product Value",
            "Currency",
            "Product Length",
            "Product Width",
            "Product Height",
          ],
        ].concat(data);
      },
      includeNullValues: true,
    }).then(({ rows }) => {
      console.log(rows);
    });
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
