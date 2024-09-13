"use client";
import React, { useEffect, useState } from "react";
import Card from "./Card";

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

const DisplayDetailsSection = () => {
  const [data, setData] = useState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Function to filter the data based on the search query
  const filteredData = data.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex justify-center items-center flex-col">
      <input
        type="text"
        placeholder="Search by name or email"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="p-2 border border-gray-400 rounded mb-4"
      />
      <div className="w-[50%]">
        {filteredData.length > 0 ? (
          filteredData.map((user) => (
            <Card
              key={user.id}
              name={user.name}
              email={user.email}
              phone={user.phone}
            />
          ))
        ) : (
          <p>No users found...</p>
        )}
      </div>
    </div>
  );
};

export default DisplayDetailsSection;
