import React, { useEffect, useState } from 'react';
import './Profile.css';
import { IUser } from '../../domain/IUser';
import axios from 'axios';

const Profile: React.FC = () => {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const userId = localStorage.getItem('userId');
      if (!userId) {
                console.error('No user ID found');
                return;
            }
      
      try{
        const response = await axios.get(`http://localhost:9999/users/${userId}`)
        setUser(response.data);
      }catch(error){
        console.error('Failed to fetch profile data', error);
      }
    }

    fetchUser();
  }, []);

  if(!user) {
    return <div>Loading...</div>;
  }

  const { name, AvatarHeader } = user;
  const avatarUrl = AvatarHeader[0]?.avatarUrl;
  const headerUrl = AvatarHeader[0]?.headerUrl;

    return (
        <div className="profile-container">
            <div className="cover-photo">
                <img src={headerUrl} alt="Cover" />
            </div>
            <div className="avatar">
                <img src={avatarUrl} alt="Avatar" />
            </div>
            <h1>{name}</h1>
        </div>
    );
}

export default Profile;
