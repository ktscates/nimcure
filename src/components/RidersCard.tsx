export interface RidersCardProps {
  readonly rider_name: string;
  readonly delivery_area: string;
  readonly number_of_delivery: string;
  readonly selected?: boolean;
  // readonly onSelect?: (dispatch_rider_name: string) => void;
}

export default function RidersCard({
  rider_name,
  delivery_area,
  number_of_delivery,
  selected,
}: // onSelect,
RidersCardProps) {
  return (
    <div
      className={`flex items-center justify-between gap-4 text-gray-2 border border-background px-8 py-2 cursor-pointer ${
        selected ? "border-blue" : "border-background"
      }`}
      // onClick={() => onSelect && onSelect(rider_name)}
    >
      <div className="flex gap-6">
        <div className="grid place-content-center">
          <input
            type="radio"
            name="drugCycle"
            value="new"
            className="form-radio h-5 w-5 text-blue-600 rounded"
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-xs">Dispatch Rider’s Name</p>
          <p className="font-medium text-base">{rider_name}</p>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-xs">Delivery Area</p>
        <p className="font-medium text-base">{delivery_area}</p>
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-xs">Number of Deliveries</p>
        <p className="font-medium text-base">{number_of_delivery}</p>
      </div>
    </div>
  );
}
