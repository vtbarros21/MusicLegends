import React from "react";
import s from "./styles.module.sass";
import MusicBar from "../../components/musicBar"

import Lol from "../../assets/League of Legends Logo.svg";
import Prev from "../../assets/Prev.png";
import Next from "../../assets/Next.png";

const index = () => {
  return (
    <>
      <section className={s.backgroundImage}>
        <div className={s.filter}>
          <div>
            <span>
              <img src={Lol} alt="Logo League of Legends" />
            </span>
            <h4>RIOT GAMES</h4>
          </div>
        </div>
        <div className={s.allignButton}>
          <div className={s.buttonPrev}>
            <img src={Prev} alt="icon de prev" />
          </div>
          <p>1/20</p>
          <div className={s.buttonNext}>
            <img src={Next} alt="icon de prev" />
          </div>
        </div>
        <MusicBar />
      </section>
    </>
  );
};

export default index;
