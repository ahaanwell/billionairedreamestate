import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import PropertyTypeSection from "../components/PropertyTypeSection";
import TrustedSection from "@/components/TrustedSection";
import MiddleBannerSection from "@/components/MiddleBannerSection";
import BottomBanner from "@/components/BottomBanner";
import CitySection from "@/components/CitySection";
import ProjectSection from "@/components/ProjectSection";
import DeveloperList from "@/components/DeveloperList";

export default function Home() {
  return (
    <>
    <HeroSection/>
    <PropertyTypeSection/>
    <CitySection/>
    <ProjectSection/>
    <TrustedSection/>
    <MiddleBannerSection/>
    {/* <ProjectSection/> */}
    <BottomBanner/>
    <DeveloperList/>
    </>
  );
};