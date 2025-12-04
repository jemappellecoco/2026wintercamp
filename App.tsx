import React from 'react';
import { CAMP_SESSIONS, GENERAL_INFO } from './constants';
import CampCard from './components/CampCard';
// import RegistrationForm from './components/RegistrationForm';
import { MapPin, Mail, Gift } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-br from-indigo-900 via-purple-800 to-indigo-900 text-white pt-24 pb-32 overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 bg-yellow-400 text-yellow-900 font-bold rounded-full mb-6 text-sm tracking-wide shadow-lg animate-bounce">
            2026 冬令營現正熱烈報名中 🔥
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight drop-shadow-lg">
            點石書屋<br className="md:hidden" />・雙語冬令營
          </h1>
          <p className="text-lg md:text-xl text-indigo-100 max-w-2xl mx-auto mb-10 leading-relaxed">
            給孩子一個不一樣的冬天！結合故事創作、歐洲文化探索與古文明智慧，
            在沉浸式雙語環境中，開啟跨領域的學習之旅。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => {
                window.location.href = '/2026wintercamp/register.html';
              }}
              className="px-8 py-4 bg-white text-indigo-900 font-bold rounded-full shadow-xl hover:bg-gray-100 transition-all transform hover:-translate-y-1"
            >
              立即報名
            </button>
            <a
              href="#sessions"
              className="px-8 py-4 bg-indigo-700/50 text-white font-bold rounded-full border border-indigo-400/30 hover:bg-indigo-700 transition-all backdrop-blur-sm"
            >
              了解課程
            </a>
          </div>
        </div>

        {/* Wave Separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full h-auto text-gray-50 fill-current"
          >
            <path
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>
      </header>



      {/* Main Sessions Content */}
      <section id="sessions" className="py-16">
        <div className="container mx-auto px-4 max-w-5xl mt-[-40px]">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              精彩主題梯次
            </h2>
            <div className="w-24 h-1.5 bg-indigo-600 mx-auto rounded-full" />
            <p className="mt-4 text-gray-600">點選「查看課表」了解每日詳細安排</p>
          </div>

          {CAMP_SESSIONS.map((session) => (
            <CampCard key={session.id} session={session} onRegister={() => {}} />
          ))}
        </div>
      </section>
      {/* 點石優惠區塊 – 接在 wave 底下，用一點 -mt 讓過渡比較順 */}
      <section className="-mt-1ˊ pb-16 pt-4 bg-indigo-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-semibold mb-3">
              <Gift className="w-4 h-4" />
              點石優惠方案
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">
              點石優惠・讓學習更划算
            </h2>
            <p className="text-sm text-gray-600">
              抵用券可用於：家教課程、一日課程、其他活動項目（依實際公告為主）
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 雙人同行 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-indigo-100">
              <p className="text-xs font-semibold text-indigo-600 tracking-wide mb-2">方案一</p>
              <h3 className="font-bold text-lg text-gray-900 mb-3">雙人同行</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                兩位同時報名冬令營，
                <br />
                <span className="font-semibold text-indigo-700">
                  每位贈 300 元點石現金抵用券
                </span>
                。
              </p>
            </div>

            {/* 報名時數回饋 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-emerald-100">
              <p className="text-xs font-semibold text-emerald-600 tracking-wide mb-2">方案二</p>
              <h3 className="font-bold text-lg text-gray-900 mb-3">報名時數回饋</h3>
              <ul className="text-sm text-gray-700 space-y-1.5 leading-relaxed">
                <li>
                  ▪ 報名 <span className="font-semibold">兩週課程</span>：贈{' '}
                  <span className="font-semibold text-emerald-700">300 元抵用券</span>
                </li>
                <li>
                  ▪ 報名 <span className="font-semibold">三週課程</span>：贈{' '}
                  <span className="font-semibold text-emerald-700">600 元抵用券</span>
                </li>
              </ul>
            </div>

            {/* 推薦新生 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-pink-100">
              <p className="text-xs font-semibold text-pink-600 tracking-wide mb-2">方案三</p>
              <h3 className="font-bold text-lg text-gray-900 mb-3">推薦新生</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                成功推薦一位新朋友報名冬令營，
                <br />
                可獲得 <span className="font-semibold text-pink-700">300 元點石抵用券</span>。
              </p>
            </div>
          </div>

          <p className="mt-6 text-xs text-gray-500 text-center">
            🎟 抵用券使用方式與細節，將於報名確認信或官方公告中說明。
          </p>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-white text-2xl font-bold mb-6">點石書屋</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> stone.education.tw@gmail.com
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> {GENERAL_INFO.location}
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-sm">
            &copy; 2026 點石書屋. All Rights Reserved.
          </div>
        </div>
      </footer>

      {/* LINE Button – floating */}
      <a
        href="https://lin.ee/6sQV2RI"
        target="_blank"
        className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-xl flex items-center justify-center text-white font-bold text-lg transition-all"
      >
        LINE
      </a>
    </div>
  );
}

export default App;
