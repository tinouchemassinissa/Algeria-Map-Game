const fs = require('fs');
const geo = JSON.parse(fs.readFileSync('public/algeria.json'));
let data = fs.readFileSync('src/data.js', 'utf8');

geo.features.forEach(f => {
  const eng = f.properties.name;
  const ar = f.properties.name_ar;
  if (!eng || !ar) return;
  // Look for "WilayaName": {
  const regex = new RegExp('("' + eng.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '": \\{)', 'g');
  data = data.replace(regex, '$1 name_ar: "' + ar + '", ');
});

fs.writeFileSync('src/data.js', data);
console.log("Done");
