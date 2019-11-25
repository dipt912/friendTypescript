import React from 'react';
import { Link } from 'react-router-dom'

interface CardProps {
  name: string,
  email: string,
  id: number
}

const Card: React.SFC<CardProps> = ({ name, email, id }) => {
  const path = `/user/${id}`
  return (
    <Link to={path}>
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      {/* <Avatar alt="Remy Sharp" src={`https://robohash.org/${id}?size=200x200`} /> */}
        <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
    </Link>
  );
}

export default Card;
