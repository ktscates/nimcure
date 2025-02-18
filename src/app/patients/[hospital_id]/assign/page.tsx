"use client";

import Breadcrumb from "@/components/Breadcrumbs";
import PatientInfoSidebar from "@/components/PatientInfoSidebar";
import { useParams } from "next/navigation";
import { useState } from "react";
import patients from "@/data";
import DispatchRiders from "@/components/DispatchRiders";
import DrugCycle from "@/components/DrugCycle";
import Image from "next/image";
import ScanPackage from "@/components/ScanPackage";

export default function AssignPackage() {
  const { hospital_id } = useParams();
  const [activeTab, setActiveTab] = useState("cycle");
  const [completedTabs, setCompletedTabs] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [selectedRider, setSelectedRider] = useState<string | null>(null);
  const [showError, setShowError] = useState(false);

  // Find the patient with the matching hospital_id
  const patient = patients.find((p) => p.hospital_id === hospital_id);

  function formatDate(dateString: string) {
    const date = new Date(dateString);

    // Get day, month, and year
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "long" });
    const year = date.getFullYear();

    // Function to add ordinal suffix
    const getOrdinalSuffix = (day: number) => {
      if (day > 3 && day < 21) return "th";
      switch (day % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };

    return `${day}${getOrdinalSuffix(day)} ${month} ${year}`;
  }

  const tabs = [
    { id: "cycle", label: "Set Drug Cycle/Length" },
    { id: "dispatch", label: "Assign Dispatch Rider" },
    { id: "scan", label: "Scan Package" },
  ];

  const getIcon = (tabId: string) => {
    if (activeTab === tabId) return "/images/bullet.svg";
    if (completedTabs.includes(tabId)) return "/images/check.svg";
    return "/images/radio.svg";
  };

  const getTextColor = (tabId: string) => {
    if (completedTabs.includes(tabId)) return "text-completed font-bold";
  };

  const breadcrumbItems = [
    { label: "Patients", href: "/patients" },
    { label: "View Patient" },
    { label: "Assign Package to Patient" },
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

    // Move to the next tab
    if (activeTab === "cycle") setActiveTab("dispatch");
    else if (activeTab === "dispatch") setActiveTab("scan");
  };

  return (
    <div className="bg-background bg-opacity-20 h-screen">
      {/* Breadcrumb Navigation */}
      <div className="px-4 border-b border-background border-opacity-90">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-5">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex justify-between gap-5 max-w-7xl mx-auto mt-16 relative">
        {/* Patient Info Sidebar */}
        <PatientInfoSidebar patient={patient} />

        {/* Assign Package Section */}
        <div className="bg-white w-4/6 px-8 py-4 relative shadow-sm">
          {/* Tabs */}
          <div className="flex space-x-4 border-b border-background mb-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                disabled={activeTab !== tab.id}
                className={`flex gap-2 items-center py-2 px-4 ${
                  activeTab === tab.id
                    ? "border-b-4 border-light_blue text-light_blue font-bold"
                    : "text-gray-400 cursor-not-allowed"
                } ${getTextColor(tab.id)}`}
              >
                <Image
                  src={getIcon(tab.id)}
                  alt="status"
                  width={16}
                  height={16}
                />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
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

            {activeTab === "scan" && (
              <div>
                <ScanPackage />
              </div>
            )}
          </div>

          {/* Next Button (Only One) */}
          {activeTab !== "scan" && (
            <div className="flex justify-end">
              <button
                onClick={handleNext}
                disabled={
                  (activeTab === "cycle" && !selectedOption) ||
                  (activeTab === "dispatch" && !selectedRider)
                }
                className={`mt-6 px-6 py-2 bg-light_blue text-white text-sm font-bold transition ${
                  (activeTab === "cycle" && !selectedOption) ||
                  (activeTab === "dispatch" && !selectedRider)
                    ? "bg-opacity-50 cursor-not-allowed"
                    : "  hover:bg-light_blue"
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
