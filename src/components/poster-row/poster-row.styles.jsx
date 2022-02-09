import styled from "styled-components";

export const RowContainer = styled.section`
  margin-left: 2rem;

  & > h2 {
    color: white;
    font-size: 1.8rem;
    font-weight: 600;
  }
`;

export const RowPosters = styled.div`
  width: 100vw;
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;

  &::-webkit-scrollbar {
    overflow: hidden;
  }
`;
