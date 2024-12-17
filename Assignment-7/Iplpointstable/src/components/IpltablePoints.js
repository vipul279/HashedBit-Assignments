import React, { useEffect, useState } from 'react';


export default function Ipltable() {
  
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://my-json-server.typicode.com/FreSauce/json-ipl/data"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data.");
        }
        const data = await response.json();
        console.log("Fetched Data:", data); 
        const sortedData = data.sort((a, b) => a.NRR - b.NRR);
        setTeams(sortedData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ margin: "20px" }}>
      <h1>IPL 2022 Points Table</h1>
      <table
        border="1"
        style={{
          width: "100%",
          borderCollapse: "collapse",
          textAlign: "center",
        }}
      >
        <thead>
          <tr>
            <th>Position</th>
            <th>Team</th>
            <th>Matches</th>
            <th>Wins</th>
            <th>Losses</th>
            <th>Points</th>
            <th>NRR</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => (
            <tr key={team.id}>
              <td>{index + 1}</td>
              <td>{team.Team || "N/A"}</td>
              <td>{team.Matches || "N/A"}</td>
              <td>{team.Won || "N/A"}</td>
              <td>{team.Lost || "N/A"}</td>
              <td>{team.Points || "N/A"}</td>
              <td>{team.NRR !== undefined ? team.NRR.toFixed(2) : "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );
  };