
import { parseString } from 'xml2js';
import { generateSign, generateRandomStr, generateXml, requestApi } from './utility';
import { unifiedorderUrl } from './config';
import request from 'request-promise';

// { appId, appSecret, mchId, partnerKey, notifyUrl }
class Wechat {
	constructor(params, partnerKey) {
		this.params = params;
		this.partnerKey = partnerKey;
	}

	async codePay() {
		const obj = {
			nonce_str: generateRandomStr(),
			trade_type: 'NATIVE',
		};
		const data = this.params;
		Object.assign(data, obj);
		const sign = generateSign({ data, partnerKey: this.partnerKey });
		Object.assign(data, { sign });
		const xml = generateXml(data);
		const result = await request({
			method: 'post',
			uri: unifiedorderUrl,
			body: xml,
		});
		let wechatObj = null;
		parseString(result.toString(), (err, xml) => {
			console.log('3333', err, xml);
			wechatObj = xml.xml;
		});
		return wechatObj;
	}
	 


}

export default Wechat;
