import React from "react";

interface CardProps {
  name: string;
  email: string;
  phone: string;
}

const Card: React.FC<CardProps> = ({ name, email, phone }) => {
  return (
    <div className="border border-slate-200 rounded-lg m-2 p-4">
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
    </div>
  );
};

export default Card;
