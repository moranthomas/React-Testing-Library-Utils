const UserContext = React.createContext();
import * as React from 'react'

function ReactContext2() {

  const user = getUserOrMaybeNot();

  return (
    <UserContext.Provider value={user}>
      <UserGreeter />
    </UserContext.Provider>
  );
}

function UserGreeter() {
  const user = React.useContext(UserContext);

  if (!user) return "Hello stranger!";
    return `Hello ${user.name}!`;
}

export { UserGreeter };
