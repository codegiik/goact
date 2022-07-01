const glob = require('glob');
const alias = require('esbuild-plugin-alias');
const cssModules = require('esbuild-css-modules-plugin');

require('esbuild').build({
    entryPoints: ['main.js'],
    bundle: true,
    minify: true,
    splitting: true,
    outdir: 'dist',
    format: 'esm',
    loader: {
        '.js': 'jsx',
    },
    inject: ['./preact-shim.js'],
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    plugins: [
        alias({
            'react-dom': '@preact/compat',
            react: '@preact/compat',
        }),
        cssModules({
            v2: true,
            v2CssModulesOption: {
                pattern: `[hash]`,
            },
        }),
    ],
});
