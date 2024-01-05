import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        title1: "Frontend?",
        title2: "Loren Lee!",
        based: "based Seoul,",
        freelancer: "freelance worker",
        greeting: "Hello!",
        introduction: "I build responsive websites and web apps using HTML, CSS, and JavaScript to ensure users get the best experience on their devices and browsers.",
        completed: "Completed",
        type: "Type",
        skills: "Using Skills",
        company: "Company",
        liveURL: "Live URL",
        heading2: "Featured Work",
        startProject: 'Want to Start a Project?',
        attract: 'Turn your idea into a reality',
        work1: {
          title: 'Telemedicine platform',
          completed: '2021',
          type: 'Platform',
          usingSkills: 'Vue, JS, HTML, SCSS, AWS chime',
          company: 'hrobotics',
          liveURL: {
            long: 'https://hroboticsus.com/smart-rehab-devices/rebless-clinic',
            short: 'https://hroboticsus.com'
          }
        },
        work2: {
          title: 'Landing page for the platform',
          completed: '2020',
          type: 'Responsive Landing Page',
          usingSkills: 'React, JS, HTML, SCSS',
          company: 'hrobotics',
          liveURL: {
            long: 'https://www.rebless.clinic',
            short: 'www.rebless.clinic'
          }
        },
        work3: {
          title: 'Real estate trading platform',
          completed: '2023',
          type: 'Platform',
          usingSkills: 'Vue, TS, JS, HTML, SCSS',
          company: 'dukkubisesang',
          liveURL: {
            long: 'https://www.peterpanz.com',
            short: 'www.peterpanz.com'
          }
        },
        work4: {
          title: 'Landing page for the platform',
          completed: '2022',
          type: 'Responsive Landing Page',
          usingSkills: 'React, JS, HTML, SCSS',
          company: 'dukkubisesang',
          liveURL: {
            long: 'https://partners.peterpanz.com',
            short: 'partners.peterpanz.com'
          }
        },
        work5: {
          title: 'Redcap rentcar management backoffice',
          completed: '2023',
          type: 'UI Development',
          usingSkills: 'HTML, CSS',
          company: 'Geosoft',
          liveURL: {
            long: 'https://www.redcaprentcar.com/rent/main',
            short: 'www.redcaprentcar.com'
          }
        },
        work6: {
          title: 'Apartment management system',
          completed: '2024',
          type: 'Backoffice',
          usingSkills: 'Next, React, TS, MUI, Redux',
          company: 'Aptner',
          liveURL: {
            long: 'https://www.aptner.com/',
            short: 'www.aptner.com'
          }
        },
      }
    },
    ko: {
      translation: {
        title1: "Frontend?",
        title2: "Loren Lee!",
        based: "서울에 거주,",
        freelancer: "프리랜서 개발자",
        greeting: "안녕하세요!",
        introduction: "프론트엔드 개발자 이은결입니다. 프론트엔드 기술을 사용하여 사용자가 모든 기기와 브라우저에서 최고의 경험을 할 수 있도록 반응형 웹사이트와 웹 앱을 제작합니다.",
        completed: "완료일",
        type: "프로젝트 유형",
        skills: "사용한 기술",
        company: "회사",
        liveURL: "URL",
        heading2: "수행한 프로젝트",
        startProject: '프로젝트를 시작하고 싶으신가요?',
        attract: '저와 함께 아이디어를 현실로 만들어보세요!',
        work1: {
          title: '원격진료 서비스 리블레스 개발',
          completed: '2020년',
          type: '웹 플랫폼',
          usingSkills: 'Vue, JS, HTML, SCSS, AWS chime',
          company: '에이치로보틱스',
          liveURL: {
            long: 'https://hroboticsus.com/smart-rehab-devices/rebless-clinic',
            short: 'https://hroboticsus.com'
          }
        },
        work2: {
          title: '리블레스 랜딩페이지 개발',
          completed: '2021년',
          type: '반응형 웹사이트',
          usingSkills: 'React, JS, HTML, SCSS',
          company: '에이치로보틱스',
          liveURL: {
            long: 'https://www.rebless.clinic',
            short: 'www.rebless.clinic'
          }
        },
        work3: {
            title: '피터팬의 좋은방 구하기 개발',
            completed: '2022년',
            type: '웹 플랫폼',
            usingSkills: 'Vue, TS, JS, HTML, SCSS',
            company: '두꺼비세상',
            liveURL: {
              long: 'https://www.peterpanz.com',
              short: 'www.peterpanz.com'
            }
        },
        work4: {
          title: '피터팬 광고상품 랜딩페이지 개발',
          completed: '2023년',
          type: '반응형 웹사이트',
          usingSkills: 'React, JS, HTML, SCSS',
          company: '두꺼비세상',
          liveURL: {
            long: 'https://partners.peterpanz.com',
            short: 'partners.peterpanz.com'
          }
        },
        work5: {
          title: '레드캡 렌터카관리 백오피스 퍼블리싱',
          completed: '2023년',
          type: '백오피스 퍼블리싱',
          usingSkills: 'HTML, CSS',
          company: '지오소프트',
          liveURL: {
            long: 'https://www.redcaprentcar.com/rent/main',
            short: 'www.redcaprentcar.com'
          }
        },
        work6: {
          title: '아파트 통합관리 시스템 리뉴얼 개발',
          completed: '2024년',
          type: '백오피스',
          usingSkills: 'Next, React, TS, MUI, Redux',
          company: '아파트너',
          liveURL: {
            long: 'https://www.aptner.com/',
            short: 'www.aptner.com'
          }
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
