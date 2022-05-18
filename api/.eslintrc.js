module.exports = {
    'extends': 'eslint:recommended',
    'env': {
        'browser': false,
        'es2021': true,
        'node': true,
    },
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module',
    },
    'plugins': [
        '@typescript-eslint',
    ],
    'rules': {
        'quotes': ['error', 'single'],
        'comma-dangle': ['error', 'always-multiline'],
        'semi': ['error', 'always'],
    },
};
