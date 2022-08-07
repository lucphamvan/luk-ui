import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
export default [
    {
        input: "src/index.ts",
        output: [
            {
                file: "dist/index.js",
                format: "cjs",
            },
        ],
        plugins: [typescript(), terser()],
        external: ["react", "react-dom", "@emotion/react", "@emotion/styled"],
    },
];
