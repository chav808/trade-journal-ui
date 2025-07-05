import { useState, useEffect } from 'react';

export default function TradeForm({ selectedDay }) {
  const [formData, setFormData] = useState({
    ticker: '',
    pnl: '',
    notes: '',
  });

  useEffect(() => {
    const saved = localStorage.getItem(`trade-${selectedDay}`);
    if (saved) setFormData(JSON.parse(saved));
    else setFormData({ ticker: '', pnl: '', notes: '' });
  }, [selectedDay]);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    localStorage.setItem(`trade-${selectedDay}`, JSON.stringify(formData));
    alert('Trade saved!');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mt-4 text-black">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Log Trade for Day {selectedDay}</h2>

      <input
        type="text"
        name="ticker"
        placeholder="Ticker"
        value={formData.ticker}
        onChange={handleChange}
        className="border border-gray-400 rounded p-2 w-full mb-3 text-black"
      />
      <input
        type="text"
        name="pnl"
        placeholder="PnL"
        value={formData.pnl}
        onChange={handleChange}
        className="border border-gray-400 rounded p-2 w-full mb-3 text-black"
      />
      <textarea
        name="notes"
        placeholder="Notes"
        value={formData.notes}
        onChange={handleChange}
        className="border border-gray-400 rounded p-2 w-full mb-3 text-black"
      />

      <button type="submit" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
        Save Trade
      </button>
    </form>
  );
}
