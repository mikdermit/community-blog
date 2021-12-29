import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="container">
      <p>Page not found!</p>
      <p>
        <Link to='/'>Return Home</Link>
      </p>
    </main>
  ) 
}