/* eslint-disable @typescript-eslint/no-explicit-any */
export default function DrugCycle({
  patient,
  showError,
  selectedOption,
  setSelectedOption,
  formatDate,
}: any) {
  return (
    <div>
      <p className="text-gray-600 mb-6">
        {`${patient?.first_name} ${patient?.last_name}`} has a drug cycle of
        two(2) months.
      </p>

      <div className="space-y-4">
        {/* Option 1: Combined Drug Cycle Option */}
        <div
          className={`border p-4 ${
            showError && !selectedOption
              ? "border-red-500"
              : selectedOption == "deliver"
              ? "border-2 border-blue"
              : "border-background"
          }`}
        >
          <label className="flex items-center space-x-3 border-b border-background pb-2">
            <input
              type="radio"
              name="deliver"
              value="deliver"
              checked={selectedOption === "deliver"}
              onChange={() => setSelectedOption("deliver")}
              className="form-radio h-5 w-5 text-blue rounded"
            />
            <span className="text-gray-800">Same as initial drug cycle</span>
          </label>
          <p className="pt-4">
            Deliver drug on <b>4th February 2020 </b>& set next delivery date to{" "}
            <b>{formatDate(patient!.next_delivery_date)}</b>
          </p>
        </div>

        {/* Option 2: Set New Drug Cycle */}
        <label
          className={`flex items-center space-x-3 border p-4 ${
            showError && !selectedOption
              ? "border-red-500"
              : selectedOption == "new"
              ? "border-2 border-blue"
              : "border-background"
          }`}
        >
          <input
            type="radio"
            name="new"
            value="new"
            checked={selectedOption === "new"}
            onChange={() => setSelectedOption("new")}
            className="form-radio h-5 w-5 text-blue rounded"
          />
          <span className="text-gray-800">Set new drug cycle</span>
        </label>
      </div>
    </div>
  );
}
