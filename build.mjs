import fs from "fs"
import { convertJsonToHTML, convertJsonToHTMLFull } from "./utils.mjs"

const arr = [
  [
    "./public/index-short.html",
    convertJsonToHTML(JSON.parse(fs.readFileSync("./my-riven-heart.json", "utf8")))
  ],
  [
    "./public/index.html",
    convertJsonToHTMLFull(JSON.parse(fs.readFileSync("./my-riven-heart.json", "utf8")))
  ]
]

arr.forEach((item) => {
  const [filePath, html] = item;
  fs.writeFile(filePath, html, 'utf8', (err) => {
    if (err) {
      console.error(`An error occurred while writing the file: ${err}`);
      return;
    }

    console.log(`✅ Successfully created!`);
  });
})
