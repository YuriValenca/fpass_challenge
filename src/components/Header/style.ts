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
  background-color: #F3EEE8;
  z-index: 999;
  padding: 0;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1300px;
  margin: 0;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
  box-sizing: border-box;
  color: #000;
  font-family: 'Formula Condensed Bold';
  font-weight:normal;
  font-size:60px;
  line-height: 1;
  padding-top: 10px;
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
  color: #000000;
  cursor: pointer;
  font-size: 20px;
  padding: 0;
  &:first-child {
    border-bottom: 3px solid ${(props) => props.active === 1 ? "#E23636" : "transparent"};
  }
  &:last-child {
    border-bottom: 3px solid ${(props) => props.active === 2 ? "#E23636" : "transparent"};
  }
`;

export const SearchWrapper = styled.div``;

export const SearchInput = styled.input`
  width: 300px;
  padding: 6px 12px;
  border-radius: 4px;
  border: 2px solid #000000;
  font-size: 20px;
  &:focus {
    outline: none;
  }
`;
