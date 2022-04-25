const fs = require('fs');
const path = require('path');

// 这里配置基本信息
const AlipayBaseConfig = {
    appId: '2021000119665878', // 应用 ID
    privateKey: fs.readFileSync(path.join(__dirname, './sandbox-pem/private_pem2048.txt'), 'ascii'),
    alipayPublicKey: 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAkGWIPSW7/BMXIornyRW32WUuYf3nQjsph2TO+yr7JCOElkvuiWaLxffSKA2ZdR/Aeb1UF0ZOMmZpywtG7s7CFHSTECCxLc9Hb926YJ3EYAJFWUq9ygku80tj0YgvNIvwkCnzNeyFHEd/bDW4rI2CrDa2qJ1Prr+5XPykizXLIXG4kOvZC1+t4sUkUJR0M7FM63fvI3ffWRXiXSzTotQuWhwnUUr7LqB7F0oO4Q59fLhovf3s/3+EdABcB/4VCYyP/z8cD5a+9O10aGYQalhnN7wLXXLSYebQ7n6XJqs1FTrYGYZC7/th96dDftiBSo/4Q5r2T0ej3xiQPkGGC5/JVQIDAQAB',// 支付宝公钥
    gateway: 'https://openapi.alipaydev.com/gateway.do', // 支付宝的应用网关
    charset:'utf-8',
    version:'1.0',
    signType:'RSA2'
};

module.exports = {
    AlipayBaseConfig: AlipayBaseConfig,
}