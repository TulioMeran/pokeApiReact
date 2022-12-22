import { FC } from 'react';
import './index.css';
import pokeballImg from '../../assets/pokeball.png';

const PokeChip: FC<{ name: string; isFullSize?: boolean }> = ({
  name,
  isFullSize = false,
}) => {
  return (
    <div
      data-testid="poke-chip"
      className={`name ${isFullSize ? 'name-full-name' : ''} `}>
      <img src={pokeballImg} />
      <label> {name}</label>
      <img src={pokeballImg} />
    </div>
  );
};

export default PokeChip;
