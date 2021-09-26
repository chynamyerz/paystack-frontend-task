import { FC, useEffect, useState } from "react";
import _ from "lodash";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { AppDropdown, InfoBlock } from "../../components/common";
import { useFetchFilms } from "../../api/queries";
import { ISelectOption } from "../../utils/types";
import { Characters } from "../../components";

export const Home: FC = () => {
  const [selectedMovie, setSelectedMovie] = useState<ISelectOption>();
  const [selectedGender, setSelectedGender] = useState<ISelectOption>();
  const [currentMovie, setCurrentMovie] = useState<any>();

  const {
    data: filmsResults,
    isLoading: isFilmsLoading,
    isError: isFilmsError,
  } = useFetchFilms();

  // Update currently selected movie
  useEffect(() => {
    if (!selectedMovie) return;
    const movie = filmsResults.results.find(
      (film: any) => film.title === selectedMovie?.title
    );
    setCurrentMovie(movie);
  }, [selectedMovie]);

  if (isFilmsLoading) {
    return <p>Loading films...</p>;
  }

  if (isFilmsError) {
    return (
      <p>
        Something went wrong while fetching the films, please try agin later.
      </p>
    );
  }

  // Films dropdown data
  const filmsDropdown: ISelectOption[] = _.orderBy(
    filmsResults.results,
    [(film) => new Date(film.release_date)],
    ["asc"]
  ).map(({ title }: { title: string }, index: number) => ({
    id: `${index}`,
    title,
    value: title,
  }));

  const genderDropdownData: ISelectOption[] = [
    { id: "1", title: "All", value: "all" },
    { id: "2", title: "Female", value: "female" },
    { id: "3", title: "Male", value: "male" },
  ];

  return (
    <Container>
      <Col md={{ span: 8, offset: 2 }}>
        <Row>
          <AppDropdown
            title={"Select movie"}
            items={filmsDropdown}
            selectedItem={selectedMovie}
            onSelectChange={setSelectedMovie}
          />
        </Row>
        <hr />
        <Row>
          <InfoBlock
            title={currentMovie?.title ?? ""}
            description={currentMovie?.opening_crawl ?? ""}
          />
        </Row>
        <Row>
          <Col>
            <Row>
              <AppDropdown
                title={"Select gender"}
                items={genderDropdownData}
                selectedItem={selectedGender}
                onSelectChange={setSelectedGender}
              />
            </Row>
            <Row style={{ marginTop: 10 }}>
              <Characters
                urls={currentMovie?.characters ?? []}
                selectedGender={selectedGender}
              />
            </Row>
          </Col>
        </Row>
      </Col>
    </Container>
  );
};
