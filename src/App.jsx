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

      <List records={records} className="card"></List>
    </>
  );
}

export default App;
