import styled from "styled-components";

export const MenuInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  left: 0;
  height: 100vh;
  width: 25rem;
  background-color: ${({ theme }) => theme["red-400"]};
`;
export const MenuInfoContentSearch = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 28%;
  background-color: ${({ theme }) => theme["red-500"]};
`;
export const RowLogo = styled.div`
  margin-top: 2rem;
  width: 75%;
  height: 20%;
`;
export const ImgLogo = styled.img``;
export const RowSelect = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 85%;
  height: 25%;
`;
export const ButtonSearchPet = styled.button`
  margin-left: 1rem;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  background-color: ${({ theme }) => theme["yellow-500"]};
  cursor: pointer;
  transition: 0.5s;

  :hover {
    background-color: ${({ theme }) => theme["yellow-300"]};
  }
  svg {
    font-size: 1.4rem;
    color: ${({ theme }) => theme["blue-500"]};
  }
`;
export const ContentFilterPet = styled.div`
  position: relative;
  height: 70%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  width: 75%;
`;
export const TitleFilter = styled.h1`
  font-size: ${({ theme }) => theme.fontSize["2xl"]};
  color: ${({ theme }) => theme.white};
`;
export const LabelSelect = styled.p`
  margin-block: 1.5rem 0.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.white};
`;
