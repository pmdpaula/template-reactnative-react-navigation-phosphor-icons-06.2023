module.exports = {
  'env': {
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:import/typescript'
  ],
  'overrides': [
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true,
    }
  },
  'plugins': [
    'react',
    '@typescript-eslint',
    'import',
    // 'module-resolver',
    // 'simple-import-sort'
  ],
  'rules': {
    'indent': ['warn', 2],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'double'],
    'semi': ['error', 'always'],
    'react/react-in-jsx-scope': 'off',

    'import/namespace': 0,
    'import/no-unresolved': [2, { ignore: ['^@'] }],

    // 'simple-import-sort/imports': 'error',
    // 'simple-import-sort/exports': 'error',
    // 'module-resolver/use-alias': 2
  },
  'settings': {
    // 'react': {
    //   'version': 'detect',
    //   'import/resolver:': {
    //     typescript: true,
    //     node: true
    //   },
    //   'babel-module': {}
    // },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      'typescript': {
        'alwaysTryTypes': true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
        'project': '/src/tsconfig.json',
      },
      node: true
    }
  }
};
