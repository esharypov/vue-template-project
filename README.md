# Bjorn Larsen

Описание директорий

- .vscode - настройки редактора VSCode
- dist - build, настраиваем на эту папку виртуальный домен, если нужно смотреть prod-билд
- pages - страницы верстки отдельных страниц сайта (папку под проект для верстки)
  - эти страницы должны быть точкой входа приложения, чтобы Vite прокидывал в них билды, подхватывал компоненты и т.д.. Для этого необходимо в vite.config.ts добавить точку входа в `build.rollupOptions.input.{pageCode} = resolve(__dirname, 'pages/{fileName}.html'`)
- src - основная папка с исходниками
  - assets
    - scss - scss-стили
      - components - БЭМ-компоненты
    - ... - другие папки в assets, например, картинки, шрифты и пр.
  - components - vue-компоненты
  - stores - pinia-store, скрипты хранилища
  - main.ts - основной файл приложения, в нем регистрируем компоненты глобально, подключаем scss, маунтим root-компонент приложения vue
- index.html - точка входа по умолчанию (обязательно наличие `<div id="app"></div>`) 

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
