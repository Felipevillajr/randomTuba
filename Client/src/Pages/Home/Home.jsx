import React from "react";
import "./Home.scss";
import Button from "@material-ui/core/Button";

export default function Home() {
  return (
    <div className="home__body">
      <Button variant="contained" color="secondary">
        Home
      </Button>
    </div>
  );
}
