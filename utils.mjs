export function convertJsonToHTMLFull(data) {
  let mdContent = '<!DOCTYPE html>\n';
  mdContent += '<html lang="uk">\n';
  mdContent += '<head>\n';
  mdContent += '  <meta charset="UTF-8">\n';
  mdContent += '  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n';
  mdContent += '  <title>My Riven Heart</title>\n';
  mdContent += '  <style>\n';
  // mdContent += '    body { background: url("https://i.pinimg.com/236x/18/8c/73/188c738923b8b3fcb9502bcfc2afaa95.jpg") no-repeat; }\n';
  mdContent += '  </style>\n';
  mdContent += '</head>\n';
  mdContent += '<body>\n';
  mdContent += '<h1>My Riven Heart</h1>\n';

  // Loop through each theme (e.g., "натхнення", "сила") in the JSON data.
  for (const theme in data) {
    if (data.hasOwnProperty(theme)) {
      // Start the HTML <details> tag for the accordion.
      mdContent += `<details>\n`;
      // Create the accordion title with a <summary> tag containing an H1 heading.
      mdContent += `  <summary style="cursor: pointer;">${theme}</summary>\n`;
      // Begin an unordered list for the poems within this theme.
      mdContent += `  <ul>\n\n`;

      const poems = data[theme];
      poems.forEach(poem => {
        // To preserve line breaks within the poem text, replace each newline character (\n)
        // with an HTML line break tag (<br>).
        const formattedText = poem.текст.replace(/\n/g, '<br>');

        mdContent += `    <li>\n`;
        mdContent += `      <h2>${poem.назва}</h2>\n`;
        mdContent += `      <p><em>${poem.дата}</em></p>\n`;
        mdContent += `      <blockquote>${formattedText}</blockquote>\n`;
        mdContent += `    </li>\n\n`;
      });

      // Close the unordered list and the details tag.
      mdContent += `  </ul>\n`;
      mdContent += `</details>\n\n`;
      mdContent += `<br />\n`;
    }
  }

  mdContent += '</body>\n';
  mdContent += '</html>\n';

  return mdContent;
}

export function convertJsonToHTML(data) {
  let mdContent = '<!DOCTYPE html>\n';
  mdContent += '<html lang="uk">\n';
  mdContent += '<head>\n';
  mdContent += '  <meta charset="UTF-8">\n';
  mdContent += '  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n';
  mdContent += '  <title>My Riven Heart</title>\n';
  mdContent += '</head>\n';
  mdContent += '<body>\n';
  mdContent += '<h1>My Riven Heart</h1>\n';

  for (const theme in data) {
    if (data.hasOwnProperty(theme)) {
      mdContent += `  <p>${theme}</p>\n`;

      mdContent += `  <ul>\n\n`;

      const poems = data[theme];
      poems.forEach(poem => {
        mdContent += `    <li>\n`;
        mdContent += `      <h3>${poem.назва}</h3>\n`;
        mdContent += `    </li>\n\n`;
      });

      // Close the unordered list and the details tag.
      mdContent += `  </ul>\n`;
    }
  }

  mdContent += '</body>\n';
  mdContent += '</html>\n';

  return mdContent;
}
