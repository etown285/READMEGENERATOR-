// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "apache-2.0") {
    return `[![apache-2.0](https://img.shields.io/badge/license-apache--2.0-green?style=plastic)]`
  } 
  else if (license === 'BSD 3-Clause "New" or "Revised"'){
    return `[![BSD 3-Clause "New" or "Revised"](https://img.shields.io/badge/license-BSD%203--Clause%20%22New%22%20or%20%22Revised%22-green?style=plastic)]`
  }
  else if (license === 'GNU General Public License v3.0'){
    return `[![GNU General Public License v3.0](https://img.shields.io/badge/license-GNU%20General%20Public%20License%20v3.0-green?style=plastic)]`
  }
  else if (license === 'MIT'){
    return `[![MIT](https://img.shields.io/badge/license-MIT-green?style=plastic)]`
  }
  else {
    return ""
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
//   if (license === "apache-2.0") {
//     return `(https://www.apache.org/licenses/LICENSE-2.0)`
//   } else if (license === 'BSD 3-Clause "New" or "Revised"') {
//     return `(https://choosealicense.com/licenses/bsd-3-clause/)`
//   } else if (license === 'GNU General Public License v3.0') {
//     return `(https://www.gnu.org/licenses/gpl-3.0.en.html)`
//   } else if (license === 'MIT') {
//     return `(https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt)`
//   } else {
//     return ""
//  }

// refactored to use switch
  switch(license) {
    case 'apache-2.0':
      return `(https://www.apache.org/licenses/LICENSE-2.0)`;
      break;
    case 'BSD 3-Clause "New" or "Revised"':
      return `(https://choosealicense.com/licenses/bsd-3-clause/)`;
      break;
    case 'GNU General Public License v3.0':
      return `(https://www.gnu.org/licenses/gpl-3.0.en.html)`;
      break;
    case 'MIT':
      return `(https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt)`
      break;
    case '':
      return ''
      break;
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return '## License'
  } else {
    return ""
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);

  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}
  ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [Contributions](#contributions)
    * [Tests](#tests)
    * [Questions](#questions)
    * [License](#license)
  <a name="installation"></a>
  ## Installation
  ${data.installation}
  <a name="usage"></a>
  ## Usage
  ${data.usage}
  ## Links
  * Live/Deployed Application: (https://${data.username}.github.io/${data.repo}/)
  * Github Repo: (https://github.com/${data.username}/${data.repo}/)
  <a name="contributions"></a>
  ## Contributions
  ${data.contributions}
  <a name="test"></a>
  ## Tests
  ${data.tests}
  <a name="questions"></a>
  ## Questions
  [![GitHub](https://img.shields.io/badge/Github-Click%20Here-orange)](https://github.com/${data.username}) 
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-Click%20Here-yellowgreen)](https://www.linkedin.com/in/stevenjamespaul/)
  You may contact me via email (${data.email}) with any questions regarding this project or anything else you see!
  <a name="license"></a>
  ## License
  ${renderLicenseLink(data.license)}
`;
}

module.exports = generateMarkdown;