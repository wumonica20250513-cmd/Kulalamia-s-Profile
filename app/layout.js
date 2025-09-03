import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "VTuber Website",
  description: "我的 VTuber 個人網站",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant">
      <body className="bg-gray-950 text-white">
        {/* Navbar */}
        <nav className="flex justify-end p-4 bg-gray-500">
          <div className="flex gap-8">
            <Link href="/" className="hover:text-pink-400">首頁</Link>
            <Link href="/events" className="hover:text-pink-400">活動</Link>
            <Link href="/about" className="hover:text-pink-400">關於</Link>
          </div>
        </nav>

        {/* 頁面內容 */}
        <main className="p-6">{children}</main>

        {/* Footer */}
        <footer className="text-center p-4 bg-gray-800 mt-8">
          © Kulalamia
        </footer>
      </body>
    </html>
  );
}
