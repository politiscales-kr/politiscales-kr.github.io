"use strict";

var questions = [
  // Constructivism/Essentialism
  {
    question: "“태어나는 것이 아닌, 되는 것이 하나 있습니다. 바로 여성입니다.” <i>(남성/여성은 생물학적으로 타고나는 것이 아니라, 사회가 만드는 것이라고 생각합니다.)</i>",
    answer: 0,
    valuesYes: [
      {
        axis: "c0",
        value: 3
      },
      {
        axis: "femi",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "c1",
        value: 3
      }
    ]
  },
  {
    question:
      "인종 간의 처우와 삶의 질 차이는 우리 사회에 인종차별이 여전히 만연해 있음을 뜻합니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "c0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "c1",
        value: 3
      }
    ]
  },
  {
    question:
      "화학과 생물학을 포함한 과학은 사실 엄밀하지 않으며, 우리 사회에서 큰 영향을 받습니다. <i>(과학이 추구하는 “엄밀함”과는 달리, 과학에는 정치와 같은 사회적 요소들이 개입하기도 합니다.)</i>",
    answer: 0,
    valuesYes: [
      {
        axis: "c0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "c1",
        value: 3
      }
    ]
  },
  {
    question:
      "“여성”과 “남성”이라는 사회적 구분은 사라져야만 합니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "c0",
        value: 3
      },
      {
        axis: "femi",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "c1",
        value: 3
      }
    ]
  },
  {
    question: "그 누구도 본질적으로 범죄에 취약하지 않습니다. <i>(신체적 조건과 같은 생물학적으로 타고나는 것들은 범죄와 관련이 없습니다.)</i>",
    answer: 0,
    valuesYes: [
      {
        axis: "c0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "c1",
        value: 3
      }
    ]
  },
  {
    question: "성적 지향은 사회에 의해 만들어 집니다. <i>(이성애/동성애/양성애와 같은 성적 지향은 생물학적으로 타고나는 것이 아닌 사회가 만드는 것이라고 생각합니다.)</i>",
    answer: 0,
    valuesYes: [
      {
        axis: "c0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "c1",
        value: 3
      }
    ]
  },
  {
    question:
      "인종 간의 사회적 차이는 생물학으로 설명될 수 없습니다. <i>(인종 간의 서로 다른 문화와 같은 차이점들은 타고나는 것이 아닌 성장 환경 등의 차이입니다.)</i>",
    answer: 0,
    valuesYes: [
      {
        axis: "c0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "c1",
        value: 3
      }
    ]
  },
  {
    question:
      "남성과 여성의 서로 다른 사회적 역할은 부분적으로 생물학적 차이에 의해 설명될 수 있습니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "c1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "c0",
        value: 3
      },
      {
        axis: "femi",
        value: 3
      }
    ]
  },
  {
    question:
      "호르몬의 차이는 여성과 남성사이의 차이 일부를 설명할 수 있습니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "c1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "c0",
        value: 3
      },
      {
        axis: "femi",
        value: 3
      }
    ]
  },
  {
    question: "성폭행은 부분적으로 남성/여성의 자연스러운 충동에 의해 일어납니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "c1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "c0",
        value: 3
      },
      {
        axis: "femi",
        value: 3
      }
    ]
  },
  {
    question:
      "트랜스젠더는 진정으로 원하는 성별이 될 수 없습니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "c1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "c0",
        value: 3
      }
    ]
  },
  {
    question:
      "몇 가지의 절대적인 특징을 이용해, 특정 국가 또는 문화권에 속한 사람들을 구분해 낼 수 있습니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "c1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "c0",
        value: 3
      }
    ]
  },
  {
    question: "생물학적으로, 인간은 이성애를 위해 설계되었습니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "c1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "c0",
        value: 3
      }
    ]
  },
  {
    question:
      "이기심은 상황에 관계없이, 언제나 인간종의 주된 원동력이었습니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "c1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "c0",
        value: 3
      }
    ]
  },
  // Internationalism/Nationalism
  {
    question: "국경은 결국 사라져야만 합니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "b0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "b1",
        value: 3
      }
    ]
  },
  {
    question:
      "국가를 등지게 되더라도, 사람들은 이상을 위해 일어나야 합니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "b0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "b1",
        value: 3
      }
    ]
  },
  {
    question:
      "우리나라는 우리 국민이 다른 나라에서 저지른 범죄에 대해서도 배상해야만 합니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "b0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "b1",
        value: 3
      }
    ]
  },
  {
    question:
      "어떤 두 나라가 서로 비슷한 경제 및 사회 시스템, 그리고 환경 규제를 가지고 있다면, 두 나라 사이에 자유시장은 두 나라 모두에 유익할 것입니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "b0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "b1",
        value: 3
      }
    ]
  },
  {
    question:
      "스포츠 경기 중, 국가 우월주의<i>Chauvinism</i>는 허용되지 않아야 합니다. <i>(스포츠 경기 중에도, 다른 국가/민족을 배척하거나 우리 국가/민족의 우월함을 드러나는 태도는 금지되어야 합니다.)</i>",
    answer: 0,
    valuesYes: [
      {
        axis: "b0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "b1",
        value: 3
      }
    ]
  },
  {
    question:
      "“전 제 나라의 주민들과 똑같이 다른 나라의 주민들에 대해서도 걱정하고 있습니다”.",
    answer: 0,
    valuesYes: [
      {
        axis: "b0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "b1",
        value: 3
      }
    ]
  },
  {
    question:
      "우리나라에 사는 외국인들은, 우리나라의 국민들과 동등하게 정치적으로 행동할 수 있어야 합니다. <i>(외국인들도 내국인과 같이 시위, 노조, 단체 등을 자유롭게 결성할 수 있어야 합니다.)</i>",
    answer: 0,
    valuesYes: [
      {
        axis: "b0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "b1",
        value: 3
      }
    ]
  },
  {
    question: "시민이 외국인보다 우선이어야 합니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "b1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "b0",
        value: 3
      }
    ]
  },
  {
    question:
      "우리 나라의 가치는 다른 나라의 가치보다 우월합니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "b1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "b0",
        value: 3
      }
    ]
  },
  {
    question: "다문화주의는 우리 사회에 위협이 됩니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "b1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "b0",
        value: 3
      }
    ]
  },
  {
    question: "좋은 시민은 곧 애국자입니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "b1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "b0",
        value: 3
      }
    ]
  },
  {
    question:
      "경제적 이익을 지키기 위한 국가의 군사적 개입은 정당합니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "b1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "b0",
        value: 3
      }
    ]
  },
  {
    question:
      "민족의식을 심어주기 위해 역사교육은 꼭 필요합니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "b1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "b0",
        value: 3
      }
    ]
  },
  {
    question:
      "우리나라에서 진행된 연구는 다른 나라에서 사용할 수 없어야만 합니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "b1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "b0",
        value: 3
      }
    ]
  },
  // Communism/Capitalism
  {
    question:
      "그 누구도 기업, 집, 땅을 소유함으로써 부자가 되어서는 안 됩니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "p0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "p1",
        value: 3
      }
    ]
  },
  {
    question: "임금 노동은 노동자에 대한 기업의 도둑질의 한 형태입니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "p0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "p1",
        value: 3
      }
    ]
  },
  {
    question: "의료가 국가에 의해 관리 되는 것은 중요합니다. <i>(의료 분야가 민영화되어서는 안 됩니다.)</i>",
    answer: 0,
    valuesYes: [
      {
        axis: "p0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "p1",
        value: 3
      }
    ]
  },
  {
    question: "에너지 및 수송은 국가에 의해 관리되어야 합니다. <i>(전기나 도로와 같은 분야는 언제나 국가에 의해 운영되어야 합니다.)</i>",
    answer: 0,
    valuesYes: [
      {
        axis: "p0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "p1",
        value: 3
      }
    ]
  },
  {
    question: "특허 제도는 사라져야 합니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "p0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "p1",
        value: 3
      }
    ]
  },
  {
    question:
      "공산품을 소비자들의 필요에 따라 분배하기 위한 법을 만드는 것은 필연적이어야 합니다. <i>(필요에 따라 분배되어야만 합니다.)</i>",
    answer: 0,
    valuesYes: [
      {
        axis: "p0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "p1",
        value: 3
      }
    ]
  },
  {
    question: "노동 시장은 노동자를 노예로 만듭니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "p0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "p1",
        value: 3
      }
    ]
  },
  {
    question: "자신의 이익을 추구하는 것은 경제에 있어 긍정적입니다. <i>(이익 추구가 곧 건강한 시장을 만듭니다.)</i>",
    answer: 0,
    valuesYes: [
      {
        axis: "p1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "p0",
        value: 3
      }
    ]
  },
  {
    question:
      "두 개인 사이의 부의 차이는 두 개인 사이의 역량 차이에서 나옵니다. <i>(개인의 재능과 같은 역량이 곧 개인의 재산을 결정합니다.)</i>",
    answer: 0,
    valuesYes: [
      {
        axis: "p1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "p0",
        value: 3
      }
    ]
  },
  {
    question:
      "일부 학교와 대학이 사립이라는 사실은 문제가 되지 않습니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "p1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "p0",
        value: 3
      }
    ]
  },
  {
    question:
      "해외 위탁을 포함한 용역과 하청은 생산성을 높이기 위한 필요악입니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "p1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "p0",
        value: 3
      }
    ]
  },
  {
    question: "부자와 가난한 사람이 있다는 것은 받아들일 수 있습니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "p1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "p0",
        value: 3
      }
    ]
  },
  {
    question: "일부 산업 분야가 민영인 것은 받아들일 수 있습니다. <i>(건설업과 같은 일부 산업 분야는 민간이 운영해도 좋습니다.)</i>",
    answer: 0,
    valuesYes: [
      {
        axis: "p1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "p0",
        value: 3
      }
    ]
  },
  {
    question: "은행은 사기업으로 유지되어야 합니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "p1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "p0",
        value: 3
      }
    ]
  },
  // Regulation/Laissez-faire
  {
    question: "부의 재분배를 위해서는 수입과 재산 모두에 세금이 부과되어야 합니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "m0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "m1",
        value: 3
      }
    ]
  },
  {
    question: "정년은 낮아져야만 합니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "m0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "m1",
        value: 3
      }
    ]
  },
  {
    question:
      "정당한 이유가 있는 경우를 제외하면, 직원의 해고는 완전히 금지되어야만 합니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "m0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "m1",
        value: 3
      }
    ]
  },
  {
    question:
      "근로자가 일을 하며 생활할 수 있도록 최소한의 급여가 보장되어야만 합니다. <i>(최저임금은 보장되어야만 합니다.)</i>",
    answer: 0,
    valuesYes: [
      {
        axis: "m0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "m1",
        value: 3
      }
    ]
  },
  {
    question: "사적 독점은 피할 필요가 있습니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "m0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "m1",
        value: 3
      }
    ]
  },
  {
    question:
      "지역자치단체, 주민공동체와 같은 공공기관에서 받은 대출은 꼭 상환할 필요가 없습니다. ",
    answer: 0,
    valuesYes: [
      {
        axis: "m0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "m1",
        value: 3
      }
    ]
  },
  {
    question:
      "일부 직종 및 고용 유형은 재정적으로 지원되어야 합니다. <i>(사회간접자본을 이루는 직종 또는 사회적 기업, 사회적 약자 특별 채용 등에 대해 정부의 재정적 지원이 필요합니다.)</i>",
    answer: 0,
    valuesYes: [
      {
        axis: "m0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "m1",
        value: 3
      }
    ]
  },
  {
    question: "시장경제는 규제되지 않을 때 가장 좋습니다. <i>(시장경제는 자유로울 때 가장 효율적입니다.)</i>",
    answer: 0,
    valuesYes: [
      {
        axis: "m1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "m0",
        value: 3
      }
    ]
  },
  {
    question:
      "오늘날의 노동자들은 이직 과정에서 자유롭게 협상할 수 있습니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "m1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "m0",
        value: 3
      }
    ]
  },
  {
    question:
      "기업의 고용을 장려하기 위해, 노동법의 여러 규정을 제거해야만 합니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "m1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "m0",
        value: 3
      }
    ]
  },
  {
    question:
      "법정 근로시간은 늘어나야만 합니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "m1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "m0",
        value: 3
      }
    ]
  },
  {
    question:
      "환경 규제는 규제당국이 아닌 대량소비<i>Mass Consumption</i>에 영향을 받아야 합니다. <i>(환경 규제는 포괄적인 행정 절차보다, 규격화된 대량 소비에 맞춰 정해져야 합니다.)</i>",
    answer: 0,
    valuesYes: [
      {
        axis: "m1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "m0",
        value: 3
      }
    ]
  },
  {
    question: "사회 복지는 사람들이 일하지 못 하게 합니다. <i>(사회복지는 사람들을 나태하게 만듭니다.)</i>",
    answer: 0,
    valuesYes: [
      {
        axis: "m1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "m0",
        value: 3
      }
    ]
  },
  {
    question:
      "국영기업 역시 사기업과 같이, 경쟁이나 수익성과 같은 시장논리에 따라 운영되어야만 합니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "m1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "m0",
        value: 3
      }
    ]
  },
  // Progressive/Conservative
  {
    question: "전통에는 의문을 가져야 합니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "s0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "s1",
        value: 3
      }
    ]
  },
  {
    question:
      "우리나라에 이미 존재하는 공용어에 다른 언어를 추가하거나, 다른 언어로 공용어가 교체된다고 해도 문제없이 받아들일 수 있습니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "s0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "s1",
        value: 3
      }
    ]
  },
  {
    question: "결혼은 폐지되어야만 합니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "s0",
        value: 3
      },
      {
        axis: "femi",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "s1",
        value: 3
      }
    ]
  },
  {
    question: "외국인은 우리 문화를 풍요롭게 만듭니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "s0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "s1",
        value: 3
      }
    ]
  },
  {
    question: "종교의 영향력은 줄어들어야만 합니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "s0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "s1",
        value: 3
      }
    ]
  },
  {
    question: "언어는 학자들이 아닌 사용자들에 의해 정의됩니다. <i>(정교한 어문 규정보다는 여러 신조어가 “우리 말”에 더 가깝습니다.)</i>",
    answer: 0,
    valuesYes: [
      {
        axis: "s0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "s1",
        value: 3
      }
    ]
  },
  {
    question: "안락사는 허용되어야만 합니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "s0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "s1",
        value: 3
      }
    ]
  },
  {
    question:
      "동성애자들은 결혼, 출산, 입양에 있어 이성애자들과 동등하게 취급되어서는 안 됩니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "s1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "s0",
        value: 3
      }
    ]
  },
  {
    question: "일부 특별한 상황에서는 사형이 정당화될 수 있습니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "s1",
        value: 3
      },
      {
        axis: "j1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "s0",
        value: 3
      },
      {
        axis: "j0",
        value: 3
      }
    ]
  },
  {
    question: "기술 발전이 사회를 너무 빠르게 변화시켜서는 안 됩니다. <i>(기술은 사회를 너무 빠르게 변화시키지 않도록 조심스럽게 적용되어야 합니다.)</i>",
    answer: 0,
    valuesYes: [
      {
        axis: "s1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "s0",
        value: 3
      }
    ]
  },
  {
    question:
      "학교는 주로 우리의 가치, 전통, 그리고 기본 원칙들을 가르쳐야 합니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "s1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "s0",
        value: 3
      }
    ]
  },
  {
    question: "낙태는 특별한 상황에서만 허용되어야 합니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "s1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "s0",
        value: 3
      },
      {
        axis: "femi",
        value: 3
      }
    ]
  },
  {
    question: "부부의 중요한 목표는 적어도 한 명의 자녀를 만드는 것입니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "s1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "s0",
        value: 3
      }
    ]
  },
  {
    question:
      "“성행위”의 본질을 지키기 위해서는, 피임보다는 금욕이 더 좋습니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "s1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "s0",
        value: 3
      }
    ]
  },
  // Ecology/Production
  {
    question:
      "인간의 활동이 생물종의 멸종으로 이어진다는 것은 용납할 수 없습니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "e0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "e1",
        value: 3
      }
    ]
  },
  {
    question: "연구 및 의료목적을 제외한 모든 유전자조작<i>GMO</i>은 금지되어야 합니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "e0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "e1",
        value: 3
      }
    ]
  },
  {
    question: "우리는 지구 온난화에 맞서 싸워야 합니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "e0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "e1",
        value: 3
      }
    ]
  },
  {
    question:
      "우리는 자연을 지키기 위해 새로운 음식 소비 방식을 받아들여야만 합니다. <i>(우리는 곤충 요리나 배양육, 채식과 같은 새로운 식문화를 받아들여야만 합니다.)</i>",
    answer: 0,
    valuesYes: [
      {
        axis: "e0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "e1",
        value: 3
      }
    ]
  },
  {
    question:
      "생산량이 줄어드는 한이 있더라도, 생물 다양성<i>Biodiversity</i>을 유지하는 농업이 장려되어야 합니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "e0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "e1",
        value: 3
      }
    ]
  },
  {
    question:
      "교외 생태계 보전이 일자리 창출보다 더 중요합니다. <i>(그린벨트 보전을 비롯한 교외 생태계 보전이 일자리 창출보다 더 중요합니다.)</i>",
    answer: 0,
    valuesYes: [
      {
        axis: "e0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "e1",
        value: 3
      }
    ]
  },
  {
    question: "폐기물을 줄이기 위해서는 생산량을 줄여야만 합니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "e0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "e1",
        value: 3
      }
    ]
  },
  {
    question:
      "우주 개발은 지구에 부족한 철, 희토류, 연료와 같은 원자재를 얻기 위한 좋은 해결책입니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "e1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "e0",
        value: 3
      }
    ]
  },
  {
    question:
      "우리 삶의 질을 높이기 위해, 생태계를 지속해서 변화시키는 것은 정당합니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "e1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "e0",
        value: 3
      }
    ]
  },
  {
    question:
      "생산성 향상을 위한 연구에 큰 투자가 필요합니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "e1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "e0",
        value: 3
      }
    ]
  },
  {
    question:
      "인간 개량<i>Transhumanism</i>은 우리의 역량을 끌어올릴 수 있기 때문에 유익할 것입니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "e1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "e0",
        value: 3
      }
    ]
  },
  {
    question:
      "잘 관리된다면, 핵분열은 좋은 에너지원입니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "e1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "e0",
        value: 3
      }
    ]
  },
  {
    question: "화석 연료의 개발은 꼭 필요합니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "e1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "e0",
        value: 3
      }
    ]
  },
  {
    question:
      "정부의 주된 목표 중 하나는 강력한 경제 성장을 유지하는 것입니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "e1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "e0",
        value: 3
      }
    ]
  },
  // Rehabilitative Justice/Punitive Justice
  {
    question: "감옥은 사라져야만 합니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "j0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "j1",
        value: 3
      }
    ]
  },
  {
    question:
      "범죄에 대해 최소 처벌 기준이 있는 것은 불공평합니다. <i>(최소 형량이 있다는 이유로, 최소 형량보다 낮은 형량을 선고하지 못하는 것은 불공평합니다.)</i>",
    answer: 0,
    valuesYes: [
      {
        axis: "j0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "j1",
        value: 3
      }
    ]
  },
  {
    question:
      "감옥에서 나온 사람은 사회로 돌아갈 수 있도록 충분한 도움을 받아야만 합니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "j0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "j1",
        value: 3
      }
    ]
  },
  {
    question:
      "범죄의 배경과 범죄자의 과거를 생각해 처벌을 유연하게 조절하는 것이 곧 정의입니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "j0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "j1",
        value: 3
      }
    ]
  },
  {
    question: "교도소의 환경은 크게 개선되어야만 합니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "j0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "j1",
        value: 3
      }
    ]
  },
  {
    question:
      "개인정보는 엄격하게 격리된 채 보관되어야 하며, 데이터베이스 교차 확인은 금지되어야만 합니다. <i>(개인정보는 철저히 보호되어야 하며, 서로 다른 데이터베이스를 비교해 사용자를 추적해서는 안 됩니다.)</i>",
    answer: 0,
    valuesYes: [
      {
        axis: "j0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "j1",
        value: 3
      }
    ]
  },
  {
    question: "인터넷에서의 익명성은 보장되어야만 합니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "j0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "j1",
        value: 3
      }
    ]
  },
  {
    question:
      "사법제도의 목적은 곧 법을 어긴 사람을 처벌하는 것입니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "j1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "j0",
        value: 3
      }
    ]
  },
  {
    question: "경찰은 무장해야<i>Armed</i> 합니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "j1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "j0",
        value: 3
      }
    ]
  },
  {
    question:
      "테러를 막기 위해, 시민들의 일부 자유는 희생될 수 있습니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "j1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "j0",
        value: 3
      }
    ]
  },
  {
    question: "질서와 권위는 어떤 상황에서도 존중되어야만 합니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "j1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "j0",
        value: 3
      }
    ]
  },
  {
    question: "무거운 처벌은 범죄를 막도록 “설득”할 수 있기 때문에 효율적입니다. <i>(처벌받을 수 있다는 공포가 범죄를 막을 수 있기에, 무거운 처벌은 효율적입니다.)</i>",
    answer: 0,
    valuesYes: [
      {
        axis: "j1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "j0",
        value: 3
      }
    ]
  },
  {
    question:
      "잠재적으로 범죄를 저지를 가능성이 있는 사람을 먼저 체포하는 것이 범죄를 저지른 사람을 체포하는 것보다 더 좋습니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "j1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "j0",
        value: 3
      }
    ]
  },
  // Revolution/Reform
  {
    question: "대규모 파업은 새로운 권리를 얻기 위한 좋은 방법입니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "t0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "t1",
        value: 3
      }
    ]
  },
  {
    question: "때로는 무력투쟁이 꼭 필요할 때가 있습니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "t0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "t1",
        value: 3
      }
    ]
  },
  {
    question: "사회를 근본적으로 바꾸기 위해서는 폭동<i>Insurrection</i>이 꼭 필요합니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "t0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "t1",
        value: 3
      }
    ]
  },
  {
    question:
      "기존 정치 조직의 행동은 결국 사회를 변화시키지 못했습니다. <i>(사회를 변화시키기 위해서는 더 강한 행동이 필요합니다.)</i>",
    answer: 0,
    valuesYes: [
      {
        axis: "t0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "t1",
        value: 3
      }
    ]
  },
  {
    question:
      "국가가 주최한 선거로는 국가를 바꿀 수 없습니다. <i>(국가는 선거로 권력을 뒤바꾸는 것을 두고 보고 있지 않을 것입니다.)</i>",
    answer: 0,
    valuesYes: [
      {
        axis: "t0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "t1",
        value: 3
      }
    ]
  },
  {
    question: "컴퓨터 취약점 공격은 정치적 투쟁에 있어 정당합니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "t0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "t1",
        value: 3
      }
    ]
  },
  {
    question: "태업<i>Sabotage</i>은 특별한 조건 아래 합법입니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "t0",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "t1",
        value: 3
      }
    ]
  },
  {
    question: "운동가<i>Activist</i>는 항상 법률안에서 행동해야 합니다. <i>(운동가들은 법을 지키며 활동해야 합니다.)</i>",
    answer: 0,
    valuesYes: [
      {
        axis: "t1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "t0",
        value: 3
      }
    ]
  },
  {
    question: "혁명은 항상 나쁜 방향으로 끝날 것입니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "t1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "t0",
        value: 3
      }
    ]
  },
  {
    question:
      "시스템을 급진적으로 바꾸는 것은 비효율적입니다. 오히려 점진적으로 바꿔 나가는 것이 효율적입니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "t1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "t0",
        value: 3
      }
    ]
  },
  {
    question: "개인에 대한 폭력은 결코 생산적이지 않습니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "t1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "t0",
        value: 3
      }
    ]
  },
  {
    question:
      "우리는 항상 폭력을 사용하는 시위대와 거리를 둬야만 합니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "t1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "t0",
        value: 3
      }
    ]
  },
  {
    question:
      "우리의 아이디어를 적용하기 위해서는 반대측과 타협할 필요가 있습니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "t1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "t0",
        value: 3
      }
    ]
  },
  {
    question:
      "개인의 생활 방식을 바꿈으로써 사회의 변화를 끌어낼 수 있습니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "t1",
        value: 3
      }
    ],
    valuesNo: [
      {
        axis: "t0",
        value: 3
      }
    ]
  },
  // Bonus Badges
  {
    question: "“제 종교는 가능한 한 넓게 퍼져야 합니다”.",
    answer: 0,
    valuesYes: [
      {
        axis: "reli",
        value: 3
      }
    ],
    valuesNo: []
  },
  {
    question: "좋은 정책은 이념과 관련 없이 실용적인 정책입니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "prag",
        value: 3
      }
    ],
    valuesNo: []
  },
  {
    question:
      "국민들을 규합하고 주권을 지키기 위해서는 군주제가 필요합니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "mona",
        value: 3
      }
    ],
    valuesNo: []
  },
  {
    question: "인간은 동물을 먹거나 착취해서는 안 됩니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "vega",
        value: 3
      }
    ],
    valuesNo: []
  },
  {
    question: "국가는 폐지되어야만 합니다.",
    answer: 0,
    valuesYes: [
      {
        axis: "anar",
        value: 3
      }
    ],
    valuesNo: []
  }
];

