"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumbs";
import PatientInfoSidebar from "@/components/PatientInfoSidebar";
import DispatchRiders from "@/components/DispatchRiders";
import DrugCycle from "@/components/DrugCycle";
import ScanPackage from "@/components/ScanPackage";
import patients from "@/data";

export default function AssignPackage() {
  const { hospital_id } = useParams();
  const [activeTab, setActiveTab] = useState("cycle");
  const [completedTabs, setCompletedTabs] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [selectedRider, setSelectedRider] = useState<string | null>(null);
  const [showError, setShowError] = useState(false);

  const patient = patients.find((p) => p.hospital_id === hospital_id);

  function formatDate(dateString: string) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "long" });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  }

  const tabs = [
    { id: "cycle", label: "Set Drug Cycle/Length" },
    { id: "dispatch", label: "Assign Dispatch Rider" },
    { id: "scan", label: "Scan Package" },
  ];

  const handleNext = () => {
    if (!selectedOption && activeTab !== "scan") {
      setShowError(true);
      return;
    }
    setShowError(false);

    if (!completedTabs.includes(activeTab)) {
      setCompletedTabs([...completedTabs, activeTab]);
    }

    if (activeTab === "cycle") setActiveTab("dispatch");
    else if (activeTab === "dispatch") setActiveTab("scan");
  };

  return (
    <div className="bg-background bg-opacity-20 h-screen">
      <div className="px-4 border-b border-background border-opacity-90">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-5">
          <Breadcrumb
            items={[
              { label: "Patients", href: "/patients" },
              { label: "View Patient" },
              { label: "Assign Package to Patient" },
            ]}
          />
        </div>
      </div>
      <div className="flex justify-between gap-5 max-w-7xl mx-auto mt-16 relative">
        <PatientInfoSidebar patient={patient} />
        <div className="bg-white w-4/6 px-8 py-4 relative shadow-sm">
          <div className="flex space-x-4 border-b border-background mb-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                disabled={activeTab !== tab.id}
                className={`flex gap-2 items-center py-2 px-4 ${
                  activeTab === tab.id
                    ? "border-b-4 border-light_blue text-light_blue font-bold"
                    : "text-gray-400 cursor-not-allowed"
                }`}
              >
                <img
                  src={
                    activeTab === tab.id
                      ? "/images/bullet.svg"
                      : "/images/radio.svg"
                  }
                  alt="status"
                  width={16}
                  height={16}
                />
                {tab.label}
              </button>
            ))}
          </div>
          <div className="min-h-3/4">
            {activeTab === "cycle" && (
              <DrugCycle
                patient={patient}
                showError={showError}
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
                formatDate={formatDate}
              />
            )}
            {activeTab === "dispatch" && (
              <DispatchRiders onRiderSelect={setSelectedRider} />
            )}
            {activeTab === "scan" && <ScanPackage />}
          </div>
          {activeTab !== "scan" && (
            <div className="flex justify-end">
              <button
                onClick={handleNext}
                disabled={!selectedOption || !selectedRider}
                className={`mt-6 px-6 py-2 bg-light_blue text-white text-sm font-bold ${
                  !selectedOption || !selectedRider
                    ? "bg-opacity-50 cursor-not-allowed"
                    : "hover:bg-light_blue"
                }`}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
