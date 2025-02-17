import Layout from "../../styles/template/Layout";
import * as T from "../../styles/typography/index";
import * as B from "../../styles/buttons/index";

const HomeHeroSection = () => {
  return (
    <section>
      <Layout>
        <div className="flex flex-col items-center justify-center text-center min-h-screen mt-16 xl:mt-6">
          <div className="">
            <T.H1 className=" font-medium ">
              The Future of Neurology Remote
              <span className="flex flex-col"> Monitoring: Empowered </span>
              <span className="text-blue-400">by AI</span>
            </T.H1>
          </div>

          <div>
            <B.Button rounded="full" className="mt-12 !p-4 !px-12 text-xl">
              Book a Demo
            </B.Button>
          </div>
        </div>
      </Layout>
    </section>
  );
};

export default HomeHeroSection;
