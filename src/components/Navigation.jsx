import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="border-b border-slate-800 sticky top-0 z-50 bg-slate-950/95 backdrop-blur-md">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					{/* Logo */}
					<Link to="/" className="flex items-center gap-2 group">
						{/* <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center font-bold text-slate-950">
							R
						</div> */}
						<span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
							Ryze.Ai
						</span>
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center gap-8">
						<Link
							to="/"
							className="text-md text-slate-300 hover:text-white transition"
						>
							Home
						</Link>
						<Link
							to="/dashboard"
							className="text-md text-slate-300 hover:text-white transition"
						>
							Features
						</Link>
						<Link
							to="/pricing"
							className="text-md text-slate-300 hover:text-white transition"
						>
							Pricing
						</Link>
						<a
							href="#"
							className="text-md text-slate-300 hover:text-white transition"
						>
							Docs
						</a>
					</div>

					{/* CTA Buttons */}
					<div className="hidden md:flex items-center gap-3">
						<button className="px-4 py-2 rounded-lg text-sm font-medium text-slate-400 hover:text-white hover:bg-white/10 transition">
							Sign In
						</button>
						<button className="px-6 py-2 bg-white text-slate-950 rounded-lg text-sm font-semibold hover:bg-slate-100 transition">
							Book Demo
						</button>
					</div>

					{/* Mobile Menu Button */}
					<button
						onClick={() => setIsOpen(!isOpen)}
						className="md:hidden p-2 rounded-lg hover:bg-slate-800 transition"
					>
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					</button>
				</div>

				{/* Mobile Navigation */}
				{isOpen && (
					<div className="md:hidden pb-4 border-t border-slate-800">
						<div className="space-y-2 mt-4">
							<Link
								to="/"
								className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800 rounded transition"
							>
								Home
							</Link>
							<Link
								to="/dashboard"
								className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800 rounded transition"
							>
								Features
							</Link>
							<Link
								to="/pricing"
								className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800 rounded transition"
							>
								Pricing
							</Link>
							<a
								href="#"
								className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800 rounded transition"
							>
								Docs
							</a>
							<button className="w-full mt-4 px-4 py-2 bg-white text-slate-950 rounded-lg text-sm font-semibold hover:bg-slate-100 transition">
								Book Demo
							</button>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
}

// import { Link } from "react-router-dom";
// import { useState } from "react"

// // SVG Icons
// const RyzeIcon = () => (
//   <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <rect width="32" height="32" rx="6" fill="black" stroke="white" strokeWidth="1.5" />
//     <text x="50%" y="50%" textAnchor="middle" dy=".3em" fill="white" fontSize="18" fontWeight="bold" fontFamily="Arial">
//       R
//     </text>
//   </svg>
// )

// const MenuIcon = () => (
//   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
//     <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" strokeLinejoin="round" />
//   </svg>
// )

// const CloseIcon = () => (
//   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
//     <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
//   </svg>
// )

// export default function Navigation() {
//   const [isOpen, setIsOpen] = useState(false)

//   return (
//     <nav
//       style={{
//         borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
//         position: "sticky",
//         top: 0,
//         zIndex: 50,
//         background: "rgba(0, 0, 0, 0.8)",
//         backdropFilter: "blur(20px)",
//       }}
//     >
//       <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 16px" }}>
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             height: "64px",
//           }}
//         >
//           {/* Logo */}
//           <Link href="/" style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none" }}>
//             <div
//               style={{
//                 width: "32px",
//                 height: "32px",
//                 background: "white",
//                 borderRadius: "6px",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 fontWeight: "bold",
//                 color: "black",
//               }}
//             >
//               R
//             </div>
//             <span
//               style={{
//                 fontSize: "20px",
//                 fontWeight: "bold",
//                 color: "white",
//                 letterSpacing: "-1px",
//               }}
//             >
//               Ryze
//             </span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div
//             style={{
//               display: "none",
//               "@media (minWidth: 768px)": { display: "flex" },
//               gap: "32px",
//               alignItems: "center",
//             }}
//             className="hidden md:flex gap-8"
//           >
//             <Link
//               href="/"
//               style={{
//                 fontSize: "14px",
//                 color: "rgba(255, 255, 255, 0.7)",
//                 textDecoration: "none",
//                 transition: "color 0.3s",
//               }}
//               className="hover:text-white"
//             >
//               Home
//             </Link>
//             <Link
//               href="/dashboard"
//               style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.7)", textDecoration: "none" }}
//               className="hover:text-white"
//             >
//               Features
//             </Link>
//             <Link
//               href="/pricing"
//               style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.7)", textDecoration: "none" }}
//               className="hover:text-white"
//             >
//               Pricing
//             </Link>
//             <a
//               href="#"
//               style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.7)", textDecoration: "none" }}
//               className="hover:text-white"
//             >
//               Docs
//             </a>
//           </div>

//           {/* CTA Buttons */}
//           <div
//             style={{
//               display: "none",
//               "@media (minWidth: 768px)": { display: "flex" },
//               gap: "12px",
//               alignItems: "center",
//             }}
//             className="hidden md:flex gap-3"
//           >
//             <button
//               style={{
//                 padding: "10px 16px",
//                 borderRadius: "6px",
//                 fontSize: "14px",
//                 fontWeight: "500",
//                 background: "transparent",
//                 color: "rgba(255, 255, 255, 0.6)",
//                 border: "none",
//                 cursor: "pointer",
//               }}
//               className="hover:text-white"
//             >
//               Sign In
//             </button>
//             <button className="btn-primary">Book Demo</button>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             style={{
//               display: "none",
//               "@media (maxWidth: 768px)": { display: "block" },
//               padding: "8px",
//               borderRadius: "6px",
//               background: "transparent",
//               border: "none",
//               cursor: "pointer",
//               color: "white",
//             }}
//             className="md:hidden"
//           >
//             {isOpen ? <CloseIcon /> : <MenuIcon />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <div
//             style={{
//               display: "block",
//               paddingBottom: "16px",
//               borderTop: "1px solid rgba(255, 255, 255, 0.1)",
//             }}
//             className="md:hidden"
//           >
//             <div style={{ marginTop: "16px", display: "flex", flexDirection: "column", gap: "8px" }}>
//               <Link
//                 href="/"
//                 style={{
//                   display: "block",
//                   padding: "12px 16px",
//                   fontSize: "14px",
//                   color: "rgba(255, 255, 255, 0.7)",
//                   textDecoration: "none",
//                   borderRadius: "6px",
//                   transition: "all 0.3s",
//                 }}
//                 className="hover:bg-zinc-900 hover:text-white"
//               >
//                 Home
//               </Link>
//               <Link
//                 href="/dashboard"
//                 style={{
//                   display: "block",
//                   padding: "12px 16px",
//                   fontSize: "14px",
//                   color: "rgba(255, 255, 255, 0.7)",
//                   textDecoration: "none",
//                   borderRadius: "6px",
//                 }}
//                 className="hover:bg-zinc-900 hover:text-white"
//               >
//                 Features
//               </Link>
//               <Link
//                 href="/pricing"
//                 style={{
//                   display: "block",
//                   padding: "12px 16px",
//                   fontSize: "14px",
//                   color: "rgba(255, 255, 255, 0.7)",
//                   textDecoration: "none",
//                   borderRadius: "6px",
//                 }}
//                 className="hover:bg-zinc-900 hover:text-white"
//               >
//                 Pricing
//               </Link>
//               <a
//                 href="#"
//                 style={{
//                   display: "block",
//                   padding: "12px 16px",
//                   fontSize: "14px",
//                   color: "rgba(255, 255, 255, 0.7)",
//                   textDecoration: "none",
//                   borderRadius: "6px",
//                 }}
//                 className="hover:bg-zinc-900 hover:text-white"
//               >
//                 Docs
//               </a>
//               <button className="btn-primary" style={{ width: "100%", marginTop: "16px" }}>
//                 Book Demo
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   )
// }
