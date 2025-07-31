// import React, { useEffect, useRef } from 'react';
// import logo from '../assets/logo.jpg'

// const Dotcomp = () => {
//   const dotRef = useRef(null);
//   const mouseX = useRef(0);
//   const mouseY = useRef(0);
//   const posX = useRef(0);
//   const posY = useRef(0);
//   const speed = 0.15;

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       mouseX.current = e.clientX - 50;
//       mouseY.current = e.clientY - 20;
//     };

//     const animate = () => {
//       posX.current += (mouseX.current - posX.current) * speed;
//       posY.current += (mouseY.current - posY.current) * speed;

//       if (dotRef.current) {
//         dotRef.current.style.transform = `translate(${posX.current}px, ${posY.current}px)`;
//       }

//       requestAnimationFrame(animate);
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     animate();

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   return (
//     <>
//       {/* Follower circle */}
//       <img
//         ref={dotRef}
//         src={logo}
//                 className="w-10 h-10 fixed top-0 left-0 z-50 border-4 border-black pointer-events-none"
//       />
//     </>
//   );
// };

// export default Dotcomp;
