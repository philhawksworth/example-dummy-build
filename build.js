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

const PIM_API_TOKEN = "123456";
const CMS_API_SECRET = "ABC1123";

console.log(chalk.green('\nFetching data from APIs...'));
console.log(chalk.yellow("-------------------------"));
console.log(chalk.yellow(`PIM_API_TOKEN: ${PIM_API_TOKEN}`));
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
