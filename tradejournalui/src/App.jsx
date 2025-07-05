import { useState } from 'react';
import CalendarGrid from './components/CalendarGrid';
import TradeForm from './components/TradeForm';

function App() {
  const [selectedDay, setSelectedDay] = useState(null);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">📈 Trade Journal Calendar</h1>
      <CalendarGrid onDayClick={setSelectedDay} />
      {selectedDay && <TradeForm selectedDay={selectedDay} />}
    </div>
  );
}

export default App;
