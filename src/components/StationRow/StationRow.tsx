import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { IStation } from '../../types';
import { useDispatch } from 'react-redux';
import StarRatingComponent from 'react-star-rating-component';
import { SELECT_STATION, ADD_TAG_FILTER } from '../../redux/stations/types';

const StationDetailsBlock = styled.div`
padding: 11px;
border: 1px solid gray;
border-top: none;
border-right: none;
cursor: pointer;

&:hover { background: #d7e1ec; }
`;

const StationName = styled.div`
font-size: 18px;
font-weight: 500;
`;

const TagsList = styled.div`
font-style: italic;
font-size: 13px;
`;

const Tag = styled.div`
display: inline-block;
margin: 0 7px;
cursor: pointer;

&:hover { color: green }
`;

interface StationDetailsProps {
    data: IStation
  }

function StationDetails({ data } :StationDetailsProps) {
    const dispatch = useDispatch();

    const selectStation = useCallback(() => {
        dispatch({ type: SELECT_STATION, payload: data.id })
    }, [dispatch])

    const selectTag = useCallback((tag) => {
        dispatch({ type: ADD_TAG_FILTER, payload: tag });
    }, [])

    const generateTags = useCallback(() => {
        return data.tags.map((tag, index) => 
            <Tag 
                key={'currtag'+index}
                onClick={(e: React.MouseEvent<HTMLDivElement>) => { 
                    e.stopPropagation(); 
                    return selectTag(tag)
                }}>
                {tag}
            </Tag>)
    }, [data.tags, selectTag])

    return (
        <StationDetailsBlock onClick={selectStation}>
            <StationName>{data.name}</StationName>
            <StarRatingComponent
                name="station-rating"
                starCount={5}
                value={data.popularity} 
            />
            <TagsList>{generateTags()}</TagsList>
        </StationDetailsBlock>
    );
}

export default StationDetails;
