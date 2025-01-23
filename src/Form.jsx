import { useState } from "react";
import Item from "./Item.jsx";

const Form = ({ records, setRecords }) => {
  // Item에서 반환되는 값들
  const {
    country,
    setCountry,
    gold,
    setGold,
    silver,
    setSilver,
    bronze,
    setBronze,
    addRecord,
    updateRecord,
  } = Item({ records, setRecords });

  return (
    <form className="form" onSubmit={addRecord}>
      <div>
        <h4>국가명</h4>
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>
      <div>
        <h4>금메달</h4>
        <input
          type="number"
          value={gold}
          onChange={(e) => setGold(e.target.value)}
        />
      </div>
      <div>
        <h4>은메달</h4>
        <input
          type="number"
          value={silver}
          onChange={(e) => setSilver(e.target.value)}
        />
      </div>
      <div>
        <h4>동메달</h4>
        <input
          type="number"
          value={bronze}
          onChange={(e) => setBronze(e.target.value)}
        />
      </div>
      <div className="formBtns">
        <button type="submit" className="addBtn">
          국가 추가
        </button>
        <button
          type="button" // submit 이벤트와 충돌 방지
          className="udBtn"
          onClick={() => updateRecord(country, gold, silver, bronze)}
        >
          업데이트
        </button>
      </div>
    </form>
  );
};

export default Form;
