import Button from "./Button";
import Input from "./Input";

export default function DeliveryInfo() {
  return (
    <form className="mt-4 w-3/5">
      <div className="flex flex-col gap-4 mb-8">
        <Input
          type="text"
          placeholder=" "
          customStyle="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          label="Next Delivery Date"
        />
        <Input
          type="text"
          placeholder=" "
          customStyle="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          label="Delivery Area"
        />
        <Input
          type="text"
          placeholder=" "
          customStyle="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          label="Delivery Address"
        />
        <Input
          type="text"
          placeholder=" "
          customStyle="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          label="Payment Status"
        />
      </div>
      <Button
        className="bg-light_blue text-white font-bold px-4 py-2"
        text="Save Changes"
      />
    </form>
  );
}
