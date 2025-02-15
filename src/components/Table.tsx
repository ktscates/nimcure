import React, { JSX, useState } from "react";

interface TableProps<T> {
  columns: { key: keyof T; label: string }[];
  data: T[];
  onRowClick?: (row: T) => void;
  actions?: (row: T) => JSX.Element; // Optional actions (Edit/Delete)
  customStyle?: string; // Custom styles
}

const Table = <T,>({
  columns,
  data,
  onRowClick,
  actions,
  customStyle,
}: TableProps<T>) => {
  const [sortColumn, setSortColumn] = useState<keyof T | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const handleSort = (key: keyof T) => {
    if (sortColumn === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(key);
      setSortOrder("asc");
    }
  };

  const sortedData = [...data].sort((a, b) => {
    if (!sortColumn) return 0;
    const valA = a[sortColumn];
    const valB = b[sortColumn];
    return sortOrder === "asc"
      ? String(valA).localeCompare(String(valB))
      : String(valB).localeCompare(String(valA));
  });

  return (
    <div className={`overflow-x-auto shadow-md rounded-lg ${customStyle}`}>
      <table className="min-w-full bg-white border border-gray-200">
        {/* Table Head */}
        <thead>
          <tr className="bg-gray-100 border-b border-gray-300">
            {columns.map(({ key, label }) => (
              <th
                key={String(key)}
                onClick={() => handleSort(key)}
                className="py-3 px-6 text-left text-gray-700 font-semibold cursor-pointer"
              >
                {label}{" "}
                {sortColumn === key ? (sortOrder === "asc" ? "🔼" : "🔽") : ""}
              </th>
            ))}
            {actions && <th className="py-3 px-6 text-left">Actions</th>}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {sortedData.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="border-b border-gray-200 hover:bg-gray-50 transition"
              onClick={() => onRowClick && onRowClick(row)}
            >
              {columns.map(({ key }) => (
                <td key={String(key)} className="py-3 px-6">
                  {String(row[key])}
                </td>
              ))}
              {actions && <td className="py-3 px-6">{actions(row)}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
