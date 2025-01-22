import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        title1: "Frontend?",
        title2: "Freddy Kim!",
        based: "based Seoul,",
        freelancer: "Frontend Developer",
        greeting: "👋 Hello!",
        introduction: "I'm Freddy, a FE developer who prioritizes business growth.",
        completed: "Completed",
        description: "Description",
        type: "Type",
        skills: "Using Skills",
        company: "Company",
        liveURL: "Live URL",
        heading2: "Work Experience",
        heading3: "Ongoing project",
        coffee_chat_button: "Let's talk",
        download_resume: "Download Resume",
        resume_button: "Resume",
        project1: {
          title: 'Senior Welfare Center Service Web App',
          completed: '2020.04 - 2021.12',
          type: 'App Platform',
          usingSkills: 'React, MobX, ReactNative, CSS',
          company: 'Ninewatt',
          liveURL: {
            long: 'https://play.google.com/store/apps/details?id=com.ninewatt.app.welsh&pcampaignid=web_share',
            short: 'AppStore Link'
          },
          description: 'Implemented a hybrid web app using React Native. Managed the entire frontend development and deployment process from the initial stages of the project, including features like user registration, login, bulletin board, and app push notifications.'
        },
        project2: {
          title: 'Server-Driven UI Environment Setup and Component Development',
          completed: '2022.09 - 2023.02',
          type: 'App Platform',
          usingSkills: 'ReactNative, Typescript, styled-components, recoil',
          company: 'Washswat',
          liveURL: {
            long: 'https://apps.apple.com/kr/app/%EC%84%B8%ED%83%81%ED%8A%B9%EA%B3%B5%EB%8C%80/id1049236217',
            short: 'AppStore Link'
          },
          description: 'Transitioned a legacy app to a Server-Driven UI approach to receive faster feedback from users. Designed and implemented components and interfaces. Since it was a new technology, I actively documented and collaborated with the team to ensure quick knowledge sharing and alignment, earning recognition as a reliable colleague.'
        },
        project3: {
          title: 'New Membership Service Development',
          completed: '2023.06 - 2023.07',
          type: 'App Platform',
          usingSkills: 'ReactNative, Next, Typescript, styled-components, recoil',
          company: 'Washswat',
          liveURL: {
            long: 'https://biz.chosun.com/industry/company/2023/07/07/EKWKO5HGLREEFJY6GHRGKPS7W4/',
            short: 'Membership Service Article Link'
          },
          description: 'Addressed the need to revise and develop features for a subscription product structured with negative margins, which was directly tied to the company’s revenue. Actively provided feedback on user flows to address gaps in the initial plan and contributed to the development of subscription management, promotions, referrals, and subscription details.'
        },
        project4: {
          title: 'Order Funnel Optimization and Employee of the Month Award',
          completed: '2023.09 - 2023.12',
          type: 'App Platform',
          usingSkills: 'ReactNative, Next, Typescript, styled-components, recoil',
          company: 'Washswat',
          liveURL: {
            long: '',
            short: ''
          },
          description: 'Improved the order funnel to reduce drop-off rates and increase order completion rates. Conducted A/B testing and achieved an improvement in the order completion rate from 57.97% to 62% (approximately 4-5%). In a squad consisting of new hires, I voluntarily took on the role of mediator, helping resolve communication and scheduling issues. This led to me being recognized as the Employee of the Month for my efforts.'
        },
        project5: {
          title: 'Popup Store Laundry Service Dashboard Development',
          completed: '2024.03 - 2024.03',
          type: 'Web Service',
          usingSkills: 'Next, Typescript, SWR, zustand',
          company: 'Washswat',
          liveURL: {
            long: 'https://www.getwashswat.com/washer',
            short: 'Learn about Washer Brand'
          },
          description: 'Developed screens and dashboards for a vintage popup store where consumers could apply for laundry services after purchasing vintage clothing. Participated not only in development but also in the garment selection process, enabling the company to quickly pilot the secondhand service.'
        },
        project6: {
          title: 'Reduced Customer Support Inquiries During Peak Season',
          completed: '2024.04 - 2024.04',
          type: 'App Platform',
          usingSkills: 'ReactNative, Next',
          company: 'Washswat',
          liveURL: {
            long: '',
            short: ''
          },
          description: 'During the peak season, when there was a surge in customer service inquiries about down jacket cleaning, I led an emergency development effort to address this issue. By analyzing common complaints, we implemented solutions that allowed the customer service team to resolve issues without direct interaction, reducing inquiries by approximately 300.'
        },      
      }
    },
    ko: {
      translation: {
        title1: "Frontend?",
        title2: "Freddy Kim!",
        based: "서울에 거주,",
        freelancer: "프론트엔드 개발자",
        greeting: "👋 안녕하세요,",
        introduction: "비지니스의 성장이 곧 나의 성장이라 생각하는 FE 개발자 김민상입니다.",
        completed: "기간",
        description: "설명",
        type: "프로젝트 유형",
        skills: "사용한 기술",
        company: "회사",
        liveURL: "URL",
        heading2: "개발 경험",
        heading3: "진행중 프로젝트",
        coffee_chat_button: "☕️ 커피챗하기",
        download_resume: "따끈따끈한 이력서 다운받기 🫖",
        resume_button: "이력서보기",
        project1: {
          title: '시니어를 위한 비대면 복지관 서비스 웹앱',
          completed: '2020.04 - 2021.12',
          type: '앱 플랫폼',
          usingSkills:'React, MobX, ReactNative, CSS',
          company: '나인와트',
          liveURL: {
            long: 'https://play.google.com/store/apps/details?id=com.ninewatt.app.welsh&pcampaignid=web_share',
            short: 'AppStore Link'
          },
          description: "React-native를 이용하여 하이브리드 웹앱을 구현하였습니다. 회원가입, 로그인, 게시판, app push 등 프로젝트 초기부터 전체적인 프론트 개발을 담당 및 배포 관리하였습니다."
        },
        project2: {
          title: 'ServerDrivenUI 환경 구축 및 컴포넌트 제작',
          completed: '2022.09 - 2023.02',
          type: '앱 플랫폼',
          usingSkills: 'ReactNative, Typescript, styled-components, recoil',
          company: '워시스왓(세탁특공대)',
          liveURL: {
            long: 'https://apps.apple.com/kr/app/%EC%84%B8%ED%83%81%ED%8A%B9%EA%B3%B5%EB%8C%80/id1049236217',
            short: 'AppStore Link'
          },
          description: "유저로부터 더 빠른 피드백을 받기위해 레거시앱을 ServerDrivenUI 방식으로 전환하고 컴포넌트와 인터페이스를 설계 구현하였습니다. 처음 시도하는 기술인 만큼 팀 내 빠른 공유와 업무 이해도를 맞추기 위해 문서 정리 및 적극적인 업무협조로 신뢰 있는 동료로 인정받았습니다."
        },
        project3: {
            title: '신규 멤버십 서비스 개발',
            completed: '2023.06 - 2023.07',
            type: '앱 플랫폼',
            usingSkills: 'ReactNative, Typescript, styled-components, recoil',
            company: '워시스왓(세탁특공대)',
            liveURL: {
              long: 'https://biz.chosun.com/industry/company/2023/07/07/EKWKO5HGLREEFJY6GHRGKPS7W4/',
              short: '세특패스 기사 링크'
            },
            description: "기존 구독 상품이 역마진 구조로 되어있어 즉시 상품 구성 변경과 기능 개발이 필요했던 작업으로 회사의 수익과도 직결되는 부분이었습니다. 개발 중 유저 플로우에 대해 적극적으로 피드백하여 초기 기획에서 미흡했던 부분들을 보완하였고 (구독관리, 프로모션, 레퍼럴, 구독상세) 개발을 맡아 기여하였습니다."
        },
        project4: {
          title: '주문 퍼널 개선 및 우수사원 선정',
          completed: '2023.09 - 2023.12',
          type: '앱 플랫폼',
          usingSkills: 'ReactNative, Typescript, styled-components, recoil',
          company: '워시스왓(세탁특공대)',
          liveURL: {
            long: '',
            short: ''
          },
          description: "주문 과정에서 이탈률을 줄이고 주문 완료율을 높이기 위해 기존 퍼널을 개선하여 A/B Test를 진행하였고 기존 주문 완료율 57.97%에서 62%로 약 4~5% 정도 개선된 성과를 얻었습니다. 프로젝트를 진행하면서 신규 입사자로 이루어진 스쿼드에서 개발적인 의사소통, 일정 산정과 관련하여 어려움이 있을 때, 자발적으로 중간에서 조력자 역할을 도맡아 일정을 조율하거나 내용을 정리해 소통의 어려움을 해소하였습니다. 이때 보여준 모습으로 동료들 에게 신뢰를 얻어 이달의 우수사원으로 선정되었습니다."
        },
        project5: {
          title: '팝업스토어 세탁 서비스 신청 대시보드 개발',
          completed: '2024.03 - 2024.03',
          type: '웹 서비스',
          usingSkills: 'Next, Typescript, SWR, zustand',
          company: '워시스왓(세탁특공대)',
          liveURL: {
            long: 'https://www.getwashswat.com/washer',
            short: '워셔 브랜드 알아보기',            
          },
          description: "빈티지 팝업스토어를 오픈하면서 소비자가 빈티지 의류 구매 후 세탁 서비스 신청을 할 수 있도록 화면 및 대시 보드 개발하였습니다. 이 과정에서 개발뿐 아니라 의류를 선별하는 작업에도 직접 참여하여 빠르게 세컨핸드 서비스를 시도해 볼 수 있었습니다."
        },
        project6: {
          title: '성수기 CS 인입률 감소에 기여',
          completed: '2024.04 - 2024.04',
          type: '앱 플랫폼',
          usingSkills: 'ReactNative, Typescript, styled-components, recoil',
          company: '워시스왓(세탁특공대)',
          liveURL: {
            long: '',
            short: ''
          },
          description: "성수기 패딩 세탁 관련 CS 인입 급증으로 인해 고객 응대가 지연되면서 고객들의 불만이 폭증한 상황에서 대응을 원활하게 하기 위해 긴급 개발을 진행하였습니다. 고객의 주요 불만을 분석하여 CS 부서에서 직접 응대 없이 해소할 수 있도록 하여 약 300건 문의를 감소시키는데 기여하였습니다."
        },     
      },
    },
  },
  lng: 'ko',
  fallbackLng: 'ko',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
