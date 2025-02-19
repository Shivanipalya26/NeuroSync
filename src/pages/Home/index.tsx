import HomeFeatureSection from "@/components/Home-feature-section/feature1";
import HomeHeroSection from "../../components/Home-hero-section";
import HomeFeatureSection2 from "@/components/Home-feature-section/feature2";
import HomeFeatureSection3 from "@/components/Home-feature-section/feature3";
import HomeFeatureSection4 from "@/components/Home-feature-section/feature4";

const HomePage = () => {
    return (
        <div>
            <HomeHeroSection />        
            <HomeFeatureSection /> 
            <HomeFeatureSection2 />
            <HomeFeatureSection3 /> 
            <HomeFeatureSection4 />
        </div>
        
    )
}

export default HomePage;