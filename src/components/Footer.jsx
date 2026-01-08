export default function Footer() {
	return (
		<footer
			style={{
				borderTop: "1px solid rgba(255, 255, 255, 0.1)",
				background: "rgba(0, 0, 0, 0.5)",
			}}
		>
			<div
				style={{ maxWidth: "1280px", margin: "0 auto", padding: "48px 16px" }}
			>
				<div
					style={{
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
						gap: "32px",
						marginBottom: "32px",
					}}
				>
					{/* Brand */}
					<div>
						<div
							style={{
								display: "flex",
								alignItems: "center",
								gap: "8px",
								marginBottom: "16px",
							}}
						>
							<div
								style={{
									width: "32px",
									height: "32px",
									background: "white",
									borderRadius: "6px",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									fontWeight: "bold",
									color: "black",
								}}
							>
								R
							</div>
							<span
								style={{ fontSize: "18px", fontWeight: "bold", color: "white" }}
							>
								Ryze
							</span>
						</div>
						<p style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.6)" }}>
							AI-powered ad management for agencies and marketers.
						</p>
					</div>

					{/* Product */}
					<div>
						<h3
							style={{
								fontWeight: "600",
								marginBottom: "16px",
								color: "white",
							}}
						>
							Product
						</h3>
						<ul
							style={{ display: "flex", flexDirection: "column", gap: "8px" }}
						>
							{["Features", "Pricing", "Security"].map((item) => (
								<li key={item}>
									<a
										href="#"
										style={{
											fontSize: "14px",
											color: "rgba(255, 255, 255, 0.6)",
											textDecoration: "none",
											transition: "color 0.3s",
										}}
										className="hover:text-white"
									>
										{item}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Company */}
					<div>
						<h3
							style={{
								fontWeight: "600",
								marginBottom: "16px",
								color: "white",
							}}
						>
							Company
						</h3>
						<ul
							style={{ display: "flex", flexDirection: "column", gap: "8px" }}
						>
							{["About", "Blog", "Careers"].map((item) => (
								<li key={item}>
									<a
										href="#"
										style={{
											fontSize: "14px",
											color: "rgba(255, 255, 255, 0.6)",
											textDecoration: "none",
											transition: "color 0.3s",
										}}
										className="hover:text-white"
									>
										{item}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Legal */}
					<div>
						<h3
							style={{
								fontWeight: "600",
								marginBottom: "16px",
								color: "white",
							}}
						>
							Legal
						</h3>
						<ul
							style={{ display: "flex", flexDirection: "column", gap: "8px" }}
						>
							{["Privacy", "Terms", "Contact"].map((item) => (
								<li key={item}>
									<a
										href="#"
										style={{
											fontSize: "14px",
											color: "rgba(255, 255, 255, 0.6)",
											textDecoration: "none",
											transition: "color 0.3s",
										}}
										className="hover:text-white"
									>
										{item}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>

				<div
					style={{
						borderTop: "1px solid rgba(255, 255, 255, 0.1)",
						paddingTop: "32px",
						display: "flex",
						flexDirection: "column",
						gap: "16px",
					}}
					className="md:flex-row md:justify-between md:items-center"
				>
					<p style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.6)" }}>
						© 2026 Ryze AI. All rights reserved.
					</p>
					<div style={{ display: "flex", gap: "24px" }}>
						{["Twitter", "LinkedIn", "GitHub"].map((social) => (
							<a
								key={social}
								href="#"
								style={{
									fontSize: "14px",
									color: "rgba(255, 255, 255, 0.6)",
									textDecoration: "none",
									transition: "color 0.3s",
								}}
								className="hover:text-white"
							>
								{social}
							</a>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
}

// export default function Footer() {
// 	return (
// 		<footer className="border-t border-slate-800 bg-slate-950/50 mt-20">
// 			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
// 				<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
// 					{/* Brand */}
// 					<div>
// 						<div className="flex items-center gap-2 mb-4">
// 							<div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center font-bold text-slate-950">
// 								R
// 							</div>
// 							<span className="text-lg font-bold">Ryze</span>
// 						</div>
// 						<p className="text-slate-400 text-sm">
// 							AI-powered ad management for agencies and marketers.
// 						</p>
// 					</div>

// 					{/* Product */}
// 					<div>
// 						<h3 className="font-semibold mb-4 text-white">Product</h3>
// 						<ul className="space-y-2 text-sm text-slate-400">
// 							<li>
// 								<a href="#" className="hover:text-white transition">
// 									Features
// 								</a>
// 							</li>
// 							<li>
// 								<a href="#" className="hover:text-white transition">
// 									Pricing
// 								</a>
// 							</li>
// 							<li>
// 								<a href="#" className="hover:text-white transition">
// 									Security
// 								</a>
// 							</li>
// 						</ul>
// 					</div>

// 					{/* Company */}
// 					<div>
// 						<h3 className="font-semibold mb-4 text-white">Company</h3>
// 						<ul className="space-y-2 text-sm text-slate-400">
// 							<li>
// 								<a href="#" className="hover:text-white transition">
// 									About
// 								</a>
// 							</li>
// 							<li>
// 								<a href="#" className="hover:text-white transition">
// 									Blog
// 								</a>
// 							</li>
// 							<li>
// 								<a href="#" className="hover:text-white transition">
// 									Careers
// 								</a>
// 							</li>
// 						</ul>
// 					</div>

// 					{/* Legal */}
// 					<div>
// 						<h3 className="font-semibold mb-4 text-white">Legal</h3>
// 						<ul className="space-y-2 text-sm text-slate-400">
// 							<li>
// 								<a href="#" className="hover:text-white transition">
// 									Privacy
// 								</a>
// 							</li>
// 							<li>
// 								<a href="#" className="hover:text-white transition">
// 									Terms
// 								</a>
// 							</li>
// 							<li>
// 								<a href="#" className="hover:text-white transition">
// 									Contact
// 								</a>
// 							</li>
// 						</ul>
// 					</div>
// 				</div>

// 				<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
// 					<p>&copy; 2026 Ryze AI. All rights reserved.</p>
// 					<div className="flex gap-6 mt-4 md:mt-0">
// 						<a href="#" className="hover:text-white transition">
// 							Twitter
// 						</a>
// 						<a href="#" className="hover:text-white transition">
// 							LinkedIn
// 						</a>
// 						<a href="#" className="hover:text-white transition">
// 							GitHub
// 						</a>
// 					</div>
// 				</div>
// 			</div>
// 		</footer>
// 	);
// }
