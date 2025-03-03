import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintPluginImportX from 'eslint-plugin-import-x'
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript'
import eslintPluginReact from 'eslint-plugin-react'
import * as eslintPluginReactHooks from 'eslint-plugin-react-hooks'

/** @type import('typescript-eslint').ConfigArray */
const tuonoEslintConfig = tseslint.config(
  {
    ignores: [
      // #region shared
      '**/dist',
      '**/out',
      '**/.tuono',
    ],
  },
  {
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
    },
  },

  eslint.configs.recommended,

  eslintPluginImportX.flatConfigs.recommended,
  eslintPluginImportX.flatConfigs.typescript,

  // eslint-disable-next-line import-x/no-named-as-default-member
  tseslint.configs.strictTypeChecked,

  // @ts-expect-error flat is optional but always defined on runtime
  eslintPluginReact.configs.flat.recommended,
  eslintPluginReact.configs.flat['jsx-runtime'],

  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    plugins: {
      'react-hooks': eslintPluginReactHooks,
    },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',
    },
  },

  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    settings: {
      'import-x/resolver-next': [createTypeScriptImportResolver()],
      react: {
        version: 'detect',
      },
    },
    rules: {
      // #region @typescript-eslint
      '@typescript-eslint/array-type': ['error', { default: 'generic' }],
      '@typescript-eslint/consistent-type-definitions': 'error',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports' },
      ],
      '@typescript-eslint/explicit-module-boundary-types': 'error',
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/method-signature-style': ['error', 'property'],
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'typeParameter',
          format: ['PascalCase'],
          leadingUnderscore: 'forbid',
          trailingUnderscore: 'forbid',
          custom: {
            regex: '^(T|T[A-Z][A-Za-z]+)$',
            match: true,
          },
        },
      ],
      '@typescript-eslint/no-empty-function': 'error',
      '@typescript-eslint/no-empty-interface': 'error',

      '@typescript-eslint/no-inferrable-types': [
        'error',
        { ignoreParameters: true },
      ],
      '@typescript-eslint/restrict-template-expressions': [
        'error',
        {
          allowAny: false,
          allowBoolean: false,
          allowNever: false,
          allowNullish: false,
          allowNumber: true,
          allowRegExp: false,
        },
      ],
      // #endregion @typescript-eslint

      // #region import
      'import-x/default': 'error',
      'import-x/export': 'error',
      'import-x/namespace': 'error',
      'import-x/newline-after-import': 'error',
      'import-x/no-cycle': 'error',
      'import-x/no-duplicates': 'error',
      'import-x/no-named-as-default-member': 'error',
      'import-x/no-unused-modules': 'error',
      'import-x/order': [
        'error',
        {
          'newlines-between': 'always-and-inside-groups',
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
          ],
        },
      ],
      // #endregion import

      // #region misc
      /**
       * @todo some of this might be removed.
       *       They are handled by other plugin and / or typescript
       */
      'no-case-declarations': 'error',
      'no-empty': 'error',
      'no-prototype-builtins': 'error',
      'no-redeclare': 'error',
      'no-shadow': 'error',
      'no-undef': 'off',
      'sort-imports': 'off',
      // #endregion misc
    },
  },
)

export default tuonoEslintConfig