var qn = 0; // Question number
var prev_answer = null;

function shuffle(array) {
  var i = 0,
    j = 0,
    temp = null;

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}
shuffle(questions);

init_question();

function init_question() {
  document.getElementById("question-text").innerHTML = questions[qn].question;
  document.getElementById(
    "question-number"
  ).innerHTML = "%sum%개 중 %num%번째 질문"
    .replace("%num%", qn + 1)
    .replace("%sum%", questions.length);
  if (qn == 0) {
    document.getElementById("back_button").style.display = "none";
    document.getElementById("back_button_off").style.display = "block";
  } else {
    document.getElementById("back_button").style.display = "block";
    document.getElementById("back_button_off").style.display = "none";
  }
}

function next_question(mult) {
  questions[qn].answer = mult;
  qn++;

  if (qn < questions.length) {
    init_question();
  } else {
    results();
  }
}
function prev_question() {
  if (qn == 0) {
    return;
  }
  qn--;
  init_question();
}

function calc_score(score, max_value) {
  return ((100 * score) / max_value).toFixed(0);
}

function results() {
  var axes = {};

  for (var i = 0; i < questions.length; i++) {
    var q = questions[i];

    for (var j = 0; j < q.valuesYes.length; j++) {
      var a = q.valuesYes[j];
      if (!(a.axis in axes)) {
        axes[a.axis] = {
          val: 0,
          sum: 0
        };
      }

      if (q.answer > 0) {
        axes[a.axis].val += q.answer * a.value;
      }
      axes[a.axis].sum += Math.max(a.value, 0);
    }

    for (var j = 0; j < q.valuesNo.length; j++) {
      var a = q.valuesNo[j];
      if (!(a.axis in axes)) {
        axes[a.axis] = {
          val: 0,
          sum: 0
        };
      }

      if (q.answer < 0) {
        axes[a.axis].val -= q.answer * a.value;
      }
      axes[a.axis].sum += Math.max(a.value, 0);
    }
  }

  var url = "";
  for (var aK in axes) {
    if (axes[aK].val > 0) {
      if (url != "") url += "&";
      url += aK + "=" + calc_score(axes[aK].val, axes[aK].sum);
    }
  }
  url = window.btoa(url);
  url = "/results/?" + url;

  location.href = url;
}
