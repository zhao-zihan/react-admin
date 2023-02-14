import React from "react";
import Sidebar from "../components/Sidebar";
import Table from "../components/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Tables() {
  return (
    <main>
      <section>
        <Row>
          <Col xs={12}>
            <Sidebar />
            <Table />
          </Col>
        </Row>
      </section>
    </main>
  );
}

export default Tables;
