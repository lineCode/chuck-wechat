## 扫码支付

> 具体传入的参数参考：https://pay.weixin.qq.com/wiki/doc/api/native.php?chapter=9_1
> 其中nonce_str和trade_type这两个参数，我已经在包里加了，所以可以不传这两个参数。
> 
> 扫码支付的示例如下:

    import Wechat from 'chuck-wechat'; 
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
    const wechat = new Wechat(data, partnerkey);
    const result = wechat.codePay();
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



    