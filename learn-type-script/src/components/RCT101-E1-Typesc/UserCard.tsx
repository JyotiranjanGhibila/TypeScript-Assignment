import React, { memo, useState } from "react";
import { Users } from "./Users";
type UsersProps = {
  name: string;
  avatar: string;
  posts: number;
  followers: number;
  address: string;
};

const UserCard = ({ name, avatar, posts, followers, address }: UsersProps) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ display: "flex", flexDirection: "column", width: "auto" }}>
        <img src={avatar} alt="x-men" style={{ width: "20%" }} />
        <p>{name}</p>
        <p>{address}</p>
        <p>Posts {posts}</p>
        <p>followers {followers}</p>
        <button onClick={handleToggle}>
          {toggle ? "Follow" : "following"}
        </button>
      </div>

      {Users?.map((el, i) => {
        return (
          <div key={el.id}>
            <img src={el.avatar} alt="x-men" style={{ width: "20%" }} />
            <h2>{el.name}</h2>
            <p>{el.address}</p>
            <p>Posts {posts}</p>
            <p>followers {el.followers}</p>
          </div>
        );
      })}
    </div>
  );
};

export default memo(UserCard);
