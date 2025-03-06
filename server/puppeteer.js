import puppeteer from "puppeteer";
import fs from "fs";

const main = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });
  const page = await browser.newPage();
  await page.goto(
    `https://www.drhomeo.com/medicine/sabadilla-officinalis-homeopathic-medicine-its-use-indications-and-dosage/`,
    { waitUntil: "domcontentloaded" }
  );
  console.log("browse page");

  const elements = await page.evaluate(() => {
    const element = document.querySelector(".entry-content");

    return element.innerText;
  });
  fs.writeFile("./data.txt", elements, () => {});

  console.log({ elements });
};
main();
