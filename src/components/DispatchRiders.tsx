import Button from "./Button";
import RidersCard from "./RidersCard";

export default function DispatchRiders({}) {
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
      <div className="flex flex-col gap-3 mt-5 h-1/2">
        <RidersCard
          rider_name="Emmanuel Adebayo"
          delivery_area="Yaba"
          number_of_delivery="20 Deliveries"
        />
        <RidersCard
          rider_name="Emmanuel Adebayo"
          delivery_area="Yaba"
          number_of_delivery="20 Deliveries"
        />
        <RidersCard
          rider_name="Emmanuel Adebayo"
          delivery_area="Yaba"
          number_of_delivery="20 Deliveries"
        />
        <RidersCard
          rider_name="Emmanuel Adebayo"
          delivery_area="Yaba"
          number_of_delivery="20 Deliveries"
        />
        <RidersCard
          rider_name="Emmanuel Adebayo"
          delivery_area="Yaba"
          number_of_delivery="20 Deliveries"
        />
        <RidersCard
          rider_name="Emmanuel Adebayo"
          delivery_area="Yaba"
          number_of_delivery="20 Deliveries"
        />
      </div>
    </div>
  );
}
