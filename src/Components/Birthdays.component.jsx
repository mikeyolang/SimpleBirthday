import React from "react";
import "./birthday.style.css";
const Birthday = ({ people }) => {
  return (
    <>
      <div>
        {people.map((person) => {
          const { id, name, image, age } = person;
          return (
            <article className="person" key={id}>
              <img src={image} alt={name} />
              <div className="name">
                <h4>{name}</h4>
                <p>{age} years</p>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
};

export default Birthday;
