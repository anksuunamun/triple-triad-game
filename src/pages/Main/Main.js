import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "../../components/Slider";
import Container from "../../components/Container";
import Heading from "../../components/Heading";
import CharacterCard from "../../components/CharacterCard";
import style from "./Main.module.scss";
import { CHARACTERS } from "../../constants/characters";

const Main = () => {
  const [characters, setCharacters] = useState(CHARACTERS);

  const navigate = useNavigate();

  const handleLikeClick = (characterId) => {
    setCharacters((prevCharacters) =>
      prevCharacters.map(character => {
          return (character.id === characterId)
            ? {
              ...character,
              isLike: !character.isLike,
            }
            : character
        }
      )
    );
  };

  const handleSelectCharacter = (id) => {
    navigate(`/bio/${id}`);
  };

  return (
    <>
      <Slider/>
      <div className={style.cardSection}>
        <Container>
          <div className={style.cardTitle}>
            <Heading level={1} backLine>Marvel Cards</Heading>
            <Heading level={2}>Collect your best five</Heading>
          </div>
          <div className={style.cardWrap}>
            {characters.map(character => (
              <CharacterCard
                key={character.id}
                id={character.id}
                name={character.name}
                description={character.description}
                src={character.thumbnail.path}
                humanName={character.humanName}
                isLike={character.isLike}
                onLikeClick={handleLikeClick}
                onReadBioClick={handleSelectCharacter}
              />
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Main;