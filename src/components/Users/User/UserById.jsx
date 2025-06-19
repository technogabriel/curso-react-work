import React from 'react';
import {  useParams } from 'react-router-dom';
import User from './User';

const UserById = () => {
  const { userId } = useParams();
  
  return( 
  <>
  <User userId={userId} />
  </>

  )
};

export default UserById;
