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
  // func: 업데이트
  const updateRecord = (c, g, s, b) => {
    if (!records.some((r) => r.country === c)) {
      alert("입력한 국가명이 기존 리스트에 존재하지 않습니다!");
      return;
    }
    const newRecord = records.map((r) => {
      if (r.country === c) {
        return { ...r, gold: g, silver: s, bronze: b };
      }
      return r;
    });

    setRecords(newRecord);
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
    updateRecord,
  };
};

export default Item;
