# FreeTraveler
![image](https://user-images.githubusercontent.com/56144682/173309846-45503513-4340-403c-adfe-d790ab0510df.png)
여행의 경험을 선사하다 :: FreeTraveler  

## 개요
 본 프로젝트는 고객들에게 여행코스 공유 제공을 목적으로 하는 ‘gogo.’  
서비스이다. 여행자의 경험을 토대로 작성된 관광지, 식당, 숙소 등의 여행코스를 웹과 앱으로 제공한다.  

여행코스를 공유하는 플랫폼을 제공해서 고객들이 여행코스를 정하는 부분에 있어 편리함을 주는 가치를 제공하고자 한다.

## 개발 환경
```
* RDBMS : MariaDB
* IDE : Intellij 2021.2.3 Ultimate Edition
* BackEnd : Spring Boot 2.5.5
* FrontEnd : React
* Server : Google Cloude Platform
```

## 사용 기술
'Java', 'Spring Boot', 'React', 'Spring Data JPA', 'MariaDB', 'Kakao API', 'Google Cloude Platform', 'Git'

## 아키텍처
![image](https://user-images.githubusercontent.com/56144682/173308300-5b12f573-b3b2-4793-aa88-044e2ef50b29.png)

GCP에 Front-End와 Back-End 서버를 배포하였으며,
Docker-Compose를 이용하여 MariaDB 개발 환경을 구축하였다.  

---

## 설계

### ERD
![ERD](https://user-images.githubusercontent.com/73890228/173500321-4b88b4d1-6471-4fa5-a468-90ab095701fb.png)

### Sequence Diagram
#### 게시물 작성
![sequence](https://user-images.githubusercontent.com/73890228/173500479-2d04eebb-d181-49d9-9e61-0c6ebadf9f7b.png)

## 실행화
### 메인 화면
![메인](https://user-images.githubusercontent.com/73890228/173500736-ac937632-72e3-4bbc-9497-0636de9e3c55.png)

### 게시물 작성
![게시물 작성](https://user-images.githubusercontent.com/73890228/173500814-d5c06a89-c1bb-4b80-9b65-c6b7f27a980c.png)


### 게시물 조회
![게시물 조회](https://user-images.githubusercontent.com/73890228/173500819-0f8b19e6-ca32-4e71-87e5-60085ae2d3ff.png)


## 서비스 시연영상  
### Gogo플랫폼 시연영상(Youtube 링크 연결)  
[![GOGO 플랫폼 시연 영상](https://user-images.githubusercontent.com/56144682/173310448-a9b1d347-c3ec-426a-a6f0-dcb4b6212494.png)](https://youtu.be/Pyjd2qTV-BY)
