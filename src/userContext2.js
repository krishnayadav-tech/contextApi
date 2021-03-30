import React from 'react';
const userContext2 = React.createContext("krikalyt@outlook.in"); // default value can be passed in constructor
const UserProvider = userContext2.Provider;
const UserConsumer = userContext2.Consumer;
export {UserProvider,UserConsumer};
export default userContext2;