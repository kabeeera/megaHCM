import Head from "next/head";
import { ConfigProvider } from "antd";
import theme from "../utils/themeConfig";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  const Layout = Component.layout || (({ children }) => <>{children}</>);
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Admin Dashboard</title>
      </Head>
      <ConfigProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ConfigProvider>
    </>
  );
}

export default MyApp;
