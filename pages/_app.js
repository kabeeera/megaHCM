import Head from "next/head";
import "../styles/globals.css";
import "antd/dist/antd.css";
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
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default MyApp;
