import React from 'react';

const Champion = props => (
    <img
        className='list-item__display'
        type="image"
        src={`http://ddragon.leagueoflegends.com/cdn/7.17.1/img/champion/${props.name}.png`}
      />
);

export default Champion;
