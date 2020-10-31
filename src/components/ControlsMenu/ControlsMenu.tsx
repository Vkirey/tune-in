import React, { useEffect, useState, useCallback, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH_STATIONS, SET_SEARCH_TERM, REMOVE_TAG_FILTER } from '../../redux/stations/types';
import { getTagsSelector } from '../../redux/selectors';
import styled from 'styled-components';

const ControlsBlock = styled.div`
flex: 0;
padding: 20px;
border-bottom: 1px solid gray;
`;

const TagsList = styled.div`
display: inline-block;`;

const Button = styled.button`
background-color: #86c5da;
border: none;
color: white;
padding: 12px 30px;
text-align: center;
font-size: 16px;
opacity: 0.6;
transition: 0.3s;
display: inline-block;
text-decoration: none;
cursor: pointer;
float:right;

&:hover {opacity: 1}
`;
const Input = styled.input`
font-family: 'Roboto', sans-serif;
color: #333;
font-size: 1.2rem;
padding: 0.5rem 1rem;
border-radius: 0.2rem;
background-color: rgb(255, 255, 255);
border: none;
width: 45%;
display: inline-block;
transition: all 0.3s;
`;
const TagsLabel = styled.label`
display: inline-block;
`;
const RemoveTagIcon = styled.span`
margin-left: 9px;
font-size: 14px;
cursor: pointer;
&:hover { color: red };
`;

const TagElement = styled.div`
display: inline-block;
margin: 0 10px;
background: lightblue;
padding: 7px 16px;
border-radius: 21px;
`;

function ControlsMenu() {
  const dispatch = useDispatch();

  const tags = useSelector(getTagsSelector)

  useEffect(() => {
    dispatch({ type: FETCH_STATIONS });
  }, [])

  const changeSearchTerm = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch({ type: SET_SEARCH_TERM, payload: e.target.value});
  }, [dispatch]);

  const removeTag = useCallback((tag: string) => {
    dispatch({ type: REMOVE_TAG_FILTER, payload: tag })
  }, [dispatch]);

  const refreshStations = useCallback(() => {
    dispatch({ type: FETCH_STATIONS })
  }, [dispatch])

  const generateTags = useCallback((): any | null =>
    tags ? tags.map((tag: string, index: number) => 
      <TagElement key={'tag'+index}>
        <label>{tag}</label>
        <RemoveTagIcon onClick={() => removeTag(tag)}>X</RemoveTagIcon>
      </TagElement>
    ) : null, [tags]);

  return (
    <ControlsBlock>
      <Input onChange={changeSearchTerm} type="search" placeholder="Search..." />
      <Button onClick={refreshStations}>Refresh</Button>
      {tags && tags.length ? <>
        <br/>
        <br/>
        <TagsLabel>Tags:</TagsLabel>
        <TagsList>
            {generateTags()}
        </TagsList>
      </> : null}
    </ControlsBlock>
  );
}

export default ControlsMenu;
