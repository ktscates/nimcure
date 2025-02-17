"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import { useState } from "react";
import patients from "@/data"; // Ensure that the data conforms to the Patient interface
import Table from "@/components/Table";
import { useRouter } from "next/navigation"; // Assuming you will use this for navigation

interface Patient {
  hospital_id: string;
  patient_name: string;
  phone_number: string;
  next_delivery_date: string;
  location: string;
  status: string;
}

// Define table columns (Only necessary fields for list view)
const columns: { key: keyof Patient; label: string }[] = [
  { key: "hospital_id", label: "Hospital ID" },
  { key: "patient_name", label: "Patient Name" },
  { key: "phone_number", label: "Phone Number" },
  { key: "next_delivery_date", label: "Next Delivery Date" },
  { key: "location", label: "Location" },
  { key: "status", label: "Status" },
];

export default function Patients() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter(); // For navigation to the detailed view
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Define how many items per page

  // Sorting state
  const [sortColumn, setSortColumn] = useState<keyof Patient>("hospital_id");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  // Sort Options
  const sortOptions: { key: keyof Patient; label: string }[] = [
    { key: "hospital_id", label: "Hospital ID" },
    { key: "patient_name", label: "Patient Name" },
    { key: "status", label: "Status" },
    { key: "location", label: "Location" },
  ];

  const filteredPatients = patients
    .map((patient) => ({
      ...patient,
      patient_name: `${patient.first_name} ${patient.last_name}`, // Combine first & last name
    }))
    .filter((patient) =>
      patient.patient_name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      const valA = String(a[sortColumn]).toLowerCase();
      const valB = String(b[sortColumn]).toLowerCase();
      return sortOrder === "asc"
        ? valA.localeCompare(valB)
        : valB.localeCompare(valA);
    });
  // Handle sorting selection
  const handleSortSelection = (key: keyof Patient) => {
    setSortOrder((prev) =>
      sortColumn === key && prev === "asc" ? "desc" : "asc"
    );
    setSortColumn(key);
    setIsDropdownOpen(false);
  };

  // Function to handle the "View" button click for each patient
  const handleViewDetails = (hospital_id: string) => {
    router.push(`/patients/${hospital_id}`); // Navigate to the details page of the selected patient
  };

  // Calculate the current page data
  const totalItems = filteredPatients.length;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPatients = filteredPatients.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-background bg-opacity-20 h-screen">
      <div className="px-4 border-b border-background border-opacity-90">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-9">
          <h1 className="text-dark font-normal text-2xl">Patients</h1>
          <Button
            type="button"
            text="Add Patient"
            className="px-8 py-2 bg-blue text-sm text-white font-bold"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 flex justify-between items-center px-4">
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="text-dark text-sm hover:text-gray focus:outline-none"
          >
            Sort by{" "}
            <span className="font-bold text-base">
              {sortOptions.find((opt) => opt.key === sortColumn)?.label}
            </span>
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg">
              {sortOptions.map((option) => (
                <button
                  key={option.key}
                  onClick={() => handleSortSelection(option.key)}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  {option.label}{" "}
                  {sortColumn === option.key &&
                    (sortOrder === "asc" ? "🔼" : "🔽")}
                </button>
              ))}
            </div>
          )}
        </div>
        <Input
          type="search"
          customStyle="bg-transparent border border-gray border-opacity-40 py-1 placeholder:text-sm"
          placeholder="Search Patients"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="max-w-7xl mx-auto mt-12 px-4">
        <Table
          columns={columns}
          data={currentPatients}
          actions={(row) => (
            <Button
              type="button"
              text="View"
              className="w-16 h-8 flex justify-center items-center border border-light_blue text-light_blue text-sm font-bold"
              onClick={() => handleViewDetails(row.hospital_id)}
            />
          )}
          currentPage={currentPage}
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}
