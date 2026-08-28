import artNurse from '@/assets/art-nurse.jpg'
import artBunny from '@/assets/art-bunny.jpg'
import artSofa from '@/assets/art-sofa.jpg'
import artHeart from '@/assets/art-heart.jpg'
import artChibi from '@/assets/art-chibi.jpg'

export interface Artwork {
  src: string
  title: string
  caption: string
}

export const artworks: Artwork[] = [
  {
    src: artSofa,
    title: 'Detective of Time',
    caption: 'ยามว่างของนักสืบ — โซฟาตัวโปรด หนังสือ และเอกสารคดีเก่า',
  },
  {
    src: artNurse,
    title: 'ผู้ช่วยพยาบาล',
    caption: 'อีกด้านของมนัสนันท์ ในชุดพยาบาลสุดน่ารัก (แฟนอาร์ตธีมพิเศษ)',
  },
  {
    src: artHeart,
    title: 'หัวใจสองดวง',
    caption: 'สองบุคลิกในคนๆ เดียว — นักสืบผู้เยือกเย็น และเด็กสาวผู้อบอุ่น',
  },
  {
    src: artBunny,
    title: 'เพื่อนซี้ตัวน้อย',
    caption: 'กอดตุ๊กตากระต่ายคู่ใจ ไม่ลงสนามก็อยู่กับหนังสือและของสะสม',
  },
  {
    src: artChibi,
    title: 'จิบิส่งของขวัญ',
    caption: 'เวอร์ชันจิบิน่ารัก พร้อมของขวัญชิ้นพิเศษสำหรับคนสำคัญ',
  },
]

export const profile = {
  name: 'มนัสนันท์ แสนงานศิลป์',
  nameEn: 'Manatsanan Saenngansilp',
  title: 'นักสืบอาวุโส',
  agency: 'สำนักงานใหญ่เซนต์ไอริส',
  agencyEn: 'Saint Iris Headquarters',
  badgeId: 'SI-221-001',
  birthday: '13 กุมภาพันธ์ พ.ศ. 2622',
  university: 'มหาวิทยาลัยเซนต์ไอริส',
  degree: 'ปริญญาเอก',
  licensedFields: [
    'แผนกอาวุธและวิถีกระสุน',
    'แผนกวัตถุระเบิดและวัตถุอันตราย',
    'แผนกเก็บหลักฐานและนิติวิทยาศาสตร์',
  ],
  careerIntro:
    'จบการศึกษาจากโรงเรียนฝึกเจ้าหน้าที่สืบสวนเซนต์ไอริส (อันดับหนึ่งของชั้นปี) ปัจจุบันทำงานเป็นนักสืบที่สำนักงานใหญ่เซนต์ไอริส เชี่ยวชาญด้านนิติวิทยาศาสตร์ การสืบสวนอาวุธ วัตถุระเบิด และเป็นที่ปรึกษาด้านเทคนิคภาพยนตร์',
  workHistory: {
    code: 'SI-221-001',
    place: 'สำนักงานใหญ่เซนต์ไอริส',
    period: 'พ.ศ. 2643 – 2649',
    roles: [
      'นักสืบสหวิชาชีพ',
      'ผู้เชี่ยวชาญด้านนิติวิทยาศาสตร์',
      'ผู้เชี่ยวชาญด้านอาวุธและวัตถุระเบิด',
      'ที่ปรึกษาด้านเทคนิคภาพยนตร์',
    ],
  },
  skills: [
    'นิติวิทยาศาสตร์',
    'การสืบสวนเหตุระเบิด',
    'การวิเคราะห์อาวุธ',
    'การวิเคราะห์ภาพและวิดีโอ',
    'การถ่ายทำและเล่าเรื่องภาพยนตร์',
    'การอนุมาน',
    'การวิเคราะห์หลักฐาน',
  ],
  education: [
    { degree: 'ปริญญาตรี', field: 'นิติวิทยาศาสตร์' },
    { degree: 'ปริญญาโท', field: 'นิติวิทยาศาสตร์' },
    { degree: 'ปริญญาเอก', field: 'อาชญาวิทยา' },
    { degree: 'ประกาศนียบัตรเฉพาะทาง', field: 'การตรวจพิสูจน์อาวุธและวัตถุระเบิด' },
    { degree: 'ประกาศนียบัตร', field: 'นิติวิทยาศาสตร์ดิจิทัล' },
  ],
  cases: [
    { name: 'คดีฆาตกรรม', icon: 'fingerprint' },
    { name: 'คดีลักพาตัว', icon: 'search' },
    { name: 'คดีบุคคลสูญหาย', icon: 'map-pin' },
    { name: 'คดีวางระเบิดและวัตถุระเบิด', icon: 'bomb' },
    { name: 'COLD CASE', icon: 'archive' },
  ],
  contacts: [
    { label: 'f3ckinghellpor@gmail.com', icon: 'mail' },
    { label: '+66 21 2100 101', icon: 'phone' },
    { label: 'Saintirisheadquarters.com', icon: 'link' },
    { label: '@Saintiris01', icon: 'at-sign' },
  ],
  credits: 'ภาพวาดต้นฉบับโดย Porwan',
}
