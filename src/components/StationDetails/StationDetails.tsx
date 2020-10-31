import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import StarRatingComponent from 'react-star-rating-component';
import { getSelectedStation } from '../../redux/selectors';

const StationDetailsBlock = styled.div`
flex: 1;
padding: 4px 10px;
border-left: 1px solid gray;
`;

const Name = styled.div`
font-size: 26px;
font-weight: bold;
display: inline-block;
margin-right: 10px;
`;

const Image = styled.img`
display: block;
height: 150px;
`;

const Description = styled.div`
margin-top: 10px;
font-style: italic;`;

function StationDetails() {
  const selectedRadioStationStream = useSelector(getSelectedStation);

  return selectedRadioStationStream ? (
    <StationDetailsBlock>
      <Name>{selectedRadioStationStream.name}</Name>
      <StarRatingComponent
        name="station-rating"
        starCount={5}
        value={selectedRadioStationStream.popularity} 
      />
      <Image src={selectedRadioStationStream.imgUrl} />
      <Description>{selectedRadioStationStream.description}</Description>
    </StationDetailsBlock>
  ) : null;
}

export default StationDetails;
