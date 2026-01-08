import { useRef, useState } from "react";

const FeatureIcon = ({ type }) => {
	const icons = {
		optimize: (
			<svg
				className="w-8 h-8"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={1.5}
					d="M13 10V3L4 14h7v7l9-11h-7z"
				/>
			</svg>
		),
		creative: (
			<svg
				className="w-8 h-8"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={1.5}
					d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
				/>
			</svg>
		),
		budget: (
			<svg
				className="w-8 h-8"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={1.5}
					d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
				/>
			</svg>
		),
		insights: (
			<svg
				className="w-8 h-8"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={1.5}
					d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
				/>
			</svg>
		),
		unified: (
			<svg
				className="w-8 h-8"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={1.5}
					d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.658 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
				/>
			</svg>
		),
		reporting: (
			<svg
				className="w-8 h-8"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={1.5}
					d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
				/>
			</svg>
		),
	};
	return icons[type] || icons.optimize;
};

const FeatureCard = ({ feature, index }) => {
	const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
	const cardRef = useRef(null);

	const handleMouseMove = (e) => {
		if (!cardRef.current) return;
		const rect = cardRef.current.getBoundingClientRect();
		setMousePos({
			x: e.clientX - rect.left,
			y: e.clientY - rect.top,
		});
	};

	const handleMouseLeave = () => {
		setMousePos({ x: 0, y: 0 });
	};

	return (
		<div
			ref={cardRef}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			className="group relative h-full rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/50 to-slate-950/50 p-8 hover:border-cyan-500/50 transition-all duration-500 overflow-hidden cursor-pointer"
			style={{
				"--mouse-x": `${mousePos.x}px`,
				"--mouse-y": `${mousePos.y}px`,
			}}
		>
			{/* Spotlight effect */}
			<div
				className="absolute pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-80 h-80 rounded-full"
				style={{
					background:
						"radial-gradient(circle, rgba(0, 212, 255, 0.15), transparent)",
					left: `var(--mouse-x)`,
					top: `var(--mouse-y)`,
					transform: "translate(-50%, -50%)",
				}}
			></div>

			{/* Gradient border glow */}
			<div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-400/0 to-blue-500/0 group-hover:from-cyan-500/20 group-hover:via-cyan-400/20 group-hover:to-blue-500/20 transition-all duration-500 rounded-2xl"></div>

			<div className="relative z-10">
				{/* Icon */}
				<div className="mb-6 inline-block p-4 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 group-hover:border-cyan-400 group-hover:shadow-lg group-hover:shadow-cyan-500/20 transition-all duration-300 text-cyan-400 group-hover:text-cyan-300">
					<FeatureIcon type={feature.icon} />
				</div>

				{/* Title */}
				<h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-300 transition-colors">
					{feature.title}
				</h3>

				{/* Description */}
				<p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
					{feature.description}
				</p>

				{/* Bottom accent line */}
				<div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 rounded-t-full"></div>
			</div>
		</div>
	);
};

