import cn from 'classnames';
import Proptypes from "prop-types";
import Heading from "../Heading";
import Text from "../Text";
import style from './CharacterCard.module.scss';
import {ReactComponent as Like } from './assets/heart.svg';

const CharacterCard = ({
  id,
  name,
  description,
  src,
  humanName,
  isLike,
  onLikeClick,
}) => {

  const handleLikeClick = () => onLikeClick(id);

  return (
    <div className={style.root}>
      <img
        src={src}
        alt={name}
        className={style.cardImage}
        id={id}
      />
      <div className={style.cardDetails}>
        <Heading level={2} className={style.cardName}>
          {name}
        </Heading>
        <Heading level={4} className={style.cardHumanName}>
          {humanName}
        </Heading>
        <Text className={style.cardDescription}>
          {description}
        </Text>

        <div className={style.cardMeta}>
          <div
            className={cn(style.like, {[style.liked]: isLike})}
            onClick={handleLikeClick}
          >
            <Like />
          </div>
          <div className={style.readBio}>
            <a href="/">Read bio</a>
          </div>
        </div>
      </div>
    </div>
  )
};

CharacterCard.defaultProps = {
  isLike: false,
};

CharacterCard.propTypes = {
  id: Proptypes.number,
  name: Proptypes.string,
  description: Proptypes.string,
  src: Proptypes.string,
  humanName: Proptypes.string,
  isLike: Proptypes.bool,
  onLikeClick: Proptypes.func,
};

export default CharacterCard;