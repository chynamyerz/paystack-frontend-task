import { FC } from "react";
import { Col, Row } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { PAGE_SIZE } from "../../../utils/constants";
import { IAppTableProps } from "./types";

export const AppTable: FC<IAppTableProps> = ({
  data,
  columns,
  keyField,
  page,
  totalSize,
  onTableChange,
}) => {
  return (
    <BootstrapTable
      remote
      bootstrap4
      keyField={keyField}
      data={data}
      columns={columns}
      striped
      hover
      condensed
      pagination={paginationFactory({
        page,
        sizePerPage: PAGE_SIZE,
        totalSize,
      })}
      onTableChange={onTableChange}
    />
  );
};
