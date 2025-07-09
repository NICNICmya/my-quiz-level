// 퀴즈 데이터
const quizData = {
    geography: [
        {
            question: "대한민국의 수도는 어디일까요?",
            options: ["부산", "대전", "서울", "광주"],
            correct: 2
        },
        {
            question: "일본의 수도는 어디인가요?",
            options: ["오사카", "도쿄", "교토", "삿포로"],
            correct: 1
        },
        {
            question: "미국의 수도는 어디인가요?",
            options: ["뉴욕", "시카고", "로스앤젤레스", "워싱턴 D.C."],
            correct: 3
        },
        {
            question: "세계에서 가장 높은 산은?",
            options: ["에베레스트", "후지산", "알프스", "백두산"],
            correct: 0
        },
        {
            question: "백두산은 어느 나라에 걸쳐 있을까요?",
            options: ["한국", "북한", "중국", "북한과 중국"],
            correct: 3
        },
        {
            question: "프랑스의 수도는 어디인가요?",
            options: ["마르세유", "리옹", "파리", "보르도"],
            correct: 2
        },
        {
            question: "제주도의 중심에 있는 활화산 이름은?",
            options: ["한라산", "태백산", "금강산", "오름산"],
            correct: 0
        },
        {
            question: "세계에서 가장 작은 수도는?",
            options: ["바티칸시티", "모나코", "산마리노", "리히텐슈타인"],
            correct: 0
        },
        {
            question: "대한민국에서 가장 높은 산은?",
            options: ["지리산", "설악산", "한라산", "북한산"],
            correct: 2
        },
        {
            question: "아프리카에서 가장 높은 산은?",
            options: ["킬리만자로", "사하라산", "카라하리산", "나일산"],
            correct: 0
        },
        {
            question: "독일의 수도는?",
            options: ["프랑크푸르트", "뮌헨", "함부르크", "베를린"],
            correct: 3
        },
        {
            question: "스위스의 유명한 삼각형 모양 산은?",
            options: ["몽블랑", "마터호른", "아이거", "퓌젠"],
            correct: 1
        },
        {
            question: "호주의 수도는?",
            options: ["시드니", "멜버른", "캔버라", "브리즈번"],
            correct: 2
        },
        {
            question: "남미 안데스 산맥에 위치한 세계에서 가장 높은 수도는?",
            options: ["리마", "키토", "라파스", "카라카스"],
            correct: 2
        },
        {
            question: "국토의 정중앙에 있는 도시로 알려진 곳은?",
            options: ["대전", "충주", "원주", "괴산"],
            correct: 1
        },
        {
            question: "수도 이름이 나라 이름과 같은 나라는?",
            options: ["룩셈부르크", "체코", "폴란드", "벨기에"],
            correct: 0
        },
        {
            question: "미국에서 가장 높은 산은?",
            options: ["휘트니산", "매킨리산(데날리)", "록키산", "요세미티산"],
            correct: 1
        },
        {
            question: "히말라야 산맥은 몇 개국에 걸쳐 있을까요?",
            options: ["2개국", "3개국", "4개국", "5개국 이상"],
            correct: 3
        },
        {
            question: "태백산맥은 우리나라의 어느 방향에 주로 분포해 있을까요?",
            options: ["서해안", "남해안", "동해안", "중앙 내륙"],
            correct: 2
        },
        {
            question: "세계에서 가장 긴 강은?",
            options: ["아마존강", "나일강", "양쯔강", "미시시피강"],
            correct: 1
        },
        {
            question: "이탈리아의 수도는?",
            options: ["밀라노", "로마", "베네치아", "나폴리"],
            correct: 1
        },
        {
            question: "대한민국의 6개 광역시에 포함되지 않는 곳은?",
            options: ["부산", "수원", "대구", "울산"],
            correct: 1
        },
        {
            question: "아시아와 유럽의 경계에 위치하는 길이 2500km의 산맥은?",
            options: ["히말라야 산맥", "우랄 산맥", "알프스 산맥", "코카서스 산맥"],
            correct: 1
        },
        {
            question: "세계에서 가장 작은 나라는?",
            options: ["모나코", "바티칸 시국", "산마리노", "리히텐슈타인"],
            correct: 1
        },
        {
            question: "대한민국의 옛 수도였던 곳은 어디일까요?",
            options: ["인천", "경주", "군산", "천안"],
            correct: 1
        },
        {
            question: "파미르 고원은 어떤 별명을 가지고 있을까요?",
            options: ["지붕 없는 천국", "세상의 지붕", "땅속의 바다", "불타는 땅"],
            correct: 1
        },
        {
            question: "하늘과 가장 가까운 도시로 불리는 곳은?",
            options: ["키토(에콰도르)", "보고타(콜롬비아)", "카트만두(네팔)", "라파스(볼리비아)"],
            correct: 0
        },
        {
            question: "몽테네그로라는 나라 이름의 뜻은?",
            options: ["높은 산", "검은 산", "흰 산", "푸른 산"],
            correct: 1
        },
        {
            question: "수도 이름이 평화를 뜻하는 나라는?",
            options: ["파키스탄", "아프가니스탄", "우즈베키스탄", "카자흐스탄"],
            correct: 0
        },
        {
            question: "지리산의 이름 뜻은?",
            options: ["지혜의 산", "사람을 지리는 산", "지리하게 생긴 산", "신선이 머무는 산"],
            correct: 0
        }
    ],
    history: [
        {
            question: "우리나라 최초의 한글 소설로 전해지는 고전소설의 이름은?",
            options: ["춘향전", "홍길동전", "심청전", "흥부전"],
            correct: 1
        },
        {
            question: "불로장생을 꿈꿔 전 세계를 뒤져 불로초를 찾았던 왕의 이름은?",
            options: ["진시황", "한무제", "당태종", "송태조"],
            correct: 0
        },
        {
            question: "평창동계올림픽이 열렸던 해는 몇년도인가요?",
            options: ["2016년", "2017년", "2018년", "2019년"],
            correct: 2
        },
        {
            question: "이순신 장군이 육전에서 사용되던 학익진 전술을 최초로 해전에 도입했던 전투는?",
            options: ["명량대첩", "한산도 대첩", "노량해전", "옥포대첩"],
            correct: 1
        },
        {
            question: "헬렌 켈러를 교육시킨 선생님의 이름은?",
            options: ["앤 설리번", "메리 앤더슨", "엘리자베스 스미스", "캐서린 존슨"],
            correct: 0
        },
        {
            question: "스승의 날인 5월 15일은 누구의 생일에서 유래했을까?",
            options: ["공자", "세종대왕", "퇴계 이황", "율곡 이이"],
            correct: 1
        },
        {
            question: "미국 32대 대통령인 루스벨트가 대공황 극복을 위해 사용한 정책은?",
            options: ["뉴딜 정책", "먼로 독트린", "마셜 플랜", "트루먼 독트린"],
            correct: 0
        },
        {
            question: "제2차 세계대전 도중 미국이 진행한 핵폭탄 개발 프로젝트의 이름은?",
            options: ["아폴로 프로젝트", "맨해튼 프로젝트", "머큐리 프로젝트", "제미니 프로젝트"],
            correct: 1
        },
        {
            question: "1936년 프랑스가 독일과의 국경에 쌓은 긴 요새로, 최후의 방어선을 뜻하는 단어는?",
            options: ["지그프리트선", "마지노선", "힌덴부르크선", "아틀란틱 월"],
            correct: 1
        },
        {
            question: "마의태자가 마지막으로 피신한 산이라 전해지는 곳은?",
            options: ["금강산", "오대산", "미륵산", "태백산"],
            correct: 3
        },
        {
            question: "우리나라 최초의 대통령은?",
            options: ["이승만", "박정희", "김구", "안창호"],
            correct: 0
        },
        {
            question: "한국전쟁이 일어난 연도는?",
            options: ["1948년", "1949년", "1950년", "1951년"],
            correct: 2
        },
        {
            question: "조선시대 세종대왕이 만든 문자는?",
            options: ["한글", "훈민정음", "언문", "모든 답"],
            correct: 3
        },
        {
            question: "국보1호였던 문화재의 이름은?",
            options: ["경복궁", "숭례문", "불국사", "석굴암"],
            correct: 1
        },
        {
            question: "셰익스피어의 4대 비극에 포함되지 않는 작품은?",
            options: ["햄릿", "오셀로", "로미오와 줄리엣", "맥베스"],
            correct: 2
        },
        {
            question: "덴마크의 대표적인 작가로 인어 공주, 성냥팔이 소녀 등을 쓴 작가는?",
            options: ["그림 형제", "안데르센", "이솝", "페로"],
            correct: 1
        },
        {
            question: "바람둥이로 유명한 카사노바의 고향은 어디일까?",
            options: ["로마", "밀라노", "베네치아", "나폴리"],
            correct: 2
        },
        {
            question: "인하대학교의 인하는 무엇의 줄임말일까요?",
            options: ["인천 하와이", "인천 하버", "인재 하나", "인문 하나"],
            correct: 0
        },
        {
            question: "높은 지위나 명예를 가진 사람에게 요구되는 도덕적 의무를 뜻하는 용어는?",
            options: ["노블레스 오블리주", "카르페 디엠", "비바 라 비다", "아모르 파티"],
            correct: 0
        },
        {
            question: "소설 어린 왕자 속 어린 왕자가 살고 있던 소행성의 이름은?",
            options: ["A-325", "B-612", "C-147", "D-983"],
            correct: 1
        },
        {
            question: "둘 사이의 다툼에서 제 3자가 이득을 본다는 뜻의 사자성어는?",
            options: ["어부지리", "새옹지마", "호가호위", "견원지간"],
            correct: 0
        },
        {
            question: "네 개의 신분으로 나뉘어 있는 인도의 신분 제도의 이름은?",
            options: ["바르나 제도", "카스트 제도", "만달 제도", "아슈람 제도"],
            correct: 1
        },
        {
            question: "노벨상의 6가지 분야에 포함되지 않는 것은?",
            options: ["물리학상", "수학상", "평화상", "경제학상"],
            correct: 1
        },
        {
            question: "세계 수학자 대회에서 4년마다 수여하는 상으로, 수학계의 노벨상이라 불리는 상은?",
            options: ["아벨상", "필즈상", "울프상", "크라포드상"],
            correct: 1
        },
        {
            question: "그리스 로마 신화 속 한 조각가의 이름에서 유래된 말로, 타인에 대한 긍정적인 기대가 실제로 좋은 영향을 끼치는 것을 뜻하는 용어는?",
            options: ["피그말리온 효과", "플라시보 효과", "호손 효과", "나비 효과"],
            correct: 0
        },
        {
            question: "1년 중 낮이 가장 긴 날은?",
            options: ["춘분", "하지", "추분", "동지"],
            correct: 1
        },
        {
            question: "24절기의 여섯 번째 절기로 청명과 입하 사이에 있는 것은?",
            options: ["곡우", "소만", "망종", "소서"],
            correct: 0
        },
        {
            question: "윷놀이에서 도개걸윷모 각각이 의미하는 동물 중 도는?",
            options: ["돼지", "개", "양", "소"],
            correct: 0
        },
        {
            question: "사물놀이에서 사물이 의미하는 악기 4개에 포함되지 않는 것은?",
            options: ["꽹과리", "해금", "장구", "북"],
            correct: 1
        },
        {
            question: "우리나라의 국화는 무엇일까요?",
            options: ["장미", "무궁화", "진달래", "벚꽃"],
            correct: 1
        }
    ],
    science: [
        {
            question: "물의 끓는점은 섭씨 몇 도일까요?",
            options: ["90도", "95도", "100도", "105도"],
            correct: 2
        },
        {
            question: "지구의 자전 주기는?",
            options: ["23시간", "24시간", "25시간", "26시간"],
            correct: 1
        },
        {
            question: "태양계에서 가장 큰 행성은?",
            options: ["토성", "목성", "해왕성", "천왕성"],
            correct: 1
        },
        {
            question: "컴퓨터의 두뇌 역할을 하는 부품은?",
            options: ["RAM", "CPU", "GPU", "SSD"],
            correct: 1
        },
        {
            question: "지구에서 달까지의 거리는 약 몇 km일까요?",
            options: ["약 24만 km", "약 38만 km", "약 52만 km", "약 66만 km"],
            correct: 1
        },
        {
            question: "인체에서 가장 큰 장기는?",
            options: ["심장", "폐", "간", "신장"],
            correct: 2
        },
        {
            question: "지구의 대기 중 가장 많은 비율을 차지하는 기체는?",
            options: ["산소", "질소", "이산화탄소", "아르곤"],
            correct: 1
        },
        {
            question: "IMF는 무엇의 약자일까요?",
            options: ["국제 통화 기금", "국제 무역 기구", "국제 노동 기구", "국제 원자력 기구"],
            correct: 0
        },
        {
            question: "고온의 물이 저온의 물보다 빠르게 어는 현상을 무엇이라고 할까?",
            options: ["음펨바 효과", "도플러 효과", "온실 효과", "자기장 효과"],
            correct: 0
        },
        {
            question: "기업 가치가 10억 달러 이상인 비상장 스타트업 기업을 이르는 용어는?",
            options: ["데카콘 기업", "유니콘 기업", "센타우르 기업", "드래곤 기업"],
            correct: 1
        },
        {
            question: "보건용 마스크의 입자 차단 성능을 나타내는 KF80, KF94와 같은 표기에서 KF는 무엇의 약자일까?",
            options: ["Korea Filter", "Korean Face", "Keep Fresh", "Kill Flu"],
            correct: 0
        },
        {
            question: "세계 최초로 안락사를 법적으로 허용한 나라는 어디일까요?",
            options: ["벨기에", "네덜란드", "스위스", "덴마크"],
            correct: 1
        },
        {
            question: "특정 수신자를 대상으로 화상을 전송하는 시스템으로 한국말로는 폐쇄 회로 텔레비전이라고 하는 이것은 무엇인가?",
            options: ["CCTV", "IPTV", "HDTV", "LED TV"],
            correct: 0
        },
        {
            question: "e-mail의 e는 무슨약자인가?",
            options: ["easy", "electronic", "express", "extra"],
            correct: 1
        },
        {
            question: "빛의 3 원색은 빨강, 초록, 파랑이다. 색의 3 원색에 포함되지 않는 것은?",
            options: ["자홍(Magenta)", "청록(Cyan)", "노랑(Yellow)", "보라(Purple)"],
            correct: 3
        },
        {
            question: "길이 단위 1인치는 몇 cm일까?",
            options: ["2.24cm", "2.54cm", "2.84cm", "3.14cm"],
            correct: 1
        },
        {
            question: "코로나 바이러스에서 코로나는 라틴어로 무엇을 뜻할까요?",
            options: ["바이러스", "왕관", "전염병", "호흡기"],
            correct: 1
        },
        {
            question: "알고 있는 사실인데 정확한 단어가 떠오르지 않아 말로 잘 표현되지 않는 현상을 뭐라고 할까?",
            options: ["기시감", "설단현상", "데자뷰", "인지부조화"],
            correct: 1
        },
        {
            question: "작동 원리는 복잡하나 하는 일은 매우 단순한, 재미만을 추구한 비효율적인 장치를 이르는 말은?",
            options: ["뉴턴 장치", "골드버그 장치", "아인슈타인 장치", "테슬라 장치"],
            correct: 1
        },
        {
            question: "넘어가는 순간 외부와 완전히 단절되는 블랙홀의 경계를 뜻하는 말은?",
            options: ["특이점", "사건의 지평선", "슈바르츠실트 반지름", "호킹 복사"],
            correct: 1
        },
        {
            question: "덧셈·뺄셈·곱셈·나눗셈의 네 종류의 계산법을 뭐라고 하는가?",
            options: ["사칙연산", "기본연산", "산술연산", "초등연산"],
            correct: 0
        },
        {
            question: "소음 측정단위는 데시벨이라고 하는데 기호로는 어떻게 표시하나요?",
            options: ["dB", "DB", "db", "Db"],
            correct: 0
        },
        {
            question: "야구공의 실밥은 총 몇개일까요?",
            options: ["106개", "107개", "108개", "109개"],
            correct: 2
        },
        {
            question: "색상 대비를 이루는 한 쌍의 색상, 즉 반대되는 색상을 의미하는 단어는?",
            options: ["보색", "원색", "중간색", "무채색"],
            correct: 0
        },
        {
            question: "기차에 안전벨트가 없는 이유는?",
            options: ["법적으로 금지되어서", "관성이 너무 커서 급정거가 불가능해서", "비용이 많이 들어서", "승객이 불편해해서"],
            correct: 1
        },
        {
            question: "볼펜 뚜껑에 구멍이 있는 이유는?",
            options: ["잉크 건조 방지", "압력 조절", "질식사 위험 방지", "디자인"],
            correct: 2
        },
        {
            question: "우리나라 최고봉은?",
            options: ["한라산", "지리산", "설악산", "백두산"],
            correct: 3
        },
        {
            question: "한국의 국가 전화번호는 몇번일까?",
            options: ["81", "82", "83", "84"],
            correct: 1
        },
        {
            question: "학교폭력 상담 전화는 몇번일까요?",
            options: ["112", "117", "119", "113"],
            correct: 1
        },
        {
            question: "올림픽이 몇 년마다 열리나요?",
            options: ["2년", "3년", "4년", "5년"],
            correct: 2
        }
    ],
    culture: [
        {
            question: "오늘날 표준이 되는 피아노의 건반 개수는 몇 개일까요?",
            options: ["86개", "87개", "88개", "89개"],
            correct: 2
        },
        {
            question: "테니스에서 점수를 획득하지 못한 상태인 0점을 의미하는 용어는?",
            options: ["제로", "러브", "낫싱", "블랭크"],
            correct: 1
        },
        {
            question: "육상 종목 중 하나인 마라톤은 몇 km를 달려야 할까요?",
            options: ["42.195km", "42.295km", "42.395km", "42.495km"],
            correct: 0
        },
        {
            question: "뮤지컬, 연극, 오페라, 음악회 등의 공연이 끝난 후에 관객이 박수를 보내 배우들을 다시 무대로 나오게 하는 걸 뭐라고할까요?",
            options: ["앙코르", "커튼콜", "브라보", "스탠딩"],
            correct: 1
        },
        {
            question: "좋다라는 뜻을 가진 포르투갈어로, 우리나라에서는 오렌지 주스 TV 광고로 처음 알려져서 지금까지도 널리 쓰이는 단어는?",
            options: ["따봉", "굿", "오케이", "예스"],
            correct: 0
        },
        {
            question: "낮잠을 자는 스페인의 전통적인 문화를 무엇이라고 할까?",
            options: ["시에스타", "피에스타", "만야나", "올레"],
            correct: 0
        },
        {
            question: "탁구공이 빠르게 왔다 갔다 하는 모습을 표현한 스페인어로, 축구에서 빠른 패스를 주고받는 모습을 표현할 때 쓰이는 말은?",
            options: ["티키타카", "올레올레", "바모스", "골라소"],
            correct: 0
        },
        {
            question: "간접 광고인 PPL은 무엇의 약자일까요?",
            options: ["Public Product License", "Product Placement", "Private Product Label", "Popular Product Line"],
            correct: 1
        },
        {
            question: "노벨상을 패러디하여 만들어진 상으로, 재미있고 엉뚱한 연구에 주는 상은?",
            options: ["이그노벨상", "골든라즈베리상", "다윈상", "스텔라상"],
            correct: 0
        },
        {
            question: "한국의 문구회사로, 프랑스어로 친구를 뜻하는 단어에서 유래한 회사는?",
            options: ["동아", "모나미", "제브라", "파일럿"],
            correct: 1
        },
        {
            question: "의회에서 다수당의 일방적인 법안 처리를 막기 위해 장시간 발언으로 국회의 의사진행을 지연시키는 행위를 가리키는 말은?",
            options: ["필리버스터", "로비", "캐스팅보트", "거부권"],
            correct: 0
        },
        {
            question: "옆구리를 살짝 찌른다는 의미로, 강요하지 않고 유연하게 개입하여 선택을 유도하는 효과를 나타내는 용어는?",
            options: ["나비 효과", "넛지 효과", "도미노 효과", "스노볼 효과"],
            correct: 1
        },
        {
            question: "일정 시점까지의 보도 금지를 뜻하는 대중 매체 용어는 무엇일까?",
            options: ["엠바고", "스쿠프", "특종", "단독"],
            correct: 0
        },
        {
            question: "영화 등의 줄거리에서 중요하지 않은 것을 중요한 것처럼 묘사하여 관객의 주의를 끄는 일종의 트릭을 뜻하는 용어는?",
            options: ["클리셰", "맥거핀", "스포일러", "플래시백"],
            correct: 1
        },
        {
            question: "한국의 전통 악기 중 현악기가 아닌 것은?",
            options: ["가야금", "거문고", "해금", "장구"],
            correct: 3
        },
        {
            question: "우리나라의 화폐 단위는?",
            options: ["원", "환", "전", "냥"],
            correct: 0
        },
        {
            question: "우리나라의 국조(나라새)는?",
            options: ["독수리", "까치", "학", "비둘기"],
            correct: 1
        },
        {
            question: "제주도는 삼다도라고 불리기도 하는데 삼다에 해당되지 않는 것은?",
            options: ["여자", "바람", "돌", "물"],
            correct: 3
        },
        {
            question: "다정하고 금실좋은 부부를 비유적으로 나타내는 단어는?",
            options: ["원앙부부", "잉꼬부부", "학부부", "기러기부부"],
            correct: 1
        },
        {
            question: "자라보고 놀란 가슴 ㅇㅇㅇ 보고 놀란다",
            options: ["냄비뚜껑", "솥뚜껑", "프라이팬", "주전자"],
            correct: 1
        },
        {
            question: "오리가 얼면?",
            options: ["언덕", "얼음", "동상", "빙판"],
            correct: 0
        },
        {
            question: "학을 떼다라는 표현에서 학이 의미하는 것은 무엇일까요?",
            options: ["새", "말라리아", "학교", "학문"],
            correct: 1
        },
        {
            question: "터키가 나라 이름을 튀르키예로 바꾼 이유는?",
            options: ["발음이 어려워서", "터키가 칠면조를 뜻하고 실패를 의미하는 속어로도 쓰이기 때문", "역사적 이유", "종교적 이유"],
            correct: 1
        },
        {
            question: "대한민국에서 두 번째로 큰 섬은 무엇일까요?",
            options: ["진도", "거제도", "강화도", "울릉도"],
            correct: 1
        },
        {
            question: "세계에서 가장 높은 건물은?",
            options: ["타이페이 101", "부르즈 할리파", "상하이 타워", "원월드 트레이드센터"],
            correct: 1
        },
        {
            question: "북한에서는 이것을 얼음보숭이라고 부르는데 이것은 무엇일까요?",
            options: ["빙수", "아이스크림", "얼음", "냉면"],
            correct: 1
        },
        {
            question: "아까 네넴띤 맛있었지?에서 네넴띤은 무엇일까요?",
            options: ["냉면", "비빔면", "라면", "국수"],
            correct: 1
        },
        {
            question: "아줌마 이거 마카 주쇼 마카는 무슨 뜻일까요?",
            options: ["많이", "모두", "마저", "먼저"],
            correct: 1
        },
        {
            question: "니 요즘 고뱅이 괜찮나? 고뱅이는 무슨 뜻일까요?",
            options: ["머리", "무릎", "어깨", "허리"],
            correct: 1
        },
        {
            question: "폭삭 속았수다는 무슨 뜻일까요?",
            options: ["많이 속았어요", "엄청 고생하셨어요", "정말 놀랐어요", "깜짝 놀랐어요"],
            correct: 1
        }
    ],
    life: [
        {
            question: "제주도는 삼다도라고 불리기도 하는데 삼다에 해당되는 것은?",
            options: ["여자, 바람, 돌", "바람, 돌, 물", "여자, 돌, 물", "여자, 바람, 물"],
            correct: 0
        },
        {
            question: "소음 측정단위는 데시벨이라고 하는데 기호로는 어떻게 표시하나요?",
            options: ["dB", "DB", "db", "Db"],
            correct: 0
        },
        {
            question: "국보1호였던 문화재의 이름은?",
            options: ["경복궁", "숭례문", "불국사", "석굴암"],
            correct: 1
        },
        {
            question: "학교폭력 상담 전화는 몇번일까요?",
            options: ["112", "117", "119", "113"],
            correct: 1
        },
        {
            question: "덧셈·뺄셈·곱셈·나눗셈의 네 종류의 계산법을 뭐라고 하는가?",
            options: ["사칙연산", "기본연산", "산술연산", "초등연산"],
            correct: 0
        },
        {
            question: "다정하고 금실좋은 부부를 비유적으로 나타내는 단어는?",
            options: ["원앙부부", "잉꼬부부", "학부부", "기러기부부"],
            correct: 1
        },
        {
            question: "야구공의 실밥은 총 몇개일까요?",
            options: ["106개", "107개", "108개", "109개"],
            correct: 2
        },
        {
            question: "한국의 국가 전화번호는 몇번일까?",
            options: ["81", "82", "83", "84"],
            correct: 1
        },
        {
            question: "색상 대비를 이루는 한 쌍의 색상, 즉 반대되는 색상을 의미하는 단어는?",
            options: ["보색", "원색", "중간색", "무채색"],
            correct: 0
        },
        {
            question: "우리나라의 국화는 무엇일까요?",
            options: ["장미", "무궁화", "진달래", "벚꽃"],
            correct: 1
        },
        {
            question: "지구의 자전 주기는?",
            options: ["23시간", "24시간", "25시간", "26시간"],
            correct: 1
        },
        {
            question: "물의 끓는점은 섭씨 몇 도일까요?",
            options: ["90도", "95도", "100도", "105도"],
            correct: 2
        },
        {
            question: "우리나라의 화폐 단위는?",
            options: ["원", "환", "전", "냥"],
            correct: 0
        },
        {
            question: "올림픽이 몇 년마다 열리나요?",
            options: ["2년", "3년", "4년", "5년"],
            correct: 2
        },
        {
            question: "우리나라의 국조(나라새)는?",
            options: ["독수리", "까치", "학", "비둘기"],
            correct: 1
        },
        {
            question: "1년 중 낮이 가장 긴 날은?",
            options: ["춘분", "하지", "추분", "동지"],
            correct: 1
        },
        {
            question: "지구의 대기 중 가장 많은 비율을 차지하는 기체는?",
            options: ["산소", "질소", "이산화탄소", "아르곤"],
            correct: 1
        },
        {
            question: "인체에서 가장 큰 장기는?",
            options: ["심장", "폐", "간", "신장"],
            correct: 2
        },
        {
            question: "세계에서 가장 작은 나라는?",
            options: ["모나코", "바티칸 시국", "산마리노", "리히텐슈타인"],
            correct: 1
        },
        {
            question: "컴퓨터의 두뇌 역할을 하는 부품은?",
            options: ["RAM", "CPU", "GPU", "SSD"],
            correct: 1
        },
        {
            question: "지구에서 달까지의 거리는 약 몇 km일까요?",
            options: ["약 24만 km", "약 38만 km", "약 52만 km", "약 66만 km"],
            correct: 1
        },
        {
            question: "태양계에서 가장 큰 행성은?",
            options: ["토성", "목성", "해왕성", "천왕성"],
            correct: 1
        },
        {
            question: "세계에서 가장 긴 강은?",
            options: ["아마존강", "나일강", "양쯔강", "미시시피강"],
            correct: 1
        },
        {
            question: "우리나라 최고봉은?",
            options: ["한라산", "지리산", "설악산", "백두산"],
            correct: 3
        },
        {
            question: "한국전쟁이 일어난 연도는?",
            options: ["1948년", "1949년", "1950년", "1951년"],
            correct: 2
        },
        {
            question: "조선시대 세종대왕이 만든 문자는?",
            options: ["한글", "훈민정음", "언문", "모든 답"],
            correct: 3
        },
        {
            question: "우리나라 최초의 대통령은?",
            options: ["이승만", "박정희", "김구", "안창호"],
            correct: 0
        },
        {
            question: "평창동계올림픽이 열렸던 해는 몇년도인가요?",
            options: ["2016년", "2017년", "2018년", "2019년"],
            correct: 2
        },
        {
            question: "한국의 전통 악기 중 현악기가 아닌 것은?",
            options: ["가야금", "거문고", "해금", "장구"],
            correct: 3
        },
        {
            question: "스승의 날인 5월 15일은 누구의 생일에서 유래했을까?",
            options: ["공자", "세종대왕", "퇴계 이황", "율곡 이이"],
            correct: 1
        }
    ]
};

