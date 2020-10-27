module.exports = {
    // https://github.com/conventional-changelog/commitlint/blob/master/%40commitlint/config-conventional/index.js
    extends: ['@commitlint/config-conventional'],
    rules: {
        'subject-case': [2, 'always', 'sentence-case'],
        'type-enum': [
            2,
            'always',
            [
                'feat',
                'fix',
                'refactor',
                'dev',
                'ci',
                'docs',
                'test',
                'revert',
                'wip',
            ],
        ],
    },
};
