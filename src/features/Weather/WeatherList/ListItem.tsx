import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { DELETE_WEATHER, REMOVE, selectWeather } from '../WeatherSlice';
import { WeatherType } from '../../../app/models';
import { ListButton } from './ListButton';
export const ListItem = ({ weather }: { weather: WeatherType }) => {
  const weatherSelector = useAppSelector(selectWeather);
  const dispatch = useAppDispatch();
  const deleteHandler = (id: number) => {
    dispatch(DELETE_WEATHER(id));
  };
  // https://codesandbox.io/s/github/reduxjs/redux-fundamentals-example-app/tree/checkpoint-9-createSlice/?from-embed=&file=/src/features/todos/TodoListItem.js
  return (
    <div className="ListItem">
      <li className="city">{weather.name}</li>
      <ListButton
        action="Delete"
        onClick={() => {
          // console.log(weather.id);
          console.log(weather.index);
          deleteHandler(weather.index);
        }}
      />
    </div>
  );
};
