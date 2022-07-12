const alias = require('esbuild-plugin-alias');
const stylePlugin = require('esbuild-style-plugin');

const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');
const tailwindcssNesting = require('tailwindcss/nesting');

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
            'react-dom': require.resolve('@preact/compat'),
            react: require.resolve('@preact/compat'),
        }),
        stylePlugin({
            postcss: {
                plugins: [tailwindcssNesting, tailwindcss, autoprefixer],
            },
            cssModulesOptions: {
                generateScopedName: '[hash:base64:5]',
            },
        }),
    ],
});
