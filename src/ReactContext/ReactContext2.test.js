import {render, screen} from "@testing-library/react";
//import {UserGreeter, UserContext} from "./ReactContext2"
import {UserGreeter } from "./ReactContext2"
import * as React from 'react'
const UserContext = React.createContext();

test("UserGreeter salutes an anonymous user", () => {
  render(
    <UserContext.Provider value={null}>
      <UserGreeter />
    </UserContext.Provider>
  );
  expect(screen.getByText("Hello stranger!")).toBeInTheDocument();
});

test.skip("UserGreeter salutes a user", () => {
  const user = { name: "Giorgio" };
  console.log(user.name)
  render(
    <UserContext.Provider value={user}>
      <UserGreeter />
    </UserContext.Provider>
  );
  expect(screen.getByText(new RegExp(`Hello ${user.name}!`))).toBeInTheDocument();
});