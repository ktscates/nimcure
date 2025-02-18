import { useState } from "react";
import Button from "./Button";
import RidersCard from "./RidersCard";

interface DispatchRidersProps {
  readonly onRiderSelect: (rider: string | null) => void;
}

export default function DispatchRiders({ onRiderSelect }: DispatchRidersProps) {
  const [selectedRider, setSelectedRider] = useState<string | null>(null);

  const handleSelectRider = (rider_name: string) => {
    setSelectedRider(rider_name);
    onRiderSelect(rider_name);
  };

  const riders = [
    { name: "Emmanuel Adebayo", area: "Yaba", deliveries: "20 Deliveries" },
    { name: "John Doe", area: "Ikeja", deliveries: "15 Deliveries" },
    {
      name: "Adekunle Gold",
      area: "Victoria Island",
      deliveries: "12 Deliveries",
    },
    { name: "Blessing Okafor", area: "Lekki", deliveries: "18 Deliveries" },
  ];

  return (
    <div>
      <div className="flex justify-between items-center">
        <Button
          text="All(33)"
          className="bg-blue bg-opacity-10 font-bold border border-blue text-blue px-3 py-1"
        />
        <Button
          text="Yaba Riders(5)"
          className="bg-background bg-opacity-30 font-medium text-dark text-opacity-60 px-2 py-1"
        />
        <Button
          text="Unassigned Riders(10)"
          className="bg-background bg-opacity-30 font-medium text-dark text-opacity-60 px-2 py-1"
        />
        <Button
          text="Assigned Riders(23)"
          className="bg-background bg-opacity-30 font-medium text-dark text-opacity-60 px-2 py-1"
        />
      </div>
      <div className="flex flex-col gap-3 mt-5 h-[300px]">
        <div className="flex flex-col gap-3 mt-5">
          {riders.map((rider) => (
            <RidersCard
              key={rider.name}
              rider_name={rider.name}
              delivery_area={rider.area}
              number_of_delivery={rider.deliveries}
              selected={selectedRider === rider.name}
              onSelect={handleSelectRider}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
