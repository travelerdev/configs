import { defineConfig } from "eslint/config";
import turborepo from "./turborepo.mjs";
import base from "./base.mjs";
import library from "./library.mjs";

/** @type {import("eslint").Linter.Config} */
export default defineConfig([...turborepo, ...base, ...library]);
