import styled from "styled-components";

export const LayoutStyled = styled.div``;

export const Container = styled.div``;

export const GuestsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 0 auto;
  max-width: 40rem;
`;

export const InfoSection = styled.section`
  height: 500px;
  @property --num {
    syntax: "<integer>";
    initial-value: 0;
    inherits: false;
  }

  @keyframes counter {
    from {
      --num: 0;
    }
    to {
      --num: 25;
    }
  }

  @keyframes counter2 {
    from {
      --num: 0;
    }
    to {
      --num: 100;
    }
  }

  @keyframes counter4 {
    from {
      --num: 0;
    }
    to {
      --num: 16;
    }
  }


  .ul--info[data-scroll="out"] {
    opacity: 0;
  }

  .ul--info[data-scroll="in"] {
    opacity: 1;
    transition: transform opacity 2s;
    .number--first {
        animation: counter forwards 1s alternate ease-in-out;
        counter-reset: num var(--num);
      }
    .number--first::before, .number--second::before, .number--forth::before {
      content: "+";
    }
    .number--first::after {
      content: counter(num);
    }
    .number--second {
      animation: counter2 forwards 1s alternate ease-in-out;
      counter-reset: num var(--num);
    }
    .number--second::after {
      content: counter(num);
    }
    .number--forth {
      animation: counter4 forwards 1s alternate ease-in-out;
      counter-reset: num var(--num);
    }
    .number--forth::after {
      content: counter(num);
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    list-style-type: none;
    color: #fff;
    padding: 100px;
    margin-left: 200px;
    li {
      display: flex;
      flex-direction: column;

    }    
  }
    p {
      max-width: 250px;
      font-size: 25px;
    }
    span {
      font-size: 70px;
      color: #fe226f;
    }
  }
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;

  main {
    background: #1b232e;
  }

  .event {
    &__main {
      width: 98.9vw;
      height: 99vh;
      clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
    }
    &__video-content {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
    &__main-text {
      position: absolute;
      font-size: 70px;
      top: 60%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #fff;
      text-shadow: 4px 4px #00000014;

      p {
        font-size: 50px;
        line-height: 20px;
        text-align: right;
        color: #eff183;
        letter-spacing: 40px;
      }
    }
    &__title {
      line-height: 100px;
      font-weight: 900;
      &--sub {
        display: flex;
        align-items: center;
        margin-left: 30px;
        font-weight: 900;
      }
      &--and {
        background-color: rgb(254 34 111);
        border-radius: 50%;
        width: 100px;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 20px;
        p {
          font-size: 30px;
          color: #4a348fc7;
          font-weight: 700;
          letter-spacing: 0px;
        }
      }
    }
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle,
      rgba(254, 34, 111, 0.39) 0%,
      rgba(47, 34, 98, 1) 100%
    );
  }
`;
