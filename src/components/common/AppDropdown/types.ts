import { Dispatch, SetStateAction } from "react";
import { ISelectOption } from "../../../utils/types";

export interface IAppDropdownProps {
  title: string;
  items: ISelectOption[];
  selectedItem: ISelectOption | undefined;
  onSelectChange: Dispatch<SetStateAction<ISelectOption | undefined>>;
}
