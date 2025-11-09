'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

// icons
import { BsSnow } from 'react-icons/bs'
import { FaServicestack, FaWrench } from 'react-icons/fa'
import { FaShip } from 'react-icons/fa6'
import { GiElectric } from 'react-icons/gi'
import { MdPlumbing, MdScubaDiving } from 'react-icons/md'

// Fonts
import { Inter, Cairo } from 'next/font/google'
import { CgCodeSlash } from 'react-icons/cg'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import Partners from '@/components/Partners'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { StaggeredFade } from '@/components/MotionText'
import { TfiEmail } from 'react-icons/tfi'
import Header from '@/components/Header'

const services: any = {
  en: [
    {
      key: 'fabrication',
      icon: FaServicestack,
      title:
        'Precision Marine Fabrication: Certified Welding and Structural Repair Solutions',
      short:
        'Certified steel fabrication and welding to ensure vessel integrity and durability.',
      seo: 'We deliver professional certified marine welding and steel fabrication services vital for maintaining the structural integrity of your vessels. Our certified team specializes in precise metal cutting, structural refurbishment, and major hull plate renewal. We strictly adhere to international classification standards, ensuring durable, reliable solutions that minimize downtime and extend the service life of your marine assets.',
      subtitles: [
        'Class-Approved Hull and Deck Structural Repairs',
        'Precision Steel Fabrication and Metal Fitting'
      ]
    },
    {
      key: 'diving',
      icon: MdScubaDiving,
      title:
        'Expert Subsea Solutions: Certified Commercial Diving and Inspection (UWILD)',
      short:
        'Certified diving and UWILD inspection services for underwater hull integrity.',
      seo: 'We offer comprehensive subsea solutions via our internationally certified commercial diving teams. Services include: mandatory In-Water Survey in Lieu of Drydocking (UWILD), hull cleaning, and propeller polishing for fuel efficiency. We also provide emergency underwater welding and repairs. Minimize downtime and maximize the operational readiness of your marine assets with our reliable subsea expertise.',
      subtitles: [
        'In-Water Survey in Lieu of Drydocking (UWILD) Services',
        'High-Performance Hull Cleaning & Propeller Polishing',
        'Certified Underwater Welding and Emergency Repairs'
      ]
    },
    {
      key: 'engines',
      icon: FaShip,
      title:
        'Precision Diesel Engine Overhaul and Specialized Maintenance Services',
      short:
        'Specialized marine diesel engine and governor maintenance for top performance.',
      seo: 'We ensure peak engine performance through our specialized marine diesel engine maintenance. We focus particularly on dedicated Woodword UG8 Governor service and complete Fuel Injection Pump (FIP) overhaul and testing to guarantee precise fuel delivery and efficiency. Services include full engine overhauls, and maintenance for turbochargers and cylinder heads.',
      subtitles: [
        'Governor Maintenance and Calibration (Woodword UG8 Specialist)',
        'High-Precision Fuel Injection Pump (FIP) Overhaul and Testing',
        'Full Engine Overhauls and Main Component Servicing'
      ]
    },
    {
      key: 'mechanics',
      icon: FaWrench,
      title: 'Propulsion System Maintenance and General Mechanical Works',
      short:
        'Mechanical repair and gearbox overhauls ensuring propulsion efficiency.',
      seo: 'Our comprehensive services cover all critical moving equipment outside the engine block. We specialize in Gearbox and transmission overhauls, and precision shaft alignment services to minimize vibration and bearing wear. We also provide full pump maintenance, and general mechanical blacksmith fabrication for customized parts, ensuring efficient propulsion and operation.',
      subtitles: [
        'Gearbox and Transmission Overhauls and Repair',
        'Precision Shaft Alignment Services',
        'General Blacksmith and Marine Pump Maintenance'
      ]
    },
    {
      key: 'electrical',
      icon: GiElectric,
      title:
        'Marine Electrical and Electronics: Power, Navigation, and Automation Solutions',
      short:
        'Electrical and electronic system maintenance ensuring power and safety.',
      seo: 'We guarantee stable power and navigational safety. Our engineers specialize in troubleshooting and repairing marine electronic systems, including navigation and communication equipment (Radar, GMDSS). We also provide comprehensive electrical system maintenance (distribution panels, generators) and automation services, ensuring safe operation and regulatory compliance.',
      subtitles: [
        'Navigation and Communication System Maintenance and Repair',
        'Power Generation and Distribution System Diagnostics'
      ]
    },
    {
      key: 'hvac',
      icon: BsSnow,
      title:
        'Marine HVAC & Refrigeration Systems: Comfort and Storage Efficiency',
      short:
        'Professional marine AC and refrigeration maintenance for comfort and reliability.',
      seo: 'We ensure comfortable working environments and perfect cargo preservation. We offer professional repair and maintenance for all AC systems, including central and independent units, focusing on maximizing energy efficiency and performance. We also cover the full servicing of refrigeration units and provision plants to guarantee the safety of stores and sensitive cargo.',
      subtitles: [
        'Central and Independent Air Conditioning Unit Maintenance',
        'Provision and Cargo Refrigeration System Overhaul'
      ]
    },
    {
      key: 'piping',
      icon: MdPlumbing,
      title:
        'Marine Plumbing & Piping Solutions: Fluid System Integrity and Efficiency',
      short:
        'Complete piping installation and maintenance for safe and efficient operation.',
      seo: "We provide specialized services to ensure the safety and efficiency of your vessel's piping systems. Services include the installation and maintenance of all pipe types and sizes, covering fuel, drainage, and water systems. Our technicians perform leak repairs, corrosion treatment, and comprehensive maintenance of associated pumps and valves for safe, compliant operation.",
      subtitles: [
        'Comprehensive Piping Solutions for All Types and Sizes',
        'Freshwater and Sanitary System Maintenance'
      ]
    }
  ],
  ar: [
    {
      key: 'fabrication',
      icon: FaServicestack,
      title:
        'الهندسة المعدنية والبناء الفولاذي: لحام، قطعية، وإصلاح هيكلي معتمد',
      short: 'خدمات تصنيع ولحام فولاذي معتمد لضمان متانة هياكل السفن وأدائها.',
      seo: 'نحن متخصصون في تقديم حلول اللحام البحري والتصنيع الفولاذي المعتمد، لضمان أعلى مستويات المتانة والسلامة لهياكل سفينتك. يضم فريقنا فنيين معتمدين دولياً في أعمال اللحام والقطعية الحرارية الدقيقة، بما في ذلك ترميمات الهياكل، تجديد ألواح الفولاذ، وأعمال التعديل. نلتزم بمعايير التصنيف الدولية لضمان قوة دائمة وأداء موثوق لأصولك البحرية.',
      subtitles: [
        'إصلاح الهيكل والسطح المعتمد من هيئات التصنيف',
        'التصنيع الفولاذي والتجهيز المعدني الدقيق'
      ]
    },
    {
      key: 'diving',
      icon: MdScubaDiving,
      title: 'حلول ما تحت سطح الماء: غطس تجاري معتمد وفحص شامل (UWILD)',
      short: 'خدمات غوص تجاري وفحص UWILD معتمد لضمان سلامة الهيكل تحت الماء.',
      seo: 'نوفر حلولاً شاملة تحت خط الماء عبر فريق الغطس التجاري المعتمد دولياً. تشمل خدماتنا الأساسية: فحص الهيكل تحت الماء بدلاً من الحوض الجاف (UWILD)، وتنظيف الهيكل وتلميع المراوح لتحسين كفاءة استهلاك الوقود. كما نوفر خدمات الإصلاح واللحام تحت الماء في حالات الطوارئ. قلل من وقت التوقف التشغيلي وحقق أقصى استفادة من أصولك البحرية.',
      subtitles: [
        'مسح الهيكل تحت الماء بدلاً من الحوض الجاف (UWILD)',
        'تنظيف الهياكل وتلميع المراوح لزيادة الكفاءة التشغيلية',
        'إصلاحات ولحام تحت الماء معتمدة'
      ]
    },
    {
      key: 'engines',
      icon: FaShip,
      title:
        'خدمات عمرة وصيانة محركات الديزل البحرية: تخصص في أنظمة التحكم الدقيقة',
      short:
        'صيانة دقيقة لمحركات الديزل البحرية وأنظمة التحكم لضمان الأداء الأمثل.',
      seo: 'نضمن الأداء الأقصى لمحركات سفينتك من خلال خدماتنا المتخصصة في صيانة محركات الديزل. نركز بشكل خاص على صيانة حاكم السرعة Woodword UG8، وتقديم الإصلاح الشامل لمضخات حقن الوقود لضمان كفاءة استهلاك الوقود ودقة الأداء. بالإضافة إلى ذلك، نقدم عمرات كاملة للمحركات، وخدمات صيانة الشواحن التوربينية ورؤوس الأسطوانات.',
      subtitles: [
        'صيانة ومعايرة حكام السرعة (Governors): تخصص في Woodword UG8',
        'عمرة واختبار مضخات حقن الوقود (FIP) بدقة متناهية',
        'العمرات الشاملة وصيانة المكونات الرئيسية للمحرك'
      ]
    },
    {
      key: 'mechanics',
      icon: FaWrench,
      title: 'صيانة الأنظمة الحركية وعلب التروس: ميكانيكا عامة احترافية',
      short: 'إصلاح الأنظمة الميكانيكية وعلب التروس وخدمات المحاذاة الدقيقة.',
      seo: 'تغطي خدماتنا الشاملة جميع الأجزاء المتحركة خارج نطاق المحرك. نحن متخصصون في إصلاح علب التروس وناقلات الحركة، وخدمات محاذاة أعمدة الدوران الدقيقة لتقليل الاهتزازات وتآكل المحامل. كما نوفر صيانة شاملة للمضخات وخدمات الحدادة الميكانيكية لتصنيع وتجهيز القطع الداعمة، مما يضمن كفاءة نظام الدفع والتشغيل.',
      subtitles: [
        'إصلاح وعمرة علب التروس وناقلات الحركة',
        'خدمات محاذاة عمود الدوران الدقيقة (Shaft Alignment)',
        'الحدادة العامة وصيانة المضخات البحرية'
      ]
    },
    {
      key: 'electrical',
      icon: GiElectric,
      title:
        'حلول الأنظمة الكهربائية والإلكترونية: موثوقية الطاقة وتكنولوجيا الملاحة',
      short:
        'صيانة الأنظمة الكهربائية والإلكترونية لضمان الطاقة والملاحة الآمنة.',
      seo: 'نضمن استقرار الطاقة وسلامة الملاحة. يتخصص مهندسونا في إصلاح وصيانة الأنظمة الإلكترونية، بما في ذلك أجهزة الملاحة والاتصالات، بالإضافة إلى صيانة الأنظمة الكهربائية وأنظمة الأتمتة والتحكم لضمان التشغيل الآمن والامتثال للوائح.',
      subtitles: [
        'صيانة وإصلاح أنظمة الملاحة والاتصالات',
        'تشخيص وإصلاح أنظمة توليد وتوزيع الطاقة'
      ]
    },
    {
      key: 'hvac',
      icon: BsSnow,
      title: 'أنظمة التبريد والتكييف البحري: ضمان الراحة وكفاءة التخزين',
      short: 'خدمات صيانة وإصلاح تكييف وتبريد بحري تضمن الراحة وكفاءة التشغيل.',
      seo: 'نضمن بيئة عمل مريحة وحفظاً مثالياً للبضائع. نوفر صيانة وإصلاحاً احترافياً لجميع أنظمة التكييف والتبريد مع التركيز على كفاءة استهلاك الطاقة وتحسين الأداء.',
      subtitles: [
        'صيانة وحدات تكييف الهواء المركزية والمستقلة',
        'إصلاح وتجديد أنظمة تبريد المخازن والمؤن'
      ]
    },
    {
      key: 'piping',
      icon: MdPlumbing,
      title:
        'السباكة والأنابيب البحرية: حلول متكاملة لسلامة وكفاءة الأنظمة السائلة',
      short: 'تركيب وصيانة أنظمة الأنابيب والمياه لضمان التشغيل الآمن للسفن.',
      seo: 'نقدم خدمات متخصصة لضمان سلامة وكفاءة أنظمة الأنابيب على متن السفن، بما في ذلك الوقود، الصرف، والمياه. نقوم بإصلاح التسريبات، معالجة التآكل، وصيانة المضخات والصمامات المرتبطة.',
      subtitles: [
        'حلول الأنابيب المتكاملة لجميع الأنواع والمقاسات',
        'صيانة الأنظمة الصحية والمائية (Freshwater & Sanitary Systems)'
      ]
    }
  ]
}

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})
const cairo = Cairo({
  subsets: ['arabic'],
  variable: '--font-cairo',
  display: 'swap'
})

