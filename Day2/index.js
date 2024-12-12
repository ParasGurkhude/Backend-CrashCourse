const fs = require('fs');
const path = require('path');

const operation = process.argv[2];
const file = process.argv[3];
const content = process.argv[4];

switch (operation) {
  case 'create':
    fs.writeFile(file, '', (err) => {
      if (err) {
        return console.error('Error creating file:', err);
      }
      console.log(`File '${file}' created`);
    });
    break;

  case 'read':
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        return console.error('Error reading file:', err);
      }
      console.log(`Contents of '${file}':\n${data}`);
    });
    break;

  case 'append':
    fs.appendFile(file, `\n${content}`, (err) => {
      if (err) {
        return console.error('Error appending to file:', err);
      }
      console.log(`Content appended to the file '${file}'`);
    });
    break;

  case 'delete':
    fs.unlink(file, (err) => {
      if (err) {
        return console.error('Error deleting file:', err);
      }
      console.log(`File '${file}' deleted`);
    });
    break;

  case 'rename':
    fs.rename(file, content, (err) => {
      if (err) {
        return console.error('Error renaming file:', err);
      }
      console.log(`File '${file}' renamed to '${content}'`);
    });
    break;

  case 'list':
    fs.readdir(process.cwd(), (err, files) => {
      if (err) {
        return console.error('Error reading directory:', err);
      }
      console.log('Files and directories in the current directory:');
      files.forEach(file => {
        console.log(file);
      });
    });
    break;

  default:
    console.log(`Invalid operation '${operation}'`);
}
