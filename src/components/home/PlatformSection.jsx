import { useState, useRef } from "react";
import { Chrome, Facebook, MessageCircle, Brain, Linkedin } from "lucide-react";

const PlatformCard = ({ name, description, icon: Icon, color }) => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [isHovered, setIsHovered] = useState(false);
	const cardRef = useRef(null);

	const handleMouseMove = (e) => {
		if (!cardRef.current) return;

		const rect = cardRef.current.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;

		setMousePosition({ x, y });
	};

	return (
		<div
			ref={cardRef}
			onMouseMove={handleMouseMove}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			style={{
				position: "relative",
				height: "280px",
				borderRadius: "20px",
				overflow: "hidden",
				cursor: "pointer",
				transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
				transform: isHovered ? "translateY(-8px)" : "translateY(0)",
			}}
		>
			<div
				style={{
					position: "absolute",
					inset: 0,
					background: `linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))`,
					backdropFilter: "blur(20px)",
					borderRadius: "20px",
					border: "1px solid rgba(255,255,255,0.1)",
				}}
			/>

			{isHovered && (
				<div
					style={{
						position: "absolute",
						width: "200px",
						height: "200px",
						background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
						filter: "blur(40px)",
						opacity: 0.15,
						left: mousePosition.x - 100,
						top: mousePosition.y - 100,
						pointerEvents: "none",
						transition: "all 0.1s ease-out",
					}}
				/>
			)}

			{isHovered && (
				<div
					style={{
						position: "absolute",
						inset: 0,
						background: `linear-gradient(135deg, ${color}, transparent)`,
						borderRadius: "20px",
						opacity: 0.2,
						pointerEvents: "none",
					}}
				/>
			)}

			{/* Content Container */}
			<div
				style={{
					position: "relative",
					zIndex: 10,
					padding: "32px 24px",
					height: "100%",
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
				}}
			>
				{/* Icon Container */}
				<div
					style={{
						width: "56px",
						height: "56px",
						borderRadius: "16px",
						background: `linear-gradient(135deg, ${color}15, ${color}08)`,
						border: `1.5px solid ${color}40`,
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						transition: "all 0.3s ease",
						transform: isHovered
							? "rotate(12deg) scale(1.1)"
							: "rotate(0) scale(1)",
					}}
				>
					<Icon
						size={28}
						style={{
							color: color,
							transition: "all 0.3s ease",
						}}
					/>
				</div>

				{/* Text Content */}
				<div>
					<h3
						style={{
							fontSize: "18px",
							fontWeight: "700",
							color: "#ffffff",
							marginBottom: "8px",
							letterSpacing: "-0.5px",
						}}
					>
						{name}
					</h3>
					<p
						style={{
							fontSize: "13px",
							// color: "rgba(255,255,255,0.5)",
							lineHeight: "1.5",
							transition: "color 0.3s ease",
							color: isHovered
								? "rgba(255,255,255,0.7)"
								: "rgba(255,255,255,0.5)",
						}}
					>
						{description}
					</p>
				</div>

				{/* CTA Arrow */}
				<div
					style={{
						width: "32px",
						height: "32px",
						borderRadius: "12px",
						background: `${color}15`,
						border: `1px solid ${color}40`,
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
						transform: isHovered
							? "translateX(4px) translateY(-4px)"
							: "translateX(0) translateY(0)",
					}}
				>
					<svg
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						style={{ color: color }}
					>
						<path
							d="M3 8h10M9 3l5 5-5 5"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</div>
			</div>
		</div>
	);
};

