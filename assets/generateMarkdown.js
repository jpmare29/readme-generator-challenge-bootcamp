// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![${license} License](https://img.shields.io/static/v1?label=License&message=${license}&color=blue)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(array) {
  let license = array[0];
  if (license === 'GNU') {
    return `[Link to License](https://choosealicense.com/licenses/agpl-3.0/)`
  } else if (license === 'MPL') {
    return `[Link to License](https://choosealicense.com/licenses/mpl-2.0/)`
  } else if (license === 'Apache') {
    return `[Link to License](https://choosealicense.com/licenses/apache-2.0/)`
  } else if (license === 'MIT') {
    return `[Link to License](https://choosealicense.com/licenses/mit/)`
  } else if (license === 'The Unlicense') {
    return `[Link to License](https://choosealicense.com/licenses/unlicense/)`
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `
## License
    
  This project is covered by the ${license} license, please refer to the link below to learn more.
  
  ${renderLicenseLink(license)}
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
//destructure object of user input
const { title, description, installation, usage, contribution, test, license, github, email } = data;
//Each respective function checks to see if the user entered
//any text in each of the optional sections
//If they did enter anything the respective section with the appropriate title
//will be returned as a string when the function is called

//If a section needs to be generated then a link for the table of contents
//will also be created.
const generateDescription = () => {
    if (description) {
    return `
## Description

  ${description}
    `
  }

  return ''
}

const generateInstallation = () => {
    if (installation) {
    return `
## Installation

  ${installation}
    `
  }

  return ''
}

const tableInstallation = () => {
  if (installation) {
  return `- [Installation](#installation)`
  }
  return ''
}

const generateUsage = () => {
  if (usage) {
    return `
## Usage

  ${usage}
    `
  }
  return ''
}

const tableUsage = () => {
  if (usage) {
  return `- [Usage](#usage)`
}
return ''

}

const generateContribution = () => {
  if (contribution) {
    return `
## Contribution Guidelines

  ${contribution}
    `
  }
  return ''
}

const tableContribution = () => {
  if (contribution) {
  return `- [Contribution](#contribution-guidelines)`
}
return ''
}

const tableLicense = () => {
  if (license) {
    return `- [License](#license)`
  }
}

const generateTest = () => {
  if (test) {
    return `
## Test

  ${test}
    `
  }
  return ''
}

const tableTest = () => {
  if (test) {
  return `- [Test](#test)`
}
return ''
}
// no conditionals as github/email are required in inquirer
// so this section will always be created, as will it table of contents link
const generateQuestions = () => {
  return `
## Questions
  [Github Profile](https://github.com/${github})
  
  For any additional questions reach out at: <${email}>
  `
}


const populateToC = () => {
  return `
  ${tableInstallation()}
  ${tableUsage()}
  ${tableContribution()}
  ${tableLicense()}
  ${tableTest()}
  - [Questions](#questions)
  `

}
//template for README to be created
  return `
# ${title}

${renderLicenseBadge(license)}

${generateDescription()}

## Table of Contents

${populateToC()}

${generateInstallation()}

${generateUsage()}

${generateContribution()}

${renderLicenseSection(license)}

${generateTest()}

${generateQuestions()}
`;
}

module.exports = generateMarkdown;
