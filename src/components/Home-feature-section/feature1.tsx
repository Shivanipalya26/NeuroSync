import Layout from "@/styles/template/Layout";
import * as T from "../../styles/typography/index";
import {
  AdventHealth,
  HCAHealth,
  CHSHealth,
} from "@/styles/icons/HealthPartnerIcon";
import { motion } from "motion/react";
import { slideInFromLeft } from "@/styles/animation";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const partners = [
  <AdventHealth />,
  <HCAHealth />,
  <AdventHealth />,
  <HCAHealth />,
  <CHSHealth />,
];

const HomeFeatureSection = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="bg-gray-100 p-16">
      <Layout>
        <div className="text-black">
          <div ref={ref} className="pb-8">
            {isInView && (
              <motion.div {...slideInFromLeft}>
                <T.H2>
                  The All-in-One{" "}
                  <span className="flex flex-col">Neurology Solution</span>
                </T.H2>
              </motion.div>
            )}
          </div>
          <div className="flex">
            <img
              src={"/images/HomeFeature/HomeFeature.webp"}
              alt="Illustrated dashboard"
              className="w-full object-cover"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-5 pt-10">
            <div>
              <T.H4>
                Ready for Today,
                <span className="flex flex-col">Built for Tomorrow</span>
              </T.H4>
            </div>
            <div className="text-gray-500">
              <T.P>
                NeuroSync brings together essential neurology tools into an
                optimized solution. Powered by advanced AI, expert neurologists,
                patient engagement specialists, and top-tier support, we enhance
                your workflow, and empower you to deliver exceptional
                neurological care.
              </T.P>
            </div>
          </div>
          <div className="mt-40 mb-6">
            <T.H6 className="text-center text-slate-600 text-sm">
              Trusted by Leaders in Remote Monitoring
            </T.H6>
          </div>

          <div className="overflow-hidden whitespace-nowrap">
            <div className="animate-marquee flex items-center space-x-1">
              {[...partners, ...partners].map((partner, index) => (
                <div key={index}>{partner}</div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </section>
  );
};

export default HomeFeatureSection;
