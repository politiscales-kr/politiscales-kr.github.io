"use strict";

var questions = [
  // Constructivism/Essentialism
  {
    question: "“태어나지 않고, 되는 것이 하나 있습니다. 바로 여성입니다.” <i>(남성/여성은 생물학적으로 타고 나는 것이 아니라, 사회가 만드는 것 이라고 생각합니다.)</i>",
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
      "인종간의 처우와 삶의 질 차이는 우리 사회에 인종차별이 여전히 만연해 있음을 뜻합니다.",
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
      "화학과 생물학을 포함한 과학은 사실 엄밀하지 않으며, 우리 사회에서 큰 영향을 받습니다. <i>(과학이 추구하는 '엄밀함'과는 달리, 과학에는 정치와 같은 사회적 요소들이 개입하기도 합니다.)</i>",
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
    question: "그 누구도 본질적으로 범죄에 취약하지 않습니다. <i>(신체적 조건과 같이 생물학적으로 타고 나는 것들은 범죄와 관련이 없습니다.)</i>",
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
    question: "성적 지향은 사회에 의해 만들어 집니다. <i>(이성애/동성애/양성애와 같은 성적 지향은 생물학적으로 타고 나는 것이 아닌 사회가 만드는 것 이라고 생각합니다.)</i>",
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
      "인종간의 사회적 차이는 생물학으로 설명될 수 없습니다. <i>(인종간의 서로 다른 문화와 같은 차이점들은 타고 나는 것이 아닌 성장 환경 등의 차이입니다.)</i>",
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
    question: "Sexual assaults are partly caused by men’s natural impulse.",
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
      "이기심은 상황에 관계 없이, 언제나 인간 종의 주된 원동력 이었습니다.",
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
      "국가를 등지게 되더라도, 사람들은 이상을 위해 일어나야 합니다. <i>(국민은 국가를 등지게 될지라도, 자신의 이상을 위해 일어날 수 있어야 합니다.)</i>",
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
      "우리 나라는 우리 국민이 다른 나라에서 저지른 범죄에 대해서도 배상해야만 합니다.",
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
      "어떤 두 나라가 비슷한 경제 및 사회 시스템, 그리고 환경 규제를 가지고 있다면, 두 국가 사이의 자유 시장은 부정적 영향을 주고 받지 않을 것 입니다.",
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
      "스포츠 경기 중, 국가 우월주의(쇼비니즘)는 허용되지 않아야 합니다. <i>(스포츠 경기 중에도, 다른 국가/민족을 배척하거나 우리 국가/민족의 우월함을 드러나는 태도는 금지되어야 합니다.)</i>",
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
      "'전 제 나라의 주민들과 똑같이 다른 나라의 주민들에 대해서도 걱정하고 있습니다.'",
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
      "그 누구도 기업, 집, 땅을 소유함으로서 부자가 되어서는 안 됩니다.",
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
    question: "의료가 국가에 의해 관리 되는 것은 중요합니다. <i>(의료 분야는 민영화 되어서는 안 됩니다.)</i>",
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
    question: "에너지 및 수송은 국가에 의해 관리되어야 합니다. <i>(전기와 도로와 같은 분야는 언제나 국가에 의해 운영되어야 합니다.)</i>",
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
    question: "The labor market enslaves workers.",
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
    question: "Looking for one’s own profit is healthy for the economy.",
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
      "해외 위탁을 포함한 용역과 하청은 생산성을 높이기 위한 필요악 입니다.",
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
    question: "일부 산업 분야가 민영인 것은 받아들일 수 있습니다. <i>(건설업이나 공공시설 운영과 같은 일부 산업 분야는 민간이 운영해도 좋습니다.)</i>",
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
      "Minimal levels of salary should be ensured to make sure that a worker can live of their work.",
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
      "일부 직종 및 고용 유형은 재정적으로 지원되어야 합니다. <i>(사회간접자본을 이루는 직종 또는 사회적 기업, 사회적 약자 특별 채용 등은 정부가 제정적 지원을 제공해야만 합니다.)</i>",
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
      "오늘날의 고용인들은 미래의 고용주와 계약을 체결할 때, 자유롭게 선택할 수 있습니다. <i>(오늘날의 노동자들은, 이직 과정에서 자유롭게 협상할 수 있습니다.)</i>",
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
      "기업의 고용을 장려하기 위해, 노동법의 여러 규정들을 제거해야만 합니다.",
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
      "환경 규제는 규제당국이 아닌 대량소비(Mass Consumption)에 영향을 받아야 합니다. <i>(환경 규제는 포괄적인 행정 절차보다, 규격화된 대량 소비에 맞춰 정해져야 합니다.)</i>",
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
    question: "사회 복지는 사람들이 일을 하지 못 하게 합니다. <i>(사회복지는 사람들을 나태하게 만듭니다.)</i>",
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
      "국영기업 역시 사기업과 같이, 경쟁과 수익성과 같은 시장논리에 따라 운영되어야만 합니다.",
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
    question: "Traditions should be questioned.",
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
      "I do not have any problem if other official languages are added or replace the already existing official language in my country.",
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
    question: "Marriage should be abolished.",
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
    question: "Foreigners enrich our culture.",
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
    question: "The influence of religion should decrease.",
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
    question: "A language is defined by its users, not by scholars.",
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
    question: "Euthanasia should be authorized.",
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
      "Homosexuals should not be treated equally to heterosexuals with regards to marriage, parentage, adoption or procreation.",
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
    question: "In some specific conditions, the death penalty is justified.",
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
    question: "Technological progress must not change society too quickly.",
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
      "School should mostly teach our values, traditions, and fundamental knowledge.",
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
    question: "Abortion should be limited to specific cases.",
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
    question: "The main goal of a couple is to make at least one child.",
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
      "Abstinence should be preferred to contraception, to preserve the true nature of the sexual act.",
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
      "It is not acceptable that human actions should lead to the extinction of species.",
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
    question: "GMOs should be forbidden outside research and medical purposes.",
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
    question: "We must fight against global warming.",
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
      "We should accept changes in our way of consuming food to limit the exploitation of nature.",
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
      "It is important to encourage an agriculture that maintains a food biodiversity, even if the output is inferior.",
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
      "Preserving non-urban ecosystems is more important than creating jobs.",
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
    question: "Reduction of waste should be done by reducing production.",
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
      "Space colonization is a good solution for supplying the lack of raw material on Earth (iron, rare metals, fuel...)",
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
      "Transforming ecosystems durably to increase the quality of life of human beings is legitimate.",
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
      "It is necessary to massively invest in research to improve productivity.",
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
      "Trans-humanism will be beneficial because it will allow us to improve our capacities.",
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
      "Nuclear fission, when well maintained, is a good source of energy.",
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
    question: "Exploitation of fossil fuels is necessary.",
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
      "Maintaining strong economic growth should be an objective for the government.",
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
    question: "Prisons should no longer exist.",
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
      "It is unfair to set a minimal penalty for an offense or a crime.",
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
      "Individuals who get out of prison should be assisted in their reinsertion.",
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
      "Justice should always take into consideration the context and the past of the condemned and adapt their penalty accordingly.",
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
    question: "Conditions of life in jail should be greatly improved.",
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
      "The filing and storage of personal records should be delimited strictly and database cross-checking should be forbidden.",
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
    question: "The right to be anonymous on Internet should be guaranteed.",
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
      "The purpose of the judiciary system should be to punish those who went against the law.",
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
    question: "The police should be armed.",
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
      "The sacrifice of some civil liberties is a necessity in order to be protected from terrorist acts.",
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
    question: "Order and authority should be respected in all circumstances.",
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
    question: "Heavy penalties are efficient because they are dissuasive.",
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
      "It is better to arrest someone potentially dangerous preemptively rather than taking the risk of having them committing a crime.",
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
    question: "Mass strike is a good way to acquire new rights.",
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
    question: "Armed struggle in a country is sometimes necessary.",
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
    question: "Insurrection is necessary to deeply change society.",
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
      "Activism in existing political organizations is not relevant to change society.",
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
      "Elections organized by the state cannot question the powers in place.",
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
    question: "Hacking has a legitimate place in political struggle.",
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
    question: "Sabotage is legitimate under certain conditions.",
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
    question: "Activists must always act in strict accordance with the law.",
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
    question: "Revolutions will always end up in a bad way.",
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
      "Changing the system radically is counter-productive. We should rather transform it progressively.",
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
    question: "Violence against individuals is never productive.",
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
      "We should always distance ourselves from protesters who use violence.",
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
      "We need to make compromises with the opposition to apply our ideas.",
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
      "Changes in an individual’s way of life can induce changes in society.",
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
    question: "My religion must be spread as widely as possible.",
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
    question: "A good policy is a pragmatic policy without ideology.",
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
      "We need to establish a monarchy to federate the people and preserve our sovereignty.",
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
    question: "Humans should neither eat nor exploit animals.",
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
    question: "The State should be abolished.",
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
