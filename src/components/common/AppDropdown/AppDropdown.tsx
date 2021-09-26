import React, { FC } from "react";
import { Dropdown } from "react-bootstrap";

import { IAppDropdownProps } from "./types";
import "./styles.css";

export const AppDropdown: FC<IAppDropdownProps> = ({
  title,
  items,
  selectedItem,
  onSelectChange,
}) => {
  const onSelectHandler = (
    eventKey: string | null,
    event: React.SyntheticEvent<unknown>
  ) => {
    const selectedValue = (event.target as Element).textContent;
    onSelectChange(items.find((film) => film.title === selectedValue));
  };
  return (
    <Dropdown onSelect={onSelectHandler}>
      <Dropdown.Toggle
        style={{
          backgroundColor: "#1d1a1a",
          color: "#dfdf1d",
          borderColor: "#1d1a1a",
          border: "1px solid white",
          boxShadow: "none",
        }}
      >
        {title}
      </Dropdown.Toggle>

      <Dropdown.Menu
        style={{
          backgroundColor: "#1d1a1a",
          color: "#dfdf1d",
          border: "1px solid white",
        }}
      >
        {items.map((item) => {
          return (
            <Dropdown.Item
              as={"p"}
              id={item.id}
              key={item.id}
              eventKey={item.id}
              style={{
                backgroundColor:
                  selectedItem?.id === item.id ? "#dfdf1d" : "#1d1a1a",
                color: selectedItem?.id === item.id ? "#1d1a1a" : "#dfdf1d",
                cursor: "pointer",
              }}
            >
              {item.title}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};
