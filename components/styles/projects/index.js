import styled from "styled-components";
import { COLORS } from "../../constants/colors";
export const ProjectStyle = styled.section`
  position: relative;
  padding: 70px 0;
  .absolutImg-1 {
    position: absolute;
    left: -30px;
    top: -30px;
    z-index: 1;
    img {
      width: 120px;
    }
  }
  .absolutImg-2 {
    position: absolute;
    background-color: ${COLORS.BTN_BACKGROUND_SKY};
    width: 150px;
    height: 150px;
    left: -15px;
    top: -15px;
    border-top-right-radius: 45px;
    border-bottom-left-radius: 45px;
    z-index: 2;
    img {
      width: 120px;
    }
  }
  .topHeaderText {
    position: relative;
    display: flex;
    align-items: center;
    row-gap: 20px;
    flex-direction: column;
    h1 {
      font-size: 38px;
      color: ${COLORS.COLOR_DARK};
      span {
        color: ${COLORS.COLOR_SKY};
      }
    }
    h3 {
      font-size: 16px;
      color: ${COLORS.COLOR_BLUE};
    }
  }
  .projectsBlock {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    row-gap: 20px;
    margin-top: 40px;
    align-items: center;
    justify-content: space-around;
    /* border: 1px solid red; */
    .projectItem {
      position: relative;
      width: 360px;
      overflow: hidden;
      border-top-right-radius: 40px;
      border-bottom-left-radius: 50px;
      /* border: 1px solid black; */
      z-index: 5;
      img {
        width: 360px;
      }
      &:hover {
        transform: scale(1.05);
        .absolutItemText {
          opacity: 1;
        }
      }
      .absolutItemText {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        opacity: 0;
        justify-content: center;
        align-items: center;
        background-color: rgba(72, 126, 176, 0.5);
        div {
          text-align: center;
          h1 {
            font-size: 28px;
            color: ${COLORS.COLOR_WHITE};
          }
          h4 {
            margin-top: 20px;
            font-size: 19px;
            margin-bottom: 30px;
            color: ${COLORS.COLOR_WHITE};
          }
        }
      }
    }
  }
`;
