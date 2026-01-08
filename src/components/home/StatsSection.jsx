import { useState, useEffect } from "react";

const Counter = ({ target, label, suffix = "" }) => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		const parseTarget = Number.parseInt(target.replace(/\D/g, ""));
		const increment = parseTarget / 60;

		const interval = setInterval(() => {
			setCount((prev) => {
				if (prev >= parseTarget) {
					clearInterval(interval);
					return parseTarget;
				}
				return Math.ceil(prev + increment);
			});
		}, 30);

		return () => clearInterval(interval);
	}, [target]);

	return (
		<div
			style={{
				position: "relative",
				padding: "40px 24px",
				borderRadius: "16px",
				background: "rgba(255, 255, 255, 0.03)",
				border: "1px solid rgba(255, 255, 255, 0.08)",
				transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
				cursor: "pointer",
				overflow: "hidden",
				group: "hover",
			}}
			className="group hover:border-white/20 hover:bg-white/06 hover:-translate-y-2"
			onMouseEnter={(e) => {
				e.currentTarget.style.background = "rgba(255, 255, 255, 0.06)";
				e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.15)";
			}}
			onMouseLeave={(e) => {
				e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)";
				e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
			}}
		>
			<div
				style={{
					position: "absolute",
					inset: 0,
					background:
						"linear-gradient(135deg, rgba(255, 255, 255, 0.05), transparent)",
					borderRadius: "16px",
					opacity: 0,
					transition: "opacity 0.4s ease",
					pointerEvents: "none",
				}}
				className="group-hover:opacity-100"
			></div>

			<div style={{ position: "relative", zIndex: 2 }}>
				<div
					style={{
						fontSize: "clamp(2rem, 5vw, 3.5rem)",
						fontWeight: "900",
						marginBottom: "12px",
						background:
							"linear-gradient(135deg, #ffffff, rgba(255, 255, 255, 0.7))",
						WebkitBackgroundClip: "text",
						WebkitTextFillColor: "transparent",
						backgroundClip: "text",
						letterSpacing: "-1px",
						lineHeight: "1.1",
					}}
				>
					{count.toLocaleString()}
					{suffix}
				</div>
				<p
					style={{
						fontSize: "14px",
						color: "rgba(255, 255, 255, 0.6)",
						fontWeight: "500",
						letterSpacing: "0.5px",
					}}
				>
					{label}
				</p>
			</div>

			<div
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					right: 0,
					height: "1px",
					background:
						"linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)",
					opacity: 0,
					transition: "opacity 0.4s ease",
				}}
				className="group-hover:opacity-100"
			></div>
		</div>
	);
};

export default function StatsSection() {
	const stats = [
		{ value: "2000+", label: "Clients Worldwide" },
		{ value: "700+", label: "Agencies Using Ryze" },
		{ value: "23+", label: "Countries" },
		{ value: "$500M+", label: "Ad Spend Managed" },
	];

	return (
		<section
			style={{
				padding: "100px 16px",
				borderBottom: "1px solid rgba(255, 255, 255, 0.29)",
				background:
					"linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(10, 10, 10, 1) 100%)",
				position: "relative",
				overflow: "hidden",
			}}
		>
			<div
				style={{
					position: "absolute",
					top: "10%",
					left: "5%",
					width: "500px",
					height: "500px",
					background:
						"radial-gradient(circle, rgba(255, 255, 255, 0.03), transparent)",
					borderRadius: "50%",
					filter: "blur(80px)",
					animation: "float 20s ease-in-out infinite",
				}}
			></div>
			<div
				style={{
					position: "absolute",
					bottom: "-100px",
					right: "10%",
					width: "400px",
					height: "400px",
					background:
						"radial-gradient(circle, rgba(255, 255, 255, 0.02), transparent)",
					borderRadius: "50%",
					filter: "blur(100px)",
					animation: "float 25s ease-in-out infinite reverse",
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
						Trusted by Scale
					</h2>
					<p style={{ fontSize: "16px", color: "rgba(255, 255, 255, 0.5)" }}>
						Join thousands of companies optimizing with Ryze AI
					</p>
				</div>

				<div
					style={{
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
						gap: "24px",
					}}
				>
					{stats.map((stat, idx) => (
						<Counter
							key={idx}
							target={stat.value}
							label={stat.label}
							suffix={stat.value.slice(-1)}
						/>
					))}
				</div>
			</div>

			<style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, 30px); }
        }
      `}</style>
		</section>
	);
}

// export default function StatsSection() {
// 	const stats = [
// 		{ value: "2000+", label: "Clients Worldwide" },
// 		{ value: "700+", label: "Agencies Using Ryze" },
// 		{ value: "23+", label: "Countries" },
// 		{ value: "$500M+", label: "Ad Spend Managed" },
// 	];

// 	return (
// 		<section
// 			style={{
// 				padding: "80px 16px",
// 				borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
// 				background: "linear-gradient(180deg, #0f0f0f 0%, #000000 100%)",
// 			}}
// 		>
// 			<div style={{ maxWidth: "1280px", margin: "0 auto" }}>
// 				<div
// 					style={{
// 						display: "grid",
// 						gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
// 						gap: "32px",
// 					}}
// 				>
// 					{stats.map((stat, idx) => (
// 						<div
// 							key={idx}
// 							style={{
// 								textAlign: "center",
// 								padding: "32px",
// 								borderRadius: "16px",
// 								background: "rgba(255, 255, 255, 0.02)",
// 								border: "1px solid rgba(255, 255, 255, 0.08)",
// 								transition: "all 0.3s ease",
// 								cursor: "pointer",
// 							}}
// 							className="hover:bg-white/05 hover:border-white/15 hover:-translate-y-2"
// 						>
// 							<div
// 								style={{
// 									fontSize: "clamp(2rem, 5vw, 3.5rem)",
// 									fontWeight: "900",
// 									marginBottom: "8px",
// 									color: "white",
// 									letterSpacing: "-1px",
// 								}}
// 							>
// 								{stat.value}
// 							</div>
// 							<p
// 								style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.6)" }}
// 							>
// 								{stat.label}
// 							</p>
// 						</div>
// 					))}
// 				</div>
// 			</div>
// 		</section>
// 	);
// }

// export default function StatsSection() {
// 	const stats = [
// 		{ value: "2000+", label: "Clients Worldwide" },
// 		{ value: "700+", label: "Agencies Using Ryze" },
// 		{ value: "23+", label: "Countries" },
// 		{ value: "$500M+", label: "Ad Spend Managed" },
// 	];

// 	return (
// 		<section className="py-20 px-4 border-b border-slate-800">
// 			<div className="max-w-7xl mx-auto">
// 				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
// 					{stats.map((stat, idx) => (
// 						<div key={idx} className="text-center group">
// 							<div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
// 								{stat.value}
// 							</div>
// 							<p className="text-slate-400">{stat.label}</p>
// 						</div>
// 					))}
// 				</div>
// 			</div>
// 		</section>
// 	);
// }
