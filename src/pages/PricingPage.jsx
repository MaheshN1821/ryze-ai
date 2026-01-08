import { useState } from "react";
import { ChevronDown, Check, Zap, Shield, Headphones } from "lucide-react";

const PricingPage = () => {
	const [billingCycle, setBillingCycle] = useState("monthly");
	const [expandedFAQ, setExpandedFAQ] = useState(null);

	const plans = [
		{
			name: "Starter",
			description: "Perfect for freelancers and small teams",
			price: billingCycle === "monthly" ? "$99" : "$990",
			period: "/month",
			cta: "Get Started",
			features: [
				"Audit up to 2 accounts",
				"AI creative generation",
				"24/7 optimization",
				"Basic reporting",
			],
			popular: false,
			icon: Zap,
		},
		{
			name: "Pro",
			description: "For growing agencies and brands",
			price: billingCycle === "monthly" ? "$299" : "$2,990",
			period: "/month",
			cta: "Start Free Trial",
			features: [
				"Audit up to 10 accounts",
				"Advanced AI creative",
				"24/7 optimization",
				"Advanced reporting",
				"Priority support",
			],
			popular: true,
			icon: Shield,
		},
		{
			name: "Enterprise",
			description: "For large-scale operations",
			price: "Custom",
			period: "pricing",
			cta: "Contact Sales",
			features: [
				"Unlimited accounts",
				"White-label solution",
				"Custom workflows",
				"Dedicated support",
			],
			popular: false,
			icon: Headphones,
		},
	];

	const faqs = [
		{
			q: "Can I switch plans anytime?",
			a: "Yes, you can upgrade or downgrade at any time. Changes take effect immediately, and we'll prorate your billing based on your current plan usage.",
		},
		{
			q: "Is there a free trial?",
			a: "All plans include a 14-day free trial with full access to features. No credit card required to get started.",
		},
		{
			q: "What if I need a custom solution?",
			a: "Contact our sales team for Enterprise customization. We offer tailored solutions for large-scale operations with dedicated support.",
		},
		{
			q: "Do you offer annual discounts?",
			a: "Yes! Annual plans include a 17% discount compared to monthly billing. You can save significantly by committing annually.",
		},
		{
			q: "What payment methods do you accept?",
			a: "We accept all major credit cards, bank transfers, and wire payments for Enterprise plans. Invoicing available for annual subscriptions.",
		},
		{
			q: "Is there a setup fee?",
			a: "No setup fees. You only pay the monthly or annual subscription price. Get started immediately upon signup.",
		},
	];

	return (
		<div
			style={{
				minHeight: "100vh",
				background:
					"linear-gradient(180deg, #000000 0%, #0f0f0f 50%, #1a1a1a 100%)",
				padding: "80px 16px",
				position: "relative",
				overflow: "hidden",
			}}
		>
			{/* Background animated orbs */}
			<div
				style={{
					position: "absolute",
					top: "10%",
					left: "10%",
					width: "300px",
					height: "300px",
					background:
						"radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 70%)",
					borderRadius: "50%",
					filter: "blur(80px)",
					animation: "float 6s ease-in-out infinite",
				}}
			/>
			<div
				style={{
					position: "absolute",
					bottom: "10%",
					right: "10%",
					width: "400px",
					height: "400px",
					background:
						"radial-gradient(circle, rgba(255, 255, 255, 0.03) 0%, transparent 70%)",
					borderRadius: "50%",
					filter: "blur(100px)",
					animation: "float 8s ease-in-out infinite reverse",
				}}
			/>

			{/* Header */}
			<div
				style={{
					maxWidth: "1280px",
					margin: "0 auto",
					position: "relative",
					zIndex: 1,
				}}
			>
				<div style={{ textAlign: "center", marginBottom: "48px" }}>
					<h1
						style={{
							fontSize: "clamp(2rem, 5vw, 3rem)",
							fontWeight: "900",
							marginBottom: "16px",
							color: "white",
							letterSpacing: "-1px",
						}}
					>
						Simple, Transparent Pricing
					</h1>
					<p
						style={{
							fontSize: "16px",
							color: "rgba(255, 255, 255, 0.6)",
							marginBottom: "32px",
						}}
					>
						Choose the plan that fits your needs. Scale as you grow.
					</p>

					{/* Billing Toggle with enhanced styling */}
					<div style={{ display: "flex", justifyContent: "center" }}>
						<div
							style={{
								display: "inline-flex",
								borderRadius: "12px",
								border: "1px solid rgba(255, 255, 255, 0.15)",
								padding: "6px",
								background: "rgba(0, 0, 0, 0.5)",
								backdropFilter: "blur(10px)",
							}}
						>
							<button
								onClick={() => setBillingCycle("monthly")}
								style={{
									padding: "10px 28px",
									borderRadius: "10px",
									fontWeight: "600",
									fontSize: "14px",
									border: "none",
									cursor: "pointer",
									transition: "all 0.3s ease",
									background:
										billingCycle === "monthly" ? "white" : "transparent",
									color:
										billingCycle === "monthly"
											? "black"
											: "rgba(255, 255, 255, 0.6)",
									boxShadow:
										billingCycle === "monthly"
											? "0 8px 24px rgba(0, 0, 0, 0.3)"
											: "none",
								}}
							>
								Monthly
							</button>
							<button
								onClick={() => setBillingCycle("annual")}
								style={{
									padding: "10px 28px",
									borderRadius: "10px",
									fontWeight: "600",
									fontSize: "14px",
									border: "none",
									cursor: "pointer",
									transition: "all 0.3s ease",
									background:
										billingCycle === "annual" ? "white" : "transparent",
									color:
										billingCycle === "annual"
											? "black"
											: "rgba(255, 255, 255, 0.6)",
									boxShadow:
										billingCycle === "annual"
											? "0 8px 24px rgba(0, 0, 0, 0.3)"
											: "none",
									position: "relative",
								}}
							>
								Annual
								<span
									style={{
										marginLeft: "8px",
										fontSize: "11px",
										fontWeight: "bold",
										color:
											billingCycle === "annual"
												? "#000000"
												: "rgba(255, 255, 255, 0.8)",
									}}
								>
									Save 17%
								</span>
							</button>
						</div>
					</div>
				</div>

				{/* Pricing Cards */}
				<div
					style={{
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
						gap: "28px",
						marginBottom: "80px",
					}}
				>
					{plans.map((plan, idx) => {
						const PlanIcon = plan.icon;
						return (
							<div
								key={idx}
								style={{
									position: "relative",
									borderRadius: "16px",
									padding: "40px 32px",
									border: plan.popular
										? "1.5px solid rgba(255, 255, 255, 0.25)"
										: "1px solid rgba(255, 255, 255, 0.1)",
									background: plan.popular
										? "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)"
										: "linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)",
									backdropFilter: "blur(10px)",
									transform: plan.popular ? "scale(1.02)" : "scale(1)",
									transition: "all 0.3s ease",
									cursor: "pointer",
									// overflow: "hidden",
								}}
								onMouseEnter={(e) => {
									if (!plan.popular) {
										e.currentTarget.style.borderColor =
											"rgba(255, 255, 255, 0.25)";
										e.currentTarget.style.background =
											"linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)";
									}
								}}
								onMouseLeave={(e) => {
									if (!plan.popular) {
										e.currentTarget.style.borderColor =
											"rgba(255, 255, 255, 0.1)";
										e.currentTarget.style.background =
											"linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)";
									}
								}}
							>
								{plan.popular && (
									<div
										style={{
											position: "absolute",
											top: 0,
											left: 0,
											right: 0,
											height: "1px",
											background:
												"linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)",
										}}
									/>
								)}

								{plan.popular && (
									<div
										style={{
											position: "absolute",
											top: "-12px",
											left: "50%",
											transform: "translateX(-50%)",
											padding: "6px 18px",
											background:
												"linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.8) 100%)",
											color: "black",
											fontSize: "11px",
											fontWeight: "700",
											borderRadius: "50px",
											boxShadow: "0 8px 24px rgba(255, 255, 255, 0.15)",
											letterSpacing: "0.5px",
										}}
									>
										MOST POPULAR
									</div>
								)}

								{/* Icon */}
								<div
									style={{
										width: "48px",
										height: "48px",
										borderRadius: "12px",
										background: "rgba(255, 255, 255, 0.08)",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										marginBottom: "20px",
										border: "1px solid rgba(255, 255, 255, 0.1)",
									}}
								>
									<PlanIcon size={24} color="rgba(255, 255, 255, 0.8)" />
								</div>

								<h3
									style={{
										fontSize: "22px",
										fontWeight: "900",
										marginBottom: "8px",
										color: "white",
									}}
								>
									{plan.name}
								</h3>
								<p
									style={{
										fontSize: "13px",
										color: "rgba(255, 255, 255, 0.5)",
										marginBottom: "28px",
									}}
								>
									{plan.description}
								</p>

								<div style={{ marginBottom: "32px" }}>
									<span
										style={{
											fontSize: "44px",
											fontWeight: "900",
											color: "white",
										}}
									>
										{plan.price}
									</span>
									<span
										style={{
											color: "rgba(255, 255, 255, 0.5)",
											marginLeft: "8px",
											fontSize: "14px",
										}}
									>
										{plan.period}
									</span>
								</div>

								<button
									style={{
										width: "100%",
										padding: "14px 16px",
										borderRadius: "10px",
										fontWeight: "600",
										fontSize: "14px",
										border: plan.popular
											? "none"
											: "1px solid rgba(255, 255, 255, 0.15)",
										background: plan.popular
											? "white"
											: "rgba(255, 255, 255, 0.05)",
										color: plan.popular ? "black" : "white",
										cursor: "pointer",
										transition: "all 0.3s ease",
										marginBottom: "32px",
									}}
									onMouseEnter={(e) => {
										if (plan.popular) {
											e.target.style.background = "rgba(255, 255, 255, 0.95)";
										} else {
											e.target.style.background = "rgba(255, 255, 255, 0.1)";
										}
									}}
									onMouseLeave={(e) => {
										if (plan.popular) {
											e.target.style.background = "white";
										} else {
											e.target.style.background = "rgba(255, 255, 255, 0.05)";
										}
									}}
								>
									{plan.cta}
								</button>

								<ul
									style={{
										display: "flex",
										flexDirection: "column",
										gap: "14px",
									}}
								>
									{plan.features.map((feature, i) => (
										<li
											key={i}
											style={{
												display: "flex",
												alignItems: "flex-start",
												gap: "10px",
											}}
										>
											<Check
												size={18}
												color="rgba(255, 255, 255, 0.7)"
												style={{ flexShrink: 0, marginTop: "2px" }}
											/>
											<span
												style={{
													fontSize: "14px",
													color: "rgba(255, 255, 255, 0.7)",
													lineHeight: "1.5",
												}}
											>
												{feature}
											</span>
										</li>
									))}
								</ul>
							</div>
						);
					})}
				</div>

				<div style={{ marginTop: "80px" }}>
					<h2
						style={{
							fontSize: "32px",
							fontWeight: "900",
							textAlign: "center",
							marginBottom: "12px",
							color: "white",
							letterSpacing: "-0.5px",
						}}
					>
						Frequently Asked Questions
					</h2>
					<p
						style={{
							textAlign: "center",
							color: "rgba(255, 255, 255, 0.5)",
							marginBottom: "48px",
							fontSize: "15px",
						}}
					>
						Everything you need to know about Ryze AI
					</p>

					<div
						style={{
							maxWidth: "700px",
							margin: "0 auto",
							display: "flex",
							flexDirection: "column",
							gap: "12px",
						}}
					>
						{faqs.map((item, idx) => (
							<div
								key={idx}
								style={{
									borderRadius: "12px",
									border: "1px solid rgba(255, 255, 255, 0.1)",
									background:
										expandedFAQ === idx
											? "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)"
											: "linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)",
									backdropFilter: "blur(10px)",
									overflow: "hidden",
									transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
									cursor: "pointer",
								}}
								onMouseEnter={(e) => {
									e.currentTarget.style.borderColor =
										"rgba(255, 255, 255, 0.15)";
								}}
								onMouseLeave={(e) => {
									e.currentTarget.style.borderColor =
										"rgba(255, 255, 255, 0.1)";
								}}
							>
								<button
									onClick={() =>
										setExpandedFAQ(expandedFAQ === idx ? null : idx)
									}
									style={{
										width: "100%",
										padding: "20px 24px",
										background: "transparent",
										border: "none",
										cursor: "pointer",
										display: "flex",
										alignItems: "center",
										justifyContent: "space-between",
										transition: "all 0.3s ease",
									}}
								>
									<h3
										style={{
											fontWeight: "600",
											//   color: "white",
											fontSize: "15px",
											textAlign: "left",
											transition: "all 0.3s ease",
											color:
												expandedFAQ === idx
													? "white"
													: "rgba(255, 255, 255, 0.8)",
										}}
									>
										{item.q}
									</h3>
									<ChevronDown
										size={20}
										color="rgba(255, 255, 255, 0.5)"
										style={{
											transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
											transform:
												expandedFAQ === idx ? "rotate(180deg)" : "rotate(0deg)",
											flexShrink: 0,
											marginLeft: "16px",
										}}
									/>
								</button>

								{expandedFAQ === idx && (
									<div
										style={{
											padding: "0 24px 20px 24px",
											animation:
												"slideDown 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards",
										}}
									>
										<p
											style={{
												fontSize: "14px",
												color: "rgba(255, 255, 255, 0.6)",
												lineHeight: "1.6",
											}}
										>
											{item.a}
										</p>
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			</div>

			<style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(20px);
          }
        }
      `}</style>
		</div>
	);
};

export default PricingPage;

//full bottom
// import { useState } from "react";

// const CheckmarkIcon = () => (
// 	<svg width="20" height="20" viewBox="0 0 20 20" fill="white">
// 		<path
// 			fillRule="evenodd"
// 			d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
// 			clipRule="evenodd"
// 		/>
// 	</svg>
// );

// export default function PricingPage() {
// 	const [billingCycle, setBillingCycle] = useState("monthly");

// 	const plans = [
// 		{
// 			name: "Starter",
// 			description: "Perfect for freelancers and small teams",
// 			price: billingCycle === "monthly" ? "$99" : "$990",
// 			period: "/month",
// 			cta: "Get Started",
// 			features: [
// 				"Audit up to 2 accounts",
// 				"AI creative generation",
// 				"24/7 optimization",
// 				"Basic reporting",
// 			],
// 			popular: false,
// 		},
// 		{
// 			name: "Pro",
// 			description: "For growing agencies and brands",
// 			price: billingCycle === "monthly" ? "$299" : "$2,990",
// 			period: "/month",
// 			cta: "Start Free Trial",
// 			features: [
// 				"Audit up to 10 accounts",
// 				"Advanced AI creative",
// 				"24/7 optimization",
// 				"Advanced reporting",
// 				"Priority support",
// 			],
// 			popular: true,
// 		},
// 		{
// 			name: "Enterprise",
// 			description: "For large-scale operations",
// 			price: "Custom",
// 			period: "pricing",
// 			cta: "Contact Sales",
// 			features: [
// 				"Unlimited accounts",
// 				"White-label solution",
// 				"Custom workflows",
// 				"Dedicated support",
// 			],
// 			popular: false,
// 		},
// 	];

// 	return (
// 		<div
// 			style={{
// 				minHeight: "100vh",
// 				background: "linear-gradient(180deg, #000000 0%, #0f0f0f 100%)",
// 				padding: "80px 16px",
// 			}}
// 		>
// 			<div style={{ maxWidth: "1280px", margin: "0 auto" }}>
// 				{/* Header */}
// 				<div style={{ textAlign: "center", marginBottom: "48px" }}>
// 					<h1
// 						style={{
// 							fontSize: "clamp(2rem, 5vw, 3rem)",
// 							fontWeight: "900",
// 							marginBottom: "16px",
// 							color: "white",
// 							letterSpacing: "-1px",
// 						}}
// 					>
// 						Simple, Transparent Pricing
// 					</h1>
// 					<p
// 						style={{
// 							fontSize: "16px",
// 							color: "rgba(255, 255, 255, 0.6)",
// 							marginBottom: "32px",
// 						}}
// 					>
// 						Choose the plan that fits your needs. Scale as you grow.
// 					</p>

// 					{/* Billing Toggle */}
// 					<div style={{ display: "flex", justifyContent: "center" }}>
// 						<div
// 							style={{
// 								display: "inline-flex",
// 								borderRadius: "8px",
// 								border: "1px solid rgba(255, 255, 255, 0.2)",
// 								padding: "4px",
// 								background: "rgba(0, 0, 0, 0.4)",
// 							}}
// 						>
// 							<button
// 								onClick={() => setBillingCycle("monthly")}
// 								style={{
// 									padding: "8px 24px",
// 									borderRadius: "6px",
// 									fontWeight: "600",
// 									fontSize: "14px",
// 									border: "none",
// 									cursor: "pointer",
// 									transition: "all 0.3s",
// 									background:
// 										billingCycle === "monthly" ? "white" : "transparent",
// 									color:
// 										billingCycle === "monthly"
// 											? "black"
// 											: "rgba(255, 255, 255, 0.6)",
// 								}}
// 							>
// 								Monthly
// 							</button>
// 							<button
// 								onClick={() => setBillingCycle("annual")}
// 								style={{
// 									padding: "8px 24px",
// 									borderRadius: "6px",
// 									fontWeight: "600",
// 									fontSize: "14px",
// 									border: "none",
// 									cursor: "pointer",
// 									transition: "all 0.3s",
// 									background:
// 										billingCycle === "annual" ? "white" : "transparent",
// 									color:
// 										billingCycle === "annual"
// 											? "black"
// 											: "rgba(255, 255, 255, 0.6)",
// 								}}
// 							>
// 								Annual
// 								<span
// 									style={{
// 										marginLeft: "8px",
// 										fontSize: "11px",
// 										fontWeight: "bold",
// 										color: "rgba(255, 255, 255, 0.8)",
// 									}}
// 								>
// 									Save 17%
// 								</span>
// 							</button>
// 						</div>
// 					</div>
// 				</div>

// 				{/* Pricing Cards */}
// 				<div
// 					style={{
// 						display: "grid",
// 						gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
// 						gap: "32px",
// 						marginBottom: "48px",
// 					}}
// 				>
// 					{plans.map((plan, idx) => (
// 						<div
// 							key={idx}
// 							className={plan.popular ? "card-spotlight" : ""}
// 							style={{
// 								position: "relative",
// 								borderRadius: "16px",
// 								padding: "32px",
// 								border: plan.popular
// 									? "1px solid rgba(255, 255, 255, 0.3)"
// 									: "1px solid rgba(255, 255, 255, 0.1)",
// 								background: plan.popular
// 									? "linear-gradient(135deg, rgba(0, 0, 0, 0.6), rgba(15, 15, 15, 0.4))"
// 									: "linear-gradient(135deg, rgba(0, 0, 0, 0.3), rgba(15, 15, 15, 0.2))",
// 								transform: plan.popular ? "scale(1.05)" : "scale(1)",
// 								transition: "all 0.3s ease",
// 							}}
// 						>
// 							{plan.popular && (
// 								<div
// 									style={{
// 										position: "absolute",
// 										top: "-12px",
// 										left: "50%",
// 										transform: "translateX(-50%)",
// 										padding: "4px 16px",
// 										background: "white",
// 										color: "black",
// 										fontSize: "11px",
// 										fontWeight: "700",
// 										borderRadius: "50px",
// 									}}
// 								>
// 									MOST POPULAR
// 								</div>
// 							)}

// 							<h3
// 								style={{
// 									fontSize: "20px",
// 									fontWeight: "900",
// 									marginBottom: "8px",
// 									color: "white",
// 								}}
// 							>
// 								{plan.name}
// 							</h3>
// 							<p
// 								style={{
// 									fontSize: "14px",
// 									color: "rgba(255, 255, 255, 0.6)",
// 									marginBottom: "24px",
// 								}}
// 							>
// 								{plan.description}
// 							</p>

// 							<div style={{ marginBottom: "24px" }}>
// 								<span
// 									style={{
// 										fontSize: "40px",
// 										fontWeight: "900",
// 										color: "white",
// 									}}
// 								>
// 									{plan.price}
// 								</span>
// 								<span
// 									style={{
// 										color: "rgba(255, 255, 255, 0.6)",
// 										marginLeft: "8px",
// 									}}
// 								>
// 									{plan.period}
// 								</span>
// 							</div>

// 							<button
// 								style={{
// 									width: "100%",
// 									padding: "12px 16px",
// 									borderRadius: "8px",
// 									fontWeight: "600",
// 									fontSize: "14px",
// 									border: plan.popular
// 										? "none"
// 										: "1px solid rgba(255, 255, 255, 0.2)",
// 									background: plan.popular ? "white" : "transparent",
// 									color: plan.popular ? "black" : "white",
// 									cursor: "pointer",
// 									transition: "all 0.3s",
// 									marginBottom: "32px",
// 								}}
// 								className={
// 									plan.popular
// 										? "hover:bg-zinc-100"
// 										: "hover:border-white/40 hover:bg-white/5"
// 								}
// 							>
// 								{plan.cta}
// 							</button>

// 							<ul
// 								style={{
// 									display: "flex",
// 									flexDirection: "column",
// 									gap: "12px",
// 								}}
// 							>
// 								{plan.features.map((feature, i) => (
// 									<li
// 										key={i}
// 										style={{
// 											display: "flex",
// 											alignItems: "flex-start",
// 											gap: "8px",
// 										}}
// 									>
// 										<CheckmarkIcon />
// 										<span
// 											style={{
// 												fontSize: "14px",
// 												color: "rgba(255, 255, 255, 0.7)",
// 											}}
// 										>
// 											{feature}
// 										</span>
// 									</li>
// 								))}
// 							</ul>
// 						</div>
// 					))}
// 				</div>

// 				{/* FAQ Section */}
// 				<div>
// 					<h2
// 						style={{
// 							fontSize: "24px",
// 							fontWeight: "900",
// 							textAlign: "center",
// 							marginBottom: "48px",
// 							color: "white",
// 						}}
// 					>
// 						Frequently Asked Questions
// 					</h2>
// 					<div
// 						style={{
// 							maxWidth: "48rem",
// 							margin: "0 auto",
// 							display: "flex",
// 							flexDirection: "column",
// 							gap: "24px",
// 						}}
// 					>
// 						{[
// 							{
// 								q: "Can I switch plans anytime?",
// 								a: "Yes, you can upgrade or downgrade at any time.",
// 							},
// 							{
// 								q: "Is there a free trial?",
// 								a: "Yes, all plans include 14-day free trial. No credit card required.",
// 							},
// 							{
// 								q: "What if I need custom solution?",
// 								a: "Contact our sales team for Enterprise customization.",
// 							},
// 							{
// 								q: "Do you offer annual discounts?",
// 								a: "Yes, annual plans include 17% discount.",
// 							},
// 						].map((item, idx) => (
// 							<div
// 								key={idx}
// 								className="card-spotlight"
// 								style={{
// 									padding: "24px",
// 									borderRadius: "12px",
// 									border: "1px solid rgba(255, 255, 255, 0.1)",
// 									background: "rgba(0, 0, 0, 0.3)",
// 								}}
// 							>
// 								<h3
// 									style={{
// 										fontWeight: "700",
// 										marginBottom: "8px",
// 										color: "white",
// 										fontSize: "14px",
// 									}}
// 								>
// 									{item.q}
// 								</h3>
// 								<p
// 									style={{
// 										fontSize: "14px",
// 										color: "rgba(255, 255, 255, 0.6)",
// 									}}
// 								>
// 									{item.a}
// 								</p>
// 							</div>
// 						))}
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

// "use client";

// import { useState } from "react";

// export default function PricingPage() {
// 	const [billingCycle, setBillingCycle] = useState("monthly");

// 	const plans = [
// 		{
// 			name: "Starter",
// 			description: "Perfect for freelancers and small teams",
// 			price: billingCycle === "monthly" ? "$99" : "$990",
// 			period: "/month",
// 			cta: "Get Started",
// 			features: [
// 				"Audit up to 2 accounts",
// 				"AI creative generation",
// 				"24/7 optimization",
// 				"Basic reporting",
// 				"Email support",
// 			],
// 			popular: false,
// 		},
// 		{
// 			name: "Pro",
// 			description: "For growing agencies and brands",
// 			price: billingCycle === "monthly" ? "$299" : "$2,990",
// 			period: "/month",
// 			cta: "Start Free Trial",
// 			features: [
// 				"Audit up to 10 accounts",
// 				"Advanced AI creative",
// 				"24/7 optimization",
// 				"Advanced reporting",
// 				"Priority support",
// 				"Custom integrations",
// 				"Team collaboration",
// 			],
// 			popular: true,
// 		},
// 		{
// 			name: "Enterprise",
// 			description: "For large-scale operations",
// 			price: "Custom",
// 			period: "pricing",
// 			cta: "Contact Sales",
// 			features: [
// 				"Unlimited accounts",
// 				"White-label solution",
// 				"Custom workflows",
// 				"Dedicated support",
// 				"SLA guarantees",
// 				"Custom integrations",
// 				"API access",
// 			],
// 			popular: false,
// 		},
// 	];

// 	return (
// 		<div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 py-20 px-4">
// 			<div className="max-w-7xl mx-auto">
// 				{/* Header */}
// 				<div className="text-center mb-12">
// 					<h1 className="text-4xl font-bold mb-4">
// 						Simple, Transparent Pricing
// 					</h1>
// 					<p className="text-slate-400 mb-8">
// 						Choose the plan that fits your needs. Scale as you grow.
// 					</p>

// 					{/* Billing Toggle */}
// 					<div className="flex justify-center mb-12">
// 						<div className="inline-flex rounded-lg border border-slate-800 p-1 bg-slate-900">
// 							<button
// 								onClick={() => setBillingCycle("monthly")}
// 								className={`px-6 py-2 rounded-md font-medium transition ${
// 									billingCycle === "monthly"
// 										? "bg-white text-slate-950"
// 										: "text-slate-400 hover:text-white"
// 								}`}
// 							>
// 								Monthly
// 							</button>
// 							<button
// 								onClick={() => setBillingCycle("annual")}
// 								className={`px-6 py-2 rounded-md font-medium transition ${
// 									billingCycle === "annual"
// 										? "bg-white text-slate-950"
// 										: "text-slate-400 hover:text-white"
// 								}`}
// 							>
// 								Annual
// 								<span className="ml-2 text-xs font-bold text-green-400">
// 									Save 17%
// 								</span>
// 							</button>
// 						</div>
// 					</div>
// 				</div>

// 				{/* Pricing Cards */}
// 				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
// 					{plans.map((plan, idx) => (
// 						<div
// 							key={idx}
// 							className={`relative rounded-xl border p-8 transition-all duration-300 ${
// 								plan.popular
// 									? "border-cyan-400 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-2xl shadow-cyan-500/20 md:scale-105"
// 									: "border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 hover:border-slate-700"
// 							}`}
// 						>
// 							{plan.popular && (
// 								<div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
// 									<span className="inline-block px-4 py-1 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 text-xs font-bold rounded-full">
// 										MOST POPULAR
// 									</span>
// 								</div>
// 							)}

// 							<h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
// 							<p className="text-slate-400 text-sm mb-6">{plan.description}</p>

// 							<div className="mb-6">
// 								<span className="text-5xl font-bold">{plan.price}</span>
// 								<span className="text-slate-400 ml-2">{plan.period}</span>
// 							</div>

// 							<button
// 								className={`w-full py-3 rounded-lg font-semibold transition mb-8 ${
// 									plan.popular
// 										? "bg-white text-slate-950 hover:bg-slate-100"
// 										: "border border-slate-700 text-white hover:bg-slate-800"
// 								}`}
// 							>
// 								{plan.cta}
// 							</button>

// 							<ul className="space-y-4">
// 								{plan.features.map((feature, i) => (
// 									<li key={i} className="flex items-start gap-3">
// 										<svg
// 											className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5"
// 											fill="currentColor"
// 											viewBox="0 0 20 20"
// 										>
// 											<path
// 												fillRule="evenodd"
// 												d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
// 												clipRule="evenodd"
// 											/>
// 										</svg>
// 										<span className="text-slate-300 text-sm">{feature}</span>
// 									</li>
// 								))}
// 							</ul>
// 						</div>
// 					))}
// 				</div>

// 				{/* FAQ Section */}
// 				<div className="mt-20">
// 					<h2 className="text-3xl font-bold text-center mb-12">
// 						Frequently Asked Questions
// 					</h2>
// 					<div className="max-w-3xl mx-auto space-y-6">
// 						{[
// 							{
// 								q: "Can I switch plans anytime?",
// 								a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.",
// 							},
// 							{
// 								q: "Is there a free trial?",
// 								a: "Yes, all plans come with a 14-day free trial. No credit card required to get started.",
// 							},
// 							{
// 								q: "What if I need a custom solution?",
// 								a: "Our Enterprise plan includes custom workflows and pricing. Contact our sales team for more information.",
// 							},
// 							{
// 								q: "Do you offer discounts for annual billing?",
// 								a: "Yes, annual plans include a 17% discount compared to monthly billing.",
// 							},
// 						].map((item, idx) => (
// 							<div
// 								key={idx}
// 								className="p-6 rounded-xl border border-slate-800 hover:border-slate-700 bg-gradient-to-br from-slate-900 to-slate-950 hover:shadow-xl transition-all duration-300"
// 							>
// 								<h3 className="font-semibold mb-2">{item.q}</h3>
// 								<p className="text-slate-400">{item.a}</p>
// 							</div>
// 						))}
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }
