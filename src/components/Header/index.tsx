import { useState } from "react";
import {
  HeaderContainer,
  HeaderWrapper,
  TitleWrapper,
  OptionsWrapper,
  Option,
  SearchWrapper,
  SearchInput,
} from "./style";
import { useAppDispatch } from "../../store";
import { AnyAction } from "redux";
import { fetchHero } from "../../store/actions/fetchHero";

interface HeaderTypes {
  page: number;
  setPage: (page: number) => void;
  inputValue: string;
  setInputValue: (inputValue: string) => void;
}

const Header = ({
  page,
  setPage,
  inputValue,
  setInputValue,
}: HeaderTypes) => {
  const dispatch = useAppDispatch();
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSearch = () => {
    dispatch(fetchHero(inputValue) as unknown as AnyAction);
  };
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <TitleWrapper>
          MARVEL
        </TitleWrapper>
        <OptionsWrapper>
          <Option
            active={page}
            onClick={() => setPage(1)}
          >Search</Option>
          <Option
            active={page}
            onClick={() => setPage(2)}
          >List</Option>
        </OptionsWrapper>
        <SearchWrapper>
          <SearchInput
            placeholder="Search..."
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={(event: any) => {
              if (event.key === 'Enter') {
                handleSearch();
              }
            }}
          />
        </SearchWrapper>
      </HeaderContainer>
    </HeaderWrapper>
  )
}

export default Header;
