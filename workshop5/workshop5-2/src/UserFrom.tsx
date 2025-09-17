import React, { useState } from "react";
import "./UserFrom.css";

interface FormData {
  name: string;
  email: string;
}

const UserForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    alert(`ชื่อ: ${formData.name}\nอีเมล: ${formData.email}`);
  };

  const handleClear = () => {
    setFormData({
      name: "",
      email: "",
    });
  };

  return (
    <div className="form-container">
      <h2 className="form-title">User Form Exercise - Solution</h2>
      
      <div className="form-group">
        <label>ชื่อ:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="กรอกชื่อของคุณ"
        />
      </div>

      <div className="form-group"> 
        <label>อีเมล:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="กรอกอีเมลของคุณ"
        />
      </div>
      
      <div className="button-group">
        <button onClick={handleSubmit} className="btn submit-btn">Submit</button>
        <button onClick={handleClear} className="btn clear-btn">Clear</button>
      </div>

      <div className="data-display">
        <h3>ข้อมูลปัจจุบัน:</h3>
        <p>ชื่อ: {formData.name || "ยังไม่ได้กรอก"}</p>
        <p>อีเมล: {formData.email || "ยังไม่ได้กรอก"}</p>
      </div>
    </div>
  );
};

export default UserForm;