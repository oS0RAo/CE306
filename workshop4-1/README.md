SkillTag
จะมีการกำหนดประเภทข้อมูลชื่อ SkillLevel ซึ่งจะมีค่าแค่ Beginner Intermediate Advanced
interface SkillTagProps เอาไว้กำหนดคุณสมบัติที่ component จะรับเข้ามาโดย skill: { name: string; level?: SkillLevel; }; จะรับ object skill ซึ่งต้องมี name เป็น string และมี level เป็น
ชนิด SkillLevel ที่กำหนดเอาไว้
ในส่วนของ getLevelClass จะมีการใช้ Switch Case ในการเช็คเงื่อนไขสำหรับการแสดงผล SkillLevel

UserProfileCard
export interface User จะเป็นโครงสร้างข้อมูลของผู้ใช้ที่จะถูกรับเข้ามาคือ id name email avatarUrl isOnline skills
export const UserProfileCard จะเป็นcomponentหลักในส่วนนี้ ซึ่งจะรับข้อมูล user และfunction onViewDetails เข้ามาเป็น Props แสดงผลรูปโปรไฟล์โดยใช้แท็ก <img> โดยดึงรูปมาจาก user.avatarUrl
การแสดงสถานะออนไลน์จะใช้ user.isOnline && <span className="status-dot"></span> ถ้าเกิดว่า user.isOnline เป็น true ก็จะแสดงจุดสถานะสีเขียวขึ้นมา
การแสดงชื่อจะใช้ user.name และอีเมล user.email การแสดงskillจะใช้ .map() เพื่อวนลูปในarray user.skills และแสดงผลแต่ละskillด้วย Component SkillTag
และปุ่ม View Details เมื่อกดปุ่มนี้ จะเรียกใช้ฟังก์ชัน onViewDetails 

App
ในส่วนนี้จะมีข้อมูล users 4 คน ใน่ส่วน users.map((user) => จะมีการใช้ฟังก์ชัน .map() เพื่อวนลูปในarray users โดยในแต่ละรอบของลูปจะเรียกใช้ Component UserProfileCard และส่งข้อมูลของแต่ละผู้ใช้
เข้าไปเป็น props และในส่วนของ onViewDetails={handleViewDetails} จะทำการส่งฟังก์ชัน handleViewDetails ไปให้แต่ละการ์ด เมื่อกดปุ่ม View Details บนการ์ดใดก็ตามโดยฟังก์ชันนี้ก็จะแสดงข้อความและแสดง ID ของผู้ใช้คนนั้นออกมา
