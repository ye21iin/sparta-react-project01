import { useState } from "react";

const Item = ({ records, setRecords }) => {
  // 각각 상태로 초기화
  const [country, setCountry] = useState("");
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBronze] = useState(0);

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
  return {
    country,
    setCountry,
    gold,
    setGold,
    silver,
    setSilver,
    bronze,
    setBronze,
    addRecord,
  };
};

export default Item;
