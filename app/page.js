import Image from 'next/image';

export default function Home() {
  return (
    <div className="text-center">
      {/* 標語 */}
      <section
        className="relative bg-gray-900 text-white py-16 bg-center bg-cover"
        style={{ backgroundImage: "url('/images/喵+簽名.png')" }}
      >
        {/* 半透明遮罩（讓文字更清楚） */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* 內容 */}
        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold">
            從克拉拉星來的星際迷航者
          </h1>
        </div>
      </section>

      {/* 角色展示 */}
      <section className="py-16 bg-white text-gray-900">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">

          {/* Live 2D MODE */}
          <div className="transform hover:scale-110 transition duration-300">
            <div className="w-40 h-40 mx-auto rounded-full overflow-hidden flex items-center justify-center">
              <Image
                src="/images/米亞網頁照片LIVE2D.png"
                alt="Live 2D MODE"
                width={160}
                height={160}
                className="object-cover"
              />
            </div>
            <p className="mt-4 font-semibold">Live 2D MODE</p>
            <p className="text-sm text-gray-600">繪: Mia. C / 建模: 巴德</p>
          </div>

          {/* 3D MODE */}
          <div className="transform hover:scale-110 transition duration-300">
            <div className="w-40 h-40 mx-auto rounded-full overflow-hidden flex items-center justify-center">
              <Image
                src="/images/S__75816963.jpg"
                alt="3D MODE"
                width={160}
                height={160}
                className="object-cover"
              />
            </div>
            <p className="mt-4 font-semibold">3D MODE</p>
            <p className="text-sm text-gray-600">製作: Mia. C</p>
          </div>

          {/* 2D Q米 */}
          <div className="transform hover:scale-110 transition duration-300">
            <div className="w-40 h-40 mx-auto rounded-full overflow-hidden flex items-center justify-center">
              <Image
                src="/images/小Q米去背 拷貝.png"
                alt="2D Q米"
                width={160}
                height={160}
                className="object-cover"
              />
            </div>
            <p className="mt-4 font-semibold">2D Q米</p>
            <p className="text-sm text-gray-600">委任: MS. HONG</p>
          </div>

          {/* 威沃爾. 威斯福 */}
          <div className="transform hover:scale-110 transition duration-300">
            <div className="w-40 h-40 mx-auto rounded-full overflow-hidden flex items-center justify-center">
              <Image
                src="/images/25-3月-14-09-09-57-40.png"
                alt="威沃爾. 威斯福"
                width={160}
                height={160}
                className="object-cover"
              />
            </div>
            <p className="mt-4 font-semibold">威沃爾. 威斯福</p>
            <p className="text-sm text-gray-600">專屬合作繪師</p>
          </div>

        </div>
      </section>

      {/* 直播時間 */}
      <section className="py-16 bg-gray-100">
        <h2 className="text-xl font-bold mb-4">直播時間</h2>
        <p className="text-gray-700">
          個人勢VTUBER - 克拉拉米亞初配信於: 2023.08.13 ，
          目前直播時間為每周二、四、六晚間八點。
        </p>
      </section>

      {/* 關於介紹 */}
      <section className="py-16 bg-gradient-to-r from-sky-200 to-sky-300 text-gray-900">
        <p className="max-w-3xl mx-auto leading-relaxed">
          Kulala. Mia TW - 克拉拉米亞 #日常廣播系 + 無厘頭系 + 健忘系 Vtuber <br />
          Personality: College student from Kulala planet. I like singing and delicious food. <br />
          Languages: Mandarin Chinese, English and I am learning Japanese. <br />
          My nickname is Mia. I call my fans &quot;Duo Duo&quot; (A drink brand in TW), because I like DUO DUO.
        </p>
      </section>
    </div>
  );
}
