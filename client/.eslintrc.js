module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
    },
    'extends': 'plugin:react/recommended',
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true,
        },
        'ecmaVersion': 'latest',
        'sourceType': 'module',
    },
    'plugins': [
        'react',
    ],
    'rules': {
        'quotes': ['error', 'single'],
        'comma-dangle': ['error', 'always-multiline'],
        'semi': ['error', 'always'],
        'no-unused-vars': ['error', {
            ignoreRestSiblings: true,
            argsIgnorePattern: '^_',
        }],
    },
};
