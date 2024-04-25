import React from 'react';

const userDetails = ({ user }) => {
  return (
    <div>
      <h2>User Details</h2>
      <p>User ID: {user.userID}</p>
      <p>User Name: {user.name}</p>
      <p>User IP: {user.IP}</p>
      <p>User AppID: {user.AppID}</p>
    </div>
  );
};

export default IPDetails;