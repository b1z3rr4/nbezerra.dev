import "@portfolio/env/web";
import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	typedRoutes: true,
	reactCompiler: true,
	output: "standalone",
	outputFileTracingRoot: path.join(process.cwd(), "..", ".."),
};

export default nextConfig;
