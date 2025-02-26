import React, { useState } from "react";

const ManageBloodStock = () => {
  const [bloodStock, setBloodStock] = useState({
    A_Positive: 10,
    A_Negative: 5,
    B_Positive: 12,
    B_Negative: 4,
    AB_Positive: 8,
    AB_Negative: 3,
    O_Positive: 15,
    O_Negative: 6,
  });

  const handleChange = (bloodType, value) => {
    setBloodStock((prevStock) => ({
      ...prevStock,
      [bloodType]: value,
    }));
  };

  const handleSave = () => {
    alert("Blood stock updated successfully!");
    console.log("Updated Stock:", bloodStock);
    // Here, you can send the updated stock data to the backend API
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Manage Blood Stock</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Blood Type</th>
            <th className="border p-2">Available Units</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(bloodStock).map(([bloodType, count]) => (
            <tr key={bloodType} className="bg-white">
              <td className="border p-2 font-semibold">{bloodType.replace("_", "+")}</td>
              <td className="border p-2">
                <input
                  type="number"
                  value={count}
                  onChange={(e) => handleChange(bloodType, parseInt(e.target.value) || 0)}
                  className="w-full p-1 border rounded"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={handleSave}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Save Changes
      </button>
    </div>
  );
};

export default ManageBloodStock;

