import styled from "styled-components";

export const Hero = styled.section`
  position: relative;
  text-align: center;
  padding: 100px 0;
  height: 100vh;
  background: radial-gradient(circle at bottom, navy 0, black 100%);
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

  .space {
    background: rgba(128, 0, 128, 0.1) center / 200px 200px round;
    border: 1px dashed purple;
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }

  .stars1 {
    /* animation: space 180s ease-in-out infinite; */
    animation: space 80s ease-in-out infinite;
    background-image: radial-gradient(
        1px 1px at 25px 5px,
        white,
        rgba(255, 255, 255, 0)
      ),
      radial-gradient(1px 1px at 50px 25px, white, rgba(255, 255, 255, 0)),
      radial-gradient(1px 1px at 125px 20px, white, rgba(255, 255, 255, 0)),
      radial-gradient(1.5px 1.5px at 50px 75px, white, rgba(255, 255, 255, 0)),
      radial-gradient(2px 2px at 15px 125px, white, rgba(255, 255, 255, 0)),
      radial-gradient(2.5px 2.5px at 110px 80px, white, rgba(255, 255, 255, 0));
    transform: rotate(10deg);
  }

  .stars2 {
    /* animation: space 240s ease-in-out infinite; */
    animation: space 100s ease-in-out infinite;
    background-image: radial-gradient(
        1px 1px at 75px 125px,
        white,
        rgba(255, 255, 255, 0)
      ),
      radial-gradient(1px 1px at 100px 75px, white, rgba(255, 255, 255, 0)),
      radial-gradient(1.5px 1.5px at 199px 100px, white, rgba(255, 255, 255, 0)),
      radial-gradient(2px 2px at 20px 50px, white, rgba(255, 255, 255, 0)),
      radial-gradient(2.5px 2.5px at 100px 5px, white, rgba(255, 255, 255, 0)),
      radial-gradient(2.5px 2.5px at 5px 5px, white, rgba(255, 255, 255, 0));
    transform: rotate(6deg);
  }

  .stars3 {
    /* animation: space 300s ease-in-out infinite; */
    animation: space 140s ease-in-out infinite;
    background-image: radial-gradient(
        1px 1px at 10px 10px,
        white,
        rgba(255, 255, 255, 0)
      ),
      radial-gradient(1px 1px at 150px 150px, white, rgba(255, 255, 255, 0)),
      radial-gradient(1.5px 1.5px at 60px 170px, white, rgba(255, 255, 255, 0)),
      radial-gradient(1.5px 1.5px at 175px 180px, white, rgba(255, 255, 255, 0)),
      radial-gradient(2px 2px at 195px 95px, white, rgba(255, 255, 255, 0)),
      radial-gradient(2.5px 2.5px at 95px 145px, white, rgba(255, 255, 255, 0));
    transform: rotate(3deg);
  }

  @keyframes space {
    40% {
      opacity: 0.75;
    }
    50% {
      opacity: 0.25;
    }
    60% {
      opacity: 0.75;
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
