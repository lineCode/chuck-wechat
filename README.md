# chuck-wechat
一个用于微信支付和微信授权的npm包（还在逐步完善当中）
## 安装
npm的安装方式

    npm install chuck-wechat
## 使用方法

    import Wechat from 'chuck-wechat';

    const params = {
        appid: 'wx1111111111',
        mch_id: '1111111111',
        partnerKey: 'xxxxxxxxx',
        appSecret: 'xxxxxxxx',
    };// 这四个参数分别对应：公众账号ID，商户号，微信商户key,微信secret.这四个参数都可以在微信开放平台拿到
    const wechat = new Wechat(params); // 初始化wechat
    const codePayResult = wechat.codePay(data); // 调用微信扫码支付，具体示例见下
    const codeLoginResult = wechat.codeLogin(code); // 微信PC扫码授权登录，具体见下


## 扫码支付

> 具体传入的参数参考：https://pay.weixin.qq.com/wiki/doc/api/native.php?chapter=9_1
> 其中nonce_str和trade_type这两个参数，我已经在包里加了，所以可以不传这两个参数。
> 
> 扫码支付的示例如下:

    import Wechat from 'chuck-wechat';

    const params = {
        appid: 'wx1111111111',
        mch_id: '1111111111',
        partnerKey: 'xxxxxxxxx',
        appSecret: 'xxxxxxxx',
    };
    const wechat = new Wechat(params);
    const data = {
        appid: 'wx1111111111',
        mch_id: '1111111111',
        body: '扫码支付',
        out_trade_no: 'DD2018051401',
        total_fee: 1,
        notify_url,
        attach,
        spbill_create_ip: '127.0.0.1',
    };
    const result = wechat.codePay(data);
    console.log(result);
> 如果调用成功的返回结果是:

    {
        return_code: [ 'SUCCESS' ],
        return_msg: [ 'OK' ],
        appid: [ 'wx1111111111' ],
        mch_id: [ '1111111111' ],
        nonce_str: [ 'bfVr6Do1oU74o1iZ' ],
        sign: [ 'B112A7790273FC9E55D6CF6803EB80D0' ],
        result_code: [ 'SUCCESS' ],
        prepay_id: [ 'wx111111111111111111111111111111' ],
        trade_type: [ 'NATIVE' ],
        code_url: [ 'weixin://wxpay/bizpayurl?pr=abcajhdka' ] // 将code_url这个属性转换为二维码
    }

## 微信扫码登录

> 具体参考文档：https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1419316505&token=&lang=zh_CN
> 首先在微信开放平台配置好授权回调域名，用户扫码成功后就会跳回这个授权域名并在域名后面带上code参数，拿到这个code参数，然后调用codeLogin方法，这个方法有两个参数，第一个参数就是code，第二个参数默认是false，如果想拿到微信用户的个人信息，例如：微信昵称，微信头像等就将这个参数传true


    import Wechat from 'chuck-wechat';

    const params = {
        appid: 'wx1111111111',
        mch_id: '1111111111',
        partnerKey: 'xxxxxxxxx',
        appSecret: 'xxxxxxxx',
    };
    const wechat = new Wechat(params);
    const code = 'xxxxxxxxxx';
    const result = wechat.codeLogin(code, true);
    console.log(result); 

> 如果调用成功的返回结果是:

    {
        "openid":"OPENID",
        "nickname":"NICKNAME",
        "sex":1,
        "province":"PROVINCE",
        "city":"CITY",
        "country":"COUNTRY",
        "headimgurl": "http://wx.qlogo.cn/mmopen/g3MonUZtNHkdmzicIlibx6iaFqAc56vxLSUfpb6n5WKSYVY0ChQKkiaJSgQ1dZuTOgvLLrhJbERQQ4eMsv84eavHiaiceqxibJxCfHe/0",
        "privilege":[
        "PRIVILEGE1",
        "PRIVILEGE2"
        ],
        "unionid": " o6_bmasdasdsad6_2sgVt7hMZOPfL"

    }
    