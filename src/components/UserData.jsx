import React, { useState, useEffect } from "react";
import Content from "./Content";
import Loading from "./Loading";
import Error from "./Error";

const UserData = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    const getUsersData = async () => {
        try{
            const response = await fetch("https://api.github.com/users");
            setUsers(await response.json());
            setIsLoading(false);
        }catch(error){
            setIsLoading(false);
            setError(true);
            console.log(error);
        }
    }

    useEffect(() => {
        getUsersData();
    }, []);

    if(isLoading){
        return <Loading />
    }
    if(error){
        return <Error />
    }

  return (
    <>
      <Content 
          users={users}
      />
    </>
  );
}

export default UserData;
