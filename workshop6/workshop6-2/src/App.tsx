import React from "react";
import Navbar from "./component/Navbar";

const App: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen w-full">
      <Navbar />
      <main className="p-6 mt-20 w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          เนื้อหาหลักของหน้าเว็บ
        </h1>
        <p className="text-gray-600 leading-relaxed">
          นี่คือส่วนเนื้อหาของหน้าเว็บที่อยู่ใต้ Navigation Bar 
          ปรับขนาดหน้าจอเพื่อดูการทำงานของ Responsive Navbar
        </p>
      </main>
    </div>
  );
};

export default App;