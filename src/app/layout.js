// src/app/layout.js

import "./globals.css"; // นำเข้าไฟล์ CSS
import { Prompt } from 'next/font/google'; // นำเข้าฟอนต์ Prompt

// กำหนดฟอนต์ Prompt
const prompt = Prompt({
  variable: '--font-prompt', // ตัวแปรสำหรับใช้ใน CSS
  weight: ['400', '700'], // น้ำหนักฟอนต์ที่ต้องการใช้
  subsets: ['latin'], // ระบุ subset ที่ต้องการ
});

export const metadata = {
  title: "DuckerPacker Quiz", // เปลี่ยน title เป็น "DuckerPacker Quiz"
  description: "Quiz application for DuckerPacker.", // สามารถปรับคำอธิบายได้ตามต้องการ
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.png" type="image/png" />
      </head>
      <body className={prompt.variable}> {/* ใช้ตัวแปรฟอนต์ */}
        <main>{children}</main>
      </body>
    </html>
  );
}
