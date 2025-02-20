import Layout from "@/styles/template/Layout";
import * as T from "../../styles/typography/index";

const HomeFeatureSection3 = () => {
  return (
    <section className="bg-blue-900 text-white m-0 p-16">
      <Layout>
        <div className="grid md:grid-cols-2">
          <div>
            <T.H3>
              NeuroSync delivers better results for you and your patients
            </T.H3>
          </div>

          <div className="grid lg:grid-cols-3 gap-4 ">
            <div className="...">
              <span className="flex text-5xl py-2">200+ </span>
              Customers Chose NeuroSync
            </div>
            <div className="...">
              <span className="flex text-5xl py-2">5.5M+ </span>
              Transmissions Processed
            </div>
            <div className="...">
              <span className="flex text-5xl py-2">300% </span>
              Avg. Increase in ROI per Customer
            </div>
          </div>
        </div>
      </Layout>
    </section>
  );
};

export default HomeFeatureSection3;
