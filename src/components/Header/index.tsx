import {
  HeaderContainer,
  HeaderWrapper,
  TitleWrapper,
  OptionsWrapper,
  Option,
  SearchWrapper,
  SearchInput,
} from "./style";

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
          <SearchInput placeholder="Search..." />
        </SearchWrapper>
      </HeaderContainer>
    </HeaderWrapper>
  )
}

export default Header;
