import React, { JSX } from "react";
import Pagination from "./Pagination";

interface Column<T> {
  key: keyof T;
  label: string;
  hideOnMobile?: boolean;
}

interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  onRowClick?: (row: T) => void;
  actions?: (row: T) => JSX.Element;
  customStyle?: string;
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

const Table = <T,>({
  columns,
  data,
  onRowClick,
  actions,
  customStyle,
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}: TableProps<T>) => {
  // Status color mapping
  const statusColors: Record<string, string> = {
    completed: "bg-completed bg-opacity-20 text-completed px-4 py-2 font-bold",
    "due & paid": "bg-paid bg-opacity-20 text-paid px-4 py-2 font-bold",
    "due & unpaid": "bg-unpaid bg-opacity-20 text-unpaid px-4 py-2 font-bold",
    assigned: "bg-light_blue bg-opacity-20 text-light_blue px-4 py-2 font-bold",
  };

  return (
    <div className={`overflow-x-auto shadow-md ${customStyle}`}>
      <table className="w-full bg-white">
        {/* Table Head */}
        <thead>
          <tr className="bg-gray-100 border-b border-gray border-opacity-35">
            {columns.map(({ key, label, hideOnMobile }) => (
              <th
                key={String(key)}
                className={`py-5 px-4 text-left text-dark text-opacity-70 text-sm font-semibold cursor-pointer ${
                  hideOnMobile ? "hidden md:table-cell" : ""
                }`}
              >
                {label}{" "}
              </th>
            ))}
            {actions && (
              <th className="py-2 px-6 text-left text-dark text-opacity-70 text-sm">
                Actions
              </th>
            )}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="border-b border-gray border-opacity-35 hover:bg-gray-50 transition"
              onClick={() => onRowClick && onRowClick(row)}
            >
              {columns.map(({ key, hideOnMobile }) => (
                <td
                  key={String(key)}
                  className={`py-6 px-6 text-dark text-opacity-80 text-sm ${
                    hideOnMobile ? "hidden md:table-cell" : ""
                  }`}
                >
                  {key === "status" ? (
                    <span
                      className={
                        statusColors[String(row[key])] ||
                        "bg-gray-500 text-white"
                      }
                    >
                      {String(row[key])}
                    </span>
                  ) : (
                    String(row[key])
                  )}
                </td>
              ))}
              {actions && <td className="py-2 px-4">{actions(row)}</td>}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="bg-white flex flex-col md:flex-row justify-between items-center py-6 px-6">
        <span className="text-sm text-dark text-opacity-80 mb-4 md:mb-0">
          You’re viewing {itemsPerPage} out of {totalItems} deliveries
        </span>
        <Pagination
          currentPage={currentPage}
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default Table;
