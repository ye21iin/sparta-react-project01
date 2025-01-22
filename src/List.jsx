const List = ({ records }) => {
  return records.length === 0 ? (
    <p>아직 추가된 국가가 없습니다. 메달을 추적하세요!</p>
  ) : (
    records
      .sort((a, b) => b.gold - a.gold) // 금메달 기준 내림차순 정렬
      .map((r) => {
        return (
          <p key={r.id}>
            {r.country} {Number(r.gold)} {Number(r.silver)} {Number(r.bronze)}
          </p>
        );
      })
  );
};

export default List;
