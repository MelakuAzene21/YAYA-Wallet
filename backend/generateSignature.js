import { createHmac } from 'crypto';

const secret = '05293c0e509a9a884b05a1f0f93b7b6332a54501';
const timestamp = Date.now().toString();
const method = 'GET';
const endpoint = '/api/en/transaction/find-by-user?p=1&userId=test-user';
const body = '';
const dataToSign = timestamp + method + endpoint + body;

const signature = createHmac('sha256', secret).update(dataToSign).digest('base64');

console.log('Timestamp:', timestamp);
console.log('Signature:', signature);