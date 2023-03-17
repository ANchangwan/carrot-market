import React, { useState } from "react";

export default function Forms() {
  const [username, setUsername] = useState("");
  const onChangeUsername = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setUsername(value);
  };
  return (
    <form>
      <input
        onChange={onChangeUsername}
        value={username}
        type="text"
        placeholder="Username"
        minLength={5}
      />
      <input type="email" value={5} placeholder="email" />
      <input type="password" placeholder="password" />
      <button type="submit">제출</button>
    </form>
  );
}
