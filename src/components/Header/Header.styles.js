import styled from "styled-components";

export const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  padding: 50px;
  width: 330px;
  background: rgba(0, 0, 0, 0.4);
  min-height: 100vh;

  svg {
    width: 200px;
  }

  nav {
    margin-top: 50px;

    @media (max-width: 1200px) {
    }

    a {
      color: #fff;
      opacity: 0.8;
      transition: opacity 0.2s ease-in-out;

      &:hover {
        opacity: 1;
      }
    }

    ul {
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      row-gap: 10px;
    }

    li {
      list-style: none;
      font-weight: 600;
    }
  }

  &:not(.home) {
    background: #000;
  }
`;
