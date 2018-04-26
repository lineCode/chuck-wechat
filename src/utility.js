import MD5 from 'md5';
import request from 'request';

// 生成签名
export const generateSign = ({ partnerKey, data }) => {
	let str = '';
	for (const key in data) {
		str = `${str}&${key}=${data[key]}`;
	}
	str = str.substring(1, str.length);
	str = str.split('&').sort().join('&');
	const stringSignTemp = `${str}&key=${partnerKey}`;
	const sign = MD5(stringSignTemp).toUpperCase();
	return sign;
};

// 得到一个两数之间的随机整数，包括两个数在内
const getRandomIntInclusive = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

// 随机生成一个24位的字符串
export const generateRandomStr = () => {
	const str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	let randomStr = '';
	for (let i = 0; i < 24; i++) {
		randomStr = `${randomStr}${str[getRandomIntInclusive(0, str.length - 1)]}`;
	}
	return randomStr;
};

// 生成xml字符串
export const generateXml = (data) => {
	let xmlStr = '';
	for (let key in data) {
		xmlStr = xmlStr + `<${key}>${data[key]}</${key}>`;
	}
	return `<xml>${xmlStr}</xml>`;
};

export const requestApi = ({ url, method }) => {
	return Promise.resolve({
		then(resolve, reject) {
			request(url, function (error, response, body) {

				console.log('error:', error); // Print the error if one occurred
				console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
				console.log('body:', body); // Print the HTML for the Google homepage.
			});
		}
	}) 
};

