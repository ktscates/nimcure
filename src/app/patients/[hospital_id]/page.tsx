"use client";

import Breadcrumb from "@/components/Breadcrumbs";
import Button from "@/components/Button";
import React, { useState } from "react";
import PatientSidebar from "@/components/PatientSidebar";
import PatientInfo from "@/components/PatientInfo";
import DeliveryInfo from "@/components/DeliveryInfo";
import { useParams, useRouter } from "next/navigation";
import patients from "@/data";

export default function PatientProfile() {
  const { hospital_id } = useParams();
  const [activeTab, setActiveTab] = useState("patient-info");
  const router = useRouter();

  const patient = patients.find((p) => p.hospital_id === hospital_id);

  if (!patient) {
    return (
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold text-red-500">Patient Not Found</h1>
      </div>
    );
  }
  const breadcrumbItems = [
    { label: "Patients", href: "/patients" },
    { label: "View Patient" },
  ];

  let statusClass = "bg-light_blue bg-opacity-20 text-light_blue";
  if (patient.status === "completed") {
    statusClass = "bg-completed bg-opacity-20 text-completed";
  } else if (patient.status === "due & paid") {
    statusClass = "bg-paid bg-opacity-20 text-paid";
  } else if (patient.status === "due & unpaid") {
    statusClass = "bg-unpaid bg-opacity-20 text-unpaid";
  }

  const handleAssign = () => {
    router.push(`/patients/${patient.hospital_id}/assign`);
  };

  return (
    <div className="bg-background bg-opacity-20 h-screen">
      <div className="px-4 border-b border-background border-opacity-90">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-5">
          <Breadcrumb items={breadcrumbItems} />
          <Button
            type="button"
            text="Assign Package to Patient"
            className="px-8 py-3 bg-blue text-sm text-white font-bold"
            onClick={handleAssign}
          />
        </div>
      </div>

      <div className="flex justify-between max-w-7xl mx-auto mt-16 relative">
        <PatientSidebar />
        <div className="bg-white w-5/6 px-8 py-20 relative">
          <div className="flex justify-between items-center border-b border-gray border-opacity-35">
            <h1>
              Payment status:{" "}
              <span className={`px-4 py-2 font-bold ${statusClass}`}>
                {patient.status}
              </span>
            </h1>
            <div>
              <button
                className={`py-2 px-4 ${
                  activeTab === "patient-info"
                    ? "border-b-4 border-light_blue text-light_blue font-bold"
                    : "text-gray-600"
                }`}
                onClick={() => setActiveTab("patient-info")}
              >
                Patient Information
              </button>
              <button
                className={`py-2 px-4 ${
                  activeTab === "delivery-info"
                    ? "border-b-4 border-light_blue text-light_blue font-bold"
                    : "text-gray-600"
                }`}
                onClick={() => setActiveTab("delivery-info")}
              >
                Delivery Information
              </button>
            </div>
          </div>
          {activeTab === "patient-info" && (
            <div className="flex justify-between gap-5 mt-6">
              <div>
                <h2 className="text-xl font-bold">Patient’s Information</h2>
                <p className="text-sm text-gray-600">
                  Personal details of the patient.
                </p>

                <Button
                  text="✎ Edit Patient’s Information"
                  className="mt-6 border px-4 py-2 text-light_blue border-light_blue font-bold"
                ></Button>
              </div>
              <PatientInfo patient={patient} />
            </div>
          )}

          {activeTab === "delivery-info" && (
            <div className="flex justify-between gap-5 mt-6">
              <div>
                <h2 className="text-xl font-bold">Delivery Information</h2>
                <p className="text-sm text-gray-600">
                  Information about delivery status.
                </p>

                <Button
                  text="✎ Edit Delivery Information"
                  className="mt-6 border px-4 py-2 text-light_blue border-light_blue font-bold"
                ></Button>
              </div>
              <DeliveryInfo patient={patient} />
            </div>
          )}

          <div className="absolute bottom-4 right-4 px-4">
            <Button
              type="button"
              text="Save changes"
              className="bg-blue text-white text-sm px-4 py-3 font-extrabold"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