export default function CreativeEraMarinePage () {
  const t = useTranslations()
  const pathname = usePathname()
  const locale = useLocale()
  const switchTo = pathname.startsWith('/ar') ? '/en' : '/ar'

  const projects = ['project1', 'project2', 'project3']

  // Parallax / subtle hero transform
  const { scrollY } = useScroll()
  const yHero = useTransform(scrollY, [0, 400], [0, 90])
  const overlayOpacity = useTransform(scrollY, [0, 400], [0.6, 0.25])

  return (
    <main
      className={`${inter.variable} ${cairo.variable} font-sans text-slate-900 antialiased`}
      style={{ WebkitFontSmoothing: 'antialiased' }}
    >
      {/* Header (gradient) */}
      <Header />

      {/* HERO */}
      <motion.section
        style={{ y: yHero }}
        className='relative min-h-[110vh] md:min-h-[220vh] lg:min-h-[89vh]  flex items-center overflow-hidden'
      >
        {/* Background Image */}
        <div className='absolute inset-0'>
          <Image
            src='/assets/hero-bg.jpg'
            alt='Hero background'
            fill
            priority
            className='object-cover object-center brightness-[0.55] contrast-[1.08]'
          />
          <motion.div
            style={{ opacity: overlayOpacity }}
            className='absolute inset-0 bg-linear-to-br from-gray-800/85 via-gray-800/55 to-gray-800/30'
          />
        </div>

        {/* Hero Content */}
        <div className='relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full '>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center text-center lg:text-left'>
            {/* Left: text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              className='flex flex-col items-center lg:items-start'
            >
              <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white drop-shadow-xl'>
                {t('hero.title')}
              </h1>

              <p className='mt-5 text-base sm:text-lg md:text-xl text-sky-100 max-w-2xl'>
                {t('hero.subtitle')}
              </p>

              <div className='mt-6 flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4'>
                <a
                  href='#contact'
                  className='inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-[#012E40] font-semibold shadow hover:scale-105 transform transition'
                >
                  {t('hero.cta.primary')}
                </a>
                <a
                  href='#projects'
                  className='inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/30 text-white hover:bg-white/10 transition'
                >
                  {t('hero.cta.secondary')}
                </a>
              </div>

              <div className='mt-6 flex flex-wrap justify-center lg:justify-start gap-4 text-white/90'>
                <div className='text-sm'>
                  <div className='font-semibold'>{t('hero_stat1.value')}</div>
                  <div className='text-xs'>{t('hero_stat1.label')}</div>
                </div>
                <div className='h-6 w-px bg-white/20' />
                <div className='text-sm'>
                  <div className='font-semibold'>{t('hero_stat2.value')}</div>
                  <div className='text-xs'>{t('hero_stat2.label')}</div>
                </div>
                <div className='h-6 w-px bg-white/20' />
                <div className='text-sm'>
                  <div className='font-semibold'>{t('hero_stat3.value')}</div>
                  <div className='text-xs'>{t('hero_stat3.label')}</div>
                </div>
              </div>
            </motion.div>

            {/* Right: logo + card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className='flex justify-center lg:justify-end'
            >
              <div className='relative w-full max-w-md'>
                <div className='rounded-3xl bg-white/6 backdrop-blur-md p-6 shadow-2xl border border-white/10'>
                  <div className='w-full flex items-center justify-evenly text-center text-white/60'>

                    <FaShip className='w-20 h-auto drop-shadow-2xl' />
                    <FaWrench className='w-20 h-auto drop-shadow-2xl' />
                  </div>
                  <p className='mt-6 text-sm text-sky-100/90 text-center'>
                    {t('hero.cardText')}
                  </p>
                </div>

                {/* Floating info card (centered under logo, responsive) */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className='absolute -bottom-16 sm:-bottom-18 md:-bottom-20 left-1/2 -translate-x-1/2 bg-white text-[#012E40] rounded-2xl p-4 sm:p-5 shadow-xl border border-slate-200 w-[90%] sm:w-[78%] md:w-[64%] lg:w-[56%] text-center backdrop-blur-sm'
                >
                  <h3 className='text-sm sm:text-base font-semibold mb-1'>
                    {t('hero.quickTitle')}
                  </h3>
                  <p className='text-xs sm:text-sm text-slate-600 leading-relaxed'>
                    {t('hero.quickDetail')}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Wave Divider */}
        <div className='absolute bottom-0 left-0 w-full overflow-hidden leading-0'>
          <svg
            className='relative block w-[calc(200%+1.3px)] h-[120px]'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1200 120'
            preserveAspectRatio='none'
          >
            <path
              d='M321.39 56.44C201.38 82.11 100.27 89.12 0 60V120H1200V0C1040.9 39.68 884.46 91.56 721.39 81.44 600.33 74.34 481.39 29.09 321.39 56.44Z'
              fill='#ffffff'
            />
          </svg>
        </div>
      </motion.section>

      {/* ABOUT */}
      <section
        id='about'
        className=' flex flex-col w-full py-16 bg-linear-to-t from-gray-200/50 to-white text-[#012E40] pt-25'
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h1 className='text-2xl sm-text-3xl md:text-4xl font-bold mb-2 text-sky-900'>
                {t('about.head')}
              </h1>
              <h2 className='text-md sm:text-xl md:text-2xl font-bold mb-4 text-sky-800'>
                {t('about.title')}
              </h2>
            </div>
            <p className='text-slate-700 leading-relaxed text-base md:text-lg'>
              {t('about.lead')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='flex justify-center'
          >
            <div className='rounded-2xl overflow-hidden shadow-2xl max-w-full w-full'>
              <Image
                src='/assets/about.jpg'
                alt='About us'
                width={900}
                height={600}
                className='object-cover w-full h-64 md:h-80 backdrop-blur-lg bg-gray-400/30 p-1 rounded-2xl'
              />
            </div>
          </motion.div>

          {['experience', 'value'].map((item: string, key: number) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='flex justify-center w-full flex-2 flex-col'
            >
              <div className='flex flex-col items-start justify-start w-full'>
                <h3 className='text-md sm:text-xl md:text-2xl font-extrabold text-sky-800'>
                  {t(`about.sections.${item}.head`)}
                </h3>
                <p>{t(`about.sections.${item}.title`)}</p>
                <ul className='ps-5 list list-disc'>
                  {[1, 2, 3].map(p => (
                    <li key={p}>{t(`about.sections.${item}.points.p${p}`)}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        {
          <blockquote className='w-full text-start text-2xl font-bold pt-5 py-4 text-sky-700 text-shadow-md flex gap-3 items-center justify-center'>
            <StaggeredFade text={t(`about.sections.footer`)} />
          </blockquote>
        }
      </section>

      {/* SERVICES */}
      <section
        id='services'
        className='py-16 bg-gray-300/30 backdrop-blur-lg pt-25'
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h3 className='text-2xl sm:text-3xl font-bold text-center text-[#014D6C] mb-8'>
            {t('services.title')}
          </h3>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {services[locale].map(
              ({ key, title, short, seo, subtitles, icon }: any, i: number) => {
                const Icon = icon
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: i * 0.06 }}
                    viewport={{ once: true }}
                    className='bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition border-[.5px] border-sky-800/30'
                  >
                    <div className='flex gap-2 w-full items-center justify-start'>
                      <div className='text-sky-700 font-semibold uppercase'>
                        <Icon className='w-25 p-2 h-auto' />
                      </div>

                      <h4 className='text-lg font-semibold text-[#014D6C] mb-2'>
                        {title}
                      </h4>
                    </div>
                    <p className='text-slate-600 mb-3 text-sm'>{seo}</p>
                    <ul className='text-sm text-slate-600 space-y-1 ps-3'>
                      {subtitles.map((sub: string, i: number) => {
                        return <li key={i}>• {sub}</li>
                      })}
                    </ul>
                  </motion.div>
                )
              }
            )}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id='projects'
        className='py-16 bg-linear-to-b from-gray-200/50 to-white  pt-25'
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h3 className='text-2xl sm:text-3xl font-bold text-center text-[#014D6C] mb-8'>
            {t('projects.title')}
          </h3>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {projects.map((p, i) => (
              <motion.article
                key={p}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className='rounded-2xl overflow-hidden shadow-lg'
                viewport={{ once: true }}
              >
                <div className='relative h-44 sm:h-52'>
                  <Image
                    src={`/assets/${p}.jpg`}
                    alt={t(`projects.${p}.title`)}
                    fill
                    className='object-cover'
                  />
                </div>
                <div className='p-5 bg-white'>
                  <h4 className='text-lg font-semibold mb-1'>
                    {t(`projects.${p}.title`)}
                  </h4>
                  <p className='text-sm text-slate-600 mb-2'>
                    {t(`projects.${p}.location`)}
                  </p>
                  <p className='text-slate-700 text-sm'>
                    {t(`projects.${p}.summary`)}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className='py-16 bg-linear-to-t from-gray-200 to-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div>
            <h4 className='text-xl font-bold text-[#014D6C] mb-3'>
              {t('vision.title')}
            </h4>
            <p className='text-slate-700'>{t('vision.text')}</p>
          </div>
          <div>
            <h4 className='text-xl font-bold text-[#014D6C] mb-3'>
              {t('mission.title')}
            </h4>
            <p className='text-slate-700 mb-4'>{t('mission.intro')}</p>
            <ol className='list-decimal list-inside space-y-2 text-slate-700'>
              <li>{t('mission.point1')}</li>
              <li>{t('mission.point2')}</li>
              <li>{t('mission.point3')}</li>
              <li>{t('mission.point4')}</li>
            </ol>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <Partners />

      {/* CONTACT */}
      <section id='contact' className='py-16 bg-white  pt-25'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-start'>
          <div>
            <h3 className='text-2xl font-bold text-[#014D6C] mb-4'>
              {t('contact.title')}
            </h3>
            <p className='text-slate-700 mb-3'>{t('contact.lead')}</p>
          </div>
          <div></div>
          <div className='bg-gray-50 p-6 rounded-2xl shadow-lg'>
            <form className='space-y-4'>
              <div>
                <label className='text-sm font-medium text-slate-700'>
                  {t('contact.form.name')}
                </label>
                <input
                  className='mt-2 w-full rounded-md p-3 border border-slate-200'
                  placeholder={t('contact.form.namePlaceholder')}
                />
              </div>
              <div>
                <label className='text-sm font-medium text-slate-700'>
                  {t('contact.form.email')}
                </label>
                <input
                  className='mt-2 w-full rounded-md p-3 border border-slate-200'
                  placeholder={t('contact.form.emailPlaceholder')}
                />
              </div>
              <div>
                <label className='text-sm font-medium text-slate-700'>
                  {t('contact.form.message')}
                </label>
                <textarea
                  className='mt-2 w-full rounded-md p-3 border border-slate-200'
                  rows={5}
                  placeholder={t('contact.form.messagePlaceholder')}
                />
              </div>
              <button
                type='button'
                className='inline-flex items-center gap-3 px-5 py-3 rounded-full bg-sky-950 text-white font-semibold cursor-pointer'
              >
                {t('contact.form.submit')}
              </button>
            </form>
          </div>

          <div>
            <div className='space-y-4 text-slate-700'>
              <div className='flex items-start gap-3'>
                <FiMapPin className='text-sky-700 mt-1' />
                <div>
                  <div className='font-semibold'>
                    {t('contact.addressTitle')}
                  </div>
                  <div className='text-sm'>{t('contact.address')}</div>
                </div>
              </div>
              <div className='flex items-start gap-3'>
                <FiPhone className='text-sky-700 mt-1' />
                <div>
                  <div className='font-semibold'>{t('contact.phoneTitle')}</div>
                  <div className='text-sm mt-1 flex flex-col'>
                    {[
                      { loc: { ar: 'مصر', en: 'EG' }, phone: '+201019835820' },
                      { loc: { en: 'QA', ar: 'قطر' }, phone: '+97430949099' },
                      {
                        loc: { ar: 'الامارات', en: 'AE' },
                        phone: '+971586860282'
                      }
                    ].map(({ loc, phone }: any) => {
                      return (
                        <p className='gap-2 flex' key={loc[locale]}>
                          <Link href={`tel:${phone}`} target='_blank'>
                            {locale == 'ar'
                              ? phone
                                  .replaceAll(/\+/g, '00')
                                  .replace(/\d/g, (e: any) => `٠١٢٣٤٥٦٧٨٩`[e])
                              : phone}
                          </Link>
                          <b>({loc[locale]})</b>{' '}
                        </p>
                      )
                    })}
                  </div>
                </div>
              </div>
              <div className='flex items-start gap-3'>
                <FiMail className='text-sky-700 mt-1' />
                <div>
                  <div className='font-semibold'>{t('contact.emailTitle')}</div>
                  <Link
                    href={`mailto:contact@eramsco.com`}
                    target={'_blank'}
                    className='text-sm font-extrabold'
                  >{`contact@eramsco.com`}</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER (gradient) */}
      <footer className='bg-linear-to-t from-gray-300 to-white backdrop-blur-2xl text-slate-700 py-10 text-center'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-1 gap-8  '>
          <div className='mt-4 flex gap-3 w-full text-center items-center justify-center'>
            <a className='w-10 h-10 flex items-center justify-center rounded-full  hover:scale-120 hover:text-blue-600  transition-all duration-300 cursor-pointer bg-white/70'>
              <FaFacebook className=' w-7 h-7 ' />
            </a>
            <a className='w-10 h-10 flex items-center justify-center rounded-full hover:scale-120 hover:text-sky-700  transition-all duration-300 cursor-pointer bg-white/70'>
              <FaLinkedin className='rounded-lg w-7 h-7' />
            </a>
            <a className='w-10 h-10 flex items-center justify-center rounded-full hover:scale-120 hover:text-orange-800  transition-all duration-300 cursor-pointer bg-white/70'>
              <FaInstagram className=' w-7 h-7 ' />
            </a>
          </div>
        </div>

        <div className='mt-8 text-center text-sm opacity-90 text-gray-950'>
          {t('footer.copyright', { year: new Date().getFullYear() })}
        </div>
        <div className='text-xs flex w-full items-center justify-center gap-1 text-gray-400'>
          <CgCodeSlash /> {t('footer.dev')}{' '}
          <Link
            className='font-bold underline decoration-1 decoration-dotted hover:text-sky-800 transition-all duration-300'
            target={'_blank'}
            href={'https://burhams.com'}
            title='Burham B. Soliman'
            content='Burham B. Soliman'
          >
            Burham B. Soliman
          </Link>{' '}
          |{' '}
          <Link
            className='font-bold underline decoration-1 decoration-dotted hover:text-sky-800 transition-all duration-300'
            target={'_blank'}
            href={'https://pixil.pro'}
            title='Pixil Pro Ltd.'
            content='Pixil Pro Ltd.'
          >
            PixilPro Ltd.
          </Link>
        </div>
      </footer>
    </main>
  )
}
