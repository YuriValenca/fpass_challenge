import { styled } from "styled-components";

export const SearchHeroContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 170px;
  max-width: 1300px;
`;

export const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 36px;
  width: 45%;
`;

export const HeroTitle = styled.h1`
  display: flex;
  align-items: flex-start;
  font-family: 'Formula Condensed Bold';
  font-weight: normal;
  font-size: 42px;
  user-select: none;
  width: 100%;
  margin: 0 0 24px 0;
`;

export const HeroDescription = styled.p`
  display: flex;
  align-items: flex-start;
  font-size: 18px;
  margin: 0;
`;

export const HeroImageContainer = styled.div`
  img {
    width: 450px;
    height: auto;
    max-width: 450px;
    max-height: 450px;
    object-fit: cover;
  }
`;
