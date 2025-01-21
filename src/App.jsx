import { useState } from "react";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="header">
        <h2>2024 파리 올림픽</h2>
        <form className="form">
          <div>
            <h4>국가명</h4>
            <input></input>
          </div>
          <div>
            <h4>금메달</h4>
            <input></input>
          </div>
          <div>
            <h4>은메달</h4>
            <input></input>
          </div>
          <div>
            <h4>동메달</h4>
            <input></input>
          </div>
          <div className="formBtns">
            <button className="addBtn">국가 추가</button>
            <button className="udBtn">업데이트</button>
          </div>
        </form>
      </div>

      <div className="card">
        <p>아직 추가된 국가가 없습니다. 메달을 추적하세요!</p>
      </div>
    </>
  );
}

export default App;
