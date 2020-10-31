import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { getSelectedStation } from '../../redux/selectors';

const PlayerBlock = styled.div`
flex: 0;
`;

const Audio = styled.audio`
width: 100%;
`;

function Player() {
  const selectedRadioStationStream = useSelector(getSelectedStation);

  return selectedRadioStationStream ? (
    <PlayerBlock>
      <Audio
        src={selectedRadioStationStream.streamUrl}
        autoPlay
        controls
      />
    </PlayerBlock>
  ) : null;
}

export default Player;
