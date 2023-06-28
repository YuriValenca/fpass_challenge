import { styled } from "styled-components";

interface OptionTypes {
  active: number;
};

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: #504A4A;
  z-index: 999;
  padding: 10px 0;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  margin: 0;
`;

export const ImageTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #fff;
  font-size: 46px;
`;

export const MarvelImage = styled.img`
  width: 120px;
`;

export const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-evenly;
  font-size: 24px;
  width: 170px;

`;

export const Option = styled.button<OptionTypes>`
  background-color: transparent;
  border: none;
  color: #E23636;
  cursor: pointer;
  font-size: 20px;
  border-radius: 4px;
  padding: 6px 12px;
  &:hover {
    background-color: #C5C6D0 !important;
  }
  &:first-child {
    background-color: ${(props) => props.active === 1 ? "#fff" : "transparent"};
  }
  &:last-child {
    background-color: ${(props) => props.active === 2 ? "#fff" : "transparent"};
  }

`;

export const SearchWrapper = styled.div`
  > img {
    width: 20px;
  }
`;

export const SearchInput = styled.input`
  width: 320px;
  padding: 6px 12px;
  border-radius: 4px;
  border: 2px solid #E23636;
  font-size: 20px;
  &:focus {
    outline: none;
  }
`;
