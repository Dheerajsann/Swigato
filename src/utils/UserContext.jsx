import { createContext } from "react";

const UserContext = createContext({
  users: {
    name: "dummy name",
    email: "xyz@gmail.com",
  },
});


UserContext.displayName = 'UserContext';

export default UserContext;