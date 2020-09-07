import React from "react";
import { useHistory } from "react-router-dom";
import { Container } from "@material-ui/core";

const Home = () => {
  let history = useHistory();

  const handleClick = () => {
    history.push("/test");
  };
  return (
    <>
      <Container>
        <button onClick={handleClick}>go to test</button>
      </Container>
    </>
  );
};

export default Home;
