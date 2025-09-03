// app/about/page.tsx
import React from "react";
import Image from "next/image";

const products = [
  {
    name: "2023年 首發紀念-小Q米馬克杯+墊組合",
    img: "/images/米亞首發小Q米杯.jpg",
  },
  {
    name: "2023年克拉拉米亞首發紀念滑鼠墊",
    img: "/images/IMG_20250831_225037.jpg",
  },
  {
    name: "2024年 星際系列馬克杯+墊組合",
    img: "/images/IMG_20241113_103754.jpg",
  },
  {
    name: "2024年 米亞星際示別證卡匣+掛繩組合",
    img: "/images/IMG_20241113_102014.jpg",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-gray-200 min-h-screen p-8">
      {/* 上方圖片 + 說明文字 */}
      <div className="flex items-center justify-center mb-8 space-x-4">
        <Image
          src="/images/20240717會員啟用.jpg"
          alt="會員啟用左圖"
          width={80}
          height={80}
          className="rounded-lg"
        />
        <div className="text-center">
          <p className="text-lg font-semibold">米亞蝦皮商城為個人經營</p>
          <p className="text-md text-gray-700">目前商品只在這販售喔!!</p>
        </div>
        <Image
          src="/images/20240717會員啟用.jpg"
          alt="會員啟用右圖"
          width={80}
          height={80}
          className="rounded-lg"
        />
      </div>

      {/* 商品卡片 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white border border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center hover:shadow-lg transition-transform hover:scale-105"
          >
            {/* 商品圖片 */}
            <div className="w-32 h-32 flex items-center justify-center mb-4 rounded-md overflow-hidden">
              <Image
                src={product.img}
                alt={product.name}
                width={128}
                height={128}
                className="object-cover"
              />
            </div>
            <p className="text-center text-sm">{product.name}</p>
          </div>
        ))}
      </div>

      {/* QR Code 區域 */}
      <div className="flex justify-center items-center space-x-6">
        <Image
          src="/images/蝦米網站連結.jpg"
          alt="蝦米網站連結 QRCode"
          width={150}
          height={150}
          className="rounded-lg shadow-md"
        />
        <Image
          src="/images/image.png"
          alt="Q米 QRCode"
          width={150}
          height={150}
          className="rounded-lg shadow-md"
        />
      </div>
    </div>
  );
}
