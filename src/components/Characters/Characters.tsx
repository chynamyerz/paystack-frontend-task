import React, { FC, useEffect, useState } from "react";
import { TableChangeType } from "react-bootstrap-table-next";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useFetchCharacters } from "../../api/queries";
import { PAGE_SIZE } from "../../utils/constants";
import {
  ICharactersTableColumns,
  ICharactersTableData,
} from "../../utils/types";
import { AppTable } from "../common";
import { ICharactersProps } from "./types";

export const Characters: FC<ICharactersProps> = ({
  urls = [],
  selectedGender,
}) => {
  const [currentMovieCharacters, setCurrentMovieCharacters] = useState<
    ICharactersTableData[]
  >([]);
  const [currentMovieCharactersPage, setCurrentMovieCharactersPage] =
    useState<number>(1);

  const [currentMovieCharactersUrls, setCurrentMovieCharactersUrls] = useState<
    string[]
  >([]);
  const {
    data: charactersResults,
    isLoading: isCharactersLoading,
    isError: isCharactersError,
  } = useFetchCharacters({
    urls: currentMovieCharactersUrls,
  });

  const characters =
    charactersResults?.map(({ name, gender, height }) => ({
      name,
      gender,
      height,
    })) ?? [];

  const totalHeight = currentMovieCharacters?.reduce(
    (preValue, currentValue) =>
      (preValue += Number(currentValue.height))
        ? Number(currentValue.height)
        : 0,
    0
  );

  const columns: ICharactersTableColumns[] = [
    { dataField: "name", text: "Name", sort: true },
    { dataField: "gender", text: "Gender", sort: true },
    { dataField: "height", text: "Height", sort: true },
  ];

  useEffect(() => {
    if (!urls) return;
    setCurrentMovieCharactersUrls(urls?.slice(0, PAGE_SIZE));
  }, [urls]);

  // Update currently selected movie characters
  useEffect(() => {
    if (!charactersResults) return;
    if (selectedGender && selectedGender.value !== "all") {
      setCurrentMovieCharacters(
        characters.filter(
          (character) => character.gender === selectedGender?.value
        )
      );
    } else {
      setCurrentMovieCharacters(characters);
    }
  }, [selectedGender, charactersResults]);

  const handlePagination = (
    type: TableChangeType,
    { page, sizePerPage }: { page: number; sizePerPage: number }
  ) => {
    const currentIndex = (page - 1) * sizePerPage;
    setCurrentMovieCharactersPage(page);
    setCurrentMovieCharactersUrls(
      urls?.slice(currentIndex, currentIndex + sizePerPage)
    );
  };

  if (isCharactersLoading) {
    return <p>Loading characters...</p>;
  }

  if (isCharactersError) {
    return (
      <p>
        Something went wrong while fetching the films characters, please try
        agin later.
      </p>
    );
  }

  return (
    <Col>
      <Row>
        <AppTable
          keyField={"name"}
          data={currentMovieCharacters}
          columns={columns}
          page={currentMovieCharactersPage}
          totalSize={urls?.length}
          onTableChange={handlePagination}
        />
      </Row>
      <Row style={{ border: "1px solid lightgray", height: 45 }}>
        <Col>Total height</Col>
        <Col>
          <Row>
            <Col>{totalHeight}</Col>
            <Col>{`(${(totalHeight / 30.48).toFixed(2)}ft/${6.93}in)`}</Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
};
