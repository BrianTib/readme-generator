// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import { generateMarkdownBlock } from './utils/markdown-helpers.js';
import { markdownGeneratorStructure } from './utils/markdown-structure.js';
import { writeFileSync } from 'fs';

// TODO: Create a function to write README file
function writeReadMeFile(data) {
    // This will contain the contents of the markdown file
    let markdownContent = '';

    console.log(data);

    // Add the title
    markdownContent += generateMarkdownBlock({
        title: data.name || '<Your-Project-Title>'
    });

    if (data.description) {
        markdownContent += generateMarkdownBlock({
            headingLevel: 2,
            title: 'Description',
            content: data.description
        });
    }

    if (data.installationInstruction) {
        markdownContent += generateMarkdownBlock({
            headingLevel: 2,
            title: 'Installation',
            content: data.installationInstruction
        });
    }

    if (data.usage) {
        markdownContent += generateMarkdownBlock({
            headingLevel: 2,
            title: 'Usage',
            content: data.usage
        });
    }

    if (data.usage) {
        markdownContent += generateMarkdownBlock({
            headingLevel: 2,
            title: 'Usage',
            content: data.usage
        });
    }
    if (data.usage) {
        markdownContent += generateMarkdownBlock({
            headingLevel: 2,
            title: 'Usage',
            content: data.usage
        });
    }

    // Once we're done, create the file
    writeFileSync('README.md', markdownContent.trim());
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(markdownQuestions)
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
