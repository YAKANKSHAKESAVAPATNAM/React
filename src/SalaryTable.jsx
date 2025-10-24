import React from "react";

const SalaryTable = () => {
  const data = [
    { NAME: "SAILU", DEPARTMENT: "AIML", SALARY: 6.0, YEAR: 2025 },
    { NAME: "SNEHA", DEPARTMENT: "IT", SALARY: 8.1, YEAR: 2025 },
    { NAME: "ABHI", DEPARTMENT: "CSE", SALARY: 9.5, YEAR: 2025 },
    { NAME: "NIKHIL", DEPARTMENT: "DS", SALARY: 5.9, YEAR: 2024 },
    { NAME: "ADITYA", DEPARTMENT: "ECE", SALARY: 9.0, YEAR: 2024 },
    { NAME: "PRIYA", DEPARTMENT: "AIML", SALARY: 8.5, YEAR: 2023 },
    { NAME: "RAHUL", DEPARTMENT: "IT", SALARY: 6.8, YEAR: 2023 },
    { NAME: "ANITA", DEPARTMENT: "CSE", SALARY: 7.2, YEAR: 2022 },
    { NAME: "RAM", DEPARTMENT: "DS", SALARY: 5.5, YEAR: 2022 },
    { NAME: "MEERA", DEPARTMENT: "ECE", SALARY: 8.3, YEAR: 2021 },
  ];

  return (
    <div className="bg-[#0f172a] text-gray-200 p-6 rounded-2xl shadow-xl max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Highest Salary Report</h2>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border border-gray-600">
          <thead>
            <tr className="bg-[#1e293b] text-gray-300">
              <th className="py-3 px-4 border border-gray-600 font-medium">Name</th>
              <th className="py-3 px-4 border border-gray-600 font-medium">Department</th>
              <th className="py-3 px-4 border border-gray-600 font-medium">Salary (₹LPA)</th>
              <th className="py-3 px-4 border border-gray-600 font-medium">Year</th>
              <th className="py-3 px-4 border border-gray-600 font-medium text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr
                key={index}
                className={`border border-gray-600 ${
                  index % 2 === 0 ? "bg-[#16213e]" : "bg-[#0f172a]"
                } hover:bg-[#1a2238] transition`}
              >
                <td className="py-3 px-4 border border-gray-600">{row.NAME}</td>
                <td className="py-3 px-4 border border-gray-600">{row.DEPARTMENT}</td>
                <td className="py-3 px-4 border border-gray-600 text-green-400 font-semibold">
                  ₹{row.SALARY.toFixed(1)}
                </td>
                <td className="py-3 px-4 border border-gray-600 text-blue-400">{row.YEAR}</td>
                <td className="py-3 px-4 border border-gray-600 text-center">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      row.SALARY >= 8
                        ? "bg-green-700 text-green-100"
                        : "bg-yellow-700 text-yellow-100"
                    }`}
                  >
                    {row.SALARY >= 8 ? "Excellent" : "Good"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="mt-4 text-sm text-gray-400">
        <br />
        Showing {data.length} of {data.length} records
      </div>
    </div>
  );
};

export default SalaryTable;