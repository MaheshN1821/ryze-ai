import { useState, useEffect } from "react";
import { Star, MessageCircle } from "lucide-react";

export default function TestimonialsSection() {
	const testimonials = [
		{
			name: "Roger Dunn",
			role: "Global Performance Lead",
			company: "Rivert",
			content:
				"We were drowning with 7 people. Got back so many hours each week from reporting. Finally have bandwidth to focus on actual strategy.",
			rating: 5,
			source: "G2",
			gradient: "from-zinc-900 to-black",
		},
		{
			name: "Mathilde Biggs",
			role: "CEO",
			company: "Motif Digital",
			content:
				"Ryze's AI-driven ads outperform human optimization by a huge margin. +63% better ROAS after switching to AI agents.",
			rating: 5,
			source: "Verified",
			gradient: "from-black to-zinc-900",
		},
		{
			name: "Daniel Amezquita",
			role: "Global Ads Strategy",
			company: "Glava",
			content:
				"Broke down performance by asset—thumbnails, headlines, everything. Our CTR basically doubled.",
			rating: 5,
			source: "LinkedIn",
			gradient: "from-zinc-900 via-black to-zinc-950",
		},
		{
			name: "Sarah Chen",
			role: "Marketing Director",
			company: "TechFlow Inc",
			content:
				"The automation is insane. We cut our team workflow by 70% and our ROAS improved significantly. Best decision we made.",
			rating: 5,
			source: "G2",
			gradient: "from-black to-zinc-800",
		},
	];

	const [activeIndex, setActiveIndex] = useState(0);
	const [displayedTestimonials, setDisplayedTestimonials] =
		useState(testimonials);

	useEffect(() => {
		const timer = setInterval(() => {
			setDisplayedTestimonials((prev) => [...prev.slice(1), prev[0]]);
		}, 6000);
		return () => clearInterval(timer);
	}, []);

	return (
		<section
			style={{
				padding: "100px 16px",
				borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
				background:
					"linear-gradient(180deg, rgba(11, 10, 90, 1) 0%, rgba(0, 0, 0, 1) 100%)",
				position: "relative",
				overflow: "hidden",
			}}
		>
			<div
				style={{
					position: "absolute",
					top: "50%",
					left: "10%",
					width: "600px",
					height: "600px",
					background:
						"radial-gradient(circle, rgba(11, 10, 73, 0.02), transparent)",
					borderRadius: "50%",
					filter: "blur(120px)",
					transform: "translateY(-50%)",
					animation: "pulse 4s ease-in-out infinite",
				}}
			></div>

			<div
				style={{
					maxWidth: "1280px",
					margin: "0 auto",
					position: "relative",
					zIndex: 2,
				}}
			>
				<div style={{ textAlign: "center", marginBottom: "80px" }}>
					<h2
						style={{
							fontSize: "clamp(2rem, 5vw, 3rem)",
							fontWeight: "900",
							marginBottom: "16px",
							color: "white",
							letterSpacing: "-1px",
						}}
					>
						Loved by Top Agencies
					</h2>
					<p style={{ fontSize: "16px", color: "rgba(255, 255, 255, 0.5)" }}>
						See why teams worldwide choose Ryze for autonomous ad optimization
					</p>
				</div>

				<div
					// style={{
					// 	display: "grid",
					// 	gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
					// 	gap: "24px",
					// 	perspective: "1000px",
					// }}
					className="flex flex-row flex-wrap gap-12 justify-center align-items"
				>
					{displayedTestimonials.map((testimonial, idx) => (
						<div
							key={idx}
							style={{
								position: "relative",
								borderRadius: "16px",
								overflow: "hidden",
								animation: `slideIn 0.6s ease-out ${idx * 0.1}s both`,
								transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
							}}
							className="max-w-[400px] group hover:shadow-2xl"
							onMouseEnter={(e) => {
								e.currentTarget.style.transform = "translateY(-8px)";
							}}
							onMouseLeave={(e) => {
								e.currentTarget.style.transform = "translateY(0)";
							}}
						>
							<div
								style={{
									position: "absolute",
									inset: 0,
									background:
										"linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.02))",
									opacity: 0,
									transition: "opacity 0.4s ease",
									zIndex: 1,
								}}
								className="group-hover:opacity-100"
							></div>

							<div
								style={{
									padding: "40px",
									borderRadius: "16px",
									border: "1px solid rgba(255, 255, 255, 0.08)",
									background: "rgba(0, 0, 0, 0.4)",
									backdropFilter: "blur(10px)",
									position: "relative",
									zIndex: 2,
									display: "flex",
									flexDirection: "column",
									height: "100%",
								}}
							>
								<div
									style={{
										display: "flex",
										alignItems: "center",
										justifyContent: "space-between",
										marginBottom: "20px",
									}}
								>
									<div style={{ display: "flex", gap: "4px" }}>
										{[...Array(testimonial.rating)].map((_, i) => (
											<Star key={i} size={16} fill="white" color="white" />
										))}
									</div>
									<MessageCircle size={20} color="rgba(255, 255, 255, 0.3)" />
								</div>

								<p
									style={{
										fontSize: "15px",
										color: "rgba(255, 255, 255, 0.85)",
										lineHeight: "1.7",
										marginBottom: "28px",
										flex: 1,
										fontWeight: "400",
									}}
								>
									"{testimonial.content}"
								</p>

								<div
									style={{
										display: "flex",
										alignItems: "center",
										justifyContent: "space-between",
										paddingTop: "20px",
										borderTop: "1px solid rgba(255, 255, 255, 0.08)",
									}}
								>
									<div>
										<p
											style={{
												fontSize: "14px",
												fontWeight: "600",
												color: "white",
											}}
										>
											{testimonial.name}
										</p>
										<p
											style={{
												fontSize: "12px",
												color: "rgba(255, 255, 255, 0.5)",
												marginTop: "2px",
											}}
										>
											{testimonial.role} · {testimonial.company}
										</p>
									</div>
									<span
										style={{
											fontSize: "11px",
											fontWeight: "700",
											background: "rgba(255, 255, 255, 0.08)",
											padding: "6px 12px",
											borderRadius: "6px",
											color: "rgba(255, 255, 255, 0.7)",
											border: "1px solid rgba(255, 255, 255, 0.1)",
										}}
									>
										{testimonial.source}
									</span>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			<style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: translateY(-50%) scale(1);
            opacity: 1;
          }
          50% {
            transform: translateY(-50%) scale(1.1);
            opacity: 0.8;
          }
        }
      `}</style>
		</section>
	);
}

// export default function TestimonialsSection() {
// 	const testimonials = [
// 		{
// 			name: "Roger Dunn",
// 			role: "Global Performance Lead",
// 			company: "Rivert",
// 			content:
// 				"We were drowning with 7 people. Got back so many hours each week from reporting. Finally have bandwidth to focus on actual strategy.",
// 			rating: 5,
// 			source: "G2",
// 		},
// 		{
// 			name: "Mathilde Biggs",
// 			role: "CEO",
// 			company: "Motif Digital",
// 			content:
// 				"Ryze's AI-driven ads outperform human optimization by a huge margin. +63% better ROAS after switching to AI agents.",
// 			rating: 5,
// 			source: "Verified",
// 		},
// 		{
// 			name: "Daniel Amezquita",
// 			role: "Global Ads Strategy",
// 			company: "Glava",
// 			content:
// 				"Broke down performance by asset—thumbnails, headlines, everything. Our CTR basically doubled.",
// 			rating: 5,
// 			source: "LinkedIn",
// 		},
// 	];

// 	return (
// 		<section
// 			style={{
// 				padding: "80px 16px",
// 				borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
// 				background: "linear-gradient(180deg, #000000 0%, #0f0f0f 100%)",
// 			}}
// 		>
// 			<div style={{ maxWidth: "1280px", margin: "0 auto" }}>
// 				<div style={{ textAlign: "center", marginBottom: "64px" }}>
// 					<h2
// 						style={{
// 							fontSize: "clamp(2rem, 5vw, 3rem)",
// 							fontWeight: "900",
// 							marginBottom: "16px",
// 							color: "white",
// 							letterSpacing: "-1px",
// 						}}
// 					>
// 						Loved by Top Agencies
// 					</h2>
// 					<p style={{ fontSize: "16px", color: "rgba(255, 255, 255, 0.6)" }}>
// 						Join thousands of companies scaling with Ryze
// 					</p>
// 				</div>

// 				<div
// 					style={{
// 						display: "grid",
// 						gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
// 						gap: "24px",
// 					}}
// 				>
// 					{testimonials.map((testimonial, idx) => (
// 						<div
// 							key={idx}
// 							className="card-spotlight"
// 							style={{
// 								padding: "32px",
// 								borderRadius: "16px",
// 								border: "1px solid rgba(255, 255, 255, 0.1)",
// 								background:
// 									"linear-gradient(135deg, rgba(0, 0, 0, 0.4), rgba(15, 15, 15, 0.2))",
// 								transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
// 							}}
// 						>
// 							{/* Stars */}
// 							<div
// 								style={{ display: "flex", gap: "4px", marginBottom: "16px" }}
// 							>
// 								{[...Array(testimonial.rating)].map((_, i) => (
// 									<svg
// 										key={i}
// 										width="16"
// 										height="16"
// 										viewBox="0 0 16 16"
// 										fill="white"
// 									>
// 										<path d="M8 1l2.386 4.838 5.34.781-3.863 3.764.911 5.314L8 12.35l-4.774 2.347.911-5.314L.274 6.619l5.34-.781L8 1z" />
// 									</svg>
// 								))}
// 							</div>

// 							<p
// 								style={{
// 									fontSize: "14px",
// 									color: "rgba(255, 255, 255, 0.8)",
// 									lineHeight: "1.6",
// 									marginBottom: "24px",
// 								}}
// 							>
// 								"{testimonial.content}"
// 							</p>

// 							<div
// 								style={{
// 									display: "flex",
// 									alignItems: "center",
// 									justifyContent: "space-between",
// 									paddingTop: "16px",
// 									borderTop: "1px solid rgba(255, 255, 255, 0.1)",
// 								}}
// 							>
// 								<div>
// 									<p
// 										style={{
// 											fontSize: "14px",
// 											fontWeight: "600",
// 											color: "white",
// 										}}
// 									>
// 										{testimonial.name}
// 									</p>
// 									<p
// 										style={{
// 											fontSize: "12px",
// 											color: "rgba(255, 255, 255, 0.5)",
// 										}}
// 									>
// 										{testimonial.role} at {testimonial.company}
// 									</p>
// 								</div>
// 								<span
// 									style={{
// 										fontSize: "11px",
// 										fontWeight: "600",
// 										background: "rgba(255, 255, 255, 0.1)",
// 										padding: "4px 8px",
// 										borderRadius: "4px",
// 										color: "rgba(255, 255, 255, 0.7)",
// 									}}
// 								>
// 									{testimonial.source}
// 								</span>
// 							</div>
// 						</div>
// 					))}
// 				</div>
// 			</div>
// 		</section>
// 	);
// }

// export default function TestimonialsSection() {
// 	const testimonials = [
// 		{
// 			name: "Roger Dunn",
// 			role: "Global Performance Lead",
// 			company: "Rivert",
// 			content:
// 				"We were drowning with 7 people. Got back so many hours each week from reporting. Finally have bandwidth to focus on actual strategy.",
// 			rating: 5,
// 			source: "G2",
// 		},
// 		{
// 			name: "Mathilde Biggs",
// 			role: "CEO",
// 			company: "Motif Digital",
// 			content:
// 				"Ryze's AI-driven ads outperform human optimization by a huge margin. +63% better ROAS after switching to AI agents.",
// 			rating: 5,
// 			source: "Verified",
// 		},
// 		{
// 			name: "Daniel Amezquita",
// 			role: "Global Ads Strategy",
// 			company: "Glava",
// 			content:
// 				"Broke down performance by asset—thumbnails, headlines, everything. Our CTR basically doubled.",
// 			rating: 5,
// 			source: "LinkedIn",
// 		},
// 	];

// 	return (
// 		<section className="py-20 px-4 border-b border-slate-800">
// 			<div className="max-w-7xl mx-auto">
// 				<div className="text-center mb-16">
// 					<h2 className="text-4xl font-bold mb-4">Loved by Top Agencies</h2>
// 					<p className="text-slate-400">
// 						Join thousands of companies scaling with Ryze
// 					</p>
// 				</div>

// 				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// 					{testimonials.map((testimonial, idx) => (
// 						<div
// 							key={idx}
// 							className="p-6 rounded-xl border border-slate-800 hover:border-slate-700 bg-gradient-to-br from-slate-900 to-slate-950 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
// 						>
// 							{/* Stars */}
// 							<div className="flex gap-1 mb-4">
// 								{[...Array(testimonial.rating)].map((_, i) => (
// 									<svg
// 										key={i}
// 										className="w-4 h-4 text-yellow-400 fill-current"
// 										viewBox="0 0 20 20"
// 									>
// 										<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
// 									</svg>
// 								))}
// 							</div>

// 							<p className="text-slate-300 mb-4 leading-relaxed">
// 								{testimonial.content}
// 							</p>

// 							<div className="flex items-center justify-between pt-4 border-t border-slate-800">
// 								<div>
// 									<p className="font-semibold text-sm">{testimonial.name}</p>
// 									<p className="text-slate-400 text-xs">
// 										{testimonial.role} at {testimonial.company}
// 									</p>
// 								</div>
// 								<span className="text-xs font-medium bg-slate-800 px-2 py-1 rounded">
// 									{testimonial.source}
// 								</span>
// 							</div>
// 						</div>
// 					))}
// 				</div>
// 			</div>
// 		</section>
// 	);
// }
