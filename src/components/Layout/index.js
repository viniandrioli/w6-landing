import React, { useEffect } from "react";
import { LayoutStyled, Container, Wrapper, InfoSection } from "./LayoutStyled";
import ScrollOut from "scroll-out";
import video from "./Event-1.webm";

export const Layout = () => {
  useEffect(() => {
    ScrollOut({ targets: ".ul--info", offset: 400 });
  }, []);
  return (
    <LayoutStyled>
      <Container>
        <Wrapper>
          <main>
            <section className="event__main">
              <video class="event__video-content" autoPlay muted loop>
                <source src={video} type="video/webm" />
              </video>
              <div className="overlay" />
              <div className="event__main-text">
                <h1 className="event__title">˹tecnologic</h1>
                <h2 className="event__title--sub">
                  <span className="event__title--and">
                    <p>and</p>
                  </span>
                  innovation˺
                </h2>
                <p>SUMMIT</p>
              </div>
            </section>
            <InfoSection>
              <ul className="ul--info">
                <li>
                  <span className="number--first" />
                  <p>PALESTRAS</p>
                </li>
                <li>
                  <span className="number--second" />

                  <p>EMPRESAS PARTICIPANTES</p>
                </li>
                <li>
                  <span className="number--first" />
                  <p>PALESTRAS COM TRASMISSÃO AO VIVO</p>
                </li>
                <li>
                  <span className="number--forth" />
                  <p> HORAS DE CONTEÚDO E NETWORKING</p>
                </li>
              </ul>
            </InfoSection>
          </main>
        </Wrapper>
      </Container>
    </LayoutStyled>
  );
};
