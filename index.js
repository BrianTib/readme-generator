import inquirer from 'inquirer';
import colors from 'colors';
import { generateMarkdownBlock, getBadgeForLicense, getLinkForLicense } from './utils/markdown-helpers.js';
import { markdownStructure, MARKDOWN_SECTIONS } from './utils/markdown-structure.js';
import { writeFileSync } from 'fs';

function writeReadMeFile(answers) {
    // This will hold the README as a string
    let markdownContent = '';

    console.log("Generating README with these options:", answers);
    const answerProperties = Object.keys(answers).filter(key => answers[key]);

    // Add the README markdown blocks
    const markdownSections = answerProperties.map((key) => {
        // Default markdownBlock structure
        const markdownBlock = {
            title: markdownStructure[key].title,
            // The content is just the answer from the user
            content: answers[key]
        };

        switch (key) {
            // If we are adding the title block...
            case MARKDOWN_SECTIONS.TITLE:
                // Determine the title of the markdown block
                // The title itself is customizable. All of the other
                // properties should be fixed
                markdownBlock.title = answers[key];
                markdownBlock.content = null;
            break;

            case MARKDOWN_SECTIONS.LICENSE:
                // Get the URL and the badge for this license
                const licenseBadge = getBadgeForLicense(answers[key]);
                const licenseURL = getLinkForLicense(answers[key]);

                if (licenseBadge && licenseURL) {
                    // Append the badge at the top of the file with some spacing
                    markdownContent = `![License](${licenseBadge})\n\n`;
                    markdownBlock.content = `This project is protected under the [${answers[key]}](${licenseURL}) license.`;
                }
            break;

            // For the questions section, add a link to the user's GitHub Profile
            case MARKDOWN_SECTIONS.QUESTIONS:
                const [username, email] = answers[key].split(" ");

                // Add the github and email link
                markdownBlock.content = `For additional questions contact me through [GitHub](https://github.com/${username}) or [via email](mailto:${email})`;
            break;
        }

        // Add the markdown block to the rest of the markdown body
        return {
            // The heading level is predetermined
            headingLevel: markdownStructure[key].headingLevel,
            // Append the title and the body of the markdown block
            ...markdownBlock
        };
    });

    // Add the table of contents after the title
    markdownSections.splice(2, 0, {
        headingLevel: 2,
        title: 'Table of contents',
        content: answerProperties.map((sectionName) => `- [${sectionName}](#${sectionName.toLowerCase()})`).join("\n")
    });

    // Concatenate all of the sections as strings
    markdownContent += markdownSections.map(generateMarkdownBlock)
        .join("")
        .trim();

    // Once we're done, create the file
    writeFileSync('README.md', markdownContent.trim());
}

// TODO: Create a function to initialize app
function init() {
    // Collect the prompt structure
    const prompts = Object.keys(markdownStructure)
        .map(key => ({ name: key, ...markdownStructure[key].prompt }));

    console.log(colors.brightWhite("[README Generator]".underline), "(" + "Skipped questions aren't included in the final readme".grey + ")");

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
