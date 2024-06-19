// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import { generateMarkdownBlock } from './utils/markdown-helpers.js';
import { markdownStructure, MARKDOWN_SECTIONS } from './utils/markdown-structure.js';
import { writeFileSync } from 'fs';

// TODO: Create a function to write README file
function writeReadMeFile(answers) {
    // This will contain the contents of the markdown file
    let markdownContent = '';

    console.log(answers);

    // Add the README markdown blocks
    Object.keys(answers).forEach((key) => {
        // Check if we are adding the title block
        const isTitle = (key === MARKDOWN_SECTIONS.TITLE);

        // Add the markdown block to the rest of the markdown body
        markdownContent += generateMarkdownBlock({
            // The heading level is predetermined
            headingLevel: markdownStructure[key].headingLevel,
            // Determine the title of the markdown block
            // The title itself is customizable. All of the other
            // properties should be fixed
            title: isTitle ? answers[key] : markdownStructure[key].title,
            // The content is just the answer from the user
            content: isTitle ? null : answers[key]
        })
    });

    // Once we're done, create the file
    writeFileSync('README.md', markdownContent.trim());
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
