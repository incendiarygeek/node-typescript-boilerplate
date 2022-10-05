import fs from 'fs';

const endpointDirectory = 'src/endpoints/';
const fileAddress = endpointDirectory + 'index.ts';
const filelist = fs.readdirSync(endpointDirectory);

try {
  fs.unlinkSync(fileAddress);
} catch {}
fs.appendFileSync(fileAddress, 'import { endpoint } from "../types/endpoint.js";\nconst endpoints:endpoint[] = [];\n');
filelist.forEach((el) => {
  const fileName = el.split('.')[0];
  if (fileName !== 'index') {
    const string = `import ${fileName} from './${fileName}.js';\nendpoints.push(${fileName});\n`;
    fs.appendFileSync(fileAddress, string);
  }
});
fs.appendFileSync(fileAddress, '\nexport default endpoints')
// const automatedFactory = () => {
//   /* initialize an array */
// };
