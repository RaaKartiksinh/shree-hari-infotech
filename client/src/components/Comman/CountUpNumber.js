// import React, { useEffect } from "react";
// import { CountUp } from "countup.js";

// export default function CountUpNumber() {
//   useEffect(() => {
//     const countUp = new CountUp("targetId", 5234);

//     if (!countUp.error) {
//       countUp.start();
//     } else {
//       console.error(countUp.error);
//     }
//   }, []);

//   return <div id="targetId">0</div>;
// }

// import React, { useEffect } from "react";
// import { CountUp } from "countup.js";

// export default function CountUpNumber({ startValue, endValue }) {
//   useEffect(() => {
//     const countUp = new CountUp("targetId", endValue, { startVal: startValue });

//     if (!countUp.error) {
//       countUp.start();
//     } else {
//       console.error(countUp.error);
//     }
//   }, [startValue, endValue]);

//   return <div id="targetId">{startValue}</div>;
// }
