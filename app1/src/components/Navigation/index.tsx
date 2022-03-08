import { Link } from "react-router-dom";
import * as React from "react";
import * as S from "./styles";

const Navigation = () => (
  <S.Wrapper>
    <Link to="/">Home</Link> - <Link to="/edit">Edit</Link> - <Link to="/about">About</Link>
  </S.Wrapper>
);

export default Navigation;
