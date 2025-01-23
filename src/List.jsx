import React from "react";

const List = ({ records, setRecords }) => {
  // func : 삭제
  const removeRecord = (id) => {
    const filteredRecords = records.filter((record) => record.id !== id);
    setRecords(filteredRecords);
  };

  return records
    .sort((a, b) => b.gold - a.gold)
    .map((r) => (
      <tr className="card" key={r.id}>
        <td>{r.country}</td>
        <td>{Number(r.gold)}</td>
        <td>{Number(r.silver)}</td>
        <td>{Number(r.bronze)}</td>
        <td>
          <button className="deleteBtn" onClick={() => removeRecord(r.id)}>
            삭제
          </button>
        </td>
      </tr>
    ));
};

export default List;
