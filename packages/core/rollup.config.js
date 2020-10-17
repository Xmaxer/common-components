import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import generatePackageJson from "rollup-plugin-generate-package-json";

const packageJson = require("./package.json");

export default {
    input: "src/index.ts",
    output: [
        {
            file: packageJson.main,
            format: 'cjs',
            sourcemap: true
        },
        {
            file: packageJson.module,
            format: 'esm',
            sourcemap: true
        },
    ],
    plugins: [
        peerDepsExternal(),
        resolve(),
        commonjs(),
        //Copy the package.json for publishing/packaging and exclude unnecessary properties
        generatePackageJson({baseContents: {...packageJson, files: ['*'], main: "index.js", module: "index.esm.js", types: "index.d.ts", devDependencies: {}, scripts: {}}}),
        typescript({ useTsconfigDeclarationDir: true }),
    ]
};
