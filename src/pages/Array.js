const Array = () => {
  let fruits = ["사과", "바나나", "망고"];
  let newLength = fruits.unshift("딸기");
  console.log(newLength); // 4 (length로 표시 됨)
  let first = fruits[0];
  let last = fruits[fruits.length - 1];
  let pos = fruits.indexOf("바나나"); // [2]

  let vegetables = ["양배추", "순무", "무", "당근"];
  let vegetablesPos = 1; // vegetablesPos에서부터 삭제 시작
  let n = 2; // n개의 항목 제거
  let removedVegetables = vegetables.splice(vegetablesPos, n);
  console.log(removedVegetables); // (삭제된 아이템이 배열로 표시 됨)

  let shallowCopySpread = [...fruits]; // 전개 구문 '얕은 복사'
  let shallowCopySlice = fruits.slice(); // '얕은 복사'
  let deepCopy = JSON.parse(JSON.stringify(fruits)); // '깊은 복사'
  // '깊은 복사' - JSON.stringify() 사용하여 배열을 JSON 문자열로 변환 후,
  // JSON.parse() 로 다시 배열을 구성하는 것

  fruits[9] = "체리";
  console.log(fruits);
  console.log(Object.keys(fruits));

  fruits.length = 2; // (length 속성을 감소시키면 요소가 지워짐)
  console.log(Object.keys(fruits));

  let array1 = [1, 2, 3];
  let array1Reference = array1;
  array1[1] = 9;
  console.log(array1);
  console.log(array1Reference); // 결과 [1, 9, 3] 동일함(복사본 X)

  let board = [
    ["R", "N", "B", "Q", "K", "B", "N", "R"],
    ["P", "P", "P", "P", "P", "P", "P", "P"],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    ["p", "p", "p", "p", "p", "p", "p", "p"],
    ["r", "n", "b", "q", "k", "b", "n", "r"],
  ];

  console.log(board.join("\n") + "\n\n");

  board[4][4] = board[6][4];
  board[6][4] = " ";
  console.log(board.join("\n"));

  const values = [];
  for (let x = 0; x < 10; x++) {
    values.push([2 ** x, 2 * x ** 2]);
  }
  console.table(values);

  return (
    <>
      <h2>Array</h2>
      <div className="array_contents">
        <div className="left">
          <div>
            {fruits.map((fruit, index) => (
              <div key={index}>{fruit}</div>
            ))}
          </div>
          <div>배열의 수는 {fruits.length}</div>
          <div>배열의 첫 번째는 {first}</div>
          <div>배열의 마지막은 {last}</div>
          <div>
            {/* 배열의 항목들을 순환하며 처리하기 */}
            {fruits.forEach(function (item, index) {
              console.log(item, index);
            })}
          </div>
          <div>배열 안에서 바나나의 위치는 {pos + 1} 번째</div>
          <div>
            야채의 배열은
            {vegetables.map((vegetable, index) => (
              <div key={index}>{vegetable}</div>
            ))}
          </div>
          <div>
            삭제된 야채는
            {removedVegetables.map((removedVegetable, index) => (
              <div key={index}>{removedVegetable}</div>
            ))}
          </div>
        </div>
        <div className="right">
          전개 구문을 이용한 얕은 복사: <div>{shallowCopySpread}</div>
          Slice를 이용한 얖은 복사: <div>{shallowCopySlice}</div>
          JSON을 이용한 깊은 복사: <div>{deepCopy}</div>
        </div>
      </div>
    </>
  );
};

export default Array;
