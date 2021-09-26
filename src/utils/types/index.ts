export interface ISelectOption {
  id: string;
  title: string;
  value: string;
}

export interface ICharactersTableData {
  name: string;
  gender: string;
  height: string;
}

export interface ICharactersTableColumns {
  dataField: string;
  text: string;
  sort: boolean;
}
