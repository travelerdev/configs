export const jsExtensions = [".js", ".jsx", ".ts", ".tsx", ".mjs", ".cjs"];
export const tsExtensions: readonly string[] = [".ts", ".tsx", ".d.ts"] as const;

export const platformSubextensions: readonly string[] = [
  ".android",
  ".ios",
  ".web",
  ".native"
] as const;

function computeExpoExtensions(
  baseExtensions: readonly string[],
  platformSubextensions: readonly string[]
): string[] {
  const expoExtensions: string[] = [];
  for (const platform of [...platformSubextensions, ""]) {
    for (const base of baseExtensions) {
      expoExtensions.push(`${platform}${base}`);
    }
  }
  return expoExtensions;
}

// An exhaustive list for Globs of where code could be.
export const allCodeExtensions = [...jsExtensions, ...tsExtensions];

// An exhaustive list for Autocomplete of what endings a file could have.
export const allExtensions = computeExpoExtensions(
  [...jsExtensions, ...tsExtensions],
  platformSubextensions
);
