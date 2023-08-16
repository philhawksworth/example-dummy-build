import chalk from 'chalk';



const pages = [
  "home",
  "about",
  "blog",
  "store",
  "checkout",
  "basket"
];

const languages = [
  "en-us",
  "en-uk",
  // "es",
  // "fr",
  // "de"
];

const PRODUCT_DATA_API_TOKEN = process.env.PRODUCT_DATA_API_TOKEN;
const CMS_API_SECRET = process.env.CMS_API_SECRET;

console.log(chalk.green('\nFetching data from APIs...'));
console.log(chalk.yellow("-------------------------"));
console.log(chalk.yellow(`PRODUCT_DATA_API_TOKEN: ${PRODUCT_DATA_API_TOKEN}`));
console.log(chalk.yellow(`CMS_API_SECRET: ${CMS_API_SECRET}`));
console.log(chalk.yellow("-------------------------"));

console.log(chalk.blue('Generating site assets'));
console.log("Building locales...");
for (const lang in languages) {
  for (const page in pages) {
    console.log(`${chalk.blue('✔')} /${languages[lang]}/${pages[page]}/`);
  }
}
console.log("\nAsset generation...");
console.log(`${chalk.blue('✔')} Images generated`);
console.log(`${chalk.blue('✔')} Scripts compiled`);
console.log(`${chalk.blue('✔')} CSS compiled`);

console.log(chalk.white("-------------------------"));
console.log(chalk.green('Build complete'));
console.log(chalk.white("-------------------------\n"));
