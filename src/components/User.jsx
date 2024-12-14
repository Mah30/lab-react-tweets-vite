import React from 'react';

const User = (tweet) => {
    return ( 
        <span className="user">
            <span className="name">{tweet.user.name}</span>
            <span className="handle">@{tweet.user.handle}</span>
          </span>
     );
}
 
export default User;