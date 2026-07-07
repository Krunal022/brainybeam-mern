import React from "react";
import Button from "./Button";

const App = () => {
  return (
    <>
      <h1>App Component!</h1>
      <Button color="yellow" name="Create" />
      <Button color="green" name="Read" />
      <Button color="blue" name="Update" />
      <Button color="pink" name="Delete" />
    </>
  );
};

export default App;
