import React from "react";

export default function Hero(props) {
  const { handleLogout } = props;
  return (
    <section className="hero">
      <nav>
        <h2>Hello Welcome</h2>
        <button onClick={handleLogout}>Logout</button>
      </nav>
    </section>
  );
}
