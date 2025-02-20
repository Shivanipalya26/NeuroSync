import Layout from "@/styles/template/Layout";
import * as T from "../../styles/typography/index";
import Card from "../Card";
import CardData from "@/config/HomeCards";
import { motion } from "motion/react";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { inPlaceFade } from "@/styles/animation";

const HomeFeatureSection4 = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="bg-gray-100 p-12">
      <Layout>
        <div className="text-center text-black">
          <div ref={ref} className="space-y-5">
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={inPlaceFade}
            >
              <T.H2>Trusted Tools for Smarter Care</T.H2>
            </motion.div>
            <T.H6 className="text-gray-500">
              Designed for simplicity, precision, and value.
            </T.H6>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
            {CardData.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                description={card.description}
                logo={card.logo}
                image={card.image}
              />
            ))}
          </div>
        </div>
      </Layout>
    </section>
  );
};

export default HomeFeatureSection4;
