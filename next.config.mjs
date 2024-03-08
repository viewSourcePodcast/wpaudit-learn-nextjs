/** @type {import('next').NextConfig} */
import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";

const env = process.env.NODE_ENV || "development";

const customProductionIdentifer = ({ filePath, packageName, hash }) => {
	// remove .css.ts and all paths from string
	filePath = filePath.replace(/\.css\.ts$/, "").replace(/^.*[\\\/]/, "");

	return `${filePath}_${hash}`;
};
const withVanillaExtract = createVanillaExtractPlugin({
	identifiers: env === "development" ? "debug" : customProductionIdentifer,
});

const nextConfig = {};

export default withVanillaExtract(nextConfig);
