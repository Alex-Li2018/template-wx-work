module.exports = {
    root: true,
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 2017,
        sourceType: 'module'
    },
    plugins: [
        'vue'
    ],
    env: {
        browser: true,
        es6: true,
    },
    extends: ['plugin:vue/recommended', 'plugin:vue/strongly-recommended'],
    settings: {},
    globals: {
        'wx': true,
        'uni': true,
        'require': true,
        '__NODE_ENV__': true,
        '__TABBAR_CONF__': true
    },
    // add your custom rules here
    rules: {
        'block-spacing': ['error', 'always'],
        'no-unused-vars': ['error', {'vars': 'all'}],
        // 'function-paren-newline': ['error', 'never'],
        // 'no-use-before-define': ['error', { 'functions': true, 'classes': true }],
        // 单引号
        'quotes': ['error', 'single'],
        // 尾部逗号设置
        'comma-dangle': ['error', 'never'],
        // 缩进
        'indent': ['error', 4],
        // 禁止使用debugger
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        // 禁止使用console（生产环境）
        'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
        // 要求 switch 语句中有 default 分支
        'default-case': 'error',
        // 禁用 eval()
        'no-eval': 'error',
        // 禁用 __proto__ 属性
        'no-proto': 'error',
        // 禁止使用不带 await 表达式的 async 函数
        'require-await': 'error',
        // 关闭 在Vue组件中为Prop名称强制使用特定大小写或者特定连接符
        'vue/prop-name-casing': 0,
        // 关闭 template每行的最大属性数
        'vue/max-attributes-per-line': 0,
        // 关闭 在单行元素的内容之前和之后需要换行
        'vue/singleline-html-element-content-newline': 0,
        // 关闭 在多行元素的内容之前和之后需要换行
        'vue/multiline-html-element-content-newline': 0,
        // 在标签的右括号之前不允许换行
        'vue/html-closing-bracket-newline': ['error', {
            'singleline': 'never',
            'multiline': 'never'
        }],
        // 关闭属性链接符校验
        'vue/attribute-hyphenation': 0,
        'semi': 'error',
        'prefer-const': 'error',
        'no-var': 'error'
    }
};
