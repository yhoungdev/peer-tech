import React, { useState, useEffect } from "react";

function TokenChart() {
  const [chartUrl, setChartUrl] = useState(
    "https://gmgn.ai/sol/token/ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82?embled=1",
  );

  return (
    <div className="w-full h-[500px]">
      <iframe
        src={chartUrl}
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen
        title="Token Chart"
      />
    </div>
  );
}

export default TokenChart;
