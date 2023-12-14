import s from "./styles.module.sass";

import Like from "../../assets/like.png";
import Repeat from "../../assets/repeat.png";
import Back from "../../assets/backMusic.png";
import Play from "../../assets/buttonPlay.png";
import Next from "../../assets/nextMusic.png";
import Circular from "../../assets/rotateMusic.png";
import Volume from "../../assets/volume.png";
import Minimize from "../../assets/minimize.png";

const MusicBar = () => {
  return (
    <div className={s.backgroundMusic}>
      <div>
        <span>
          <img src={Like} alt="botão de like" />
        </span>
        <div>
          <h4>Warriors</h4>
          <p>RIOT GAMES FT. IMAGINE DRAGONS</p>
        </div>
        <div>
          <div>
            <img src={Repeat} alt="botão de repetir" />
            <div>
              <img src={Back} alt="botão de voltar a musica" />
              <img src={Play} alt="botão de iniciar a musica" />
              <img src={Next} alt="botão de avançar a musica" />
            </div>
            <img src={Circular} alt="botão de circular todas as musicas" />
          </div>
          <div>
            <img src={Volume} alt="botão de volume" />
            <img src={Minimize} alt="botão de minimizar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicBar;
