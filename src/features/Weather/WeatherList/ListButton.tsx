import React from 'react';

export const ListButton = (props: any) => {
  return (
    <button className="ListButton" onClick={props.onClick}>
      {props.action}
    </button>
  );
};
