// import { motion } from "framer-motion";
// import React, { useEffect, useState } from "react";

// export default function FloatingBall({ diameter, classNames = "bg-blue-300" }) {
//   const radius = diameter / 2;

//   // Initial position of the ball
//   const [position, setPosition] = useState({
//     x: Math.random() * (window.innerWidth - radius * 2),
//     y: Math.random() * (window.innerHeight - radius * 2),
//     xVelocity: (Math.random() - 0.5) * 2,
//     yVelocity: (Math.random() - 0.5) * 2,
//   });

//   useEffect(() => {
//     // Set the interval to change the position of the ball.
//     const interval = setInterval(() => {
//       setPosition((prev) => {
//         let newX = prev.x + prev.xVelocity;
//         let newY = prev.y + prev.yVelocity;

//         // Bounce the ball if it exceeds the screen width.
//         if (newX - radius < 0 || newX + radius > window.innerWidth) {
//           newX = prev.x - prev.xVelocity;
//           prev.xVelocity = -prev.xVelocity;
//         }

//         // Bounce the ball if it exceeds the screen height.
//         if (newY - radius < 0 || newY + radius > window.innerHeight) {
//           newY = prev.y - prev.yVelocity;
//           prev.yVelocity = -prev.yVelocity;
//         }

//         // Return updated position and velocity
//         return {
//           x: newX,
//           y: newY,
//           xVelocity: prev.xVelocity,
//           yVelocity: prev.yVelocity,
//         };
//       });
//     }, 100);

//     // Cleanup
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <motion.div
//       className={`absolute rounded-full opacity-50 ${classNames}`}
//       style={{
//         width: `${diameter}rem`,
//         height: `${diameter}rem`,
//       }}
//       animate={{ x: position.x, y: position.y }}
//       transition={{
//         duration: 1,
//         ease: "easeInOut",
//       }}
//     />
//   );
// }
