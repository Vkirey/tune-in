import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { IStation } from '../../types';
import StationRow from '../StationRow';

const RadioListBlock = styled.div`
flex: 1;
overflow:scroll;
cursor: pointer;
`;


function RadioList() {
  const stationsList = useSelector(({ radio }:any) => {
    let stations = radio.stations;
    if(radio.tags.length) {
      stations = radio.stations.filter((st: IStation) => st.tags.filter(i => radio.tags.includes(i)).length > 0);
    }

    if(radio.searchTerm) {
      stations = stations.filter((st: IStation) => st.name.toLowerCase().includes(radio.searchTerm.toLowerCase()));
    }

    return stations;
  });

  return (
    <RadioListBlock>
      {stationsList.map((station: IStation, index: number) => <StationRow key={'station'+index} data={station} />)}
    </RadioListBlock>
  );
}

export default RadioList;
