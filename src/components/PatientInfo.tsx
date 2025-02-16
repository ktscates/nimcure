import Button from "./Button";
import Input from "./Input";

export default function PatientInfo() {
  return (
    <form className="mt-4 w-3/5 space-y-4">
      <Input
        type="text"
        placeholder=" "
        customStyle="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        label="Hospital ID"
      />
      <div className="grid grid-cols-2 gap-4">
        <Input
          type="text"
          placeholder=" "
          customStyle="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          label="First Name"
        />
        <Input
          type="text"
          placeholder=" "
          customStyle="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          label="Last Name"
        />
        <Input
          type="text"
          placeholder=" "
          customStyle="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          label="Gender"
        />
        <Input
          type="text"
          placeholder=" "
          customStyle="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          label="Phone Number"
        />
      </div>
      <Input
        type="text"
        placeholder=" "
        customStyle="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        label="Email Address"
      />
      <Button
        className=" bg-light_blue text-white font-bold px-4 py-2"
        text="Save Changes"
      />
    </form>
  );
}
