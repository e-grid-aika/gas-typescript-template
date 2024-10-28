import esbuild from "esbuild";
import { GasPlugin } from "esbuild-gas-plugin";

esbuild
  .build({
    entryPoints: ["./src/main.ts"],
    bundle: true,
    outfile: "./dist/main.js",
    plugins: [GasPlugin],
    charset: 'utf8', //日本語のUnicodeエスケープ対策
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
