import { defineConfig, Options } from "tsup";
import { exec } from "child_process";
import { promisify } from "util";

export function tsupConfig(optParam?: Partial<Options>) {
  return defineConfig((options: Options) => ({
    outDir: "dist",
    entry: {
      index: "src/index.ts"
    },
    format: ["cjs", "esm"],
    splitting: false,
    sourcemap: true,
    minify: process.env.NODE_ENV === "production",
    clean: process.env.NODE_ENV === "production",
    dts: false,
    target: "es2022",
    injectStyle: false,
    onSuccess: async () => {
      const execAsync = promisify(exec);

      try {
        await execAsync(
          "tsc --emitDeclarationOnly --declaration --declarationMap"
        );
      } catch (error) {
        console.error("TypeScript compilation failed:", error);
        throw error;
      }
    },
    ...options,
    ...optParam
  }));
}
