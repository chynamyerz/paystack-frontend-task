import { FC } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { IInfoBlockProps } from "./types";

export const InfoBlock: FC<IInfoBlockProps> = ({ title, description }) => {
  return (
    <Col>
      <Row>
        <h3>{title}</h3>
      </Row>
      <Row>
        <p>{description}</p>
      </Row>
    </Col>
  );
};
