module.exports = {
    'env': {
        'browser': true,
        'node': true,
        'es6': true, // 使用require就不会报错了
        'commonjs': false,
    },
    // 配置解析器
    'parser': 'babel-eslint',
    'parserOptions': {
        'ecmaVersion': 6,
        'sourceType': 'module',
    },
    'extends': 'eslint:recommended',

    // 全局变量
    'globals': {
    // 小程序使用的一些全局变量
        'App': true,
        'Page': true,
        'Component': true,
        'Behavior': true,
        'wx': true,
        'getApp': true,
        'getCurrentPages': true,
    },

    /**
     * "off" 或 0 - 关闭规则
     * "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出),
     * "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
     */
    rules: {
        'accessor-pairs': 2,
        'arrow-spacing': [2, {
            'before': true,
            'after': true
        }],
        // 禁止或强制在代码块中开括号前和闭括号后有空格
        'block-spacing': [2, 'always'],

        // 强制在代码块中使用一致的大括号风格
        'brace-style': [2, '1tbs', {
            'allowSingleLine': true
        }],

        // 强制使用骆驼拼写法命名约定
        'camelcase': [0, {
            'properties': 'always'
        }],

        // 去掉不允许末尾,
        // 'comma-dangle': [2, 'never'],

        // 强制在逗号前后使用一致的空格
        'comma-spacing': [2, {
            'before': false,
            'after': true
        }],

        // 强制使用一致的逗号风格
        'comma-style': [2, 'last'],

        // 要求在构造函数中有 super() 的调用
        'constructor-super': 2,

        // 强制所有控制语句使用一致的括号风格
        'curly': [2, 'multi-line'],
        'dot-location': [2, 'property'],
        'eol-last': 2,

        // 要求使用 === 和 !==
        'eqeqeq': 0,
        'generator-star-spacing': [2, {
            'before': true,
            'after': true
        }],
        'handle-callback-err': [2, '^(err|error)$'],
        // 空四个格
        'indent': [2, 4, {
            'SwitchCase': 1
        }],

        // 强制在 JSX 属性中一致地使用双引号或单引号
        'jsx-quotes': [2, 'prefer-single'],

        // 强制在对象字面量的键和值之间使用一致的空格
        'key-spacing': [2, {
            'beforeColon': false,
            'afterColon': true
        }],
        'keyword-spacing': [2, {
            'before': true,
            'after': true
        }],
        'new-cap': [2, {
            'newIsCap': true,
            'capIsNew': false
        }],
        'new-parens': 2,
        'no-array-constructor': 2,
        'no-caller': 2,
        'no-console': 0,
        'no-class-assign': 2,
        'no-cond-assign': 2,
        'no-const-assign': 2,
        'no-control-regex': 0,
        'no-delete-var': 2,
        'no-dupe-args': 2,
        'no-dupe-class-members': 2,
        'no-dupe-keys': 2,
        'no-duplicate-case': 2,
        'no-empty-character-class': 2,
        'no-empty-pattern': 2,
        'no-eval': 2,
        'no-ex-assign': 2,
        'no-extend-native': 2,
        'no-extra-bind': 2,
        'no-extra-boolean-cast': 2,
        'no-extra-parens': [2, 'functions'],
        'no-fallthrough': 2,
        'no-floating-decimal': 2,
        'no-func-assign': 2,
        'no-implied-eval': 2,
        'no-inner-declarations': [2, 'functions'],
        'no-invalid-regexp': 2,
        'no-irregular-whitespace': 2,
        'no-iterator': 2,
        'no-label-var': 2,
        'no-labels': [2, {
            'allowLoop': false,
            'allowSwitch': false
        }],
        'no-lone-blocks': 2,
        'no-mixed-spaces-and-tabs': 2,
        'no-multi-spaces': 2,
        'no-multi-str': 2,
        'no-multiple-empty-lines': [2, {
            'max': 1
        }],
        'no-native-reassign': 2,
        'no-negated-in-lhs': 2,
        'no-new-object': 2,
        'no-new-require': 2,
        'no-new-symbol': 2,
        'no-new-wrappers': 2,
        'no-obj-calls': 2,
        'no-octal': 2,
        'no-octal-escape': 2,
        'no-path-concat': 2,
        'no-proto': 2,
        'no-redeclare': 2,
        'no-regex-spaces': 2,
        'no-return-assign': [2, 'except-parens'],
        'no-self-assign': 2,
        'no-self-compare': 2,
        'no-sequences': 2,
        'no-shadow-restricted-names': 2,
        'no-spaced-func': 2,
        'no-sparse-arrays': 2,
        'no-this-before-super': 2,
        'no-throw-literal': 2,
        'no-trailing-spaces': 2,
        'no-undef': 2,
        'no-undef-init': 2,
        'no-unexpected-multiline': 2,
        'no-unmodified-loop-condition': 2,
        'no-unneeded-ternary': [2, {
            'defaultAssignment': false
        }],
        'no-unreachable': 2,
        'no-unsafe-finally': 2,
        'no-unused-vars': [2, {
            'vars': 'all',
            'args': 'none'
        }],
        'no-useless-call': 2,
        'no-useless-computed-key': 2,
        'no-useless-constructor': 2,
        'no-useless-escape': 0,
        'no-whitespace-before-property': 2,
        'no-with': 2,
        'one-var': [2, {
            'initialized': 'never'
        }],
        'operator-linebreak': [2, 'after', {
            'overrides': {
                '?': 'before',
                ':': 'before'
            }
        }],
        'padded-blocks': [2, 'never'],

        // 强制使用一致的反勾号、双引号或单引号
        'quotes': [2, 'single', {
            'avoidEscape': true,
            'allowTemplateLiterals': true
        }],

        // 语句强制分号结尾
        'semi': [2, 'always'],
        // 强制分号之前和之后使用一致的空格
        'semi-spacing': [2, {
            'before': false,
            'after': true
        }],

        'space-before-blocks': [2, 'always'],
        'space-in-parens': [2, 'never'],
        'space-infix-ops': 2,
        'space-unary-ops': [2, {
            'words': true,
            'nonwords': false
        }],

        // 要求或禁止在注释前有空白
        'spaced-comment': [2, 'always', {
            'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']
        }],
        'template-curly-spacing': [2, 'never'],
        'use-isnan': 2,
        'valid-typeof': 2,
        'wrap-iife': [2, 'any'],
        'yield-star-spacing': [2, 'both'],
        'yoda': [2, 'never'],
        'prefer-const': [2, {
            'destructuring': 'all'
        }],
        'object-curly-spacing': [2, 'always', {
            objectsInObjects: false
        }],
        'array-bracket-spacing': [2, 'never'],
    }

};
