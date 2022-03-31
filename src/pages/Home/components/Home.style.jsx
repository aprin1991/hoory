import styled from "styled-components";

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  max-width: 600px;
  height: 100vh;
  margin: 0 auto;
  overflow-y: auto;
  -webkit-box-shadow: 0 10px 15px -3px rgb(0 0 0/0.1),
    0 4px 6px -4px rgb(0 0 0/0.1);
  box-shadow: 0 10px 15px -3px rgb(0 0 0/0.1), 0 4px 6px -4px rgb(0 0 0/0.1);
`;
export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  height: 100vh;
  padding: 10px;
`;
