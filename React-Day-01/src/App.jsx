import React from "react";
import Button from "./Button";
import Card from "./Card";
import Navbar from "./Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <h1>App Component!</h1>
      <p>customize button component add buttonName & color using props..</p>

      <Button color="yellow" name="Create" />
      <Button color="green" name="Read" />
      <Button color="blue" name="Update" />
      <Button color="pink" name="Delete" />
      <br />
      <hr />
      <br />
      <p>
        customize Card component add cardName,image & description using props..
      </p>
      <div className="card-container">
        <Card
          image="https://avatars.githubusercontent.com/u/140624400?v=4"
          title="Krunal W"
          desc="Hi, I'm Krunal, a passionate developer currently learning React and modern web development."
        />
        <Card
          image="https://images.unsplash.com/photo-1622375734599-925cb5328554?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Ayrus Hill"
          desc="Mujer con camisa blanca que lleva una tabla de surf azul caminando en la playa durante el día."
        />
        <Card
          image="https://images.unsplash.com/photo-1783095593983-7936ec02f205?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Godfred Kwakye"
          desc="A creative Photographer who is into fine art, editorial, street ,conceptual and fashion."
        />
      </div>
    </>
  );
};

export default App;
