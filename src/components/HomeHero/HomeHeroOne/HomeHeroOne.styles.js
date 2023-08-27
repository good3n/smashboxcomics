import styled from "styled-components";

export const Hero = styled.section`
  position: relative;
  background: #000;
  text-align: center;
  padding: 100px 0;
  height: 100vh;
  background-image: linear-gradient(
    99.9deg,
    rgba(27, 24, 31, 1) 21.2%,
    rgba(50, 4, 89, 1) 84.8%
  );
  overflow: hidden;
  padding-left: 200px;
  display: flex;
  align-items: center;

  .image-wrap {
    position: relative;
    z-index: 1;
    width: 70vw;
    max-width: 80%;
    margin: 0 auto;
  }

  .rainbow-road {
    position: absolute;
    top: 0;
    left: 0;
    width: 105%;
    height: 105%;
    animation: skew 5s ease-in-out infinite alternate;
  }

  @keyframes skew {
    to {
      transform: skew(5deg, 2deg);
    }
    from {
      transform: skew(0, 0);
    }
  }
`;
