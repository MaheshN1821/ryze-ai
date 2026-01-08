import HeroSection from "../components/home/HeroSection";
import FeaturesSection from "../components/home/FeatureSection";
import PlatformsSection from "../components/home/PlatformSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import StatsSection from "../components/home/StatsSection";
import CTASection from "../components/home/CTASection";

export default function HomePage() {
	return (
		<div className="overflow-hidden">
			<HeroSection />
			<PlatformsSection />
			<FeaturesSection />
			<StatsSection />
			<TestimonialsSection />
			<CTASection />
		</div>
	);
}
