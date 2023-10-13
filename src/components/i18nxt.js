import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          // here we will place our translations...
          Navbar : {
            Titles : {
              Logo : "Travelar",
              Home : "Home",
              Services : "Services",
              About : "About us",
              Contact : "Contact",
            },
            
          },
          Titles : {
            Home : "Travel with us",
            Services : "Services",
            Aboutus : "About us",
            Contactus : "Contact us"
            },
          Descriptions : {
            Home : "Your ultimate destination for seamless car booking experiences! Whether you're planning a road trip, a business venture, or a leisurely escape, Travelar is here to redefine the way you embark on your journeys. With a vast network of trusted rental providers and a user-friendly interface, we bring you a world of convenience at your fingertips.",
            Services : "Traveler, the innovative app, offers a seamless experience for users by providing two essential services - medicine delivery and car booking. You can conveniently order prescription medications from the comfort of their homes. The app ensures timely and safe delivery, making healthcare more accessible than ever. Additionally, Traveler's car booking service enables you to effortlessly arrange transportation for your journeys. Traveler offers a reliable and efficient solution, ensuring users reach their destinations with ease. Traveler is truly a one-stop platform, catering to both healthcare and transportation needs.",
            Aboutus : "Traveler is led by a powerful purpose to simplify and improve the lives of people and build an awesome organisation that inspires. Since 2023, Traveler has built a platform for the region’s best talent to thrive and for entrepreneurs to scale their businesses. Careem operates in over 70 cities across 10 countries, from Morocco to Pakistan.",
          },
          ServicesInfo : {
            Heading : "We Provide",
            Li1 : "Certified Drivers",
            Li2 : "Medicine Delivery",
            Li3 : "Car Booking",
            Li4 : "Real-Time Tracking",
            Li5 : "Emergency Sharing",
            Li6 : "Peace of Mind",
            Li7 : "Enhanced Security",
            Li8 : "Customized Choices",
          },
          InfoBanner : {
            Titles : {
              Home : "Travelar",
              Svcs1 : "Medicine Delivery",
              Svcs2 : "Car Booking",
            },
            Descriptions : {
              Home : "Enjoy 30% discount on your first Rides !",
              Svcs1 : "Convinient hassle-free medicine delivery",
              Svcs2 : "Secure and fully tracked rides",
            },
          },
          About : {
            Titles : {
              Home : "About us",
            },
            Descriptions : {
              Home : "Travelar’s purpose is to simplify and improve the lives of people and build an awesome organisation that inspires. Learn more about our purpose, people and services.",
            },
          },
          Footer : {
            Titles : {
              Travelar : "Travelar",
              Services : "Services",
              Partners : "Partners",
              JoinTeam : "Join our Teams",
              Aboutus : "About us",
            }
          },
                       
        }
      },
      fr : {
        translation : {
          Navbar : {
            Titles : {
              Logo : "Voyageur",
              Home : "Maison",
              Services : "Prestations de service",
              About : "À propos de nous",
              Contact : "Contact",
            }
          },
          Titles : {
            Home : "Voyagez avec nous",
            Services : "Prestations de service",
            Aboutus : "À propos de nous",
            Contactus : "Contactez-nous",
          },
          Descriptions : {
            Home : "Votre destination ultime pour des expériences de réservation de voiture fluides ! Que vous planifiiez un road trip, une entreprise ou une escapade tranquille, Travelar est là pour redéfinir la façon dont vous embarquez dans vos voyages. Avec un vaste réseau de prestataires de location de confiance et une interface conviviale, nous vous apportons un monde de commodité à portée de main.",
            Services : "Traveler, l'application innovante, offre une expérience transparente aux utilisateurs en fournissant deux services essentiels : la livraison de médicaments et la réservation de voiture. Vous pouvez facilement commander des médicaments sur ordonnance dans le confort de votre foyer. L'application garantit une livraison rapide et sûre, rendant les soins de santé plus accessibles que jamais. De plus, le service de réservation de voiture de Traveler vous permet d'organiser sans effort le transport pour vos voyages. Traveler offre une solution fiable et efficace, garantissant aux utilisateurs d'atteindre facilement leur destination. Traveler est véritablement une plateforme unique, répondant à la fois aux besoins en matière de soins de santé et de transport.",
            Aboutus : "Traveler est dirigé par un objectif puissant : simplifier et améliorer la vie des gens et construire une organisation formidable et inspirante. Depuis 2023, Traveler a construit une plateforme permettant aux meilleurs talents de la région de s’épanouir et aux entrepreneurs de développer leur entreprise. Careem opère dans plus de 70 villes à travers 10 pays, du Maroc au Pakistan.",
          },
          ServicesInfo : {
            Heading : "Nous fournissons",
            Li1 : "Chauffeurs certifiés",
            Li2 : "Livraison de médicaments",
            Li3 : "Réservation de voiture",
            Li4 : "Suivi en temps réel",
            Li5 : "Partage d'urgence",
            Li6 : "Tranquillité d'esprit",
            Li7 : "Sécurité renforcée",
            Li8 : "Choix personnalisés",
          },
          InfoBanner : {
            Titles : {
              Home : "Voyageur",
              Svcs1 : "Livraison de médicaments",
              Svcs2 : "Réservation de voiture"
            },
            Descriptions : {
              Home : "Profitez de 30% de réduction sur vos premiers Rides !",
              Svcs1 : "Livraison de médicaments pratique et sans tracas",
              Svcs2 : "Des trajets sécurisés et entièrement suivis"
            }
          },
          About : {
            Titles : {
              Home : "À propos de nous",
            },
            Descriptions : {
              Home : "L’objectif de Travelar est de simplifier et d’améliorer la vie des gens et de construire une organisation formidable et inspirante. Apprenez-en davantage sur notre objectif, nos personnes et nos services.",
            },
          },
          Footer : {
            Titles : {
              Travelar : "Voyageur",
              Services : "Prestations de service",
              Partners : "Les partenaires",
              JoinTeam : "Rejoignez nos équipes",
              Aboutus : "À propos de nous",
            }
          },
            
        }
      },
      ara : {
        translation : {
          Navbar : {
            Titles : {
              Logo : "مسافر",
              Home : "بيت",
              Services : "خدمات",
              About : "معلومات عنا",
              Contact : "اتصال",
            }
          },
          Titles : {
            Home : "سافر معنا",
            Services : "تقديم خدمة",
            Aboutus : "في ما يخصنا",
            Contactus : "اتصل بنا",
          },
          Descriptions : {
            Home : "وجهتك النهائية لتجارب حجز السيارات السلسة! سواء كنت تخطط لرحلة برية، أو عمل، أو لقضاء عطلة ممتعة، فإن مسافر هنا لإعادة تعريف الطريقة التي تشرع بها في رحلاتك. بفضل شبكة واسعة من موفري خدمات التأجير الموثوقين وواجهة سهلة الاستخدام، نقدم لك عالمًا من الراحة في متناول يدك.",
            Services : " المبتكر تجربة سلسة للمستخدمين من خلال توفير خدمتين أساسيتين: توصيل الأدوية وحجز السيارات. يمكنك بسهولة طلب الأدوية الموصوفة طبيًا وأنت مرتاح في منزلك. يضمن التطبيق تسليمًا سريعًا وآمنًا، مما يجعل الرعاية الصحية أكثر سهولة من أي وقت مضى. بالإضافة إلى ذلك، تتيح لك خدمة حجز سيارات المسافر ترتيب وسائل النقل لرحلاتك بسهولة. يقدم مسافر حلاً موثوقًا وفعالاً، مما يضمن وصول المستخدمين إلى وجهتهم بسهولة. يعد Traveler حقًا منصة فريدة من نوعها، تخدم احتياجات الرعاية الصحية والنقل.",
            Aboutus : "المسافر مدفوع بهدف قوي: تبسيط وتحسين حياة الناس وبناء مؤسسة عظيمة وملهمة. منذ عام 2023، قامت شركة مسافر ببناء منصة لأفضل المواهب في المنطقة لتزدهر ورواد الأعمال لتنمية أعمالهم. تعمل كريم في أكثر من 70 مدينة في 10 دول، من المغرب إلى باكستان.",
          },
          ServicesInfo : {
            Heading : "نحن نقدم",
            Li1 : "السائقين المعتمدين",
            Li2 : "تسليم الدواء",
            Li3 : "حجز السيارة",
            Li4 : "تتبع في الوقت الحقيقي",
            Li5 : "المشاركة في حالات الطوارئ",
            Li6 : "راحة البال",
            Li7 : "تعزيز الأمن",
            Li8 : "اختيارات شخصية",
          },
          InfoBanner : {
            Titles : {
              Home : "مسافر",
              Svcs1 : "تسليم الدواء",
              Svcs2 : "حجز السيارة"
            },
            Descriptions : {
              Home : "استمتع بخصم 30% على رحلاتك الأولى!",
              Svcs1 : "توصيل الدواء بشكل مريح وخالي من المتاعب",
              Svcs2 : "رحلات آمنة ومراقبة بالكامل"
            }
          },
          About : {
            Titles : {
              Home : "في ما يخصنا",
            },
            Descriptions : {
              Home : "L’objectif de Travelar est de simplifier et d’améliorer la vie des gens et de construire une organisation formidable et inspirante. Apprenez-en davantage sur notre objectif, nos personnes et nos services.",
            },
          },
          Footer : {
            Titles : {
              Travelar : "Voyageur",
              Services : "Prestations de service",
              Partners : "Les partenaires",
              JoinTeam : "Rejoignez nos équipes",
              Aboutus : "À propos de nous",
            }
          },
            
        }
      }
    }
  });

export default i18n;