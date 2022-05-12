import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../../components/Container";
import CharacterCard from "../../components/CharacterCard";
import style from "./Characters.module.scss";
import { CHARACTERS } from "../../constants/characters";

const Characters = () => {
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
            onReadBioClick={handleSelectCharacter}
          />
        ))}
      </div>
    </Container>
  )
};

export default Characters;
