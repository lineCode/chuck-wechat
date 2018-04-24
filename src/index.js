import MD5 from 'md5';
import { parseString } from 'xml2js';

// { appId, appSecret, mchId, partnerKey, notifyUrl }
class Wechat {
	constructor(params) {
		this.params = params;
	}
	
	// 生成签名
	generateSign() {
		const { partnerKey } = this.params;
		let str = '';
		for (const key in data) {
			str = `${str}&${key}=${data[key]}`;
		}
		str = str.substring(1, str.length);
		str = str.split('&').sort().join('&');
		const stringSignTemp = `${str}&key=${partnerKey}`;
		const sign = MD5(stringSignTemp).toUpperCase();
		return sign;
	}

	// 得到一个两数之间的随机整数，包括两个数在内
	getRandomIntInclusive(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	// 随机生成一个24位的字符串
	generateRandomStr() {
		const str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
		let randomStr = '';
		for (let i = 0; i < 24; i++) {
			randomStr = `${randomStr}${str[this.getRandomIntInclusive(0, str.length - 1)]}`;
		}
		return randomStr;
	}

	// 生成xml字符串
	generateXml(data) {
		
	}
}

export default Wechat;
