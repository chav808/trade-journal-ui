// src/components/TradeForm.jsx
import React from 'react';

export default function TradeForm({ selectedDay }) {
  return (
    <div className="p-4 bg-white shadow rounded mt-4">
      <h2 className="text-xl font-semibold mb-2">
        Trade Notes for {selectedDay ? `June ${selectedDay}` : '...'}
      </h2>
      <textarea
        rows="5"
        className="w-full border rounded p-2 mb-2"
        placeholder="Enter trade reason, strategy, or notes..."
      ></textarea>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Save
      </button>
    </div>
  );
}
