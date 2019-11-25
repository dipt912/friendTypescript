import React from 'react';
type Props = {
  children?: JSX.Element
}

const Scroll = (props:Props) => {
  return (
    <div style={{ overflow: 'scroll', height: '800px'}}>
      {props.children}
    </div>
  );
};

export default Scroll;