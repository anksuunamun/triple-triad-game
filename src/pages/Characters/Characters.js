import { useState } from "react";
import Container from "../../components/Container";
import CharacterCard from "../../components/CharacterCard";
import style from "./Characters.module.scss";
import { CHARACTERS } from "../../constants/characters";

const Characters = () => {
  const [characters, setCharacters] = useState(CHARACTERS);

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

  return (
    <Container className={style.root}>
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
          />
        ))}
      </div>
    </Container>
  )
};

export default Characters;
