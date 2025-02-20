import Layout from "../../styles/template/Layout";
import * as T from "../../styles/typography/index";

interface InputFieldProps {
  id: string;
  type: string;
  placeholder: string;
}

const InputField: React.FC<InputFieldProps> = ({ id, type, placeholder }) => (
  <input
    id={id}
    type={type}
    placeholder={placeholder}
    className="w-full rounded-lg border-gray-200 p-3 text-sm"
    aria-label={placeholder}
  />
);

interface RadioFieldProps {
  id: string;
  name: string;
  label: string;
}

const RadioField: React.FC<RadioFieldProps> = ({ id, name, label }) => (
  <label
    htmlFor={id}
    className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 
    hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
  >
    <input id={id} type="radio" name={name} className="sr-only" />
    <span className="text-sm">{label}</span>
  </label>
);

const Contact: React.FC = () => {
  return (
    <section className="pt-20">
      <Layout>
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <T.P className="max-w-xl text-lg">
                We’re here to answer your questions and help you take the next step towards improving neuro patient care. 
                Reach out to us anytime – we’d love to hear from you!
              </T.P>

              <div className="mt-8">
                <a href="#" className="text-2xl font-bold text-pink-600">999 999 9999</a>
                <address className="mt-2 not-italic">282 Kevin Brook, New Delhi, India</address>
              </div>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form action="#" className="space-y-4">
                <InputField id="name" type="text" placeholder="Name" />
                
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <InputField id="email" type="email" placeholder="Email address" />
                  <InputField id="phone" type="tel" placeholder="Phone Number" />
                </div>

                <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                  <RadioField id="Services" name="contact_reason" label="Services" />
                  <RadioField id="Products" name="contact_reason" label="Product" />
                  <RadioField id="Consultancy" name="contact_reason" label="Consultancy" />
                </div>

                <textarea
                  id="problem"
                  placeholder="Problem"
                  rows={5}
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  aria-label="Describe your problem"
                ></textarea>

                <button type="submit" className="w-full sm:w-auto rounded-lg bg-black px-5 py-3 font-medium text-white">
                  Send Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </section>
  );
};

export default Contact;
