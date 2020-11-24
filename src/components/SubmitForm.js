import React, { useState } from "react";

import "../css/component-level/SubmitForm.css";

export default function SubmitForm({ sendForm }) {
    

  const [form_data, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    fuel: "",
    odometer: "",
  });
    
    const onSubmit = (e) => {
        e.preventDefault();

        sendForm(form_data);
    }
    
  const form_update = (e) => {
    let key = e.target.name;
    let value = e.target.value;

    setFormData((prevData) => {
      return {
        ...prevData,
        [key]: value,
      };
    });
    };
    

  return (
      <div className="submit-cont" onSubmit={onSubmit}>
      <form className="entry-form">
        <div className="ef-field">
          <label>Driver Name</label>
          <input
            value={form_data.name}
            onChange={form_update}
            type="text"
            name="name"
          />
        </div>

        <div className="ef-field">
          <label>Driver Email</label>
          <input
            value={form_data.email}
            onChange={form_update}
            type="email"
            name="email"
          />
        </div>

        <div className="ef-field">
          <label>Entry Date</label>
          <input
            value={form_data.date}
            onChange={form_update}
            type="date"
            name="date"
          />
        </div>

        <div className="ef-field">
          <label>Fuel Reading</label>
          <input
            value={form_data.fuel}
            onChange={form_update}
            type="number"
            name="fuel"
          />
        </div>

        <div className="ef-field">
          <label>Odometer Reading</label>
          <input
            value={form_data.odometer}
            onChange={form_update}
            type="number"
            name="odometer"
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
