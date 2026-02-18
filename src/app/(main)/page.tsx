// import About from "@/src/components/About/page";
// import AtAGlance from "@/src/components/AtAGlance/page";
import BlogSection from "@/src/components/Blog/page";
import ShopByBrands from "@/src/components/Brands/Brands";
// import GrowBusiness from "@/src/components/GrowBusiness/page";
// import Review from "@/src/components/Review/page";
import CategorySection from "@/src/components/CategorySection/CategorySection";
import FeatureBar from "@/src/components/FeatureBar/page";
import FlashSale from "@/src/components/FlashSale/FlashSale";
import RecentlyAdded from "@/src/components/RecentlyAdded/RecentlyAdded";
import Slider from "@/src/components/Slider/page";
import TrendingProducts from "@/src/components/TrendingProducts/TrendingProducts";
// import WeOffer from "@/src/components/WeOffer/page";


const HomePage = () => {
    return (
        <div className="min-h-screen">
            <Slider />
            <FeatureBar/>
            <CategorySection/>
            <FlashSale/>
            <RecentlyAdded/>
            <TrendingProducts/>
            <ShopByBrands/>
            {/* <About />
            <WeOffer />
            <AtAGlance />
            <GrowBusiness />
            <Review />
            <BlogSection /> */}
            <BlogSection />
        </div>
    );
};

export default HomePage;