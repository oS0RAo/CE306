WorkShop 6.1
Component Button จะมีการกำหนด Props เป็น interface ButtonProps ที่ใช้กำหนดประเภทข้อมูลที่จะรับเข้ามา
variant ใช้กำหนดสีของปุ่ม
size ใช้กำหนดขนาดของปุ่มคือ "sm" (เล็ก), "md" (กลาง), และ "lg" (ใหญ่) โดยค่าเริ่มต้นจะเป็น "md"
variantStyles จะใช้คำสั่ง switch เพื่อเลือกคลาสสีตามค่าของ variant ที่ส่งเข้ามา
sizeStyles จะใช้คำสั่ง switch เพื่อเลือกขนาดตามค่าของ size ที่ส่งเข้ามา
โดยการแสดงผล Component จะคืนค่าแท็ก button className={combinedClassName} จะนำ Class CSS ที่สร้างขึ้นมาไปกำหนดให้กับปุ่ม
disabled={disabled} จะทำให้ปุ่มมีสถานะปิดใช้งานหากมีการส่ง prop disabled เข้ามา
{...props} จะส่งต่อ props ที่เหลือไปให้กับแท็ก button ตรงๆ
{children} จะแสดงเนื้อหาที่อยู่ภายในปุ่ม

Component ProductCard
กำหนด Props ผ่าน interface ProductCardProps กำหนด props ที่รับเข้ามาได้แก่ imageUrl, title, description, priceและ onAddToCart
การออกแบบด้วย Tailwind จะมีการกำหนด layout, สี, และการจัดวางหน้า มีการใช้ div หลายตัวเพื่อแบ่งส่วนประกอบของการ์ดได้แก่ รูปภาพ, ข้อมูลสินค้า (ชื่อ, รายละเอียด), ราคา และปุ่ม
เรียกใช้ Component Button <Button onClick={onAddToCart} className="w-full" variant="primary"> 
โดย onClick={onAddToCart} คือการส่งฟังก์ชัน onAddToCart ที่ได้รับมาจากหน้าหลักไปให้ปุ่ม เมื่อผู้ใช้คลิกปุ่มนี้
className="w-full" เป็นการกำหนดให้ปุ่มมีความกว้างเต็มพื้นที่ของ container
variant="primary" เป็นการเลือกใช้ปุ่มให้มีสี

App
สร้าง Array Objct products ที่เก็บข้อมูลสินค้าแต่ละชิ้น
handleAddToCart Function นี้จะถูกเรียกใช้เมื่อผู้ใช้กดปุ่ม Add to Cart
และalert(...) จะแสดงข้อความแจ้งเตือน
