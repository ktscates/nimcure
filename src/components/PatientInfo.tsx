/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Input from "./Input";

export default function PatientInfo({ patient }: any) {
  const [formData, setFormData] = useState(patient);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form className="mt-4 w-3/5 space-y-4 mb-4">
      <Input
        type="text"
        placeholder=" "
        customStyle="peer w-full px-4 py-3 font-bold border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        label="Hospital ID"
        value={formData.hospital_id}
        onChange={handleChange}
      />
      <div className="grid grid-cols-2 gap-4">
        <Input
          type="text"
          placeholder=" "
          customStyle="w-full px-4 py-3 font-bold border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          label="First Name"
          value={formData.first_name}
          onChange={handleChange}
        />
        <Input
          type="text"
          placeholder=" "
          customStyle="w-full px-4 py-3 font-bold border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          label="Last Name"
          value={formData.last_name}
          onChange={handleChange}
        />
        <Input
          type="text"
          placeholder=" "
          customStyle="w-full px-4 py-3 font-bold border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          label="Gender"
          value={formData.gender}
          onChange={handleChange}
        />
        <Input
          type="text"
          placeholder=" "
          customStyle="w-full px-4 py-3 font-bold border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          label="Phone Number"
          value={formData.phone_number}
          onChange={handleChange}
        />
      </div>
      <Input
        type="text"
        placeholder=" "
        customStyle="w-full px-4 py-3 font-bold border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        label="Email Address"
        value={formData.email}
        onChange={handleChange}
      />
    </form>
  );
}
