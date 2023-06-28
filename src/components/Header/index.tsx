import { useState } from "react";
import {
  HeaderContainer,
  HeaderWrapper,
  ImageTextWrapper,
  MarvelImage,
  OptionsWrapper,
  Option,
  SearchWrapper,
  SearchInput,
} from "./style";
import marvelLogo from "../../assets/images/marvelLogo.png";

interface HeaderTypes {
  page: number;
  setPage: (page: number) => void;
}

const Header = ({
  page,
  setPage
}: HeaderTypes) => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <ImageTextWrapper>
          <MarvelImage src={marvelLogo} />
        </ImageTextWrapper>
        <OptionsWrapper>
          <Option active={page} onClick={() => setPage(1)}>Search</Option>
          <Option active={page} onClick={() => setPage(2)}>List</Option>
        </OptionsWrapper>
        <SearchWrapper>
          <SearchInput placeholder="Search..." />
        </SearchWrapper>
      </HeaderContainer>
    </HeaderWrapper>
  )
}

export default Header;
