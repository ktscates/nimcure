/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import Image from "next/image";

const Toast = ({ message }: { message: string }) => (
  <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-md">
    {message}
  </div>
);

export default function ScanPackage() {
  const [scanning, setScanning] = useState(false);
  const [packageFound, setPackageFound] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const handleScanClick = () => {
    setScanning(true);
    setPackageFound(false);
    setToastMessage("");

    // Simulate scanning time of 10 seconds
    setTimeout(() => {
      setScanning(false);
      setPackageFound(true);
    }, 10000);
  };

  // Function to handle Assign Package
  const handleAssignPackage = () => {
    setConfirmationModal(true);
  };

  // Function to confirm assignment
  const handleConfirmAssignment = () => {
    setToastMessage("Package assigned successfully!");
    setConfirmationModal(false); // Close confirmation modal
  };

  return (
    <div className="bg-white max-w-3xl mx-auto">
      <h2 className="text-center text-gray-600 mb-6">
        Scan a package to assign it to{" "}
        <strong className="text-black">Oluwaseun Aregbesola</strong>
      </h2>

      <div className="flex justify-center items-center border-b border-background pb-6">
        {/* QR Code Scanner Simulation */}
        <div className="flex flex-col items-center w-1/2 ">
          <div className="p-4 relative">
            {/* Show scanning or found package images based on the state */}
            <Image
              src={
                scanning
                  ? "/images/scanqr.png"
                  : packageFound
                  ? "/images/qrfound.png"
                  : "/images/qrcode.svg"
              }
              alt={
                scanning ? "scanning" : packageFound ? "package found" : "qr"
              }
              width={200}
              height={180}
            />
          </div>

          {showInput && !confirmationModal && (
            <div className="flex flex-col justify-start items-start gap-6 w-1/2 pl-6 border-l border-background mt-6">
              <input
                type="text"
                placeholder="Enter Assignment Details"
                className="border border-background px-4 py-2 rounded-md focus:outline-blue-500"
              />
            </div>
          )}

          {/* Scan Package Button */}

          {scanning ? (
            <p className="mt-4 text-lg font-bold">Scanning...</p>
          ) : packageFound ? (
            <p className="mt-4 text-lg font-bold">Package Found!</p>
          ) : (
            <button
              onClick={handleScanClick}
              className="mt-4 px-6 py-2 bg-light_blue text-white font-bold hover:bg-blue-700"
            >
              Scan Package
            </button>
          )}
        </div>

        {/* Remove Manual Code Entry during scanning */}
        {!scanning && (
          <div className="flex flex-col justify-start items-start gap-6 w-1/2 pl-6 border-l border-background">
            <p className="text-gray-500 text-sm">
              Trouble scanning QR Code?
              <br />
              Enter manually
            </p>
            <input
              type="text"
              placeholder="Enter Code"
              className="border border-background px-4 py-2 rounded-md focus:outline-blue-500"
            />
            <button className="mt-10 px-6 py-2 border border-light_blue text-light_blue font-bold hover:bg-blue-600 hover:text-white">
              Submit Code
            </button>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between mt-6">
        <button className="border border-light_blue text-light_blue px-6 py-2 font-bold hover:bg-blue-600 hover:text-white">
          Back
        </button>
        <button
          onClick={handleAssignPackage}
          className="px-6 py-2 bg-light_blue text-white font-bold cursor-not-allowed"
        >
          Assign Package
        </button>
      </div>

      {/* Confirmation Modal */}
      {confirmationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg">
            <p>Are you sure you want to assign this package?</p>
            <div className="mt-4 flex justify-between">
              <button
                onClick={() => setConfirmationModal(false)}
                className="px-6 py-2 bg-gray-400 text-white font-bold"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmAssignment}
                className="px-6 py-2 bg-light_blue text-white font-bold"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
