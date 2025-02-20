import Layout from "../../styles/template/Layout";
import * as T from "../../styles/typography/index";
import * as B from "../../styles/buttons/index";

const HomeHeroSection = () => {
  return (
    <section>
      <Layout>
        <div className="flex flex-col items-center justify-center text-center min-h-screen mt-16 xl:mt-6  bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]">
          <div className="">
            <T.H1 className=" font-medium ">
              The Future of Neurology Remote
              <span className="flex flex-col"> Monitoring: Empowered </span>
              <span className="text-blue-400">by AI</span>
            </T.H1>
          </div>

          <div className="mt-14">
            <B.LinkButton
              to="/contact"
              rounded="full"
              className="!p-4 !px-12 text-xl"
            >
              Book a Demo
            </B.LinkButton>
          </div>
        </div>
      </Layout>
    </section>
  );
};

export default HomeHeroSection;
