import fs from 'fs';
import fsPromises from 'fs/promises';

const endpointDirectory = 'src/endpoints/';
try {
  fs.unlinkSync(endpointDirectory + 'index.ts');
} catch {}

fs.appendFileSync(
  endpointDirectory + 'index.ts',
  '/*    Developed By Nobody    */\n',
);
const endpointFilenames = fs.readdirSync(endpointDirectory);
const fileNames = '{"fileNames": ' + JSON.stringify(endpointFilenames) + '}';
endpointFilenames.forEach((el) => {
  if (el === 'index.ts') {
    // fs.appendFileSync('export default ');
    fs.appendFileSync(
      endpointDirectory + 'index.ts',
      `export default ${fileNames}
`,
    );
  } else {
    const filename = el.split('.')[0];
    fs.appendFileSync(
      endpointDirectory + 'index.ts',
      `export { default as ${filename}} from "./${filename}.js" ;
`,
    );
  }
});
