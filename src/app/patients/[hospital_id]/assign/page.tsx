"use client";

import Breadcrumb from "@/components/Breadcrumbs";
import PatientInfoSidebar from "@/components/PatientInfoSidebar";
import { useParams } from "next/navigation";
import { useState } from "react";
import patients from "@/data";
import DispatchRiders from "@/components/DispatchRiders";
import DrugCycle from "@/components/DrugCycle";

export default function AssignPackage() {
  const { hospital_id } = useParams();
  const [activeTab, setActiveTab] = useState("cycle");
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
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

    // Proceed to the next tab
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
            <button
              disabled={activeTab !== "cycle"}
              className={`py-2 px-4 ${
                activeTab === "cycle"
                  ? "border-b-4 border-light_blue text-light_blue font-bold"
                  : "text-gray-400 cursor-not-allowed"
              }`}
            >
              Set Drug Cycle/Length
            </button>
            <button
              disabled={activeTab !== "dispatch"}
              className={`py-2 px-4 ${
                activeTab === "dispatch"
                  ? "border-b-4 border-light_blue text-light_blue font-bold"
                  : "text-gray-400 cursor-not-allowed"
              }`}
            >
              Assign Dispatch Rider
            </button>
            <button
              disabled={activeTab !== "scan"}
              className={`py-2 px-4 ${
                activeTab === "scan"
                  ? "border-b-4 border-light_blue text-light_blue font-bold"
                  : "text-gray-400 cursor-not-allowed"
              }`}
            >
              Scan Package
            </button>
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

            {activeTab === "dispatch" && <DispatchRiders />}

            {activeTab === "scan" && (
              <div>
                <p className="text-gray-600">Scan Package content goes here.</p>
              </div>
            )}
          </div>

          {/* Next Button (Only One) */}
          {activeTab !== "scan" && (
            <div className="flex justify-end">
              <button
                onClick={handleNext}
                disabled={!selectedOption && activeTab !== "scan"}
                className={`mt-6 px-6 py-2 bg-light_blue text-white text-sm font-bold transition ${
                  !selectedOption && activeTab !== "scan"
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
