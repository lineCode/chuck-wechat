
import { parseString } from 'xml2js';
import { generateSign, generateRandomStr, generateXml, requestApi } from './utility';
import { unifiedorderUrl } from './config';

// { appId, appSecret, mchId, partnerKey, notifyUrl }
class Wechat {
	constructor(params, partnerKey) {
		this.params = params;
	}

	async codePay() {
		const obj = {
			nonce_str: generateRandomStr(),
			trade_type: 'NATIVE',
		};
		const data = this.params;
		Object.assign(data, obj);
		const sign = generateSign({ data, partnerKey });
		Object.assign(data, { sign });
		const xml = generateXml(data);
		const result = await requestApi({ url, method: 'post' });
	}
	 


}

export default Wechat;
