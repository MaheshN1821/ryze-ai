const TrendUpIcon = () => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="white"
		strokeWidth="2"
	>
		<path
			d="M3 21v-7h18v7M3 14l6-7 5 5 7-8"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

const BudgetIcon = () => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="white"
		strokeWidth="2"
	>
		<circle cx="12" cy="12" r="9" />
		<path d="M12 9v6M9 12h6" strokeLinecap="round" strokeLinejoin="round" />
	</svg>
);

const CheckIcon = () => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="white"
		strokeWidth="2"
	>
		<path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
	</svg>
);

const TargetIcon = () => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="white"
		strokeWidth="2"
	>
		<circle cx="12" cy="12" r="9" />
		<circle cx="12" cy="12" r="5" />
		<circle cx="12" cy="12" r="1" fill="white" />
	</svg>
);

export default function DashboardPage() {
	const metrics = [
		{
			label: "Total Spend",
			value: "$17,250",
			change: "+12%",
			icon: BudgetIcon,
		},
		{ label: "ROAS", value: "3.2x", change: "+18%", icon: TrendUpIcon },
		{ label: "Conversions", value: "2,451", change: "+24%", icon: CheckIcon },
		{ label: "CPA", value: "$23.45", change: "-8%", icon: TargetIcon },
	];

	const suggestions = [
		{ title: "Pause wasted keywords", value: "+$2,500/mo", icon: "🎯" },
		{ title: "Expand top performers", value: "+$3,200/mo", icon: "📈" },
		{ title: "Fix tracking issues", value: "+$1,800/mo", icon: "🔧" },
		{ title: "Add negatives", value: "+$950/mo", icon: "🚫" },
	];

	const campaigns = [
		{
			name: "Brand Search - US",
			spend: "$4,250",
			roas: "9.4x",
			conversions: "285",
		},
		{
			name: "Non-Brand - Running",
			spend: "$3,100",
			roas: "3.2x",
			conversions: "94",
		},
		{
			name: "Shopping - All Products",
			spend: "$2,800",
			roas: "4.2x",
			conversions: "112",
		},
		{
			name: "Display - Remarketing",
			spend: "$2,100",
			roas: "2.8x",
			conversions: "67",
		},
	];

	return (
		<div
			style={{
				minHeight: "100vh",
				background: "linear-gradient(180deg, #000000 0%, #0f0f0f 100%)",
				padding: "80px 16px",
			}}
		>
			<div style={{ maxWidth: "1280px", margin: "0 auto" }}>
				{/* Header */}
				<div style={{ marginBottom: "48px" }}>
					<h1
						style={{
							fontSize: "32px",
							fontWeight: "900",
							marginBottom: "8px",
							color: "white",
						}}
					>
						Dashboard
					</h1>
					<p style={{ fontSize: "16px", color: "rgba(255, 255, 255, 0.6)" }}>
						AI-powered insights for your campaigns
					</p>
				</div>

				{/* Key Metrics */}
				<div
					style={{
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
						gap: "24px",
						marginBottom: "48px",
					}}
				>
					{metrics.map((metric, idx) => {
						const Icon = metric.icon;
						return (
							<div
								key={idx}
								className="card-spotlight"
								style={{
									padding: "24px",
									borderRadius: "16px",
									border: "1px solid rgba(255, 255, 255, 0.1)",
									background:
										"linear-gradient(135deg, rgba(0, 0, 0, 0.4), rgba(15, 15, 15, 0.2))",
								}}
							>
								<div
									style={{
										display: "flex",
										justifyContent: "space-between",
										alignItems: "flex-start",
										marginBottom: "16px",
									}}
								>
									<Icon />
									<span
										style={{
											fontSize: "12px",
											fontWeight: "600",
											color: "rgba(255, 255, 255, 0.7)",
										}}
									>
										{metric.change}
									</span>
								</div>
								<p
									style={{
										fontSize: "14px",
										color: "rgba(255, 255, 255, 0.6)",
										marginBottom: "8px",
									}}
								>
									{metric.label}
								</p>
								<p
									style={{
										fontSize: "24px",
										fontWeight: "900",
										color: "white",
									}}
								>
									{metric.value}
								</p>
							</div>
						);
					})}
				</div>

				{/* Campaigns Table */}
				<div>
					<h2
						style={{
							fontSize: "20px",
							fontWeight: "900",
							marginBottom: "24px",
							color: "white",
						}}
					>
						Top Campaigns
					</h2>
					<div
						style={{
							borderRadius: "16px",
							border: "1px solid rgba(255, 255, 255, 0.1)",
							overflow: "hidden",
						}}
					>
						<div
							style={{ background: "rgba(0, 0, 0, 0.4)", overflowX: "auto" }}
						>
							<table style={{ width: "100%", borderCollapse: "collapse" }}>
								<thead>
									<tr
										style={{
											borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
										}}
									>
										<th
											style={{
												padding: "16px 24px",
												textAlign: "left",
												fontSize: "12px",
												fontWeight: "600",
												color: "rgba(255, 255, 255, 0.6)",
											}}
										>
											Campaign
										</th>
										<th
											style={{
												padding: "16px 24px",
												textAlign: "left",
												fontSize: "12px",
												fontWeight: "600",
												color: "rgba(255, 255, 255, 0.6)",
											}}
										>
											Spend
										</th>
										<th
											style={{
												padding: "16px 24px",
												textAlign: "left",
												fontSize: "12px",
												fontWeight: "600",
												color: "rgba(255, 255, 255, 0.6)",
											}}
										>
											ROAS
										</th>
										<th
											style={{
												padding: "16px 24px",
												textAlign: "left",
												fontSize: "12px",
												fontWeight: "600",
												color: "rgba(255, 255, 255, 0.6)",
											}}
										>
											Conversions
										</th>
									</tr>
								</thead>
								<tbody>
									{campaigns.map((campaign, idx) => (
										<tr
											key={idx}
											style={{
												borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
												transition: "background 0.3s",
											}}
											className="hover:bg-white/5"
										>
											<td
												style={{
													padding: "16px 24px",
													fontSize: "14px",
													fontWeight: "500",
													color: "white",
												}}
											>
												{campaign.name}
											</td>
											<td
												style={{
													padding: "16px 24px",
													fontSize: "14px",
													color: "rgba(255, 255, 255, 0.7)",
												}}
											>
												{campaign.spend}
											</td>
											<td
												style={{
													padding: "16px 24px",
													fontSize: "14px",
													fontWeight: "600",
													color: "rgba(255, 255, 255, 0.8)",
												}}
											>
												{campaign.roas}
											</td>
											<td
												style={{
													padding: "16px 24px",
													fontSize: "14px",
													color: "rgba(255, 255, 255, 0.7)",
												}}
											>
												{campaign.conversions}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

// "use client";

// import { useState } from "react";

// export default function DashboardPage() {
// 	const [selectedMetric, setSelectedMetric] = useState("roas");

// 	const metrics = [
// 		{ label: "Total Spend", value: "$17,250", change: "+12%", icon: "💰" },
// 		{ label: "ROAS", value: "3.2x", change: "+18%", icon: "📈" },
// 		{ label: "Conversions", value: "2,451", change: "+24%", icon: "✓" },
// 		{ label: "CPA", value: "$23.45", change: "-8%", icon: "🎯" },
// 	];

// 	const suggestions = [
// 		{ title: "Pause wasted keywords", value: "+$2,500/mo", icon: "🛑" },
// 		{ title: "Expand top performers", value: "+$3,200/mo", icon: "📈" },
// 		{ title: "Fix tracking issues", value: "+$1,800/mo", icon: "🔧" },
// 		{ title: "Add negatives", value: "+$950/mo", icon: "🚫" },
// 	];

// 	const campaigns = [
// 		{
// 			name: "Brand Search - US",
// 			spend: "$4,250",
// 			roas: "9.4x",
// 			conversions: "285",
// 			suggestion: "Increase budget cap by 12%",
// 		},
// 		{
// 			name: "Non-Brand - Running",
// 			spend: "$3,100",
// 			roas: "3.2x",
// 			conversions: "94",
// 			suggestion: "Split into 5 ad groups",
// 		},
// 		{
// 			name: "Shopping - All Products",
// 			spend: "$2,800",
// 			roas: "4.2x",
// 			conversions: "112",
// 			suggestion: "Add 6 missing images",
// 		},
// 		{
// 			name: "Display - Remarketing",
// 			spend: "$2,100",
// 			roas: "2.8x",
// 			conversions: "67",
// 			suggestion: "Exclude 32 placements",
// 		},
// 	];

// 	return (
// 		<div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 py-20 px-4">
// 			<div className="max-w-7xl mx-auto">
// 				{/* Header */}
// 				<div className="mb-12">
// 					<h1 className="text-4xl font-bold mb-2">Dashboard</h1>
// 					<p className="text-slate-400">
// 						AI-powered insights for your campaigns
// 					</p>
// 				</div>

// 				{/* Key Metrics */}
// 				<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
// 					{metrics.map((metric, idx) => (
// 						<div
// 							key={idx}
// 							className="group p-6 rounded-xl border border-slate-800 hover:border-slate-700 bg-gradient-to-br from-slate-900 to-slate-950 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
// 						>
// 							<div className="flex justify-between items-start mb-4">
// 								<div className="text-3xl">{metric.icon}</div>
// 								<span className="text-xs font-semibold text-green-400">
// 									{metric.change}
// 								</span>
// 							</div>
// 							<p className="text-slate-400 text-sm mb-1">{metric.label}</p>
// 							<p className="text-2xl font-bold">{metric.value}</p>
// 						</div>
// 					))}
// 				</div>

// 				{/* AI Suggestions */}
// 				<div className="mb-12">
// 					<h2 className="text-2xl font-bold mb-6">AI Recommendations</h2>
// 					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
// 						{suggestions.map((item, idx) => (
// 							<div
// 								key={idx}
// 								className="p-6 rounded-xl border border-slate-800 hover:border-slate-700 bg-gradient-to-br from-slate-900 to-slate-950 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
// 							>
// 								<div className="flex justify-between items-start">
// 									<div className="text-3xl">{item.icon}</div>
// 									<div className="text-right">
// 										<p className="font-semibold text-green-400 text-sm">
// 											{item.value}
// 										</p>
// 									</div>
// 								</div>
// 								<p className="font-medium mt-3">{item.title}</p>
// 								<button className="mt-4 w-full py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-sm font-medium transition">
// 									Apply
// 								</button>
// 							</div>
// 						))}
// 					</div>
// 				</div>

// 				{/* Campaigns Table */}
// 				<div>
// 					<h2 className="text-2xl font-bold mb-6">Top Campaigns</h2>
// 					<div className="rounded-xl border border-slate-800 overflow-hidden">
// 						<div className="bg-gradient-to-br from-slate-900 to-slate-950">
// 							<table className="w-full">
// 								<thead>
// 									<tr className="border-b border-slate-800">
// 										<th className="px-6 py-4 text-left text-sm font-semibold text-slate-400">
// 											Campaign
// 										</th>
// 										<th className="px-6 py-4 text-left text-sm font-semibold text-slate-400">
// 											Spend
// 										</th>
// 										<th className="px-6 py-4 text-left text-sm font-semibold text-slate-400">
// 											ROAS
// 										</th>
// 										<th className="px-6 py-4 text-left text-sm font-semibold text-slate-400">
// 											Conversions
// 										</th>
// 										<th className="px-6 py-4 text-left text-sm font-semibold text-slate-400">
// 											AI Suggestion
// 										</th>
// 									</tr>
// 								</thead>
// 								<tbody>
// 									{campaigns.map((campaign, idx) => (
// 										<tr
// 											key={idx}
// 											className="border-b border-slate-800 hover:bg-slate-800/50 transition group"
// 										>
// 											<td className="px-6 py-4 text-sm font-medium">
// 												{campaign.name}
// 											</td>
// 											<td className="px-6 py-4 text-sm">{campaign.spend}</td>
// 											<td className="px-6 py-4 text-sm">
// 												<span className="text-green-400 font-semibold">
// 													{campaign.roas}
// 												</span>
// 											</td>
// 											<td className="px-6 py-4 text-sm">
// 												{campaign.conversions}
// 											</td>
// 											<td className="px-6 py-4 text-sm text-slate-400">
// 												{campaign.suggestion}
// 											</td>
// 										</tr>
// 									))}
// 								</tbody>
// 							</table>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }
