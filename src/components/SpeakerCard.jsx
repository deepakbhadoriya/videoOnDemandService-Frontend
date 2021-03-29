import React from 'react';

import SpeakerCardStyle from './SpeakerCard.module.css';

const SpeakerCard = ({ className, speaker: { name, highestEdu, imageUrl } }) => (
  <div className={SpeakerCardStyle.flexRow + className}>
    <div
      className={SpeakerCardStyle.speakerImage}
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div>
      <div className={SpeakerCardStyle.speakerTitle}>{name || 'Name'}</div>
      <div className={SpeakerCardStyle.speakerTitle}>{highestEdu || 'Education'}</div>
    </div>
  </div>
);

export default SpeakerCard;
