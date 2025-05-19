import React from 'react';
import { useGetUserProfileQuery } from '../../Store/feature/apiSlice';


const Profile = () => {
  const { data, error, isLoading } = useGetUserProfileQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>{data.name}</h2>
      <p>{data.email}</p>
    </div>
  );
};

export default Profile;
