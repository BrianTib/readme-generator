import { readFileSync } from 'fs';
export const licenses = JSON.parse(readFileSync('./utils/LICENSES.json', 'utf-8'));

// Enumerators for the sections of the generated markdown
export const MARKDOWN_SECTIONS = {
    TITLE: 'TITLE',
    DESCRIPTION: 'DESCRIPTION',
    TABLE_OF_CONTENTS: 'TABLE_OF_CONTENTS',
    INSTALLATION: 'INSTALLATION',
    USAGE: 'USAGE',
    LICENSE: 'LICENSE',
    CONTRIBUTING: 'CONTRIBUTING',
    TESTS: 'TESTS',
    QUESTIONS: 'QUESTIONS'
};

// Structure of the generated markdown
export const markdownStructure = {
    [MARKDOWN_SECTIONS.TITLE]: {
        headingLevel: 1,
        // This is later changed by the user-supplied value
        title: 'Title',
        prompt: {
            type: 'input',
            message: "What is your project title?",
            default: "My new project"
        }
    },
    [MARKDOWN_SECTIONS.DESCRIPTION]: {
        headingLevel: 2,
        title: 'Description',
        prompt: {
            type: 'input',
            message: "What is your project description?",
            default: null,
        }
    },
    [MARKDOWN_SECTIONS.INSTALLATION]: {
        headingLevel: 2,
        title: 'Installation',
        prompt: {
            type: 'input',
            message: "What are your project's installation instructions?",
            default: null,
        }
    },
    [MARKDOWN_SECTIONS.USAGE]: {
        headingLevel: 2,
        title: 'Usage',
        prompt: {
            type: 'input',
            message: "How can your repo be used?",
            default: null,
        }
    },
    [MARKDOWN_SECTIONS.LICENSE]: {
        headingLevel: 2,
        title: 'License',
        prompt: {
            type: 'list',
            message: "Chose a license",
            choices: [
                { name: 'None', value: null },
                // Dynamically add the licenses as choices
                ...Object.keys(licenses).map(key => ({ name: key, value: key }))
            ]
        }
    },
    [MARKDOWN_SECTIONS.CONTRIBUTING]: {
        headingLevel: 2,
        title: 'Contributing',
        prompt: {
            type: 'input',
            message: "How can others contribute to your project?",
            default: null,
        }
    },
    [MARKDOWN_SECTIONS.TESTS]: {
        headingLevel: 2,
        title: 'Tests',
        prompt: {
            type: 'input',
            message: "How can should tests for your repo be run?",
            default: null,
        }
    },
    [MARKDOWN_SECTIONS.QUESTIONS]: {
        headingLevel: 2,
        title: 'Questions',
        prompt: {
            type: 'input',
            message: "What is your GitHub username?",
            default: null,
        }
    },
};