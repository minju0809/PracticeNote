import { useState } from "react";
import movieList from "../json/MovieData";

const FindMovie = () => {
  const [selectGenre, setSelectGenre] = useState("");
  const genres = [
    "장르",
    "액션",
    "멜로",
    "코미디",
    "로맨틱 코미디",
    "모험",
    "공상과학",
    "판타지",
    "다크 판타지",
    "드라마",
    "청춘",
    "탐정",
    "전쟁",
    "공포",
    "미스터리",
    "스릴러",
    "느와르",
    "갱스터",
    "서부극",
    "가톨릭",
    "피카레스크",
  ];

  const filterMovie = () => {
    const movieFiltered = movieList.filter((info) => {
      return info.genre.includes(selectGenre);
    });
    console.log("filter", movieFiltered, selectGenre);
    if (movieFiltered.length) {
      return movieFiltered.map((info, idx) => <div key={idx} onClick={() => window.open(info.link)}>{info.name}</div>);
    }
  };

  const onSelect = (s) => {
    const filtered = movieList.filter((movie) =>
      movie.genre.includes(s.target.value)
    );
    console.log(filtered);
    setSelectGenre(s.target.value);
  };

  console.log(selectGenre);

  return (
    <>
      <h2>FindMovie</h2>
      <select onChange={onSelect}>
        {genres.map((genre, idx) => (
          <option key={idx}>{genre}</option>
        ))}
      </select>
      <div className="findMovie">{filterMovie()}</div>
    </>
  );
};

export default FindMovie;
