/** @type {import('esbuild').BuildOptions} */
export const commonOptions = {
  entryPoints: ['src/index.tsx'],
  format: 'esm',
  jsx: 'automatic',
  outfile: 'public/dist/bundle.js',
  bundle: true,
  loader: {
    '.svg': 'dataurl',
    '.module.css': 'local-css'
  },
  target: 'es2018'
}
