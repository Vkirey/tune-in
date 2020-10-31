import React from 'react';
import Player from './components/Player';
import RadioView from './components/RadioView';
import ControlsMenu from './components/ControlsMenu';
import styled from 'styled-components';

const RadioApp = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
width: 100vw;
color: #025600
background-color: #ffffff;
background-image: linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%);
`;

function App() {
  return (
    <RadioApp>
      <ControlsMenu />
      <RadioView />
      <Player />
    </RadioApp>
  );
}

export default App;
