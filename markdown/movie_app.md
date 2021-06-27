## 👉 [Github Link!](https://github.com/developyoun/movies) 👈

<img alt="title" src="https://user-images.githubusercontent.com/59079426/123537318-c3b6b100-d769-11eb-893f-381eb55f9504.png">

### { 영화 소개 웹페이지 }

### 기술스택

![collage](https://user-images.githubusercontent.com/59079426/119925396-579d2d80-bfb0-11eb-9061-d1fe1c0c1a18.png)

- __Main__: JavaScript / React & hooks ( CRA )
- __Core__: Redux / Redux-saga / React-router / Axios / Firebase
- __Style__: CSS / Styled-component / Material-UI / Bootstrap

### 파일구조

```
├── App.js
├── Firebase.js
├── index.js
├── component	
│	├── common	# 재사용하기 위한 components 및 function
│	├── header	# navigation 및 search bar
│	└── main	# 메인 화면에 그려질 components
└── modules	# redux 및 saga 정의
```

### 기능소개

<img width="70%" alt="banner" src="https://user-images.githubusercontent.com/59079426/119925208-ee1d1f00-bfaf-11eb-8211-7cdb13bee79c.png">

- 페이지 이동이 가능하도록 `Navigation Bar` 구현하였고, fix를 통해 스크롤을 해도 유지
-  `video tag` 를 적용하면서 동적인 화면을 구성하도록 하였음

<img width="70%" alt="main lists" src="https://user-images.githubusercontent.com/59079426/119925228-fd03d180-bfaf-11eb-9a4f-c16b5c42b61c.png">

- `mouse hover` 시에 scale을 확대하는 에니메이션으로 UX기능 부여
-  `Redux`를 사용하여 데이터를 관리하도록 하였고, `Redux-saga`를 활용하여 비동기 요청을 보내도록 함

<img width="70%" alt="click modal" src="https://user-images.githubusercontent.com/59079426/119925237-03924900-bfb0-11eb-839d-593e630c91cc.png">

- 클릭시 `Modal`을 적용하여 조금 더 편리한 UI을 보이게 하였음
- 영화에 대한 정보를 한눈에 보여주며, youtube 트레일러 비디오를 제공

<img width="70%" alt="search result" src="https://user-images.githubusercontent.com/59079426/119925246-0a20c080-bfb0-11eb-9a75-d60529bd911f.png">

- 검색 기능이 가능하며 과도한 API 요청을 막기 위하여 `Debouncing` 적용
- 검색 결과는 영화의 Poster를 보여주며 메인 페이지와 마찬가지로 `mouse hover` 및 `Modal` 페이지 제공
- 또한, 어떠한 페이지에서든 검색에 대한 결과를 보여줌 (만약 키워드가 공백이라면 현재 페이지 유지)

<img width="70%" alt="community" src="https://user-images.githubusercontent.com/59079426/119925280-1d339080-bfb0-11eb-8155-eec402cbf054.png">

- `Firebase`를 이용한 CRUD 기능 구현
- `Redux-saga`를 이용하여 Firebase의 Store와 비동기요청을 수행
