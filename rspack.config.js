const { RsdoctorRspackPlugin } = require('@rsdoctor/rspack-plugin');

module.exports = {
    plugins: [
        // 仅在 RSDOCTOR 为 true 时注册插件，因为插件会增加构建耗时
        process.env.RSDOCTOR &&
        new RsdoctorRspackPlugin({}),
    ].filter(Boolean),
};