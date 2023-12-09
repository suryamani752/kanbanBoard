// Install necessary dependencies: axios, react-scripts, etc.

import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import Status from "./Status";
import Priority from "./Priority";

const Kanban = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [selected, setSelected] = useState("Display");

  // fetch api
  const fetchApi = async () => {
    try {
      const res = await axios.get(
        "https://api.quicksell.co/v1/internal/frontend-assignment"
      );
      if (res) {
        JSON.stringify(res);
        setTickets(res.data.tickets);
        // console.log(res.data.tickets);
        setUsers(res.data.users);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div>
      <select
        value={selected}
        onChange={(e) => handleChange(e)}
        className="ToogleButton"
      >
        <option className="optionButton">Display</option>
        <option className="optionButton">Status</option>
        <option className="optionButton">Priority</option>
      </select>

      {selected == "Display" ? (
        <>
          {users.map((user) => (
            <Card userName={user.name} tickets={tickets} userId={user.id} />
          ))}
        </>
      ) : null}
      {selected == "Status" ? <Status tickets={tickets} /> : null}
      {selected == "Priority" ? <Priority tickets={tickets} /> : null}
    </div>
  );
};

export default Kanban;
