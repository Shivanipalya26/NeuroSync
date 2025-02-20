import Layout from "@/styles/template/Layout";
import * as T from "../../styles/typography/index";
import * as B from "../../styles/buttons/index";
import type { FormProps } from "antd";
import { Form } from "antd";
import { FormFieldInput, FormFieldPassword } from "@/styles/form";

type FieldType = {
  email?: string;
  password?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Login = () => {
  return (
    <section className="bg-black p-16">
      <Layout>
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-lg">
            <T.H4 className="text-center font-medium text-indigo-500">
              Get started today
            </T.H4>

            <T.P className="mx-auto mt-4 mb-8 max-w-lg text-center text-gray-500">
              We’re here to answer your questions, and help you take the next
              step towards improving neuro patient care. Reach out to us anytime
              – we’d love to hear from you!
            </T.P>

            <Form
              name="login"
              layout="vertical"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              className="rounded-lg shadow-lg border border-white p-6"
            >
              <div className=" text-white rounded-lg shadow-lg sm:p-6 ">
                <T.P className="text-center text-lg font-medium">
                  Sign in to your account
                </T.P>
              </div>
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                  {
                    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Please enter a valid email!",
                  },
                ]}
                label="Email"
              >
                <FormFieldInput placeholder="Email" />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                  {
                    min: 8,
                    message: "Password must be at least 8 characters!",
                  },
                  {
                    pattern:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message:
                      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character!",
                  },
                ]}
                label="Password"
              >
                <FormFieldPassword placeholder="Password" />
              </Form.Item>
              <Form.Item className="flex justify-center">
                <B.Button className="px-10" htmlFor="submit">
                  Log in
                </B.Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </Layout>
    </section>
  );
};

export default Login;
