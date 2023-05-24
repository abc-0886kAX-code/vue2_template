/*
 * @Author: maggot-code
 * @Date: 2021-02-28 13:25:16
 * @LastEditors: zhangyang
 * @LastEditTime: 2021-07-28 10:19:48
 * @Description: babel config
 */
module.exports = {
    presets: [
        '@vue/cli-plugin-babel/preset',
        "@babel/preset-env"
    ],
    plugins: [
        // "transform-object-rest-spread",
        [
            "component",
            {
                "libraryName": "element-ui",
                "styleLibraryName": "theme-chalk"
            }
        ],
        "lodash",
    ]
}
