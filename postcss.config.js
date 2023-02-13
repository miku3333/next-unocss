module.exports = {
    plugins: {
        'postcss-flexbugs-fixes': {},
        'postcss-preset-env': {
            autoprefixer: {
                flexbox: 'no-2009',
            },
            stage: 3,
            features: {
                'custom-properties': false,
            },
        },
        'postcss-plugin-px2rem': {
            // 换算基数， 默认100
            rootValue: 16,
            // （布尔值）允许在媒体查询中转换px
            mediaQuery: false,
            // unitPrecision: 5, //允许REM单位增长到的十进制数字。
            // propWhiteList: [],  //默认值是一个空数组，这意味着禁用白名单并启用所有属性。
            // propBlackList: [], //黑名单
            propBlackList: ['background-position', 'box-shadow'],
            // 默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)\/如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
            // exclude: false,
            exclude: false,
            // 要忽略并保留为px的选择器
            selectorBlackList: ['ignore-rem'],
            // ignoreIdentifier: false,  //（boolean/string）忽略单个属性的方法，启用ignoreidentifier后，replace将自动设置为true。
            // replace: true, // （布尔值）替换包含REM的规则，而不是添加回退。
            // 设置要替换的最小像素值(3px会被转rem)。 默认 0
            minPixelValue: 1
        }
    },
};

