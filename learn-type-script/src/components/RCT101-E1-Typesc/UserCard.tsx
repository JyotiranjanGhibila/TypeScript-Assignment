import React, { memo, useState } from "react";

type UsersProps = {
  name: string;
  avatar: string;
  posts: number;
  followers: number;
  address: string;
};

const UserCard = ({ name, avatar, posts, followers, address }: UsersProps) => {
  const [toggle,setToggle] = useState(false)

  const handleToggle=()=>{
    setToggle(!toggle)
  }
  return (
    <div>
      <img src={avatar} alt="x-men" style={{ width: "40%" }} />
      <h2>{name}</h2>
      <p>{address}</p>
      <p>Posts {posts}</p>
      <p>followers {followers}</p>
      <button onClick={handleToggle}>{toggle?"Follow":"following"}</button>
    </div>
  );
};

export default memo(UserCard);
