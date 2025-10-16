import React, { useContext } from 'react';
import { UserContext } from './UseContext';
const Component1 = () => {
    const { user } = useContext(UserContext);
    return <h2>UserName :- {user.name}</h2>;
};
export default Component1;