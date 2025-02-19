import Layout from "@/styles/template/Layout";
import * as T from "../../styles/typography/index";
import Card from "../Card";
import CardData from "@/config/HomeCards";

const HomeFeatureSection4 = () => {
  return (
    <section className="bg-gray-100 p-16">
      <Layout>
        <div className="text-center text-black">
          <div className="space-y-5">
            <T.H2>Trusted Tools for Smarter Care</T.H2>
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
