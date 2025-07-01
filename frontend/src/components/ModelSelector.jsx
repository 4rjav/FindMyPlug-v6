import React, { useState } from 'react';

const modelMap = {
  "Tata Nexon EV": "GB/T",
  "MG ZS EV": "CCS2",
  "Mahindra eVerito": "GB/T"
};

function ModelSelector() {
  const [selected, setSelected] = useState("");
  return (
    <div>
      <select value={selected} onChange={e => setSelected(e.target.value)}>
        <option value="">Select EV Model</option>
        {Object.keys(modelMap).map(model => (
          <option key={model} value={model}>{model}</option>
        ))}
      </select>
      {selected && <p>Charger Type: {modelMap[selected]}</p>}
    </div>
  );
}

export default ModelSelector;