import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { getHash } from "../../utils/getHash";
const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;
const AUTH_ENDPOINT = import.meta.env.VITE_AUTH_ENDPOINT;

const Login = () => {
  const [token, setToken] = useState<string>("");
  useEffect(() => {
    const { access_token, expires_in } = getHash();
    console.log(getHash());
    access_token &&
      setToken(() => {
        Cookies.set("access_token", access_token, {
          expires: Number(expires_in),
        });
        return access_token;
      });
  }, [token]);

  return (
    <>
      <a
        href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=user-top-read&response_type=token`}
      >
        Login to Spotify
      </a>
      <h1>The access token is</h1>
      {token && <p>{token}</p>}
    </>
  );
};

export default Login;
