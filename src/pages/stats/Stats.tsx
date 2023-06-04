import Cookies from "js-cookie";
import { useState } from "react";

const Stats = () => {
  const [topTracks, setTopTracks] = useState({});
  const handleButton = async () => {
    const resp = await await fetch(
      "https://api.spotify.com/v1/me/top/tracks?time_range=short_term",
      {
        credentials: "include",
        headers: {
          Authorization: `Bearer ${Cookies.get("access_token")}`,
        },
        method: "GET",
      }
    );
    const respJson = await resp.json();
    setTopTracks(respJson);
  };
  return (
    <div>
      <button onClick={handleButton}>FETCH uwu</button>
      {topTracks && <pre>{JSON.stringify(topTracks)}</pre>}
    </div>
  );
};

export default Stats;
