import React, { useState } from 'react';
import EditUserProfile from '../../../components/EditUserProfile/EditUserProfile';

const UserProfileTab = () => {
  const [user] = useState({
    firstname: 'Gifty',
    lastname: 'Osei',
    phone: '+233548086391',
    email: 'example@email.com',
  });

  // const handleSaveUpdate = () => {
  //   console.log('This is function to save the update');
  // };

  return (
	<EditUserProfile user={user} />
  );
};

export default UserProfileTab;
