import { useEffect, useRef } from "react";

export default function HeroSection() {
	const heroRef = useRef(null);

	useEffect(() => {
		const handleMouseMove = (e) => {
			if (!heroRef.current) return;
			const rect = heroRef.current.getBoundingClientRect();
			const x = e.clientX - rect.left;
			const y = e.clientY - rect.top;
			heroRef.current.style.setProperty("--mouse-x", `${x}px`);
			heroRef.current.style.setProperty("--mouse-y", `${y}px`);
		};

		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

	return (
		<section
			ref={heroRef}
			className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-gradient-to-br from-[#0a0e27] via-[#0f1a3c] to-[#0a0e27]"
		>
			{/* Animated mesh gradient background */}
			<div className="absolute inset-0 opacity-40">
				<div className="absolute top-1/4 -left-1/3 w-screen h-screen bg-gradient-to-r from-cyan-500 via-blue-500 to-transparent rounded-full mix-blend-screen filter blur-3xl animate-float"></div>
				<div
					className="absolute -bottom-1/4 right-1/3 w-screen h-screen bg-gradient-to-l from-blue-600 via-cyan-500 to-transparent rounded-full mix-blend-screen filter blur-3xl opacity-50"
					style={{ animationDelay: "2s" }}
				></div>
			</div>

			{/* Grid pattern overlay */}
			<div className="absolute inset-0 opacity-5">
				<div
					style={{
						backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(255,255,255,.1) 25%, rgba(255,255,255,.1) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.1) 75%, rgba(255,255,255,.1) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(255,255,255,.1) 25%, rgba(255,255,255,.1) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.1) 75%, rgba(255,255,255,.1) 76%, transparent 77%, transparent)`,
						backgroundSize: "60px 60px",
					}}
					className="absolute inset-0"
				></div>
			</div>

			<div className="relative z-10 max-w-5xl mx-auto text-center">
				{/* Badge with glow */}
				{/* <div
					className="inline-block mb-8 animate-slide-up"
					style={{ animationDelay: "0.1s" }}
				>
					<div className="relative group">
						<div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full opacity-0 group-hover:opacity-75 blur transition duration-300"></div>
						<div className="relative px-6 py-3 rounded-full bg-gradient-to-r from-[#0f1a3c] to-[#0a0e27] border border-cyan-500/30 flex items-center gap-2">
							<div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
							<span className="text-xs font-semibold text-cyan-300 tracking-wide">
								AUTONOMOUS AI-POWERED PLATFORM
							</span>
						</div>
					</div>
				</div> */}

				{/* Main Headline */}
				<h1
					className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight animate-slide-up"
					style={{ animationDelay: "0.2s" }}
				>
					<span className="block text-white mb-2">Let AI</span>
					<span
						className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-shift"
						style={{ backgroundSize: "200% 200%" }}
					>
						Manage Your Ads
					</span>
				</h1>

				{/* Subheadline */}
				<p
					className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed animate-slide-up"
					style={{ animationDelay: "0.3s" }}
				>
					Stop wasting time on manual optimization. Ryze's autonomous AI
					continuously audits, generates creative, and optimizes campaigns
					across Google, Meta, and ChatGPT ads in real-time.
				</p>

				{/* CTA Buttons */}
				<div
					className="flex flex-col sm:flex-row gap-5 justify-center mb-8 animate-slide-up"
					style={{ animationDelay: "0.4s" }}
				>
					<button className="group relative px-10 py-4 font-semibold text-lg bg-white text-slate-950 rounded-xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 overflow-hidden">
						<div className="absolute inset-0 bg-gradient-to-r from-white to-slate-100 group-hover:scale-105 transition-transform"></div>
						<span className="relative flex items-center justify-center gap-2">
							Get Started Free
							<svg
								className="w-5 h-5 group-hover:translate-x-1 transition-transform"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M13 7l5 5m0 0l-5 5m5-5H6"
								/>
							</svg>
						</span>
					</button>
					<button className="group px-10 py-4 font-semibold text-lg rounded-xl border-2 border-cyan-500/30 text-white hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm">
						<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
							<path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
						</svg>
						Watch Demo
					</button>
				</div>

				{/* Trust indicators */}
				<div
					className="flex flex-col sm:flex-row gap-6 justify-center text-sm text-slate-400 animate-slide-up"
					style={{ animationDelay: "0.5s" }}
				>
					<div className="flex items-center gap-2">
						<svg
							className="w-5 h-5 text-cyan-400"
							fill="currentColor"
							viewBox="0 0 20 20"
						>
							<path
								fillRule="evenodd"
								d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
								clipRule="evenodd"
							/>
						</svg>
						<span>No credit card required</span>
					</div>
					<div className="flex items-center gap-2">
						<svg
							className="w-5 h-5 text-cyan-400"
							fill="currentColor"
							viewBox="0 0 20 20"
						>
							<path
								fillRule="evenodd"
								d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
								clipRule="evenodd"
							/>
						</svg>
						<span>2000+ agencies trust us</span>
					</div>
				</div>
			</div>
		</section>
	);
}

// import { useEffect, useRef } from "react";

// export default function HeroSection() {
// 	const heroRef = useRef(null);

// 	useEffect(() => {
// 		const handleMouseMove = (e) => {
// 			if (!heroRef.current) return;
// 			const rect = heroRef.current.getBoundingClientRect();
// 			const x = e.clientX - rect.left;
// 			const y = e.clientY - rect.top;
// 			heroRef.current.style.setProperty("--mouse-x", `${x}px`);
// 			heroRef.current.style.setProperty("--mouse-y", `${y}px`);
// 		};

// 		window.addEventListener("mousemove", handleMouseMove);
// 		return () => window.removeEventListener("mousemove", handleMouseMove);
// 	}, []);

// 	return (
// 		<section
// 			ref={heroRef}
// 			style={{
// 				position: "relative",
// 				minHeight: "100vh",
// 				display: "flex",
// 				alignItems: "center",
// 				justifyContent: "center",
// 				padding: "16px",
// 				overflow: "hidden",
// 				background:
// 					"linear-gradient(135deg, #000000 0%, #0f0f0f 50%, #1a1a1a 100%)",
// 			}}
// 		>
// 			{/* Animated mesh gradient background with white/gray */}
// 			<div
// 				style={{
// 					position: "absolute",
// 					inset: 0,
// 					opacity: 0.3,
// 					zIndex: 0,
// 				}}
// 			>
// 				<div
// 					style={{
// 						position: "absolute",
// 						top: "25%",
// 						left: "-33%",
// 						width: "100vw",
// 						height: "100vh",
// 						background:
// 							"radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, transparent 70%)",
// 						borderRadius: "50%",
// 						filter: "blur(120px)",
// 						animation: "float 8s ease-in-out infinite",
// 					}}
// 				></div>
// 				<div
// 					style={{
// 						position: "absolute",
// 						bottom: "-25%",
// 						right: "33%",
// 						width: "100vw",
// 						height: "100vh",
// 						background:
// 							"radial-gradient(circle, rgba(212, 212, 212, 0.6) 0%, transparent 70%)",
// 						borderRadius: "50%",
// 						filter: "blur(120px)",
// 						animation: "float 10s ease-in-out infinite",
// 						animationDelay: "2s",
// 					}}
// 				></div>
// 			</div>

// 			{/* Grid pattern overlay */}
// 			<div
// 				style={{
// 					position: "absolute",
// 					inset: 0,
// 					opacity: 0.05,
// 					zIndex: 1,
// 					backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent),
//           linear-gradient(90deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent)`,
// 					backgroundSize: "60px 60px",
// 				}}
// 			></div>

// 			<div
// 				style={{
// 					position: "relative",
// 					zIndex: 10,
// 					maxWidth: "80rem",
// 					margin: "0 auto",
// 					textAlign: "center",
// 				}}
// 			>
// 				{/* Badge */}
// 				<div
// 					style={{
// 						display: "inline-block",
// 						marginBottom: "32px",
// 						animation:
// 							"slideInUp 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
// 						opacity: 0,
// 						animationDelay: "0.1s",
// 					}}
// 				>
// 					<div
// 						style={{
// 							position: "relative",
// 							padding: "12px 24px",
// 							borderRadius: "50px",
// 							background: "rgba(0, 0, 0, 0.6)",
// 							border: "1px solid rgba(255, 255, 255, 0.2)",
// 							backdropFilter: "blur(20px)",
// 							display: "flex",
// 							alignItems: "center",
// 							gap: "8px",
// 							fontSize: "12px",
// 							fontWeight: "600",
// 							color: "rgba(255, 255, 255, 0.8)",
// 							letterSpacing: "1px",
// 							transition: "all 0.3s ease",
// 						}}
// 						className="hover:border-white/40 hover:bg-black/40"
// 					>
// 						<div
// 							style={{
// 								width: "8px",
// 								height: "8px",
// 								background: "white",
// 								borderRadius: "50%",
// 								animation: "pulse 2s ease-in-out infinite",
// 							}}
// 						></div>
// 						AUTONOMOUS AI PLATFORM
// 					</div>
// 				</div>

// 				{/* Main Headline */}
// 				<h1
// 					style={{
// 						fontSize: "clamp(3rem, 8vw, 7rem)",
// 						fontWeight: "900",
// 						lineHeight: "1.2",
// 						marginBottom: "32px",
// 						color: "white",
// 						animation:
// 							"slideInUp 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
// 						opacity: 0,
// 						animationDelay: "0.2s",
// 						letterSpacing: "-2px",
// 					}}
// 				>
// 					<span style={{ display: "block", marginBottom: "16px" }}>Let AI</span>
// 					<span
// 						style={{
// 							display: "block",
// 							background:
// 								"linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(212, 212, 212, 0.8) 100%)",
// 							WebkitBackgroundClip: "text",
// 							WebkitTextFillColor: "transparent",
// 							backgroundClip: "text",
// 						}}
// 					>
// 						Manage Your Ads
// 					</span>
// 				</h1>

// 				{/* Subheadline */}
// 				<p
// 					style={{
// 						fontSize: "clamp(1rem, 2vw, 1.25rem)",
// 						color: "rgba(255, 255, 255, 0.7)",
// 						marginBottom: "40px",
// 						maxWidth: "48rem",
// 						margin: "0 auto 40px",
// 						lineHeight: "1.8",
// 						animation:
// 							"slideInUp 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
// 						opacity: 0,
// 						animationDelay: "0.3s",
// 					}}
// 				>
// 					Stop wasting time on manual optimization. Ryze's autonomous AI
// 					continuously audits, generates creative, and optimizes campaigns
// 					across Google, Meta, and ChatGPT ads in real-time.
// 				</p>

// 				{/* CTA Buttons */}
// 				<div
// 					style={{
// 						display: "flex",
// 						flexDirection: "column",
// 						gap: "20px",
// 						justifyContent: "center",
// 						marginBottom: "64px",
// 						animation:
// 							"slideInUp 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
// 						opacity: 0,
// 						animationDelay: "0.4s",
// 					}}
// 					className="sm:flex-row"
// 				>
// 					<button
// 						className="btn-primary"
// 						style={{ fontSize: "16px", padding: "16px 32px" }}
// 					>
// 						<span
// 							style={{
// 								display: "flex",
// 								alignItems: "center",
// 								justifyContent: "center",
// 								gap: "8px",
// 							}}
// 						>
// 							Get Started Free
// 							<svg
// 								width="20"
// 								height="20"
// 								viewBox="0 0 24 24"
// 								fill="none"
// 								stroke="currentColor"
// 								strokeWidth="2"
// 							>
// 								<path
// 									d="M13 7l5 5m0 0l-5 5m5-5H6"
// 									strokeLinecap="round"
// 									strokeLinejoin="round"
// 								/>
// 							</svg>
// 						</span>
// 					</button>
// 					<button
// 						className="btn-secondary"
// 						style={{ fontSize: "16px", padding: "16px 32px" }}
// 					>
// 						<span
// 							style={{
// 								display: "flex",
// 								alignItems: "center",
// 								justifyContent: "center",
// 								gap: "8px",
// 							}}
// 						>
// 							<svg
// 								width="20"
// 								height="20"
// 								fill="currentColor"
// 								viewBox="0 0 20 20"
// 							>
// 								<path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
// 							</svg>
// 							Watch Demo
// 						</span>
// 					</button>
// 				</div>

// 				{/* Trust indicators */}
// 				<div
// 					style={{
// 						display: "flex",
// 						flexDirection: "column",
// 						gap: "24px",
// 						justifyContent: "center",
// 						fontSize: "14px",
// 						color: "rgba(255, 255, 255, 0.6)",
// 						animation:
// 							"slideInUp 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
// 						opacity: 0,
// 						animationDelay: "0.5s",
// 					}}
// 					className="sm:flex-row"
// 				>
// 					<div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
// 						<svg width="20" height="20" fill="white" viewBox="0 0 20 20">
// 							<path
// 								fillRule="evenodd"
// 								d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
// 								clipRule="evenodd"
// 							/>
// 						</svg>
// 						No credit card required
// 					</div>
// 					<div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
// 						<svg width="20" height="20" fill="white" viewBox="0 0 20 20">
// 							<path
// 								fillRule="evenodd"
// 								d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
// 								clipRule="evenodd"
// 							/>
// 						</svg>
// 						2000+ agencies trust us
// 					</div>
// 				</div>
// 			</div>
// 		</section>
// 	);
// }

//above correct

// export default function HeroSection() {
// 	return (
// 		<section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
// 			{/* Animated Background Grid */}
// 			<div className="absolute inset-0 opacity-10">
// 				<div
// 					className="absolute inset-0 bg-grid-pattern"
// 					style={{
// 						backgroundImage: `
//             linear-gradient(0deg, transparent 24%, rgba(148, 163, 184, .1) 25%, rgba(148, 163, 184, .1) 26%, transparent 27%, transparent 74%, rgba(148, 163, 184, .1) 75%, rgba(148, 163, 184, .1) 76%, transparent 77%, transparent),
//             linear-gradient(90deg, transparent 24%, rgba(148, 163, 184, .1) 25%, rgba(148, 163, 184, .1) 26%, transparent 27%, transparent 74%, rgba(148, 163, 184, .1) 75%, rgba(148, 163, 184, .1) 76%, transparent 77%, transparent)`,
// 						backgroundSize: "50px 50px",
// 					}}
// 				></div>
// 			</div>

// 			{/* Gradient Orbs */}
// 			<div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
// 			<div
// 				className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"
// 				style={{ animationDelay: "1s" }}
// 			></div>

// 			<div className="relative z-10 max-w-4xl mx-auto text-center">
// 				{/* Badge */}
// 				<div className="inline-block mb-6">
// 					<div className="px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 flex items-center gap-2">
// 						<span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
// 						<span className="text-xs font-medium text-slate-300">
// 							Powered by Advanced AI
// 						</span>
// 					</div>
// 				</div>

// 				{/* Main Headline */}
// 				<h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
// 					<span className="block">Let AI Manage</span>
// 					<span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
// 						Your Ads
// 					</span>
// 				</h1>

// 				{/* Subheadline */}
// 				<p className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
// 					Stop wasting time on manual optimization. Ryze's autonomous AI
// 					continuously audits, generates creative, and optimizes campaigns
// 					across Google, Meta, and ChatGPT.
// 				</p>

// 				{/* CTA Buttons */}
// 				<div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
// 					<button className="px-8 py-4 bg-white text-slate-950 rounded-lg font-semibold hover:bg-slate-100 transition transform hover:scale-105 active:scale-95">
// 						Get Started Free
// 					</button>
// 					<button className="px-8 py-4 border border-slate-700 text-white rounded-lg font-semibold hover:bg-slate-800 transition transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
// 						<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
// 							<path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
// 						</svg>
// 						Watch Demo
// 					</button>
// 				</div>

// 				{/* Trust Badges */}
// 				<div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400">
// 					<div className="flex items-center gap-2">
// 						<svg
// 							className="w-5 h-5 text-cyan-400"
// 							fill="currentColor"
// 							viewBox="0 0 20 20"
// 						>
// 							<path
// 								fillRule="evenodd"
// 								d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
// 								clipRule="evenodd"
// 							/>
// 						</svg>
// 						<span>No credit card required</span>
// 					</div>
// 					<div className="flex items-center gap-2">
// 						<svg
// 							className="w-5 h-5 text-cyan-400"
// 							fill="currentColor"
// 							viewBox="0 0 20 20"
// 						>
// 							<path
// 								fillRule="evenodd"
// 								d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
// 								clipRule="evenodd"
// 							/>
// 						</svg>
// 						<span>2000+ agencies trust us</span>
// 					</div>
// 					<div className="flex items-center gap-2">
// 						<svg
// 							className="w-5 h-5 text-cyan-400"
// 							fill="currentColor"
// 							viewBox="0 0 20 20"
// 						>
// 							<path
// 								fillRule="evenodd"
// 								d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
// 								clipRule="evenodd"
// 							/>
// 						</svg>
// 						<span>$500M+ ad spend managed</span>
// 					</div>
// 				</div>
// 			</div>
// 		</section>
// 	);
// }
