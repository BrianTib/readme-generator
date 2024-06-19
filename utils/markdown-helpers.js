// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
export function renderLicenseBadge(license) {
    if (!license) { return ''; }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
export function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
export function renderLicenseSection(license) {}

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