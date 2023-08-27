import styled from "styled-components";

export const Hero = styled.section`
  position: relative;
  text-align: center;
  padding: 100px 0;
  height: 100vh;
  background: linear-gradient(108.98deg, #ff5f5f 21.92%, #455084 88.54%);
  overflow: hidden;
  padding-left: 200px;
  display: flex;
  align-items: center;

  .image-wrap {
    position: relative;
    z-index: 1;
    max-width: 80%;
    margin: 0 auto;
    margin: 0 auto;
  }

  .webs {
    animation: spin 10s ease-in-out infinite alternate;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100% !important;
    height: 100%;
    object-fit: cover;
    opacity: 0.1;
  }

  @keyframes spin {
    to {
      transform: rotate(-10deg);
    }
    from {
      transform: rotate(10deg);
    }
  }
`;
