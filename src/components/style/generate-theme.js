import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to the theme.json file
const themeFile = path.resolve(__dirname, './theme.json');
const themeData = JSON.parse(fs.readFileSync(themeFile, 'utf-8'));

// Function to transform keys (e.g., replacing '.' with '-')
const transformKeys = (obj) => {
  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    const newKey = key.replace(/\./g, '');  // Replace '.' in keys to match theme format
    result[newKey] = value;
  }
  return result;
};

// Construct the theme object with proper type structure
const themeObject = {
  token: transformKeys(themeData.token),  // Apply transformation to token object
  components: themeData.components  // Use components as is from JSON
};

// Create the output TypeScript content with ThemeConfig type
const tsContent = `
import { ThemeConfig } from 'antd/es/config-provider/context';

// Auto-generated theme file
export const theme: ThemeConfig = ${JSON.stringify(themeObject, null, 2)};
`;



// Write the TypeScript file to src/theme.ts
const outputFile = path.resolve(__dirname, './theme.ts');
fs.writeFileSync(outputFile, tsContent.trim());

console.log('Theme file generated successfully!');