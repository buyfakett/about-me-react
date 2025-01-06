module.exports = {
    tabWidth: 4, // 每个缩进的空格数为4个
    semi: true, // 语句末尾加分号
    singleQuote: true, // 使用单引号（'）而不是双引号（"）
    arrowParens: 'always', // 在箭头函数参数中始终加圆括号，即使参数只有一个
    quoteProps: 'as-needed', // 对象的属性名只有在必要时才使用引号
    printWidth: 80, // 每行的最大字符数为80，超出会自动换行
    trailingComma: 'all', // 不在对象、数组的最后一个元素后添加逗号
    bracketSameLine: true, // JSX 中的闭合标签与最后一个属性保持在同一行
    jsxBracketSameLine: false, // JSX 元素的闭合标签放在同一行（仅限于多行元素）
    bracketSpacing: true,  // 让花括号内有空格
};