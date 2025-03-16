# coding_test_example

### 웹 기본 CS 지식
#### 웹 동작 원리
1. 사용자가 URL을 입력하거나 링크를 클릭
2. DNS 조회를 통해 도메인 이름을 IP 주소로 변환
3. 브라우저가 해당 IP 주소의 서버에 HTTP/HTTPS 요청 전송
4. 서버가 요청을 처리하고 HTML, CSS, JavaScript 등의 리소스 응답
5. 브라우저가 이 리소스를 수신

#### 브라우저 렌더링 과정
1. HTML 파싱 및 DOM 트리 구축
2. CSS 파싱 및 CSSOM 트리 구축
3. DOM과 CSSOM을 결합하여 렌더 트리 생성
4. 레이아웃(리플로우) 계산: 각 요소의 정확한 위치와 크기 결정
5. 페인팅: 픽셀을 화면에 그리는 과정
6. 합성: 여러 레이어를 합쳐 최종 화면 생성

#### REST API
REST(Representational State Transfer)는 웹 서비스 디자인을 위한 아키텍처 스타일입니다. REST API는 자원(URI), 행위(HTTP 메서드), 표현(JSON, XML 등)으로 구성 <br/>
<b> - RESTful 설계 원칙</b> <br/>
- 클라이언트-서버 구조 <br/>
- 무상태(Stateless) <br/>
- 캐시 가능성 <br/>
- 계층화된 시스템 <br/>
- 균일한 인터페이스 <br/>
