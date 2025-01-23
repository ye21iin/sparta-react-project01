import { useState } from "react";
import "./App.css";
import List from "./List.jsx";
import Form from "./Form.jsx";

function App() {
  const [records, setRecords] = useState([]); // 메달 기록

  return (
    <div className="container">
      <div className="header">
        <h2>2024 파리 올림픽</h2>
        <Form records={records} setRecords={setRecords} />
      </div>
      <div className="cardContainer">
        {records.length === 0 ? (
          <p>아직 추가된 국가가 없습니다. 메달을 추적하세요!</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>국가명</th>
                <th>금메달</th>
                <th>은메달</th>
                <th>동메달</th>
                <th>액션</th>
              </tr>
            </thead>
            <tbody>
              <List records={records} setRecords={setRecords} />
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default App;
