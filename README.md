# 🥇 2024 PARIS OLYMPIC MEDAL TRACKER

2024 파리 올림픽 메달 기록을 추적하는 React 애플리케이션입니다.
사용자는 국가별로 금, 은, 동메달 수를 추가하고 업데이트할 수 있습니다.

### 📌 Basic CRUD Features

- CREATE : 제출 버튼 클릭 시 새로운 국가와 메달 정보를 리스트에 추가하고 화면에 표시.
- READ : 리스트에 표시된 국가별 메달 집계를 확인할 수 있도록 UI에 반영.
- UPDATE : 이미 추가된 국가의 메달 수를 수정할 수 있는 기능.
- DELETE : 삭제 버튼 클릭 시, 해당 국가의 메달 집계가 리스트에서 제거.

## 🔗 프로젝트 구조

```
/SPARTA-REACT-PROJECT01
├── index.html <!-- 메인 HTML -->
├── README.md <!-- 프로젝트 설명 -->
└── src
    ├── App.jsx <!-- 메인 로직 -->
    ├── Form.jsx <!-- 폼 관련 기능 -->
    ├── List.jsx <!-- 리스트 관련 기능 -->
    ├── Item.jsx <!-- State 관련 기능 -->
    ├── main.jsx <!-- 진입점 -->
    ├── App.css <!-- 주요 디자인 정의 -->
    └── index.css <!-- 전역 스타일 정의 -->
```

## ☄️ TROUBLE-SHOOTING

**개발 과정이 궁금하시다면 👇🏻👇🏻**

1. GitHub Issue Handling

- [[Git] HEAD 분리됨 - checkout하고 커밋했을 때 (+커밋 수정방법)](https://velog.io/@ye21iin/Git-HEAD-%EB%B6%84%EB%A6%AC%EB%90%A8-checkout%ED%95%98%EA%B3%A0-%EC%BB%A4%EB%B0%8B%ED%96%88%EC%9D%84-%EB%95%8C-%EC%BB%A4%EB%B0%8B-%EC%88%98%EC%A0%95%EB%B0%A9%EB%B2%95)

2. Edit UI with CSS

- [[React 입문/프로젝트 회고] 버튼이 왜 여기 달렸죠?](https://velog.io/@ye21iin/React-%EC%9E%85%EB%AC%B8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9A%8C%EA%B3%A0)

## 🛠️ 기술 스택

![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black)
![JS](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)

## 🎥 미리보기

<img src="file:///Users/t2023-m0025/Downloads/%E1%84%92%E1%85%AA%E1%84%86%E1%85%A7%E1%86%AB%20%E1%84%80%E1%85%B5%E1%84%85%E1%85%A9%E1%86%A8%202025-01-24%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%203.55.39.gif">

- MAIN : 국가명, 각각의 메달 수를 기록할 수 있는 Input 기능을 제공합니다. 국가 추가 및 업데이트 버튼을 통해 하단 리스트 박스에 기록을 추가할 수 있습니다.
  ![Main](https://i.ibb.co/CHXnGLC/2025-01-24-10-43-11.png)
- CREATE : 새로운 데이터를 추가하여 표출합니다.
  ![Create](https://i.ibb.co/t4TBS59/2025-01-24-10-43-59.png)
- UPDATE : 리스트에 있는 국가명에 대해 데이터를 업데이트할 수 있습니다. 금메달 수에 따라서 내림차순 정렬한 결과값을 보여줍니다.
  ![Update](https://i.ibb.co/g7Gh0wN/2025-01-24-10-44-37.png)
- DELETE : 각 행별 삭제 버튼을 통해 리스트의 데이터를 삭제할 수 있습니다.
  ![Delete](https://i.ibb.co/n8t6ySj/2025-01-24-10-44-54.png)