export default function FeaturesSection() {
	const features = [
		{
			title: "Autonomous Optimization",
			description:
				"AI continuously audits campaigns, identifies issues, and suggests optimizations 24/7 without any manual effort required",
			icon: "optimize",
		},
		{
			title: "Smart Creative Generation",
			description:
				"Generate high-performing ad copy and visuals powered by advanced AI models trained on millions of ads",
			icon: "creative",
		},
		{
			title: "Intelligent Budget Allocation",
			description:
				"Automatically reallocate budgets based on real-time performance data and ROAS optimization",
			icon: "budget",
		},
		{
			title: "AI-Powered Insights",
			description:
				"Get deep analysis of what's working, what's not, and actionable recommendations to improve ROI",
			icon: "insights",
		},
		{
			title: "Unified Platform Control",
			description:
				"Manage all ad platforms from one elegant unified dashboard with complete control",
			icon: "unified",
		},
		{
			title: "Auto-Generated Reports",
			description:
				"Real-time reporting that builds itself with actionable insights and detailed analytics",
			icon: "reporting",
		},
	];

	return (
		<section className="relative py-24 px-4 border-t border-slate-800 bg-gradient-to-b from-[#0a0e27] to-[#0f1a3c]">
			{/* Background blur */}
			<div className="absolute -top-40 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl opacity-30 pointer-events-none"></div>

			<div className="max-w-7xl mx-auto relative z-10">
				{/* Section header */}
				<div className="text-center mb-20">
					<h2 className="text-5xl md:text-6xl font-black mb-6 text-white">
						Powerful Features
					</h2>
					<p className="text-lg text-slate-400 max-w-2xl mx-auto">
						Everything you need to optimize ads and scale revenue with
						AI-powered automation
					</p>
				</div>

				{/* Features grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{features.map((feature, idx) => (
						<FeatureCard key={idx} feature={feature} index={idx} />
					))}
				</div>
			</div>
		</section>
	);
}

// import { useRef, useState } from "react";

// const OptimizeIcon = () => (
// 	<svg
// 		width="32"
// 		height="32"
// 		viewBox="0 0 32 32"
// 		fill="none"
// 		stroke="white"
// 		strokeWidth="1.5"
// 	>
// 		<path
// 			d="M16 4v10M16 28v-10M28 16H18M4 16h10"
// 			strokeLinecap="round"
// 			strokeLinejoin="round"
// 		/>
// 		<circle cx="16" cy="16" r="3" fill="white" />
// 	</svg>
// );

// const CreativeIcon = () => (
// 	<svg
// 		width="32"
// 		height="32"
// 		viewBox="0 0 32 32"
// 		fill="none"
// 		stroke="white"
// 		strokeWidth="1.5"
// 	>
// 		<rect
// 			x="4"
// 			y="6"
// 			width="24"
// 			height="20"
// 			rx="2"
// 			strokeLinecap="round"
// 			strokeLinejoin="round"
// 		/>
// 		<path d="M12 14l4-4 8 8" strokeLinecap="round" strokeLinejoin="round" />
// 		<circle cx="20" cy="10" r="1.5" fill="white" />
// 	</svg>
// );

// const BudgetIcon = () => (
// 	<svg
// 		width="32"
// 		height="32"
// 		viewBox="0 0 32 32"
// 		fill="none"
// 		stroke="white"
// 		strokeWidth="1.5"
// 	>
// 		<circle
// 			cx="16"
// 			cy="16"
// 			r="11"
// 			strokeLinecap="round"
// 			strokeLinejoin="round"
// 		/>
// 		<path d="M16 10v12M13 13h6" strokeLinecap="round" strokeLinejoin="round" />
// 	</svg>
// );

// const InsightsIcon = () => (
// 	<svg
// 		width="32"
// 		height="32"
// 		viewBox="0 0 32 32"
// 		fill="none"
// 		stroke="white"
// 		strokeWidth="1.5"
// 	>
// 		<rect
// 			x="4"
// 			y="14"
// 			width="4"
// 			height="12"
// 			rx="1"
// 			strokeLinecap="round"
// 			strokeLinejoin="round"
// 		/>
// 		<rect
// 			x="14"
// 			y="8"
// 			width="4"
// 			height="18"
// 			rx="1"
// 			strokeLinecap="round"
// 			strokeLinejoin="round"
// 		/>
// 		<rect
// 			x="24"
// 			y="4"
// 			width="4"
// 			height="22"
// 			rx="1"
// 			strokeLinecap="round"
// 			strokeLinejoin="round"
// 		/>
// 	</svg>
// );

// const UnifiedIcon = () => (
// 	<svg
// 		width="32"
// 		height="32"
// 		viewBox="0 0 32 32"
// 		fill="none"
// 		stroke="white"
// 		strokeWidth="1.5"
// 	>
// 		<circle cx="8" cy="16" r="3" strokeLinecap="round" strokeLinejoin="round" />
// 		<circle
// 			cx="16"
// 			cy="16"
// 			r="3"
// 			strokeLinecap="round"
// 			strokeLinejoin="round"
// 		/>
// 		<circle
// 			cx="24"
// 			cy="16"
// 			r="3"
// 			strokeLinecap="round"
// 			strokeLinejoin="round"
// 		/>
// 		<path d="M11 16h2M19 16h2" strokeLinecap="round" strokeLinejoin="round" />
// 	</svg>
// );

// const ReportingIcon = () => (
// 	<svg
// 		width="32"
// 		height="32"
// 		viewBox="0 0 32 32"
// 		fill="none"
// 		stroke="white"
// 		strokeWidth="1.5"
// 	>
// 		<rect
// 			x="5"
// 			y="4"
// 			width="22"
// 			height="24"
// 			rx="1"
// 			strokeLinecap="round"
// 			strokeLinejoin="round"
// 		/>
// 		<path
// 			d="M5 10h22M9 14h2M9 20h2M15 14h2M15 20h2M21 14h2M21 20h2"
// 			strokeLinecap="round"
// 			strokeLinejoin="round"
// 		/>
// 	</svg>
// );

// const FeatureCard = ({ feature, icon: Icon }) => {
// 	const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
// 	const cardRef = useRef(null);

// 	const handleMouseMove = (e) => {
// 		if (!cardRef.current) return;
// 		const rect = cardRef.current.getBoundingClientRect();
// 		setMousePos({
// 			x: e.clientX - rect.left,
// 			y: e.clientY - rect.top,
// 		});
// 	};

// 	const handleMouseLeave = () => {
// 		setMousePos({ x: 0, y: 0 });
// 	};

// 	return (
// 		<div
// 			ref={cardRef}
// 			onMouseMove={handleMouseMove}
// 			onMouseLeave={handleMouseLeave}
// 			className="card-spotlight"
// 			style={{
// 				position: "relative",
// 				padding: "32px",
// 				borderRadius: "16px",
// 				border: "1px solid rgba(255, 255, 255, 0.1)",
// 				background:
// 					"linear-gradient(135deg, rgba(0, 0, 0, 0.4), rgba(15, 15, 15, 0.2))",
// 				height: "100%",
// 				cursor: "pointer",
// 				"--mouse-x": `${mousePos.x}px`,
// 				"--mouse-y": `${mousePos.y}px`,
// 			}}
// 		>
// 			{/* Spotlight effect */}
// 			<div
// 				style={{
// 					position: "absolute",
// 					pointerEvents: "none",
// 					opacity: 0,
// 					width: "320px",
// 					height: "320px",
// 					borderRadius: "50%",
// 					background:
// 						"radial-gradient(circle, rgba(255, 255, 255, 0.1), transparent)",
// 					left: mousePos.x,
// 					top: mousePos.y,
// 					transform: "translate(-50%, -50%)",
// 					transition: "opacity 0.3s ease",
// 				}}
// 				onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
// 				onMouseLeave={(e) => (e.currentTarget.style.opacity = "0")}
// 			></div>

// 			<div style={{ position: "relative", zIndex: 10 }}>
// 				{/* Icon */}
// 				<div
// 					style={{
// 						marginBottom: "24px",
// 						display: "inline-block",
// 						padding: "12px",
// 						borderRadius: "12px",
// 						background: "rgba(255, 255, 255, 0.05)",
// 						border: "1px solid rgba(255, 255, 255, 0.1)",
// 						transition: "all 0.3s ease",
// 						cursor: "pointer",
// 					}}
// 					className="group-hover:border-white/30 group-hover:bg-white/10"
// 				>
// 					<Icon />
// 				</div>

// 				{/* Title */}
// 				<h3
// 					style={{
// 						fontSize: "18px",
// 						fontWeight: "700",
// 						marginBottom: "12px",
// 						color: "white",
// 						transition: "color 0.3s ease",
// 					}}
// 				>
// 					{feature.title}
// 				</h3>

// 				{/* Description */}
// 				<p
// 					style={{
// 						fontSize: "14px",
// 						color: "rgba(255, 255, 255, 0.6)",
// 						lineHeight: "1.6",
// 						transition: "color 0.3s ease",
// 					}}
// 				>
// 					{feature.description}
// 				</p>

// 				{/* Bottom accent line */}
// 				<div
// 					style={{
// 						position: "absolute",
// 						bottom: 0,
// 						left: "32px",
// 						right: "32px",
// 						height: "2px",
// 						background:
// 							"linear-gradient(90deg, rgba(255, 255, 255, 0.5), transparent)",
// 						borderRadius: "1px",
// 						opacity: 0,
// 						transition: "opacity 0.3s ease",
// 					}}
// 					onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
// 					onMouseLeave={(e) => (e.currentTarget.style.opacity = "0")}
// 				></div>
// 			</div>
// 		</div>
// 	);
// };

// export default function FeatureSection() {
// 	const features = [
// 		{
// 			title: "Autonomous Optimization",
// 			description:
// 				"AI continuously audits campaigns, identifies issues, and suggests optimizations 24/7 without any manual effort",
// 			icon: OptimizeIcon,
// 		},
// 		{
// 			title: "Smart Creative Generation",
// 			description:
// 				"Generate high-performing ad copy and visuals powered by advanced AI models trained on millions of ads",
// 			icon: CreativeIcon,
// 		},
// 		{
// 			title: "Intelligent Budget Allocation",
// 			description:
// 				"Automatically reallocate budgets based on real-time performance data and ROAS optimization",
// 			icon: BudgetIcon,
// 		},
// 		{
// 			title: "AI-Powered Insights",
// 			description:
// 				"Get deep analysis of what's working, what's not, and actionable recommendations to improve ROI",
// 			icon: InsightsIcon,
// 		},
// 		{
// 			title: "Unified Platform Control",
// 			description:
// 				"Manage all ad platforms from one elegant unified dashboard with complete control",
// 			icon: UnifiedIcon,
// 		},
// 		{
// 			title: "Auto-Generated Reports",
// 			description:
// 				"Real-time reporting that builds itself with actionable insights and detailed analytics",
// 			icon: ReportingIcon,
// 		},
// 	];

// 	return (
// 		<section
// 			style={{
// 				position: "relative",
// 				padding: "80px 16px",
// 				borderTop: "1px solid rgba(255, 255, 255, 0.1)",
// 				background: "linear-gradient(180deg, #000000 0%, #0f0f0f 100%)",
// 			}}
// 		>
// 			{/* Background blur orbs */}
// 			<div
// 				style={{
// 					position: "absolute",
// 					top: "-10%",
// 					right: "25%",
// 					width: "384px",
// 					height: "384px",
// 					background:
// 						"radial-gradient(circle, rgba(255, 255, 255, 0.15), transparent)",
// 					borderRadius: "50%",
// 					filter: "blur(120px)",
// 					pointerEvents: "none",
// 				}}
// 			></div>

// 			<div
// 				style={{
// 					maxWidth: "1280px",
// 					margin: "0 auto",
// 					position: "relative",
// 					zIndex: 10,
// 				}}
// 			>
// 				{/* Section header */}
// 				<div style={{ textAlign: "center", marginBottom: "80px" }}>
// 					<h2
// 						style={{
// 							fontSize: "clamp(2rem, 5vw, 3rem)",
// 							fontWeight: "900",
// 							marginBottom: "16px",
// 							color: "white",
// 							letterSpacing: "-1px",
// 						}}
// 					>
// 						Powerful Features
// 					</h2>
// 					<p
// 						style={{
// 							fontSize: "16px",
// 							color: "rgba(255, 255, 255, 0.6)",
// 							maxWidth: "32rem",
// 							margin: "0 auto",
// 						}}
// 					>
// 						Everything you need to optimize ads and scale revenue with
// 						AI-powered automation
// 					</p>
// 				</div>

// 				{/* Features grid */}
// 				<div
// 					style={{
// 						display: "grid",
// 						gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
// 						gap: "24px",
// 					}}
// 				>
// 					{features.map((feature, idx) => (
// 						<FeatureCard key={idx} feature={feature} icon={feature.icon} />
// 					))}
// 				</div>
// 			</div>
// 		</section>
// 	);
// }

// "use client";

//above correct

// export default function FeaturesSection() {
// 	const features = [
// 		{
// 			title: "Autonomous Optimization",
// 			description:
// 				"AI continuously audits campaigns, identifies issues, and suggests optimizations 24/7",
// 			icon: "⚙️",
// 			gradient: "from-blue-500 to-cyan-400",
// 		},
// 		{
// 			title: "Creative Generation",
// 			description:
// 				"Generate high-performing ad copy and visuals powered by advanced AI models",
// 			icon: "✨",
// 			gradient: "from-purple-500 to-pink-400",
// 		},
// 		{
// 			title: "Smart Budget Allocation",
// 			description:
// 				"Automatically reallocate budgets based on real-time performance data and ROAS",
// 			icon: "💰",
// 			gradient: "from-green-500 to-emerald-400",
// 		},
// 		{
// 			title: "Performance Insights",
// 			description:
// 				"Get AI-powered analysis of what's working, what's not, and why",
// 			icon: "📊",
// 			gradient: "from-orange-500 to-yellow-400",
// 		},
// 		{
// 			title: "Multi-Platform Control",
// 			description: "Manage all ad platforms from one unified dashboard",
// 			icon: "🔗",
// 			gradient: "from-indigo-500 to-blue-400",
// 		},
// 		{
// 			title: "Real-Time Reporting",
// 			description:
// 				"Auto-generated reports that build themselves with actionable insights",
// 			icon: "📈",
// 			gradient: "from-red-500 to-orange-400",
// 		},
// 	];

// 	return (
// 		<section className="py-20 px-4 border-b border-slate-800">
// 			<div className="max-w-7xl mx-auto">
// 				<div className="text-center mb-16">
// 					<h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
// 					<p className="text-slate-400 max-w-2xl mx-auto">
// 						Everything you need to optimize ads and scale revenue
// 					</p>
// 				</div>

// 				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// 					{features.map((feature, idx) => (
// 						<div
// 							key={idx}
// 							className="group relative p-6 rounded-xl border border-slate-800 hover:border-slate-700 bg-gradient-to-br from-slate-900 to-slate-950 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
// 						>
// 							<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

// 							<div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">
// 								{feature.icon}
// 							</div>

// 							<h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
// 							<p className="text-slate-400 text-sm leading-relaxed">
// 								{feature.description}
// 							</p>

// 							<div
// 								className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-bl-xl`}
// 							></div>
// 						</div>
// 					))}
// 				</div>
// 			</div>
// 		</section>
// 	);
// }
