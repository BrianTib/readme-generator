// Enumerators for the sections of the generated markdown
const MARKDOWN_SECTIONS = {
    TITLE,
    DESCRIPTION,
    TABLE_OF_CONTENTS,
    INSTALLATION,
    USAGE,
    LICENSE,
    CONTRIBUTING,
    TESTS,
    QUESTIONS
};

// Structure of the generated markdown
export const markdownGeneratorStructure = {
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
    [MARKDOWN_SECTIONS.CONTRIBUTING]: {
        headingLevel: 2,
        title: 'Contributing',
        prompt: {
            type: 'string',
            message: "What are your usage purposes?",
        }
    },
    [MARKDOWN_SECTIONS.TESTS]: {
        headingLevel: 2,
        title: 'Tests',
        prompt: {
            type: 'string',
            message: "What are your usage purposes?",
        }
    },
};