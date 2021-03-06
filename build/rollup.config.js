import tsPlugin from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

const name = 'Bue';
const banner = `/*!
* ${process.env.npm_package_name} v${process.env.npm_package_version}
* Copyright (c) 2019 bowencool
* Released under the MIT License.
*/`;

export default [
	{
		input: 'src/core/index.ts',
		plugins: [tsPlugin()],
		output: [
			{
				format: 'umd',
				banner,
				name,
				file: process.env.npm_package_main,
			},
			{
				format: 'cjs',
				banner,
				name,
				file: process.env.npm_package_common,
			},
			{
				format: 'esm',
				banner,
				name,
				file: process.env.npm_package_module,
			},
		],
	},
	{
		input: 'src/core/index.ts',
		plugins: [
			tsPlugin(),
			terser({
				output: {
					comments: /^!/,
				},
			}),
		],
		output: {
			format: 'umd',
			banner,
			name,
			file: process.env.npm_package_unpkg,
		},
	},
];
