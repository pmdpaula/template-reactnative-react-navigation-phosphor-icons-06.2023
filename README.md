# Projeto modelo para React Native com eslit, prettier e ordenação de imports

***template react native***

## Inicialização

`npx create-expo-app reactnative-template --template`

## Instalações de lint e demais pacotes de desenvolvimento

### Lint e organização do código (dependências de desenvolvimento)
[eslint](https://eslint.org/docs/latest/use/getting-started)
[prettier](https://prettier.io/docs/en/install.html)
[eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
```bash
yarn add -D eslint prettier eslint-config-prettier eslint-plugin-react @typescript-eslint/eslint-plugin
```

[Ciar alias para os imports, evitando passar caminhos complexos - babel-plugin-module-resolver](https://github.com/tleunen/babel-plugin-module-resolver)
```bash
yarn add -D babel-plugin-module-resolver eslint-plugin-module-resolver
```

- o pacote `eslint-plugin-module-resolver` vai gerar alerta quando usar caminho relativo ao invés do alias


### Path mapping

Mapeamento dos diretórios usando o babel-plugin-module-resolver.
Exemplo do que foi feito.

No arquivo `babel.config.js` foi adicionado as seguintes linhas:
```javascript
...
plugins: [
      ['module-resolver', {
        root: ['./src'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@routes': './src/routes',
          '@screens': './src/screens',
          '@storage': './src/storage',
          '@theme': './src/theme',
          '@utils': './src/utils',
          '@hooks': './src/hooks',
          '@types': './src/@types',
          '@navigation': './src/navigation',
          '@context': './src/context',
          '@services': './src/services',
          '@config': './src/config',
          '@constants': './src/constants',
          '@store': './src/store',
          '@styles': './src/styles',
          '@i18n': './src/i18n',
          '@locales': './src/locales',

        }
      }]
    ]

```

No arquivo `tsconfig.json` foi adicionado as seguintes linhas:
```javascript
...
"baseUrl": "./",
    "paths": {
      "@components/*": ["./src/components/*"],
      "@screens/*": ["./src/screens/*"],
      "@utils/*": ["./src/utils/*"],
      "@hooks/*": ["./src/hooks/*"],
      "@assets/*": ["./src/assets/*"],
      "@types/*": ["./src/@types/*"],
      "@navigation/*": ["./src/navigation/*"],
      "@context/*": ["./src/context/*"],
      "@services/*": ["./src/services/*"],
      "@config/*": ["./src/config/*"],
      "@constants/*": ["./src/constants/*"],
      "@store/*": ["./src/store/*"],
      "@styles/*": ["./src/styles/*"],
      "@i18n/*": ["./src/i18n/*"],
      "@locales/*": ["./src/locales/*"],
    }
```



[Ordenar as importações - eslint-plugin-import](https://github.com/import-js/eslint-plugin-import/)
```bash
yarn add -D eslint-plugin-import @typescript-eslint/parser eslint-import-resolver-typescript eslint-import-resolver-babel-module eslint-plugin-module-resolver
```
ver configurações necessárias do `eslint-import-resolver-typescript` para funcionar correto com o path mapping


~~[Ordenar as importações - eslint-plugin-simple-import-sort](https://github.com/lydell/eslint-plugin-simple-import-sort)~~
```bash
#yarn add -D eslint-plugin-simple-import-sort~~
```

[Ordenar as importações - @trivago/prettier-plugin-sort-imports](https://github.com/trivago/prettier-plugin-sort-imports#readme)
```bash
yarn add -D @trivago/prettier-plugin-sort-imports
```
Este plugin pede para que coloque a ordenação que queremos no arquivo `.prettierrc.json` e ficaram esttas opções.

```json
{
  "importOrder": [
    "^react$",
    "^react-native$",
    "^@react-navigation$",
    "^@storage/(.*)$",
    "^@screens/(.*)$",
    "^@components/(.*)$",
    "^@assets/(.*)$",
    "^[./]"
  ],
  "importOrderSeparation": true,
  "importOrderSortSpecifiers": true
}
```


**Resumo**
```bash
yarn add -D eslint prettier eslint-config-prettier eslint-plugin-react @typescript-eslint/eslint-plugin

yarn add -D eslint-plugin-import @typescript-eslint/parser eslint-import-resolver-typescript eslint-import-resolver-babel-module

yarn add -D babel-plugin-module-resolver eslint-plugin-module-resolver

yarn add -D @trivago/prettier-plugin-sort-imports
```

ou
```bash
yarn add -D eslint prettier eslint-config-prettier eslint-plugin-react @typescript-eslint/eslint-plugin eslint-plugin-import @typescript-eslint/parser eslint-import-resolver-typescript eslint-import-resolver-babel-module babel-plugin-module-resolver eslint-plugin-module-resolver @trivago/prettier-plugin-sort-imports
```




# Pacotes

## Fontes

[expo fonts usando Google fonts](https://github.com/expo/google-fonts)

```bash
npx expo install @expo-google-fonts/baloo-2 @expo-google-fonts/roboto expo-font
```
