# micro-bit_-driver-safety

#### Description

기술발전으로 자율주행 자동차가 늘어나고 있지만, 카메라 센서와 레이더 그리고 네비게이션 데이터와 GPS등에 의한 정보만으로는 정확한 판단을 하기에 아직 오류가 있습니다. 
차량과 중앙제어시스템의 유기적인 연결을 통해 운전자의 안전을 증진시키는 아이디어를 기획하였고 이를 micro:bit로 구현해보았습니다.

#### function
* 빙판길 감지 사고 예방 시스템
* 위급상황 신호 공유 시스템


#### Environment

[micro:bit](https://makecode.microbit.org/)

#### Prerequisite(extensions)

* microbit-control  : sonar > UltraSonic code
* microbit-maqueen1 : maqueen > Maqueen code
                    DFRobot_HuskyLens > HuskyLens code
* microbit-maqueen2 : maqueen > Maqueen code

참고: microbit-control에 sonar은 정밀 초음파 센서를 이용하기위한 것으로 허스키렌즈로 인식을 하면 사용안하셔도 됩니다

#### license

* Mit

#### Files

microbit-maqueen1 : A버튼을 누르면 radio신호를 이용해 경고 신호를(여기서는 숫자7을 보냈습니다) 보내줍니다. B버튼을 누르면 radio신호(0)을 보내줍니다.

microbit-maqueen2 : 1) radio 신호 7을 받으면 소리를 내고 잠시 정지합니다.
                    2) 허스키렌즈로 사물을 인식하면 속도를 줄여주고 radio신호(8)을 보냅니다.
                    
microbit-control  : receivedNumber로 수신받은 radio신호가 7,8,0이라면 각각에 맞는 pin을 활성화시킵니다.

#### reference
[허스키렌즈 참고 블로그](https://blog.naver.com/mathmuse/222547919885)
