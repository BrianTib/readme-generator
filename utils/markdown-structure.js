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
            type: 'string',
            message: "What is your project title?",
        }
    },
    [MARKDOWN_SECTIONS.DESCRIPTION]: {
        headingLevel: 2,
        title: 'Description',
        prompt: {
            type: 'string',
            message: "What is your project description?",
        }
    },
    [MARKDOWN_SECTIONS.INSTALLATION]: {
        headingLevel: 2,
        title: 'Installation',
        prompt: {
            type: 'string',
            message: "What are your project's installation instructions?",
        }
    },
    [MARKDOWN_SECTIONS.USAGE]: {
        headingLevel: 2,
        title: 'Usage',
        prompt: {
            type: 'string',
            message: "What are your usage purposes?",
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
                ...Object.keys(licenses).map(key => ({ name: key, value: key }))
            ]
        }
    },
    [MARKDOWN_SECTIONS.CONTRIBUTING]: {
        headingLevel: 2,
        title: 'Contributing',
        prompt: {
            type: 'string',
            message: "How can others contribute to your project?",
        }
    },
    [MARKDOWN_SECTIONS.TESTS]: {
        headingLevel: 2,
        title: 'Tests',
        prompt: {
            type: 'string',
            message: "How can the tests be run?",
        }
    },
    [MARKDOWN_SECTIONS.QUESTIONS]: {
        headingLevel: 2,
        title: 'Questions',
        prompt: {
            type: 'string',
            message: "Where can questions be directed?",
        }
    },
};