// 레벨 정보
const levels = [
    { name: "Lv.1 퀴린이", range: [0, 5], description: "상식의 세계에 첫 발을 내디딘 초보 탐험가!" },
    { name: "Lv.2 상식유망주", range: [6, 11], description: "아는 게 하나둘 생기는 상식 루키!" },
    { name: "Lv.3 지식중급자", range: [12, 17], description: "실생활에서 빛나는 알짜 상식 보유자!" },
    { name: "Lv.4 박식고수", range: [18, 22], description: "거의 모든 분야에 빠삭한 지식인!" },
    { name: "Lv.5 인간 백과사전", range: [23, 25], description: "이 정도면 검색창보다 당신이 빠릅니다." }
];

// 주제 정보
const topicInfo = {
    geography: { name: "지리", icon: "🌍" },
    history: { name: "역사·인물", icon: "📚" },
    science: { name: "과학·기술", icon: "🔬" },
    culture: { name: "문화·예술", icon: "🎭" },
    life: { name: "생활상식", icon: "🏠" }
};

// 게임 상태
let currentTopic = '';
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;

// DOM 요소
const screens = {
    main: document.getElementById('main-screen'),
    quiz: document.getElementById('quiz-screen'),
    result: document.getElementById('result-screen')
};

const elements = {
    topicBtns: document.querySelectorAll('.topic-btn'),
    currentTopic: document.getElementById('current-topic'),
    questionCounter: document.getElementById('question-counter'),
    progressFill: document.getElementById('progress-fill'),
    questionText: document.getElementById('question-text'),
    optionBtns: document.querySelectorAll('.option-btn'),
    nextBtn: document.getElementById('next-btn'),
    finalScore: document.getElementById('final-score'),
    levelBadge: document.getElementById('level-badge'),
    levelTitle: document.getElementById('level-title'),
    levelDescription: document.getElementById('level-description'),
    correctCount: document.getElementById('correct-count'),
    wrongCount: document.getElementById('wrong-count'),
    accuracy: document.getElementById('accuracy'),
    retryBtn: document.getElementById('retry-btn'),
    homeBtn: document.getElementById('home-btn')
};

