const Array = () => {
  let fruits = ["사과", "바나나", "망고"];
  let newLength = fruits.unshift("딸기");
  console.log(newLength); // 4 (length로 표시 됨)
  let first = fruits[0];
  let last = fruits[fruits.length - 1];
  let pos = fruits.indexOf("바나나");

  let vegetables = ["양배추", "순무", "무", "당근"];
  let vegetablesPos = 1; // vegetablesPos에서부터 삭제 시작
  let n = 2; // n개의 항목 제거
  let removedVegetables = vegetables.splice(vegetablesPos, n);
  console.log(removedVegetables); // (삭제된 아이템이 배열로 표시 됨)

  let shallowCopySpread = [...fruits]; // 전개 구문
  console.log(shallowCopySpread);

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
          <div>배열 안에서 바나나의 위치는 {pos + 1} 번째이다.</div>
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
          <div>
            {shallowCopySpread.map((copyFruits, i) => (
              <div key={i}>{copyFruits}</div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Array;
