
import { GetStaticProps } from "next";
import React from "react";

type Props = {
	time: string;
};

const TestTheme: React.FC<Props> = ({ time }) => (
	<div>
		<h1>Test Theme Page</h1>
		<p>Build time: {time}</p>
	</div>
);

export const getStaticProps: GetStaticProps = async () => {
	return {
		props: {
			time: new Date().toISOString(),
		},
	};
};

export default TestTheme;
