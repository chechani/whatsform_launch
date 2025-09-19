import type { GetStaticProps } from "next";
import React from "react";

type Props = {
	time: string;
};

const CategoryPageLayout: React.FC<Props> = ({ time }) => (
	<div>
		<h1>Category Page Layout</h1>
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

export default CategoryPageLayout;
