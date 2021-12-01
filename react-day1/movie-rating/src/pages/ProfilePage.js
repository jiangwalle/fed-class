import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ProfilePage = () => {
  const [profile, setProfile] = useState({});

  useEffect(async () => {
    const userId = localStorage.getItem('doumiao-user-id');
    const res = await axios.get(`http://localhost:5000/user/${userId}/profile`);
    console.log(`res: `, res);
    setProfile(res.data);
  }, []);

  const { firstName, lastName, gender, username } = profile;

  return (
    <div>
      <h2>个人信息</h2>
      <div>
        <p>姓： {lastName}</p>
        <p>名： {firstName}</p>
        <p>用户名： {username}</p>
        <p>性别： {gender}</p>
      </div>
    </div>
  )
}

export default ProfilePage;
