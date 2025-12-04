import { CampSession } from './types';
// ⭐ 把圖片當模組匯入
import img1 from './1.jpg';
import img2 from './2.jpg';

export const CAMP_SESSIONS: CampSession[] = [
  {
    id: 'batch1',
    title: '第一梯次：英語故事創作 × 停格動畫導演營',
    subtitle: '由廣受歡迎的 Joanne 老師親自帶領，激發孩子的無限想像力！',
    date: '1/26 (一) ~ 1/30 (五)',
    price: 9200,
    description: '結合「故事創作 × 動畫拍攝」，從腳本到鏡頭，親手製作屬於自己的動畫短片！',
    highlights: [
      '每日上午由 Joanne 老師進行全英文故事引導與寫作教學',
      '週五六福村實境拍攝挑戰'
    ],
    colorTheme: 'orange',
    image: 'https://picsum.photos/800/500?random=10',
    schedule: [
      { time: '09:00-09:30', mon: '接送時間', tue: '接送時間', wed: '接送時間', thu: '接送時間', fri: '戶外教學 \n 六福村 \n(包車前往)' },
      { time: '09:30-10:00', mon: '規則講解', tue: '團體遊戲', wed: '團體遊戲', thu: '團體遊戲', fri: '六福村主題樂園' },
      { time: '10:00-10:50', mon: 'Joanne 老師\n說故事時間', tue: 'Joanne 老師\n說故事時間', wed: 'Joanne 老師\n說故事時間', thu: 'Joanne 老師\n說故事時間', fri: '戶外教學' },
      { time: '11:00~11:50', mon: '寫作課', tue: '寫作課', wed: '故事配音', thu: '故事配音', fri: '藝術探索' },
      { time: '12:00~13:00', mon: '午休時間', tue: '午休時間', wed: '午休時間', thu: '莎午休時間', fri: '戶外教學' },
      { time: '13:00-14:30', mon: '認識動畫片\n動畫是怎麼拍出來的', tue: '動畫人物與\n背景素材製作', wed: '動畫人物與\n背景素材製作', thu: 'Filming Time\n錄製你的停格動畫', fri: '快樂賦歸' },
      { time: '14:30-15:30', mon: '認識動畫片\n動畫是怎麼拍出來的', tue: '故事配音', wed: '動畫背景素材製作', thu: 'Filming Time\n錄製你的停格動畫', fri: '快樂賦歸' },
      { time: '15:30-16:00', mon: 'Switch Party', tue: 'Board Game', wed: 'Switch Party', thu: 'Board Game', fri: '快樂賦歸' },
      { time: '16:00-16:30', mon: '接送時間', tue: '接送時間', wed: '接送時間', thu: '接送時間', fri: '接送時間' },

    ]
  },
  {
    id: 'batch2',
    title: '第二梯次：遨遊世界一萬哩：歐洲文化與旅遊英語',
    subtitle: '不出國也能環遊歐洲！沉浸式英語情境與跨文化手作體驗。',
    date: '2/2 (一) ~ 2/6 (五)',
    price: 8350,
    description: '每日解鎖一個歐洲國家，搭配實用旅遊英語與各國特色手作 DIY。',
    highlights: [
      '包含西班牙文體驗',
      '檸檬皂 DIY',
      '汽車模型製作',
      '莎翁戲劇課'
    ],
    colorTheme: 'sky',
    image: img1,
    schedule: [
       { time: '09:00-09:30', mon: '接送時間', tue: '接送時間', wed: '接送時間', thu: '接送時間', fri: '青埔兒童美術館' },
      { time: '09:30-10:00', mon: '規則講解', tue: '團體遊戲', wed: '團體遊戲', thu: '團體遊戲', fri: '六福村主題樂園' },
      { time: '10:00-10:50', mon: '旅遊英文\n報到登機', tue: '旅遊英文\n安全檢查過海關', wed: '旅遊英文\n機上注意事項', thu: '旅遊英文\n免稅商店購物', fri: '戶外教學' },
      { time: '11:00~11:50', mon: '探索歐洲\n熱情西班牙', tue: '探索歐洲\n浪漫法蘭西', wed: '探索歐洲\n務實德意志', thu: '探索歐洲\n古典英格蘭', fri: '藝術探索' },
      { time: '11:50-13:30', mon: '午休時間', tue: '午休時間', wed: '午休時間', thu: '莎午休時間', fri: '戶外教學' },
      { time: '13:00-15:30', mon: '西班牙文小教室', tue: '法國檸檬節\n手做檸檬肥皂', wed: '驅動世界的力量\n德國汽車文化介紹\n(手做小汽車)', thu: '英國文學寶藏\n莎士比亞戲劇課', fri: '快樂賦歸' },
      { time: '15:30-16:00', mon: 'Switch Party ', tue: 'Board Game', wed: 'Switch Party', thu: 'Acting Time', fri: '快樂賦歸' },
      { time: '16:00-16:30', mon: '接送時間', tue: '接送時間', wed: '接送時間', thu: '接送時間', fri: '接送時間' },

    ]
  },
  {
    id: 'batch3',
    title: '第三梯次：穿越時空：西洋燦爛古文明探索',
    subtitle: '歷史 × 科學 × 藝術！動手玩出古人的大智慧。',
    date: '2/9 (一) ~ 2/13 (五)',
    price: 8350,
    description: '探索埃及、希臘、羅馬與兩河文明，透過 STEAM 實作（如投石器、造紙）體驗歷史。',
    highlights: [
      '豐富的實作課程（莎草紙、投石器、羅馬火炬）',
      '週五六福村歡樂結業'
    ],
    colorTheme: 'emerald',
    image: img2,
    schedule: [
       { time: '09:00-09:30', mon: '接送時間', tue: '接送時間', wed: '接送時間', thu: '接送時間', fri: '台灣博物館' },
      { time: '09:30-10:00', mon: '規則講解', tue: '團體遊戲', wed: '團體遊戲', thu: '團體遊戲', fri: '六福村主題樂園' },
      { time: '10:00-10:50', mon: '金字塔解謎', tue: '奧運的起源\n希臘奧林匹克運動會', wed: '輝煌的羅馬帝國', thu: '世界最古老的文明\n兩河古文明', fri: '戶外教學' },
      { time: '11:00~11:50', mon: '認識輝煌\n古埃及文明', tue: '希臘哲學與數學', wed: '帝國的文明與藝術', thu: '古人的智慧\n曆法制度', fri: '藝術探索' },
      { time: '11:50-13:30', mon: '午休時間', tue: '午休時間', wed: '午休時間', thu: '莎午休時間', fri: '戶外教學' },
      { time: '13:00-15:30', mon: '莎草紙筆記本製作', tue: '揭密建築學\n投石器製作', wed: '手做時間\n羅馬火炬與桂冠', thu: '文字的力量\n楔形文字練習寫', fri: '快樂賦歸' },
      { time: '15:30-16:00', mon: 'Switch Party ', tue: 'Racing Time\n投石器大戰', wed: 'Board game', thu: 'Switch Party ', fri: '快樂賦歸' },
      { time: '16:00-16:30', mon: '接送時間', tue: '接送時間', wed: '接送時間', thu: '接送時間', fri: '接送時間' },

    ]
  }
];

export const GENERAL_INFO = {
  time: '每日 09:30 - 16:00\n (09:00 開始 Drop-off, 16:00-16:30 Pick-up)',
  location: '慈惠三街 106 號 3 樓',
  address: '請洽詢點石書屋', 
  discounts: '第一梯次 $9,200 | 第二、三梯次 $8,350',
};