# eslint-config-expo for ESlint 9

**Note**: This library is an experimental WIP project. Do not trust it in a place of work or in a critical production workflow. However, issues and PRs are welcome.

## Still To Do:
- [x] Basic port of the core, react, react-native, and typescript rule configs
- [ ] Port the eslint expo plugin and rules
- [ ] Test suite to validate the setup against a variety of expo edge cases
- [ ] Validation against a zero-typescript setup

---

Base ESLint config for Expo projects. This is a minimal config that supports JSX and TypeScript, platform-specific global variables, and file extensions like `.android.js`, `.ios.js` and `.web.js`. You are intended to compose this base config with the linter rules of your choice in your own ESLint configuration.

This is a port of the official `eslint-config-expo` for ESlint 9 that is hosted on [Expos's Repo](https://github.com/expo/expo/tree/main/packages/eslint-config-expo).

## Installation

```sh
yarn add --dev eslint @travelerdev/eslint-config-expo
```

```sh
npm i -D eslint @travelerdev/eslint-config-expo
```

## Usage

This config is intended to be used as a base or intermediate config for your project. You should import it and then spread the rules you want to use in your own config.

Note that it does not set up a TS parser to avoid conflicts with other configs.

### `eslint.config.mjs`

```js
import eslintConfigExpo from "@travelerdev/eslint-config-expo";

export default [
  // Set up TS parser
  ...eslintConfigExpo.recommended,
  // Any other configs.
];
```

### Without TS Support

If you are not using TypeScript, you can use the `recommendedJS` config to avoid any TS-specific rules.

```js
import eslintConfigExpo from "@travelerdev/eslint-config-expo";

export default [
  ...eslintConfigExpo.recommendedJS,
  // Any other configs.
];
```
