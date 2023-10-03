import { useState } from "react";

function App() {
  const [color, setColor] = useState("green-500");

  return (
    <div
      className={`w-full h-screen bg-${color} flex justify-center`}
    > <span className="mt-5 text-5xl font-semibold text-yellow-800">Select Any Color</span>
      <div className="fixed bottom-8 rounded-full px-8 py-5 flex justify-center items-center flex-wrap gap-5 ">
        <button
          onClick={() => setColor('red-600')}
          className="text-lg font-semibold px-8 py-2 bg-red-600 text-[#1B1610] rounded-lg outline"
        >
          Red
        </button>
        <button
          onClick={() => setColor("blue-700")}
          className="text-lg font-semibold px-8 py-2 bg-blue-700 text-[#1B1610] rounded-lg outline"
        >
          Blue
        </button>
        <button
          onClick={() => setColor("purple-700")}
          className="text-lg font-semibold px-8 py-2 bg-purple-700 text-[#1B1610] rounded-lg outline"
        >
          Purple
        </button>
        <button
          onClick={() => setColor("orange-500")}
          className="text-lg font-semibold px-8 py-2 bg-orange-500 text-[#1B1610] rounded-lg outline"
        >
          Orange
        </button>
        <button
          onClick={() => setColor("[aqua]")}
          className="text-lg font-semibold px-8 py-2 bg-[aqua] text-[#1B1610] rounded-lg outline"
        >
          Aqua
        </button>
        <button
          onClick={() => setColor("[pink]")}
          className="text-lg font-semibold px-8 py-2 bg-[pink] text-[#1B1610] rounded-lg outline"
        >
          Pink
        </button>
        <button
          onClick={() => setColor("black")}
          className="text-lg  font-semibold px-8 py-2 bg-black text-[#1B1610] rounded-lg outline"
        >
          <span className="text-white">Black</span>
        </button>
      </div>
    </div>
  );
}

export default App;
