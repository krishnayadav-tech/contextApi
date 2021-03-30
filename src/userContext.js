import React from 'react';
const userContext = React.createContext("yadav_krishna@outlook.in"); // default value can be passed in constructor
const UserProvider = userContext.Provider;
const UserConsumer = userContext.Consumer;
export {UserProvider,UserConsumer};
export default userContext;