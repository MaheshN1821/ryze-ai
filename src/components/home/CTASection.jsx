import { useState } from "react";
import { ArrowRight, Sparkles, Zap } from "lucide-react";

export default function CTASection() {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<section
			style={{
				padding: "120px 16px",
				background:
					"linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(5, 5, 5, 1) 100%)",
				position: "relative",
				overflow: "hidden",
			}}
		>
			<div
				style={{
					position: "absolute",
					top: "-20%",
					left: "10%",
					width: "600px",
					height: "600px",
					background:
						"radial-gradient(circle, rgba(255, 255, 255, 0.05), transparent)",
					borderRadius: "50%",
					filter: "blur(100px)",
					animation: "floatSlow 8s ease-in-out infinite",
				}}
			></div>
			<div
				style={{
					position: "absolute",
					bottom: "-15%",
					right: "5%",
					width: "700px",
					height: "700px",
					background:
						"radial-gradient(circle, rgba(255, 255, 255, 0.03), transparent)",
					borderRadius: "50%",
					filter: "blur(120px)",
					animation: "floatSlow 10s ease-in-out infinite reverse",
				}}
			></div>

			<div
				style={{
					maxWidth: "900px",
					margin: "0 auto",
					position: "relative",
					zIndex: 2,
				}}
			>
				<div
					style={{
						position: "relative",
						borderRadius: "24px",
						padding: "80px 48px",
						background:
							"linear-gradient(135deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0.005))",
						border: "1px solid rgba(255, 255, 255, 0.08)",
						overflow: "hidden",
						transition: "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
						cursor: "pointer",
					}}
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
					className="group"
				>
					<div
						style={{
							position: "absolute",
							inset: 0,
							background:
								"linear-gradient(135deg, rgba(255, 255, 255, 0.05), transparent)",
							opacity: isHovered ? 1 : 0,
							transition: "opacity 0.6s ease",
							borderRadius: "24px",
						}}
					></div>

					<div
						style={{
							position: "absolute",
							top: 0,
							left: 0,
							right: 0,
							height: "1px",
							background:
								"linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)",
							opacity: isHovered ? 1 : 0.3,
							transition: "opacity 0.6s ease",
						}}
					></div>

					<div
						style={{
							position: "absolute",
							top: "30%",
							right: "10%",
							width: "300px",
							height: "300px",
							background:
								"radial-gradient(circle, rgba(255, 255, 255, 0.08), transparent)",
							borderRadius: "50%",
							filter: "blur(60px)",
							opacity: isHovered ? 0.8 : 0.3,
							transition: "opacity 0.6s ease, transform 0.6s ease",
							transform: isHovered ? "scale(1.2)" : "scale(1)",
						}}
					></div>

					<div
						style={{
							position: "relative",
							zIndex: 10,
							textAlign: "center",
						}}
					>
						{/* <div
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								gap: "12px",
								marginBottom: "24px",
								opacity: isHovered ? 1 : 0.7,
								transition: "opacity 0.4s ease",
							}}
						>
							<Sparkles size={20} color="rgba(255, 255, 255, 0.7)" />
							<span
								style={{
									fontSize: "13px",
									fontWeight: "600",
									color: "rgba(255, 255, 255, 0.7)",
									letterSpacing: "0.5px",
								}}
							>
								LIMITED TIME OFFER
							</span>
							<Zap size={20} color="rgba(255, 255, 255, 0.7)" />
						</div> */}

						<h2
							style={{
								fontSize: "clamp(1.75rem, 5vw, 3rem)",
								fontWeight: "900",
								marginBottom: "20px",
								color: "white",
								letterSpacing: "-1px",
								lineHeight: "1.1",
							}}
						>
							Ready to scale your ad revenue?
						</h2>

						<p
							style={{
								fontSize: "16px",
								color: "rgba(255, 255, 255, 0.6)",
								marginBottom: "48px",
								maxWidth: "600px",
								margin: "0 auto 48px",
								lineHeight: "1.6",
							}}
						>
							Join 2000+ companies automating their ad optimization with AI.
							Start free today, no credit card required. Get instant ROI
							insights in your first week.
						</p>

						<div
							style={{
								display: "flex",
								flexDirection: "column",
								gap: "16px",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<button
								style={{
									padding: "18px 48px",
									fontSize: "16px",
									fontWeight: "700",
									backgroundColor: "white",
									color: "black",
									border: "none",
									borderRadius: "12px",
									cursor: "pointer",
									transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
									display: "flex",
									alignItems: "center",
									gap: "10px",
									justifyContent: "center",
									transform: isHovered
										? "translateY(-4px) scale(1.05)"
										: "translateY(0)",
									boxShadow: isHovered
										? "0 20px 40px rgba(255, 255, 255, 0.1)"
										: "0 10px 20px rgba(0, 0, 0, 0.3)",
								}}
							>
								Start Free Trial
								<ArrowRight size={18} />
							</button>

							<button
								style={{
									padding: "16px 40px",
									fontSize: "15px",
									fontWeight: "600",
									backgroundColor: "transparent",
									color: "rgba(255, 255, 255, 0.8)",
									border: "1.5px solid rgba(255, 255, 255, 0.2)",
									borderRadius: "12px",
									cursor: "pointer",
									transition: "all 0.4s ease",
									":hover": {
										borderColor: "rgba(255, 255, 255, 0.5)",
									},
								}}
								onMouseEnter={(e) => {
									e.currentTarget.style.borderColor =
										"rgba(255, 255, 255, 0.4)";
									e.currentTarget.style.backgroundColor =
										"rgba(255, 255, 255, 0.05)";
								}}
								onMouseLeave={(e) => {
									e.currentTarget.style.borderColor =
										"rgba(255, 255, 255, 0.2)";
									e.currentTarget.style.backgroundColor = "transparent";
								}}
							>
								Schedule Demo
							</button>
						</div>
					</div>
				</div>

				<div
					style={{
						display: "flex",
						justifyContent: "center",
						gap: "32px",
						marginTop: "64px",
						textAlign: "center",
					}}
				>
					<div style={{ opacity: 0.7 }}>
						<p style={{ fontSize: "20px", fontWeight: "900", color: "white" }}>
							14 days
						</p>
						<p
							style={{
								fontSize: "13px",
								color: "rgba(255, 255, 255, 0.5)",
								marginTop: "4px",
							}}
						>
							Free trial
						</p>
					</div>
					<div
						style={{ width: "1px", background: "rgba(255, 255, 255, 0.1)" }}
					></div>
					<div style={{ opacity: 0.7 }}>
						<p style={{ fontSize: "20px", fontWeight: "900", color: "white" }}>
							2000+
						</p>
						<p
							style={{
								fontSize: "13px",
								color: "rgba(255, 255, 255, 0.5)",
								marginTop: "4px",
							}}
						>
							Companies trust us
						</p>
					</div>
					<div
						style={{ width: "1px", background: "rgba(255, 255, 255, 0.1)" }}
					></div>
					<div style={{ opacity: 0.7 }}>
						<p style={{ fontSize: "20px", fontWeight: "900", color: "white" }}>
							No card
						</p>
						<p
							style={{
								fontSize: "13px",
								color: "rgba(255, 255, 255, 0.5)",
								marginTop: "4px",
							}}
						>
							Required
						</p>
					</div>
				</div>
			</div>

			<style>{`
        @keyframes floatSlow {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(40px, 40px);
          }
        }
      `}</style>
		</section>
	);
}

// export default function CTASection() {
// 	return (
// 		<section
// 			style={{
// 				padding: "80px 16px",
// 				background: "linear-gradient(180deg, #0f0f0f 0%, #000000 100%)",
// 			}}
// 		>
// 			<div style={{ maxWidth: "50rem", margin: "0 auto" }}>
// 				<div
// 					style={{
// 						position: "relative",
// 						borderRadius: "20px",
// 						padding: "48px",
// 						background:
// 							"linear-gradient(135deg, rgba(0, 0, 0, 0.6), rgba(15, 15, 15, 0.4))",
// 						border: "1px solid rgba(255, 255, 255, 0.1)",
// 						overflow: "hidden",
// 					}}
// 					className="card-spotlight"
// 				>
// 					{/* Background blur orbs */}
// 					<div
// 						style={{
// 							position: "absolute",
// 							top: 0,
// 							right: 0,
// 							width: "384px",
// 							height: "384px",
// 							background:
// 								"radial-gradient(circle, rgba(255, 255, 255, 0.1), transparent)",
// 							borderRadius: "50%",
// 							filter: "blur(120px)",
// 							opacity: 0.3,
// 							zIndex: 0,
// 						}}
// 					></div>
// 					<div
// 						style={{
// 							position: "absolute",
// 							bottom: 0,
// 							left: 0,
// 							width: "384px",
// 							height: "384px",
// 							background:
// 								"radial-gradient(circle, rgba(255, 255, 255, 0.08), transparent)",
// 							borderRadius: "50%",
// 							filter: "blur(120px)",
// 							opacity: 0.2,
// 							zIndex: 0,
// 						}}
// 					></div>

// 					<div
// 						style={{ position: "relative", zIndex: 10, textAlign: "center" }}
// 					>
// 						<h2
// 							style={{
// 								fontSize: "clamp(2rem, 4vw, 2.5rem)",
// 								fontWeight: "900",
// 								marginBottom: "16px",
// 								color: "white",
// 								letterSpacing: "-1px",
// 							}}
// 						>
// 							Ready to scale your ad revenue?
// 						</h2>
// 						<p
// 							style={{
// 								fontSize: "16px",
// 								color: "rgba(255, 255, 255, 0.6)",
// 								marginBottom: "32px",
// 								maxWidth: "32rem",
// 								margin: "0 auto 32px",
// 							}}
// 						>
// 							Join 2000+ companies automating their ad optimization. Start free,
// 							no credit card required.
// 						</p>

// 						<div
// 							style={{
// 								display: "flex",
// 								flexDirection: "column",
// 								gap: "12px",
// 								justifyContent: "center",
// 							}}
// 							className="sm:flex-row sm:gap-4"
// 						>
// 							<button
// 								className="btn-primary"
// 								style={{ fontSize: "16px", padding: "14px 32px" }}
// 							>
// 								Start Free Trial
// 							</button>
// 							<button
// 								className="btn-secondary"
// 								style={{ fontSize: "16px", padding: "14px 32px" }}
// 							>
// 								Schedule Demo
// 							</button>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</section>
// 	);
// }

// export default function CTASection() {
// 	return (
// 		<section className="py-20 px-4">
// 			<div className="max-w-4xl mx-auto">
// 				<div className="relative rounded-2xl p-12 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700 overflow-hidden">
// 					<div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10"></div>
// 					<div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10"></div>

// 					<div className="relative z-10 text-center">
// 						<h2 className="text-4xl font-bold mb-4">
// 							Ready to scale your ad revenue?
// 						</h2>
// 						<p className="text-slate-400 mb-8 max-w-2xl mx-auto">
// 							Join 2000+ companies automating their ad optimization. Start free,
// 							no credit card required.
// 						</p>

// 						<div className="flex flex-col sm:flex-row gap-4 justify-center">
// 							<button className="px-8 py-4 bg-white text-slate-950 rounded-lg font-semibold hover:bg-slate-100 transition transform hover:scale-105 active:scale-95">
// 								Start Free Trial
// 							</button>
// 							<button className="px-8 py-4 border border-slate-600 text-white rounded-lg font-semibold hover:bg-slate-800 transition transform hover:scale-105 active:scale-95">
// 								Schedule Demo
// 							</button>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</section>
// 	);
// }
