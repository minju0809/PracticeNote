import { useState } from "react";
import gymList from "../json/GymData";

const FindGym = () => {
  const [findValue, setFindValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  return (
    <div className="findGym">
      <h2>FindGym</h2>
      <input
        placeholder="지역 or 체육관 이름 입력"
        value={findValue}
        onChange={(e) => setFindValue(e.target.value)}
      ></input>
      <button
        onClick={() => {
          setSearchResult(
            gymList.filter((gym) => gym.name.includes(findValue)),
            console.log(findValue)
          );
        }}
      >
        검색
      </button>
      <ul>
        {searchResult.length > 0
          ? searchResult.map((result, index) => (
              <li key={index} onClick={() => window.open(result.link)}>
                {result.name}
              </li>
            ))
          : gymList.map((gym, index) => (
              <li key={index} onClick={() => window.open(gym.link)}>
                {gym.name}
              </li>
            ))}
      </ul>
    </div>
  );
};

export default FindGym;