// 이벤트 리스너
elements.topicBtns.forEach(btn => {
    btn.addEventListener('click', () => startQuiz(btn.dataset.topic));
});

elements.optionBtns.forEach(btn => {
    btn.addEventListener('click', () => selectAnswer(btn));
});

elements.nextBtn.addEventListener('click', nextQuestion);
elements.retryBtn.addEventListener('click', () => startQuiz(currentTopic));
elements.homeBtn.addEventListener('click', showMainScreen);

// 화면 전환 함수
function showScreen(screenName) {
    Object.values(screens).forEach(screen => screen.classList.remove('active'));
    screens[screenName].classList.add('active');
}

function showMainScreen() {
    showScreen('main');
    resetGame();
}

// 게임 시작
function startQuiz(topic) {
    currentTopic = topic;
    currentQuestions = getRandomQuestions(topic, 25);
    currentQuestionIndex = 0;
    score = 0;
    
    elements.currentTopic.textContent = `${topicInfo[topic].icon} ${topicInfo[topic].name}`;
    
    showScreen('quiz');
    showQuestion();
}

// 랜덤 문제 선택
function getRandomQuestions(topic, count) {
    const questions = [...quizData[topic]];
    const shuffled = questions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.min(count, questions.length));
}

// 문제 표시
function showQuestion() {
    const question = currentQuestions[currentQuestionIndex];
    
    elements.questionCounter.textContent = `${currentQuestionIndex + 1} / ${currentQuestions.length}`;
    elements.progressFill.style.width = `${((currentQuestionIndex + 1) / currentQuestions.length) * 100}%`;
    elements.questionText.textContent = question.question;
    
    elements.optionBtns.forEach((btn, index) => {
        btn.querySelector('.option-text').textContent = question.options[index];
        btn.classList.remove('selected', 'correct', 'wrong');
        btn.disabled = false;
    });
    
    elements.nextBtn.disabled = true;
    selectedAnswer = null;
}

