import React from "react";

const AUTH_URL ="https://accounts.zoho.in/oauth/v2/auth?access_type=offline&prompt=consent&response_type=code&client_id=1000.K6DD7YLQ8EINJF2D7FUSX7C28E4YVN&scope=ZohoCRM.users.ALL&redirect_uri=http://localhost:3000";


export default function Login() {
  return (
      <a href={AUTH_URL}>Login</a>
  )
}
