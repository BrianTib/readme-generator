import inquirer from 'inquirer';
import { generateMarkdownBlock, getBadgeForLicense, getLinkForLicense } from './utils/markdown-helpers.js';
import { markdownStructure, MARKDOWN_SECTIONS } from './utils/markdown-structure.js';
import { writeFileSync } from 'fs';

function writeReadMeFile(answers) {
    // This will contain the contents of the markdown file
    let markdownContent = '';

    console.log(answers);

    // Add the README markdown blocks
    Object.keys(answers).forEach((key) => {
        // Skip empty values
        if (!answers[key]) { return; }

        // Check if we are adding the title block
        const isTitle = (key === MARKDOWN_SECTIONS.TITLE);
        const isLicense = (key === MARKDOWN_SECTIONS.LICENSE);

        const markdownBlock = {
            title: markdownStructure[key].title,
            // The content is just the answer from the user
            content: answers[key]
        };

        if (isTitle) {
            // Determine the title of the markdown block
            // The title itself is customizable. All of the other
            // properties should be fixed
            markdownBlock.title = answers[key];
            markdownBlock.content = null;
        } else if (isLicense) {
            // Get the URL and the badge for this license
            const licenseBadge = getBadgeForLicense(answers[key]);
            const licenseURL = getLinkForLicense(answers[key]);

            // Append the badge at the top of the file with some spacing
            markdownContent = `![License](${licenseBadge})\n\n${markdownContent}`;
            markdownBlock.content = `This project is covered under the [${answers[key]}](${licenseURL}) license.`
        }

        // Add the markdown block to the rest of the markdown body
        markdownContent += generateMarkdownBlock({
            // The heading level is predetermined
            headingLevel: markdownStructure[key].headingLevel,
            ...markdownBlock
        })
    });

    // Once we're done, create the file
    writeFileSync('EXAMPLE-README.md', markdownContent.trim());
}

// TODO: Create a function to initialize app
function init() {
    // Collect the prompt structure
    const prompts = Object.keys(markdownStructure)
        .map(key => ({ name: key, ...markdownStructure[key].prompt }));

    inquirer.prompt(prompts)
        .then(writeReadMeFile)
        .catch(error => {
            console.log({error});
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
                console.log("The prompt could not be rendered on the current environment");
            } else {
                // Something else went wrong
            }
        });
}

// Function call to initialize app
init();
