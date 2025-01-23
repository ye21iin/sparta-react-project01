const List = ({ records, setRecords }) => {
  // func : 삭제
  const removeRecord = (id) => {
    const filteredRecords = records.filter(function (record) {
      return record.id !== id;
    });
    setRecords(filteredRecords);
  };

  return records.length === 0 ? (
    <p>아직 추가된 국가가 없습니다. 메달을 추적하세요!</p>
  ) : (
    records
      .sort((a, b) => b.gold - a.gold) // 금메달 기준 내림차순 정렬
      .map((r) => {
        return (
          <div key={r.id}>
            <p>
              {r.country} {Number(r.gold)} {Number(r.silver)} {Number(r.bronze)}
            </p>
            <button onClick={() => removeRecord(r.id)}>삭제</button>
          </div>
        );
      })
  );
};

export default List;