export default function PlatformsSection() {
	const platforms = [
		{
			name: "Google Ads",
			description: "Optimize campaigns with AI-powered bidding strategies",
			icon: Chrome,
			color: "#fbbf24",
		},
		{
			name: "Meta Ads",
			description: "Maximize ROI across Facebook and Instagram",
			icon: Facebook,
			color: "#3b82f6",
		},
		{
			name: "ChatGPT",
			description: "Generate high-converting ad creative instantly",
			icon: MessageCircle,
			color: "#10b981",
		},
		{
			name: "Perplexity AI",
			description: "Research and refine targeting with AI insights",
			icon: Brain,
			color: "#8b5cf6",
		},
		{
			name: "LinkedIn Ads",
			description: "B2B campaign optimization and analytics",
			icon: Linkedin,
			color: "#0a66c2",
		},
	];

	return (
		<section
			style={{
				position: "relative",
				padding: "100px 16px",
				background:
					"linear-gradient(180deg, #000000 0%, #0a0a0a 50%, #000000 100%)",
				borderBottom: "1px solid rgba(255,255,255,0.06)",
				overflow: "hidden",
			}}
		>
			<div
				style={{
					position: "absolute",
					top: "-50%",
					right: "-20%",
					width: "500px",
					height: "500px",
					background:
						"radial-gradient(circle, rgba(255,255,255,0.08), transparent)",
					borderRadius: "50%",
					filter: "blur(80px)",
					pointerEvents: "none",
					animation: "float 20s ease-in-out infinite",
				}}
			/>

			<div
				style={{
					position: "absolute",
					bottom: "-30%",
					left: "-10%",
					width: "400px",
					height: "400px",
					background:
						"radial-gradient(circle, rgba(255,255,255,0.06), transparent)",
					borderRadius: "50%",
					filter: "blur(60px)",
					pointerEvents: "none",
					animation: "float 25s ease-in-out infinite 2s",
				}}
			/>

			<style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(30px); }
        }
      `}</style>

			<div
				style={{
					maxWidth: "1280px",
					margin: "0 auto",
					position: "relative",
					zIndex: 1,
				}}
			>
				{/* Header */}
				<div style={{ textAlign: "center", marginBottom: "60px" }}>
					{/* <div
						style={{
							display: "inline-block",
							padding: "8px 16px",
							background: "rgba(255,255,255,0.05)",
							border: "1px solid rgba(255,255,255,0.1)",
							borderRadius: "12px",
							marginBottom: "16px",
						}}
					>
						<p
							style={{
								fontSize: "12px",
								fontWeight: "600",
								color: "#a1a1a1",
								letterSpacing: "0.5px",
							}}
						>
							INTEGRATED PLATFORMS
						</p>
					</div> */}
					<h2
						style={{
							fontSize: "clamp(2rem, 5vw, 3rem)",
							fontWeight: "900",
							marginBottom: "16px",
							color: "#ffffff",
							letterSpacing: "-1.5px",
							background:
								"linear-gradient(135deg, #ffffff, rgba(255,255,255,0.7))",
							backgroundClip: "text",
							WebkitBackgroundClip: "text",
							WebkitTextFillColor: "transparent",
						}}
					>
						Works with All Major Platforms
					</h2>
					<p
						style={{
							fontSize: "clamp(15px, 2vw, 18px)",
							color: "rgba(255,255,255,0.5)",
							maxWidth: "600px",
							margin: "0 auto",
							lineHeight: "1.6",
						}}
					>
						Seamlessly connect your advertising accounts and unlock AI-powered
						optimization across all platforms
					</p>
				</div>

				{/* Platform Cards Grid */}
				<div
					// style={{
					// 	display: "grid",
					// 	gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
					// 	gap: "24px",
					// 	placeContent: "center",
					// }}
					className="flex flex-row flex-wrap justify-center align-items gap-12"
				>
					{platforms.map((platform) => (
						<PlatformCard key={platform.name} {...platform} />
					))}
				</div>
			</div>
		</section>
	);
}

// const GoogleIcon = () => (
// 	<svg width="40" height="40" viewBox="0 0 40 40" fill="none">
// 		<text
// 			x="50%"
// 			y="50%"
// 			textAnchor="middle"
// 			dy=".3em"
// 			fontSize="24"
// 			fontWeight="bold"
// 			fill="white"
// 		>
// 			G
// 		</text>
// 		<circle
// 			cx="20"
// 			cy="20"
// 			r="19.5"
// 			stroke="rgba(255,255,255,0.2)"
// 			strokeWidth="1"
// 		/>
// 	</svg>
// );

// const MetaIcon = () => (
// 	<svg width="40" height="40" viewBox="0 0 40 40" fill="none">
// 		<text
// 			x="50%"
// 			y="50%"
// 			textAnchor="middle"
// 			dy=".3em"
// 			fontSize="24"
// 			fontWeight="bold"
// 			fill="white"
// 		>
// 			M
// 		</text>
// 		<circle
// 			cx="20"
// 			cy="20"
// 			r="19.5"
// 			stroke="rgba(255,255,255,0.2)"
// 			strokeWidth="1"
// 		/>
// 	</svg>
// );

// const ChatGPTIcon = () => (
// 	<svg width="40" height="40" viewBox="0 0 40 40" fill="none">
// 		<text
// 			x="50%"
// 			y="50%"
// 			textAnchor="middle"
// 			dy=".3em"
// 			fontSize="24"
// 			fontWeight="bold"
// 			fill="white"
// 		>
// 			A
// 		</text>
// 		<circle
// 			cx="20"
// 			cy="20"
// 			r="19.5"
// 			stroke="rgba(255,255,255,0.2)"
// 			strokeWidth="1"
// 		/>
// 	</svg>
// );

// const PerplexityIcon = () => (
// 	<svg width="40" height="40" viewBox="0 0 40 40" fill="none">
// 		<text
// 			x="50%"
// 			y="50%"
// 			textAnchor="middle"
// 			dy=".3em"
// 			fontSize="24"
// 			fontWeight="bold"
// 			fill="white"
// 		>
// 			P
// 		</text>
// 		<circle
// 			cx="20"
// 			cy="20"
// 			r="19.5"
// 			stroke="rgba(255,255,255,0.2)"
// 			strokeWidth="1"
// 		/>
// 	</svg>
// );

// const LinkedInIcon = () => (
// 	<svg width="40" height="40" viewBox="0 0 40 40" fill="none">
// 		<text
// 			x="50%"
// 			y="50%"
// 			textAnchor="middle"
// 			dy=".3em"
// 			fontSize="24"
// 			fontWeight="bold"
// 			fill="white"
// 		>
// 			L
// 		</text>
// 		<circle
// 			cx="20"
// 			cy="20"
// 			r="19.5"
// 			stroke="rgba(255,255,255,0.2)"
// 			strokeWidth="1"
// 		/>
// 	</svg>
// );

// export default function PlatformSection() {
// 	const platforms = [
// 		{ name: "Google Ads", icon: GoogleIcon },
// 		{ name: "Meta Ads", icon: MetaIcon },
// 		{ name: "ChatGPT", icon: ChatGPTIcon },
// 		{ name: "Perplexity", icon: PerplexityIcon },
// 		{ name: "LinkedIn", icon: LinkedInIcon },
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
// 				<div style={{ textAlign: "center", marginBottom: "48px" }}>
// 					<h2
// 						style={{
// 							fontSize: "clamp(2rem, 5vw, 3rem)",
// 							fontWeight: "900",
// 							marginBottom: "16px",
// 							color: "white",
// 							letterSpacing: "-1px",
// 						}}
// 					>
// 						Works with all major platforms
// 					</h2>
// 					<p style={{ fontSize: "16px", color: "rgba(255, 255, 255, 0.6)" }}>
// 						Seamlessly integrate with your existing ad accounts
// 					</p>
// 				</div>

// 				<div
// 					style={{
// 						display: "grid",
// 						gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
// 						gap: "16px",
// 					}}
// 				>
// 					{platforms.map((platform) => {
// 						const Icon = platform.icon;
// 						return (
// 							<div
// 								key={platform.name}
// 								className="card-spotlight"
// 								style={{
// 									padding: "24px",
// 									borderRadius: "16px",
// 									border: "1px solid rgba(255, 255, 255, 0.1)",
// 									background:
// 										"linear-gradient(135deg, rgba(0, 0, 0, 0.5), rgba(15, 15, 15, 0.3))",
// 									cursor: "pointer",
// 									display: "flex",
// 									flexDirection: "column",
// 									alignItems: "center",
// 									justifyContent: "center",
// 									gap: "12px",
// 									transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
// 								}}
// 							>
// 								<Icon />
// 								<p
// 									style={{
// 										fontWeight: "600",
// 										fontSize: "14px",
// 										color: "white",
// 										textAlign: "center",
// 									}}
// 								>
// 									{platform.name}
// 								</p>
// 							</div>
// 						);
// 					})}
// 				</div>
// 			</div>
// 		</section>
// 	);
// }

//above

// export default function PlatformsSection() {
// 	const platforms = [
// 		{ name: "Google Ads", icon: "🔍" },
// 		{ name: "Meta Ads", icon: "📱" },
// 		{ name: "ChatGPT", icon: "💬" },
// 		{ name: "Perplexity", icon: "🧠" },
// 		{ name: "LinkedIn", icon: "💼" },
// 	];

// 	return (
// 		<section className="py-20 px-4 border-b border-slate-800">
// 			<div className="max-w-7xl mx-auto">
// 				<div className="text-center mb-12">
// 					<h2 className="text-3xl font-bold mb-4">
// 						Works with all major platforms
// 					</h2>
// 					<p className="text-slate-400">
// 						Seamlessly integrate with your existing ad accounts
// 					</p>
// 				</div>

// 				<div className="grid grid-cols-2 md:grid-cols-5 gap-4">
// 					{platforms.map((platform) => (
// 						<div
// 							key={platform.name}
// 							className="p-6 rounded-lg border border-slate-800 hover:border-slate-700 bg-slate-900/50 hover:bg-slate-800/50 transition group cursor-pointer"
// 						>
// 							<div className="text-3xl mb-3 group-hover:scale-110 transition transform">
// 								{platform.icon}
// 							</div>
// 							<p className="font-medium text-sm">{platform.name}</p>
// 						</div>
// 					))}
// 				</div>
// 			</div>
// 		</section>
// 	);
// }
