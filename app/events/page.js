export default function Events() {
  return (
    <div
      className="relative min-h-screen bg-gray-500 text-gray-100" // 深色背景
      style={{
        backgroundImage:"url('/images/米亞書法金色.png')", // 換成你放在 public 資料夾的圖片
        backgroundAttachment: "fixed", // 跟隨滾動
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="relative max-w-4xl mx-auto px-4 py-12 space-y-16 bg-black/60 rounded-2xl shadow-xl">
        {/* 經歷 */}
        <section>
          <h2 className="text-2xl font-bold mb-6">經歷</h2>
          <ul className="space-y-4">
            <li>2023.03.18　VTUBER 初配信，正式出道</li>
            <li>
              2025.01　參加失落的方舟主題曲 <br />
              <span className="ml-8">[Sweet Dreams, My Dear] COVER 比賽 - 榮獲第四名</span>
            </li>
            <li>
              2025.05　參加風色幻想 NeXus <br />
              <span className="ml-8">風色藝能之星計畫 - 獲最佳潛力獎</span>
            </li>
            <li>2025.09　參加公共電視 - 金V獎比賽</li>
            <li>2025.09　參加 HTC V-POP-ASIA 徵選</li>
          </ul>
        </section>

        {/* 克拉拉米亞檔案 */}
        <section>
          <h2 className="text-2xl font-bold mb-6">克拉拉米亞檔案</h2>
          <p className="leading-relaxed whitespace-pre-line">
            個人勢 VTUBER – 初配信日: 2023.03.18
            {"\n"}FROM: 克拉拉星
            {"\n"}居住: 阿里山
            {"\n"}身高: 163CM
            {"\n"}體重: 50KG
            {"\n"}BIRTH: 1023.12.20
            {"\n"}學歷: 克拉拉星球 - 星際大學 (商學系)
            {"\n"}記錄星際變化與撰寫感測報告
          </p>

          <p className="mt-4 leading-relaxed">
            MIA 是從克拉拉星球移民到臺灣的新住民。<br />
            在一次星際探險中因燃料不足與飢餓迫降地球，降落於阿里山，被當地阿公阿嬤收養。<br />
            興趣: 唱歌、BL劇(漫)、聊天(連笑維)<br />
            語言: 台語、中文、英文<br />
            小名: Mia、米米、米醬、米卡丘、米五歲<br />
            粉絲名: 「多多」 (因為喜歡喝多多)<br />
            小Q米是米亞的五十歲人格。
          </p>

          <p className="mt-4 leading-relaxed">
            LIVE 2D 建模: 巴德<br />
            LIVE 2D 繪圖: Mia. C<br />
            米亞標準字: Mia. C<br />
            米亞書法: Mia. C<br />
            3D 作者: Mia. C
          </p>

          <p className="mt-4 font-semibold">
            每周的直播時間為：二、四、六 晚上 8:00 (偶爾會告假)<br />
            目前直播平台：YouTube / Twitch / TikTok / StarMaker
          </p>
        </section>

        {/* 按鈕連結 */}
        <section className="flex flex-wrap gap-4 justify-center">
          <a
            href="https://youtube.com/live/jgnd9Xdjafs"
            target="_blank"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
          >
            克拉拉米亞初配信
          </a>
          <a
            href="https://youtu.be/PFExCaAk9a4?si=rmhyvj8zUt7c4Bkv"
            target="_blank"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
          >
            米亞1分鐘自我介紹
          </a>
          <a
            href="https://youtube.com/live/KOjMp6ogZsw"
            target="_blank"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
          >
            小Q米初配信
          </a>
        </section>
      </div>
    </div>
  );
}
