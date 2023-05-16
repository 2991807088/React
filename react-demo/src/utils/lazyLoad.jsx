import React, { Suspense } from "react";
import { Spin } from "antd";

const lazyLoad = (Comp) => {
	return (
		<Suspense
			fallback={
				<Spin
					size="large"
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				/>
			}
		>
			<Comp />
		</Suspense>
	);
};
export default lazyLoad;
