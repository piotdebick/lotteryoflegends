import React from 'react';
import Champion from '../champion-components/Champion';

const ChampionDisplay = props => (
      <ul className='list-body list-body-display'>
        {
          props.champions.map((champ) => (
            <li key={champ._id || champ.id} className='list-item'>
                <Champion name={champ.key || champ.champ} />
            </li>
          ))
        }
      </ul>
);

export default ChampionDisplay;
