/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Input from "./Input";

export default function DeliveryInfo({ patient }: any) {
  const [formData, setFormData] = useState(patient);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form className="mt-4 w-3/5">
      <div className="flex flex-col gap-4 mb-4">
        <Input
          type="text"
          placeholder=" "
          customStyle="w-full px-4 py-3 border font-bold border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          label="Next Delivery Date"
          value={formData.next_delivery_date}
          onChange={handleChange}
        />
        <Input
          type="text"
          placeholder=" "
          customStyle="w-full px-4 py-3 border font-bold border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          label="Delivery Area"
          value={formData.delivery_area}
          onChange={handleChange}
        />
        <Input
          type="text"
          placeholder=" "
          customStyle="w-full px-4 py-3 border font-bold border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          label="Delivery Address"
          value={formData.delivery_address}
          onChange={handleChange}
        />
        <Input
          type="text"
          placeholder=" "
          customStyle="w-full px-4 py-3 border font-bold border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          label="Payment Status"
          value={formData.status}
          onChange={handleChange}
        />
      </div>
    </form>
  );
}
