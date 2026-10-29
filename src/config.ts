export const config = {
  name: 'Muhammad Saad',
  title: 'Full Stack Web Developer & Flutter App Developer',
  tagline: 'I build digital experiences that turn ideas into reality.',
  email: 'muhammadsaadakram66@gmail.com', 
  whatsapp: '923430175709', 
  github: 'https://github.com/Saadrj-tech',
  linkedin: 'https://www.linkedin.com/in/saadrj-tech/',
  profilePhoto: '/images/saad.png',
  cvPath: '/cv.pdf', // Add your CV to public/cv.pdf
  exchangeRate: 280, // configurable estimate: 1 USD = PKR
  stats: [{value:'0+',label:'Projects completed'},{value:'10+',label:'Technologies explored'},{value:'2',label:'Platforms: web & mobile'},{value:'100%',label:'Focus on quality'}],
  projects: [
    {id:'luxora',name:'LUXORA — Premium E-Commerce',category:'Full Stack',description:'A premium storefront concept with product discovery, cart, checkout flow and admin-ready structure.',features:['Product browsing, search & filters','Shopping cart and checkout workflow','Authentication-ready UI','Admin and order management concept'],tech:['React','TypeScript','Node.js','MongoDB'],demo:'',github:'',status:'Concept / in progress'},
    {id:'dental',name:'Dental Clinic Website',category:'Business Website',description:'A polished clinic website concept designed to turn visitors into appointment enquiries.',features:['Services and treatment sections','Appointment request form','WhatsApp contact','Responsive layout'],tech:['React','CSS','WhatsApp'],demo:'',github:'',status:'Demo coming soon'},
    {id:'school',name:'School Management Application',category:'Full Stack',description:'A school workflow concept for student information, fee records and daily diary updates.',features:['Student management','Fee tracking concept','Daily diary','Admin dashboard concept'],tech:['Flutter','Firebase-ready','Dart'],demo:'',github:'',status:'In progress'},
    {id:'business',name:'Custom Business Websites',category:'Web Development',description:'Responsive business sites with clear messaging, contact options and tasteful motion.',features:['Responsive layouts','Contact forms','WhatsApp integration','Modern animations'],tech:['React','Tailwind CSS','Framer Motion'],demo:'',github:'',status:'Examples available on request'}
  ],
  apps: [
    {id:'paper2practice',name:'Paper2Practice',description:'An education-focused app concept for paper practice with camera and gallery workflows.',tech:['Flutter','Dart'],status:'In development',features:['Practice-focused interface','Camera / gallery workflow','Student-friendly experience']},
    {id:'glowshift',name:'GlowShift AI',description:'A mobile utility app concept with configurable AI-powered tools.',tech:['Flutter','Firebase'],status:'In development',features:['AI utility tool cards','Modern mobile UI','Configurable capabilities']},
    {id:'weather',name:'Weather Forecast App',description:'A weather app concept focused on readable conditions and API-based forecasts.',tech:['Flutter','REST API'],status:'Development concept',features:['Weather data integration','Forecast interface','Responsive information layout']},
    {id:'custom-apps',name:'Custom Flutter Applications',description:'Cross-platform mobile solutions tailored to real business workflows.',tech:['Flutter','Dart','Firebase'],status:'Service',features:['Android apps','Cross-platform solutions','Firebase integration when required']}
  ]
};
export const pricing: Record<string, number> = {
  'Business Website': 25000, 'E-Commerce Website': 65000, 'Portfolio Website': 18000,
  'School Management System': 85000, 'Custom Web Application': 90000,
  'Flutter Android App': 60000, 'Full Stack Application': 100000
};
export const featurePrices: Record<string, number> = {
  'User authentication':10000,'Admin dashboard':18000,'Database integration':12000,'Payment gateway':15000,
  'WhatsApp integration':3000,'Email notifications':5000,'API integration':8000,'Advanced animations':10000,
  'Responsive design':0,'AI integration':25000
};
