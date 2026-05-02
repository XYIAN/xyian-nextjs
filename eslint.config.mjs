import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

export default defineConfig([
    ...nextVitals,
    ...nextTs,
    {
        rules: {
            '@typescript-eslint/no-explicit-any': 'error',
            '@typescript-eslint/no-unused-vars': [
                'warn',
                { argsIgnorePattern: '^_' },
            ],
            // React Compiler / ESLint plugin: allow gradual cleanup without blocking CI
            'react-hooks/set-state-in-effect': 'warn',
            'react-hooks/static-components': 'warn',
            'react-hooks/preserve-manual-memoization': 'warn',
        },
    },
    {
        files: ['server/**/*.js'],
        rules: {
            '@typescript-eslint/no-require-imports': 'off',
        },
    },
    globalIgnores([
        'node_modules/**',
        '.next/**',
        'out/**',
        'build/**',
        'next-env.d.ts',
        // Misplaced route-like files under public (static asset folder only)
        'public/**/*.tsx',
    ]),
]);
