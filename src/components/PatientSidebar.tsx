export default function PatientSidebar() {
  return (
    <aside className="w-1/6 h-1/2 bg-white shadow-lg mx-5">
      <ul className="flex flex-col gap-4">
        <li className="text-dark text-opacity-60 text-sm font-medium p-3">
          Patient
        </li>
        <li className="text-light_blue bg-light_blue bg-opacity-30 font-bold border-r-4 border-light_blue p-3">
          Rider&apos;s Profile
        </li>
        <li className="text-dark text-opacity-60 text-sm font-medium p-3">
          Delivery History
        </li>
      </ul>
    </aside>
  );
}
