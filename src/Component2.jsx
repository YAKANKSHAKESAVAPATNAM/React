import React, { useContext } from 'react';
import { UserContext } from './UseContext';
const Component2 = () => {
    const { user } = useContext(UserContext);
    return <h2>User Name: - {user.name}</h2>;
};
export default Component2;