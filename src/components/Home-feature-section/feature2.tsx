import Layout from "@/styles/template/Layout";
import * as T from "../../styles/typography/index";
import * as B from "../../styles/buttons/index";

const HomeFeatureSection2 = () => {
  return (
    <section className="bg-white p-16">
      <Layout>
        <div className="text-black text-center">
          <div className="space-y-5">
            <T.H2 className="">Your Practice, Powered by Instant Insights</T.H2>
            <T.H6 className="text-gray-500">
              Seamless analytics for informed decisions on demand.
            </T.H6>
          </div>

          <div className="space-x-2 p-10">
            <B.Button rounded="full" className="!bg-black">
              Alert Button
            </B.Button>
            <B.Button
              rounded="full"
              variant="secondary"
              className="!text-black border-gray-300 hover:border-black hover:bg-white"
            >
              Device Volume
            </B.Button>
            <B.Button
              rounded="full"
              variant="secondary"
              className="!text-black border-gray-300 hover:border-black hover:bg-white"
            >
              Procedure Identification
            </B.Button>
            <B.Button
              rounded="full"
              variant="secondary"
              className="!text-black border-gray-300 hover:border-black hover:bg-white"
            >
              Advisory Identification
            </B.Button>
            <B.Button
              rounded="full"
              variant="secondary"
              className="!text-black border-gray-300 hover:border-black hover:bg-white"
            >
              Billing Frequency
            </B.Button>
          </div>

          
        </div>
      </Layout>
    </section>
  );
};

export default HomeFeatureSection2;
