import { TableChangeHandler } from "react-bootstrap-table-next";
import {
  ICharactersTableColumns,
  ICharactersTableData,
} from "../../../utils/types";

export interface IAppTableProps {
  keyField: string;
  data: ICharactersTableData[];
  columns: ICharactersTableColumns[];
  page: number;
  totalSize: number;
  onTableChange: TableChangeHandler<any> | undefined;
}
