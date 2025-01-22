import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // 메달 기록
  const [records, setRecords] = useState([]);

  // 각각 상태로 초기화
  const [country, setCountry] = useState("");
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBronze] = useState(0);

  // records 상태가 변경될 때마다 로그 출력
  useEffect(() => {
    console.log(records);
  }, [records]);

  // func: 국가 추가
  const addRecord = (e) => {
    e.preventDefault(); // 폼 제출의 기본 동작인 페이지 새로고침 방지
    if (!country) {
      alert("국가명이 입력되지 않았습니다.");
      return;
    }
    if (gold < 0 || silver < 0 || bronze < 0) {
      alert("메달 개수는 0 이상의 값만 가능합니다.");
      return;
    }

    setRecords([...records, { id: Date.now(), country, gold, silver, bronze }]);
    setCountry("");
    setGold(0);
    setSilver(0);
    setBronze(0);
  };

  // func: 업데이트
  const updateRecord = () => {};

  return (
    <>
      <div className="header">
        <h2>2024 파리 올림픽</h2>
        <form className="form" onSubmit={addRecord}>
          <div>
            <h4>국가명</h4>
            <input
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            ></input>
          </div>
          <div>
            <h4>금메달</h4>
            <input
              type="number"
              value={gold}
              onChange={(e) => setGold(e.target.value)}
            ></input>
          </div>
          <div>
            <h4>은메달</h4>
            <input
              type="number"
              value={silver}
              onChange={(e) => setSilver(e.target.value)}
            ></input>
          </div>
          <div>
            <h4>동메달</h4>
            <input
              type="number"
              value={bronze}
              onChange={(e) => setBronze(e.target.value)}
            ></input>
          </div>
          <div className="formBtns">
            <button type="submit" className="addBtn" name="add">
              국가 추가
            </button>
            <button
              type="button" // submit 이벤트와 충돌 방지
              className="udBtn"
              onClick={updateRecord}
              name="ud"
            >
              업데이트
            </button>
          </div>
        </form>
      </div>

      <div className="card">
        {records.length === 0 ? (
          <p>아직 추가된 국가가 없습니다. 메달을 추적하세요!</p>
        ) : (
          <p>List</p>
        )}
      </div>
    </>
  );
}

export default App;
