import { bundle } from 'https://deno.land/x/emit/mod.ts';

const entryPoint = './src/main.ts';
const outFile = './public/main.bundle.js';

const { code } = await bundle(new URL(import.meta.resolve(entryPoint)));
Deno.writeTextFile(outFile, code);
