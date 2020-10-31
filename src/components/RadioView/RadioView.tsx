import React from 'react';
import StationDetails from '../StationDetails';
import RadioList from '../RadioList';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { getSelectedStation } from '../../redux/selectors';

const RadioViewBlock = styled.div`
flex: 1;
flex-direction: row;
display: flex;
overflow: hidden;
`;


function RadioView() {
    const selectedStation = useSelector(getSelectedStation);

    return (
        <RadioViewBlock>
            <RadioList />
            {selectedStation != null ? <StationDetails /> : null}
        </RadioViewBlock>
    );
}

export default RadioView;
