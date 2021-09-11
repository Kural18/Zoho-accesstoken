import React from 'react';
import axios from "axios";
import { useState } from "react";

export default function Dashboard({code}) {

    const baseUrl = `https://accounts.zoho.in/oauth/v2/token?code=${code}&client_id=1000.K6DD7YLQ8EINJF2D7FUSX7C28E4YVN&client_secret=9476f920c24fec99f6ad0585e9e3360ba83a2419ad&grant_type=authorization_code&redirect_uri=http://localhost:3000`;

    const [data, setdata] = useState("");

    axios.post(baseUrl).then((response) => {
        setdata(response.data);
      })
      
    return (
        <p>{data}</p>
    )
  }