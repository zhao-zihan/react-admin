import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import cellEditFactory, { Type } from "react-bootstrap-table2-editor";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import ToolkitProvider, {
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";

import { Button } from "react-bootstrap";
import { Icon } from "semantic-ui-react";
import "../css/Table.css";
import DragDrop from "../components/DragDrop";

function Table() {
  const productsGenerator = (quantity) => {
    const items = [];
    for (let i = 0; i < quantity; i++) {
      items.push({ id: i, name: `Item name ${i}`, price: 2100 + i });
    }
    return items;
  };

  const products = productsGenerator(1000);

  const generalFormatter = (data, cell) => {
    return (
      <>
        {data}{" "}
        <Button className="btn-edit">
          <Icon name="edit" className="icon-edit"></Icon>
        </Button>
      </>
    );
  };

  const headerFormatter = (column) => {
    return (
      <>
        <div className="table-header d-flex justify-content-between align-items-center">
          {column.text}
          <Button className="btn-sort">
            <Icon name="sort" className="icon-sort"></Icon>
          </Button>
        </div>
      </>
    );
  };

  const columns = [
    {
      dataField: "id",
      text: "Product ID",
      sort: true,
      filter: textFilter({
        placeholder: "Filter Product ID",
      }),
      headerFormatter: headerFormatter,
    },
    {
      dataField: "name",
      text: "Product Name",
      sort: true,
      filter: textFilter({
        placeholder: "Filter Product Name",
      }),
      formatter: generalFormatter,
      headerFormatter: headerFormatter,
    },
    {
      dataField: "price",
      text: "Product Price",
      sort: true,
      filter: textFilter({
        placeholder: "Filter Product Price",
      }),
      formatter: generalFormatter,
      headerFormatter: headerFormatter,
    },
  ];

  const { SearchBar } = Search;

  return (
    <div className="App">
      <ToolkitProvider keyField="id" data={products} columns={columns} search>
        {(props) => (
          <div>
            <div className="d-flex justify-content-between align-items-center my-4">
              <div className="search-field">
                <h3>Search table data:</h3>
                <SearchBar {...props.searchProps} />
              </div>
              <DragDrop />
            </div>
            <hr />
            <BootstrapTable
              {...props.baseProps}
              bootstrap4
              keyField="id"
              data={products}
              columns={columns}
              pagination={paginationFactory()}
              cellEdit={cellEditFactory({
                mode: "click",
                blurToSave: true,
                nonEditableRows: () => [1],
              })}
              filter={filterFactory()}
              filterPosition="top"
              hover
            />{" "}
          </div>
        )}
      </ToolkitProvider>
    </div>
  );
}

export default Table;
