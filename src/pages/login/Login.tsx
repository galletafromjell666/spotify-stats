import { useEffect, useState } from "react";
import { getHash } from "../../utils/getHash";
const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;
const AUTH_ENDPOINT = import.meta.env.VITE_AUTH_ENDPOINT;

const Login = () => {
  const [token, setToken] = useState<string>("");
  useEffect(() => {
    getHash() && setToken(getHash().access_token);
    console.log(getHash());
    console.log(token);
  }, [token]);

  return (
    <>
      <a
        href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token`}
      >
        Login to Spotify
      </a>
      <h1>The access token is</h1>
      {token && <p>{token}</p>}
    </>
  );
};

export default Login;