// 답안 선택
function selectAnswer(selectedBtn) {
    if (selectedAnswer !== null) return;
    
    const question = currentQuestions[currentQuestionIndex];
    const selectedIndex = Array.from(elements.optionBtns).indexOf(selectedBtn);
    
    selectedAnswer = selectedIndex;
    selectedBtn.classList.add('selected');
    
    // 정답 표시
    elements.optionBtns[question.correct].classList.add('correct');
    
    // 오답 표시
    if (selectedIndex !== question.correct) {
        selectedBtn.classList.add('wrong');
    } else {
        score++;
    }
    
    // 모든 버튼 비활성화
    elements.optionBtns.forEach(btn => btn.disabled = true);
    elements.nextBtn.disabled = false;
}

// 다음 문제
function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < currentQuestions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

// 결과 표시
function showResult() {
    const level = getLevelByScore(score);
    const accuracy = Math.round((score / currentQuestions.length) * 100);
    
    elements.finalScore.textContent = `${score} / ${currentQuestions.length}`;
    elements.levelBadge.textContent = level.name;
    elements.levelTitle.textContent = level.name;
    elements.levelDescription.textContent = level.description;
    elements.correctCount.textContent = score;
    elements.wrongCount.textContent = currentQuestions.length - score;
    elements.accuracy.textContent = `${accuracy}%`;
    
    showScreen('result');
}

// 점수로 레벨 계산
function getLevelByScore(score) {
    for (let level of levels) {
        if (score >= level.range[0] && score <= level.range[1]) {
            return level;
        }
    }
    return levels[0]; // 기본값
}

// 게임 리셋
function resetGame() {
    currentTopic = '';
    currentQuestions = [];
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswer = null;
}

