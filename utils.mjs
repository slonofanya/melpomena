export function convertJsonToHTMLFull(data) {
  let mdContent = '<!DOCTYPE html>\n';
  mdContent += '<html lang="uk">\n';
  mdContent += '<head>\n';
  mdContent += '  <meta charset="UTF-8">\n';
  mdContent += '  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n';
  mdContent += '  <link rel="stylesheet" href="index.css">\n';
  mdContent += '  <title>My Riven Heart</title>\n';
  mdContent += '</head>\n';
  mdContent += '<body>\n';

  mdContent += '<div class="container">\n';
  mdContent += '  <div class="bg">\n';
  mdContent += '    <div class="content">\n';
  mdContent += '      <div class="poems">\n';

  let poemIndex = 0;

  for (let i = 0; i < Object.keys(data).length; i++) {
    const theme = Object.keys(data)[i];

    if (data.hasOwnProperty(theme)) {
      const poems = data[theme];

      poems.forEach((poem) => {
        const formattedText = poem.текст.replace(/\n/g, '<br>');

        mdContent += `    <div class="poem" id="poem${poemIndex}">\n`;
        mdContent += `      <blockquote>${formattedText}</blockquote>\n`;
        mdContent += `    </div>\n\n`;

        poemIndex++;
      });
    }
  }

  mdContent += `  </div>\n`;
  mdContent += `</div>\n`;
  mdContent += `</div>\n`;
  mdContent += `</div>\n`;
  mdContent += '</body>\n';
  mdContent += '</html>\n';

  return mdContent;
}
