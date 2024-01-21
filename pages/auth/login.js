import React from "react";
import Auth from "../../components/Layout/Auth";
import { Form, Input, message, Row, Image, Col, Button } from "antd";
import styles from "./auth.module.scss";

export default function Login() {
  const [messageApi, contextHolder] = message.useMessage();
  const onSubmit = (values) => {
    console.log("Success:", values);
    messageApi
      .open({
        type: "loading",
        content: "loading...",
        duration: 2.5,
      })
      .then(() => message.success("Welcome", 2.5));
  };

  return (
    <div className={styles.login_wrapper}>
      {contextHolder}
      <Row align="middle" justify="center">
        <Col span={12}>
          <div className={styles.content_wrapper}>
            <div className={styles.login_img}>
              <Image src="/images/login-img.png" preview={false} />
            </div>
            <h2>
              The Ultimate <span>HR Management Solution</span>
            </h2>
            <p>
              At SourceCode, we have a reliable, secure and adaptable HR
              management built from the ground up.We are determined to help our
              employees to give their best efforts every day to achieve the
              goals of their job.
            </p>
          </div>
        </Col>
        <Col span={12}>
          <div className={styles.form_wrapper}>
            <div className={styles.login_logo1}>
              <Image src="/images/login-logo1.png" preview={false} />
            </div>
            <p>Log in to start your session</p>

            <Form
              name="login"
              layout="vertical"
              onFinish={onSubmit}
              autoComplete="off"
              className={styles.form}
            >
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Please input employee code!" },
                ]}
              >
                <Input placeholder="Employee Code" />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password placeholder="Password" />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className={styles.login_btn}
                >
                  LOG IN
                </Button>
              </Form.Item>
            </Form>
            <div className={styles.login_logo2}>
              <Image src="/images/login-logo2.png" preview={false} />
            </div>
            <p>© 2024 MegaHCM. All Rights Reserved</p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

Login.layout = Auth;
