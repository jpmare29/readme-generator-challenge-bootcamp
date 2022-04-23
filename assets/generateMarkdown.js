// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![${license} License](https://img.shields.io/static/v1?label=License&message=${license}&color=blue)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'GNU') {

  } else if (license === 'MPL') {

  } else if (license === 'Apache') {

  } else if (license === 'MIT') {

  } else if (license === 'The Unlicense') {
    
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

const generateDescription = () => {
    if (data.description) {
    return `
    ## Description

    ${data.description}
    `
  }

  return ''
}

const generateInstallation = () => {
    if (data.installation) {
    return `
    ## Installation

    ${data.installation}
    `
  }
}

const tableInstallation = () => {
  if (data.installation) {
  return `- [Installation](#installation)`
  }
  return ''
}

const generateUsage = () => {
  if (data.usage) {
    return `
    ## Usage

    ${data.usage}
    `
  }
  return ''
}

const tableUsage = () => {
  if (data.usage) {
  return `- [Usage](#usage)`
}
return ''

}

const generateContribution = () => {
  if (data.contribution) {
    return `
    ## Contribution Guideline

    ${data.contribution}
    `
  }
  return ''
}

const tableContribution = () => {
  if (data.contribution) {
  return `- [Contribution](#contribution)`
}
return ''
}

const generateTest = () => {
  if (data.test) {
    return `
    ## Tests

    ${data.test}
    `
  }
  return ''
}

const tableTest = () => {
  if (data.test) {
  return `- [Test](#test)`
}
return ''
}

const generateLicense = () => {
  if (data.license) {
    return renderLicenseSection(data.license);
  }
  return '';
}

const populateToC = () => {
  return `
  ${tableInstallation()}
  ${tableUsage()}
  ${tableContribution()}
  ${tableTest()}
  `

}

  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ${generateDescription()}

  ## Table of Contents

  ${populateToC()}

  ${generateInstallation()}

  ${generateUsage()}

  ${generateContribution()}

  ${generateTest()}

`;
}

module.exports = generateMarkdown;
