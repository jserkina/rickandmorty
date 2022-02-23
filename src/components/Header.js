import React, { useState } from "react";
import FacebookLogin from 'react-facebook-login';
import logo from "../logoRM.png";

const Header = () => {
  const [login, setLogin] = useState(false);
  const [data, setData] = useState({});
  const [picture, setPicture] = useState('');

   const responseFacebook = (response) => {
     console.log(response);
     setData(response);
     setPicture(response.picture.data.url);
     if (response.accessToken) {
       setLogin(true);
     } else {
       setLogin(false);
     }
   }

  return (
    <header>
      <div className="flex justify-center">
        {!login &&
          <FacebookLogin
            appId="364320668607224"
            fields="name,email,picture"
            scope="public_profile,user_friends"
            callback={responseFacebook}
            cssClass="bg-transparent text-2xl"
          />
        }
        {login &&
          <div className="flex items-center mr-4">
            <img src={picture} alt={data.name} className="rounded mr-4" />
            <p>{data.name}</p>
          </div>
        }
      </div>
      <div className="flex flex-col items-center w-full">
        <img src={logo} alt="logo rick and morty" className="sm:max-w-2xl animate-pulse"/>
      </div>
    </header>
  )
}

export default Header;
