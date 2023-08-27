import styled from "styled-components";

export const Hero = styled.section`
  position: relative;
  text-align: center;
  padding: 100px 0;
  height: 100vh;
  background: linear-gradient(
    0deg,
    rgba(57, 3, 121, 1) 0%,
    rgba(222, 108, 255, 1) 100%
  );
  overflow: hidden;
  padding-left: 200px;
  display: flex;
  align-items: center;

  .hulk-bg {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 40vw;
    opacity: 0.3;
  }

  .image-wrap {
    position: relative;
    z-index: 1;
    width: 70vw;
    max-width: 80%;
    margin: 0 auto;
  }

  .bubbles {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;
    overflow: hidden;
    top: 0;
    left: 0;
  }

  .bubble {
    position: absolute;
    bottom: 0;
    background: #8fc740;
    border-radius: 50%;
    opacity: 0.5;
    animation: flying 20s infinite ease-in;
  }

  .bubble:nth-child(1) {
    width: 40px;
    height: 40px;
    left: 10%;
    animation-duration: 8s;
  }

  .bubble:nth-child(2) {
    width: 20px;
    height: 20px;
    left: 20%;
    animation-duration: 5s;
    animation-delay: 1s;
  }

  .bubble:nth-child(3) {
    width: 50px;
    height: 50px;
    left: 35%;
    animation-duration: 10s;
    animation-delay: 2s;
  }

  .bubble:nth-child(4) {
    width: 80px;
    height: 80px;
    left: 50%;
    animation-duration: 7s;
    animation-delay: 0s;
  }

  .bubble:nth-child(5) {
    width: 35px;
    height: 35px;
    left: 55%;
    animation-duration: 6s;
    animation-delay: 1s;
  }

  .bubble:nth-child(6) {
    width: 45px;
    height: 45px;
    left: 65%;
    animation-duration: 8s;
    animation-delay: 3s;
  }

  .bubble:nth-child(7) {
    width: 25px;
    height: 25px;
    left: 75%;
    animation-duration: 7s;
    animation-delay: 2s;
  }

  .bubble:nth-child(8) {
    width: 80px;
    height: 80px;
    left: 80%;
    animation-duration: 6s;
    animation-delay: 1s;
  }

  .bubble:nth-child(9) {
    width: 15px;
    height: 15px;
    left: 70%;
    animation-duration: 9s;
    animation-delay: 0s;
  }

  .bubble:nth-child(10) {
    width: 50px;
    height: 50px;
    left: 85%;
    animation-duration: 5s;
    animation-delay: 3s;
  }

  @keyframes flying {
    0% {
      bottom: -100px;
      transform: translateX(0);
    }
    50% {
      transform: translateX(100px);
    }
    100% {
      bottom: 1080px;
      transform: translateX(-200px);
    }
  }
`;
