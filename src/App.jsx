import { useEffect, useState } from "react";
import "./App.css";
import List from "./List.jsx";
import Form from "./Form.jsx";

function App() {
  const [records, setRecords] = useState([]); // 메달 기록
  return (
    <>
      <div className="header">
        <h2>2024 파리 올림픽</h2>
        <Form records={records} setRecords={setRecords} />
      </div>

      <div className="card">
        {records.length === 0 ? (
          <p>아직 추가된 국가가 없습니다. 메달을 추적하세요!</p>
        ) : (
          records
            .sort((a, b) => b.gold - a.gold) // 금메달 기준 내림차순 정렬
            .map((r) => {
              return (
                <p key={r.id}>
                  {r.country} {r.gold} {r.silver} {r.bronze}
                </p>
              );
            })
        )}
      </div>
    </>
  );
}

export default App;
