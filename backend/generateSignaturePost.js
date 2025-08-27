import { createHmac } from 'crypto';

const secret = '05293c0e509a9a884b05a1f0f93b7b6332a54501';
const timestamp = Date.now().toString();
const method = 'POST';
const endpoint = '/api/en/transaction/search';
const body = JSON.stringify({ query: 'abebe' });
const dataToSign = timestamp + method + endpoint + body;

const signature = createHmac('sha256', secret).update(dataToSign).digest('base64');

console.log('Timestamp:', timestamp);
console.log('Signature:', signature);
console.log('Body:', body);