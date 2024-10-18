const path = require('path');
const { writeFileSync, mkdirSync } = require('fs');
require('dotenv').config();

const targetPath = path.join(__dirname, '../src/environments/environment.ts');

const envFileContent = `
    export const environment = {
        mapbox_key: "${process.env['MAPBOX_KEY']}",
        otra: "PROPIEDAD", 
    };
`;

mkdirSync(path.join(__dirname, '../src/environments'), { recursive: true });

writeFileSync(targetPath, envFileContent);