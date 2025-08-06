import fs from "fs"
import { convertJsonToMd } from "./utils.mjs"

const filePath = "./my-riven-heart.json"
const outputFilePath = "./public/index.html"

const fileContent = fs.readFileSync(filePath, "utf8")
const json = JSON.parse(fileContent)
const markdownOutput = convertJsonToMd(json);

fs.writeFile(outputFilePath, markdownOutput, 'utf8', (err) => {
  if (err) {
    console.error(`An error occurred while writing the file: ${err}`);
    return;
  }

  console.log(`✅ Successfully created ${outputFilePath}!`);
});
