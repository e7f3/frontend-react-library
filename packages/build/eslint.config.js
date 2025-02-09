import eslint from '@eslint/js';
import storybook from '@storybook/eslint-config-storybook';
import stylisticJs from '@stylistic/eslint-plugin-js'
import stylisticTs from '@stylistic/eslint-plugin-ts'
import airbnb from 'eslint-config-airbnb';
import eslintImport from 'eslint-plugin-import';
import eslintJestPlugin from 'eslint-plugin-jest';
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    eslint.configs.recommended,
    tseslint.configs.recommended,
    {
        ignores: ["**/.eslint.config.js"],

        plugins: {
            'import': eslintImport,
            'react': react,
            'react-hooks': eslintPluginReactHooks,
            'jsx-a11y': eslintPluginJsxA11y,
            '@stylistic/js': stylisticJs,
            '@stylistic/ts': stylisticTs,
            airbnb,
            storybook,
            eslintJestPlugin,
            eslintPluginReactHooks
        },
        settings: {
            "import/resolver": {
                typescript: true,
                node: true,
            },
            'react': { 'version': 'detect', },
        },
        rules: {
            '@stylistic/ts/indent': ['error', 4],
            '@stylistic/js/key-spacing': ['error', {
                beforeColon: false,
                afterColon: true 
            }],
            "@stylistic/ts/object-curly-newline": [
                "error",
                {
                    "ObjectExpression": {
                        "minProperties": 2,
                        "multiline": true,
                        // "consistent": true 
                    },
                    "ObjectPattern": {
                        "minProperties": 2,
                        "multiline": true,
                        // "consistent": true 
                    },
                    "ImportDeclaration": {
                        "minProperties": 2,
                        "multiline": true,
                        // "consistent": true 
                    },
                    "ExportDeclaration": {
                        "minProperties": 2,
                        "multiline": true,
                        // "consistent": true 
                    }
                }
            ],
            "@stylistic/js/object-curly-spacing": ["error", "always"],
            "@stylistic/js/object-property-newline": [
                "error",
                { "allowAllPropertiesOnSameLine": true }
            ],
            // "@stylistic/js/object-property-newline": [
            //     "error", "always"
            // ],
            'import/order': [
                'error',
                {
                    groups: [
                        ['external', 'builtin'],
                        'internal',
                        ['sibling', 'parent'],
                        'index',
                    ],
                    pathGroups: [
                        {
                            pattern: '@react',
                            group: 'external',
                            position: 'before',
                        },
                        {
                            pattern: '@src/**',
                            group: 'internal',
                        },
                    ],
                    pathGroupsExcludedImportTypes: ['internal', 'react'],
                    'newlines-between': 'always',
                    alphabetize: {
                        order: 'asc',
                        caseInsensitive: true,
                    },
                },
            ],
            semi: 'off',
            'react/function-component-definition': [
                2,
                {
                    namedComponents: ['arrow-function', 'function-declaration'],
                    unnamedComponents: ['arrow-function', 'function-expression'],
                },
            ],
            'jsx-quotes': ['error', 'prefer-single'],
            'react/jsx-filename-extension': [2, { extensions: ['.tsx', '.jsx', '.js'] }],
            'import/no-unresolved': 'off',
            'react/require-default-props': 'off',
            'import/no-extraneous-dependencies': 'off',
            'no-shadow': 'off',
            '@typescript-eslint/no-shadow': 'warn',
            'import/extensions': 'off',
            'import/prefer-default-export': 'off',
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': 'warn',
            'react/jsx-props-no-spreading': 'warn',
            'no-underscore-dangle': 'off',
            'import/no-import-module-exports': 'off',
          
            'max-len': [2, {
                ignoreComments: true,
                ignoreUrls: true,
                code: 140 
            }],
            '@typescript-eslint/no-var-requires': 'warn',
            'no-use-before-define': 'off',
            '@typescript-eslint/no-use-before-define': ['error', { enums: false }],
            // 'i18next/no-literal-string': [
            //   'error',
            //   {
            //     markupOnly: true,
            //     ignoreAttribute: ['data-testid', 'to'],
            //   },
            // ],
            '@typescript-eslint/naming-convention': 'warn',
            'react/display-name': 'off',
            'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
            'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies
            'jsx-a11y/click-events-have-key-events': 'warn',
            'jsx-a11y/no-static-element-interactions': 'warn',
            // 'no-param-reassign': 'off',
            'no-param-reassign': ['warn', { props: false }],
            '@typescript-eslint/ban-ts-comment': 'warn',
            'react/jsx-no-useless-fragment': [2, { allowExpressions: true }],
        }
    }
)