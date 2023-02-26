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
  const schema = {
    "Customer Code": {
      prop: "customerCode",
    },
    "Customer Order ID": {
      prop: "orderId",
    },
    "Service Code": {
      prop: "serviceCode",
    },
    "Sales Platform": {
      prop: "salesPlatform",
    },
    "Weight Unit": {
      prop: "weightUnits",
    },
    "Length Unit": {
      prop: "dimensionsUnits",
    },
    Sender: {
      prop: "sender",
      type: {
        "Shipper Warehouse Code": {
          prop: "warehouseCode",
        },
      },
    },
    Receiver: {
      prop: "receiver",
      type: {
        "Receiver Name": {
          prop: "name",
        },
        "Receiver Company Name": {
          prop: "companyName",
        },
        "Receiver Country": {
          prop: "country",
        },
        "Receiver State": {
          prop: "province",
        },
        "Receiver City": {
          prop: "city",
        },
        "Receiver Address 1": {
          prop: "address",
        },
        "Receiver Address 2": {
          prop: "address2",
        },
        "Receiver Address 3": {
          prop: "address3",
        },
        "Receiver Phone Number": {
          prop: "mobile",
        },
        "Receiver Email": {
          prop: "email",
        },
        "Receiver Postcode": {
          prop: "zipCode",
        },
      },
    },
    PackageInfos: {
      prop: "packageInfos",
      type: {
        "Package ID": {
          prop: "packageID",
        },
        "Package Weight": {
          prop: "weight",
        },
        "Package Length": {
          prop: "length",
        },
        "Package Width": {
          prop: "width",
        },
        "Package Height": {
          prop: "height",
        },
        Goods: {
          prop: "goods",
          type: {
            "Product Code": {
              prop: "goodsCode",
            },
            "Product Name": {
              prop: "goodsName",
            },
            "Product Quantity": {
              prop: "goodsCount",
            },
            "Product Value": {
              prop: "worth",
            },
            Currency: {
              prop: "currency",
            },
            "Product Weight": {
              prop: "weight",
            },
            "Product Length": {
              prop: "length",
            },
            "Product Width": {
              prop: "width",
            },
            "Product Height": {
              prop: "height",
            },
          },
        },
      },
    },
  };

  const handleChange = (file) => {
    setFile(file);
    readXlsxFile(file, {
      schema,
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
      rows.forEach((row) => {
        row.packageInfos.goods = [row.packageInfos.goods];
        row.packageInfos = [row.packageInfos];
        return row;
      });
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
