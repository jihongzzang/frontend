# F&F 사내 마케팅 퍼포먼스 측정 대시보드 및 관리 서비스

- MLB, Discovery 와 같은 의류 브랜드 소유 회사 F&F 브랜드의 인지도를 높이기 위한 마케팅 중 하나인 인플루언서 마케팅을 진행하기 위해 인플루언서 관리 대쉬보드 사이트를 제작.
- 기획부터 구현까지 모두 전부 직접 진행했으며, 리스트페이지 및 캠페인 퍼포먼스 페이지의 경우 백엔드와 연결하여 진행했습니다.
- 인플루언서 데이터 API 미완성으로 인플루언서 관련 페이지의 경우 프론트엔드 측에서 목 데이터로 진행하였습니다.
- <a href="https://docs.google.com/presentation/d/1EKNwJCxe6ao_PmqtAB-W4gKIjonnSd_2iaLcMH8cZPo/edit#slide=id.p">기획</a>
- <a href="https://www.figma.com/file/m7gmy99VDwe7gU80eq8gHM/F%26F?node-id=0%3A1">화면설계</a>

## **프로젝트 참여인원**

- **Frontend**
  - 🔥🔥 주지홍 (Project Manager)
  - 💪🏻💪🏻 정지민
- **Backend**
  - 🐨🐨 김성수
  - 🐻‍❄️🐻‍❄️ 최희택

## **프로젝트 기간**

- 2022.02.28 ~ 2022.03.24

## **기술스택**

### **tools**

- `Git` & `GITHUB`
- `TRELLO`
- `SLACK`
- `Figma`
- `Google-Slide`

### **Front-end**

- `HTML/CSS`
- `JavaScript(ES6+)`
- `React`
- `Styled-Components` 
- `Recoil` (인플루언서 및 캠페인 데이터 상태관리)
- `Axios` (데이터 패칭)
- `Material-UI` (검색영역 인풋 UI 구현)
- `Chart.js` (차트 UI 구현)

## **구현 목표**

- 에프엔에프 회사에서 관리하는 의류들을 홍보(캠패인)을 인플루언서들을 주축으로 진행하였을때
'해당 캠페인에 대한 인플루언서들의 역량 및 캠페인이 잘 되었는 지'에 대한 퍼포먼스측정을 대시보드로 만들어 관리

## **구현 파트**

- 주지홍 (Nav, 리스트페이지, 인플루언서 퍼포먼스 측정 페이지, 인플루언서 퍼포먼스 비교분석 페이지)
  ```
  1. 프론트엔드 ProjectManager
  2. 전역상태 라이브러리인 `Recoil`을 활용하여 인플루언서 데이터 관리 
  3. Axios를 활용하여 리스트페이지 API 패칭
  4. 리스트페이지 필터를 통한 검색기능 및 정렬기능 구현
  5. 리스트페이지, 퍼포먼스 측정, 퍼포먼스 비교분석 페이지 데이터 연동
  6. Chart.Js 라이브러리를 활용하여 차트 구현 및 커스터 마이징
  ```

## **시연**

- Axios를 활용하여 리스트페이지 API 패칭

<img src="https://ibb.co/4ZrKYnj" border='0'/>

- 리스트 페이지와 퍼포먼스 측정 페이지 연동 및 주차별 데이터 UI 구현
- 리스트 페이지를 거치지 않고도 퍼포먼스 측정 페이지에서 바로 검색 가능

<img src='https://ibb.co/3kBzcrJ' border='0'/>

- 비교분석 페이지에서 비교대상군 선택 option에서 현재 퍼포먼스 페이지의 대상은 필터링 되서 나오도록 설정
- 두 인플루언서의 주차별 비교 진행 

<img src="https://ibb.co/TgB1Vk1" border='0'/>

- 퍼포먼스 측정 페이지 비교분석 페이지 연동
- 해당 페이지에서 인플루언서 클릭시 두페이지 모두 데이터가 들어감

<img src="https://ibb.co/6sG83C7" border='0'/>

## **Build Installation**

```
# install dependencies
$ npm install
# serve with hot reload at localhost:3000
$ npm start
```
