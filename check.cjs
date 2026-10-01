const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./public/algeria.json', 'utf8'));
const features = data.features.map(f => f.properties.name);
const dataFile = fs.readFileSync('./src/data.js', 'utf8');
const wilayaNames = [...dataFile.matchAll(/\"([^\"]+)\":\s*\{/g)].map(m => m[1]);
const missingInJson = wilayaNames.filter(w => !features.includes(w));
const missingInData = features.filter(w => !wilayaNames.includes(w));
console.log('Missing in JSON:', missingInJson);
console.log('Missing in Data:', missingInData);
