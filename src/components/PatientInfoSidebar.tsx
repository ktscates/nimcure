/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

type PatientInfoSidebarProps = {
  patient: any;
};

const PatientInfoSidebar: React.FC<PatientInfoSidebarProps> = ({ patient }) => {
  return (
    <div className="bg-white w-2/6 h-2/3 p-6 shadow-sm">
      {/* Section Header */}
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Patient Information
      </h2>

      {/* Patient Details Table */}
      <div className="space-y-4">
        {/* Hospital ID */}
        <div className="flex justify-between">
          <span className="text-sm text-gray-600">Hospital ID</span>
          <span className="text-sm text-dark font-bold">
            {patient.hospital_id}
          </span>
        </div>

        {/* Name */}
        <div className="flex justify-between">
          <span className="text-sm text-gray-600">Name</span>
          <span className="text-sm text-dark font-bold">{`${patient.first_name} ${patient.last_name}`}</span>
        </div>

        {/* Phone Number */}
        <div className="flex justify-between">
          <span className="text-sm text-gray-600">Phone Number</span>
          <span className="text-sm text-dark font-bold">
            {patient.phone_number}
          </span>
        </div>

        {/* Next Delivery Date */}
        <div className="flex justify-between">
          <span className="text-sm text-gray-600">Next Delivery Date</span>
          <span className="text-sm text-dark font-bold">
            {patient.next_delivery_date}
          </span>
        </div>

        {/* Location */}
        <div className="flex justify-between">
          <span className="text-sm text-gray-600">Location</span>
          <span className="text-sm text-dark font-bold">
            {patient.location}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PatientInfoSidebar;
