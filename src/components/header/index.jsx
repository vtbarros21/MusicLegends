import React from "react";
import s from "./styles.module.sass";
import ImagePerfil from "./../../assets/imgPerfil.png"

const Header = () => {
  return (
    <header className={s.Header}>
      <div>
        <nav>
          <ul>
            <li>Inicio</li>
            <li>Busca</li>
            <li>Suas Bibliotecas</li>
          </ul>
        </nav>
      </div>
      <div>
        <h1>MUSIC LEGENDS</h1>
      </div>
      <div>
        <p>
          Login
          <span>
            <img src={ImagePerfil} alt="imagem de login" />
          </span>
        </p>
      </div>
    </header>
  );
};

export default Header;
