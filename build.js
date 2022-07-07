const alias = require('esbuild-plugin-alias');
const postCssPlugin = require("esbuild-plugin-postcss2");
// const postcss = require('esbuild-postcss');

/*
  const resolvePostCSS = {
  name: 'resolvePostCSS',
  setup(build) {
    let path = require('path');

    build.onResolve({ filter: /.\.css$/ }, args => {
      return {
        path: path.join(__dirname, args.path + '.json')
      }
    });

    postcss();
  }
};
*/

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
            styles: 'styles',
        }),
        postCssPlugin.default()
    ],
});
