import React from "react";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {

  const users = [
    { userName: "Fer_N013", name: "Fer Navarro", initialIsFollowing: true },
    { userName: "midudev", name: "Miguel Ángel Durán", initialIsFollowing: false },
    { userName: "jonmircha", name: "Jonathan Mircha", initialIsFollowing: false },
    { userName: "pepe", name: "Pepe Pérez", initialIsFollowing: true },
  ];

  return (
    <section className="App">
      {
        users.map(({ userName, name, initialIsFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            name={name}
            initialIsFollowing={initialIsFollowing}
          />
        ))
      }
    </section>
  );
}
