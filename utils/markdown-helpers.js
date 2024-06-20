import { licenses } from "./markdown-structure.js";

export function getBadgeForLicense(license) {
    return licenses[license]?.badge;
}

export function getLinkForLicense(license) {
    return licenses[license]?.url;
}

// TODO: Create a function to generate markdown for README
export function generateMarkdownBlock({ headingLevel = 1, title, content }) {
    // We need at least a title to make a markdown block
    if (!title) { throw Error('Markdown block has no title!'); }
    
    // Constrain the heading level (1 - 6)
    headingLevel = Math.min(6, Math.max(1, headingLevel));
    // Quick one-liner for generating the pound characters
    // according to the `headingLevel`
    const heading = new Array(headingLevel).fill("#").join("");

    // Create the initial block from the title
    let block = `${heading} ${title || 'Title'}\n`;

    // If we have content, append it to the block
    // If not, add an extra empty line which looks cleaner
    block += content ? `\n${content}\n\n` : '\n';

    return block;
}