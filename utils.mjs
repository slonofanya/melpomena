export function convertJsonToMd(data) {
  let mdContent = '';

  // Loop through each theme (e.g., "натхнення", "сила") in the JSON data.
  for (const theme in data) {
    if (data.hasOwnProperty(theme)) {
      // Start the HTML <details> tag for the accordion.
      mdContent += `<details>\n`;
      // Create the accordion title with a <summary> tag containing an H1 heading.
      mdContent += `  <summary><h1>${theme}</h1></summary>\n`;
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
    }
  }

  return mdContent;
}
