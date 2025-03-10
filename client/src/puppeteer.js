// import puppeteer from "puppeteer";
// import jsonfile from "jsonfile";

// export const main = async (searchvalue) => {
//   const browser = await puppeteer.launch({
//     headless: false,
//     defaultViewport: null,
//   });
//   const page = await browser.newPage();
//   await page.goto(
//     `https://www.drhomeo.com/medicine/${searchvalue}-homeopathic-medicine-its-use-indications-and-dosage/`,
//     { waitUntil: "domcontentloaded" }
//   );
//   console.log("browse page");

//   const elements = await page.evaluate(() => {
//     const element = document.querySelector(".entry-content");

//     return element.innerText;
//   });
//   const file = "./data.json";
//   const obj = { searchvalue: elements.replace(/[\n\r]+/g, " ") };
//   jsonfile.writeFile(file, obj, (error) => {
//     if (error) console.error(error);
//   });

//   console.log({ elements });
// };
// main();
