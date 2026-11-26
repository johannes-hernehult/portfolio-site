# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.

## Deployment

This app is deployed with Kamal and served by nginx from the Docker image. Before deploying:

- Point the `A` record for `jhernehult.com` to `62.238.34.82` and allow inbound SSH on port `1995` plus HTTP/HTTPS (ports `80` and `443`).
- Make the three Vite EmailJS values available to Kamal when building. They are embedded in the client-side bundle, so they are public values, not secrets:
  - `VITE_EMAILJS_SERVICE_ID`
  - `VITE_EMAILJS_TEMPLATE_ID`
  - `VITE_EMAILJS_PUBLIC_KEY`

If these are in your local `.env` file, load them into the shell before each Kamal command:

```sh
set -a
. ./.env
set +a
kamal setup # first deployment
```

For later releases, run `kamal deploy` from a shell with those values loaded. The deployment configuration is in `config/deploy.yml`; nginx serves the built SPA on port `8080` and answers Kamal's health check at `/up`.
