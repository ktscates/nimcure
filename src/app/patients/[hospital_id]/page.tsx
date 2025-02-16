"use client";

import Breadcrumb from "@/components/Breadcrumbs";
import Button from "@/components/Button";
import React, { useState } from "react";
import PatientSidebar from "@/components/PatientSidebar";
import PatientInfo from "@/components/PatientInfo";
import DeliveryInfo from "@/components/DeliveryInfo";

export default function PatientProfile() {
  const breadcrumbItems = [
    { label: "Patients", href: "/patients" },
    { label: "View Patient" }, // Current page (no href)
  ];

  const [activeTab, setActiveTab] = useState("patient-info");

  return (
    <div className="bg-background bg-opacity-20 h-screen">
      <div className="px-4 border-b border-background border-opacity-90">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-5">
          <Breadcrumb items={breadcrumbItems} />
          <Button
            type="button"
            text="Assign Package to Patient"
            className="px-8 py-2 bg-blue text-sm text-white font-bold"
          />
        </div>
      </div>

      <div className="flex justify-between max-w-7xl mx-auto mt-16">
        {/* Sidebar Navigation */}
        <PatientSidebar />

        <div className="bg-white w-5/6 p-8">
          <div className="flex justify-between items-center border-b border-gray border-opacity-35">
            <h1>Payment status: Paid</h1>
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
              <PatientInfo />
            </div>
          )}
          {/* Delivery Information Placeholder */}
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
              <DeliveryInfo />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
