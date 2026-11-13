// make.fun coolest-art-01 entry — copies entry.png to MAKEFUN_OUTPUT_DIR (default /output)
// Run: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// ponytail: fs.cpSync covers file copy; no stream/chunk logic needed.
import { cpSync, mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const src = join(dirname(fileURLToPath(import.meta.url)), "entry.png");
const outDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");
// output dir is created if missing (recursive mkdir)
mkdirSync(outDir, { recursive: true });
cpSync(src, join(outDir, "entry.png"));
console.log(`Copied entry.png -> ${join(outDir, "entry.png")}`);
