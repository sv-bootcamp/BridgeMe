export default {
  data: {
    survey_id: 'A001-1',
    questions: [
      {
        question_index: 0,
        question: '왜 해당 멘토를 선택하였는가?',
        allow_multiple_answer: true,
        answers: [
          {
            options: [
              {
                answer_index: 0,
                is_free_form: false,
                content: '학력',
                next_question_index: 1,
              },
              {
                answer_index: 1,
                is_free_form: false,
                content: '경력(경험, 직업)',
                next_question_index: 1,
              },
              {
                answer_index: 2,
                is_free_form: false,
                content: '성격',
                next_question_index: 1,
              },
              {
                answer_index: 3,
                is_free_form: true,
                content: '기타',
                next_question_index: 1,
              },
            ],
          },
        ],
      },
      {
        question_index: 1,
        question: '이 멘토를 통해서 얻고자 하는 목표는?',
        allow_multiple_answer: true,
        answers: [
          {
            title: '유학',
            options: [
              {
                answer_index: 0,
                is_free_form: false,
                content: '지원 과정 (토플/GRE, Statement of Purpose, GPA 등)',
                next_question_index: 2,
              },
              {
                answer_index: 1,
                is_free_form: false,
                content: '학교 선택 (학과, 교수 선택, 학교 인지도, 취업에 도움 등)',
                next_question_index: 2,
              },
            ],
          },
          {
            title: '취업/이직',
            options: [
              {
                answer_index: 2,
                is_free_form: false,
                content: '회사 선택',
                next_question_index: 2,
              },
              {
                answer_index: 3,
                is_free_form: false,
                content: '갖추어야 할 능력',
                next_question_index: 2,
              },
              {
                answer_index: 4,
                is_free_form: false,
                content: '인터뷰 (e.g. 폰인터뷰, 코딩인터뷰)',
                next_question_index: 2,
              },
              {
                answer_index: 5,
                is_free_form: false,
                content: '이력서',
                next_question_index: 2,
              },
              {
                answer_index: 6,
                is_free_form: false,
                content: '포트폴리오',
                next_question_index: 2,
              },
              {
                answer_index: 7,
                is_free_form: false,
                content: '연봉 협상',
                next_question_index: 2,
              },
            ],
          },
          {
            title: '창업',
            options: [
              {
                answer_index: 8,
                is_free_form: false,
                content: '기업가 정신',
                next_question_index: 2,
              },
              {
                answer_index: 9,
                is_free_form: false,
                content: '창업 아이템 선정',
                next_question_index: 2,
              },
              {
                answer_index: 10,
                is_free_form: false,
                content: '시장상황',
                next_question_index: 2,
              },
              {
                answer_index: 11,
                is_free_form: false,
                content: '투자 받기',
                next_question_index: 2,
              },
              {
                answer_index: 12,
                is_free_form: false,
                content: '팀빌딩',
                next_question_index: 2,
              },
            ],
          },
          {
            title: '커리어 개발',
            options: [
              {
                answer_index: 13,
                is_free_form: false,
                content: '승진',
                next_question_index: 2,
              },
              {
                answer_index: 14,
                is_free_form: false,
                content: '직무 전환',
                next_question_index: 2,
              },
              {
                answer_index: 15,
                is_free_form: false,
                content: '프리랜서',
                next_question_index: 2,
              },
            ],
          },
          {
            title: '그 외',
            options: [
              {
                answer_index: 16,
                is_free_form: false,
                content: '인맥 관리',
                next_question_index: 2,
              },
              {
                answer_index: 17,
                is_free_form: false,
                content: '커뮤니케이션 스킬',
                next_question_index: 2,
              },
            ],
          },
          {
            title: ' ',
            options: [
              {
                answer_index: 18,
                is_free_form: true,
                content: '기타',
                next_question_index: 2,
              },
            ],
          },
        ],
      },
      {
        question_index: 2,
        question: '매칭 후 소통 방식은 어떤 것이 좋은 가?',
        allow_multiple_answer: true,
        answers: [
          {
            options: [
              {
                answer_index: 0,
                is_free_form: false,
                content: '채팅',
                next_question_index: null,
              },
              {
                answer_index: 1,
                is_free_form: false,
                content: '화상통화',
                next_question_index: null,
              },
              {
                answer_index: 2,
                is_free_form: false,
                content: '음성통화',
                next_question_index: null,
              },
              {
                answer_index: 3,
                is_free_form: false,
                content: '이메일',
                next_question_index: null,
              },
              {
                answer_index: 4,
                is_free_form: true,
                content: '기타',
                next_question_index: null,
              },
            ],
          },
        ],
      },
    ],
  },
};
