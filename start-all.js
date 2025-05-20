const { exec } = require('child_process');

const backend = exec('cd backend && node index.js');
const frontend = exec('cd frontend && npm start');

backend.stdout.on('data', (data) => {
  console.log(`[Backend]: ${data}`);
});

backend.stderr.on('data', (data) => {
  console.error(`[Backend Error]: ${data}`);
});

frontend.stdout.on('data', (data) => {
  console.log(`[Frontend]: ${data}`);
});

frontend.stderr.on('data', (data) => {
  console.error(`[Frontend Error]: ${data}`);
});

backend.on('close', (code) => {
  console.log(`[Backend]: Process exited with code ${code}`);
});

frontend.on('close', (code) => {
  console.log(`[Frontend]: Process exited with code ${code}`);
});
