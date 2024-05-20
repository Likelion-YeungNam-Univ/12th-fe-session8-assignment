import React from "react";
import SpecialListItem from "./SpecialListItem";
import styled from "styled-components";

const SpeicalList = ({ movieList, deleteMethod }) => {
  return (
    <Box>
      {movieList.map((el) => {
        return (
          <SpecialListItem
            key={el.id}
            id={el.id}
            title={el.title}
            description={el.description}
            deleteMethod={deleteMethod}
          />
        );
      })}
    </Box>
  );
};

const Box = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: scroll;
`;

export default SpeicalList;
