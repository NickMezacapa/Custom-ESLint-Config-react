# Custom ESLint config for `create-react-app` 🛑

🔧 Rules are automatically fixable using the `--fix` [flag](https://eslint.org/docs/latest/user-guide/command-line-interface#--fix) on the command line.
<br />
🤝 Configurable for `.js` `.jsx` `.ts` `.tsx` files

### 🔍 This configuration will ensure the following:
  - Imports and exports are sorted alphabetically
  - Imports are arranged in custom order by group, with react or next files as the first import
  - No newline between import groups
  - Space between opening and closing curly braces for imports/exports
  - Spaces surrounding named imports and exports
  - Semicolons required 
  - Props are sorted alphabetically and by type
  - Enforced sorting for multiline props
  - React reserved props must be listed before all other props, but still respect alphabetical order
  - Props order is also case sensitive
