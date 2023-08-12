import React, { useState } from 'react'
import Reactotron from 'reactotron-react-native';


export const UserContext = React.createContext();


export const UserProvider = ({ children }) => {
    const [isUserLogged, setIsUserLogged] = useState(false);

    const updateLoginStatus = (status) => {
        Reactotron.log({status});
        setIsUserLogged(status)
    }

    return (
        <UserContext.Provider value={{ isUserLogged, updateLoginStatus }}>
            {children}
        </UserContext.Provider>
    );
};
