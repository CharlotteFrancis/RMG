// README.md generator
// first make title
// table of contents, installation, usage, license, contributing, tests, questions
// title -> sections
// github username links to pf
// license gets a badge(?)

const md = require('./md.js')
const inquirer = require('inquirer')
const fs = require('fs')

// class to hold data before rendering
class ReadData {
  constructor (title, description, username, email, installation, usage, license, contributing, tests, url) {
    this.title = title
    this.description = description
    this.username = username
    this.email = email
    this.installation = installation
    this.usage = usage
    this.license = license
    this.contributing = contributing
    this.tests = tests
    this.url = url
  }

  // generate table of contents
  tableOfContents () {
    let myTable = ''
    myTable += '[Description](#description)\n'
    if (this.installation !== '') {
      myTable += '[Installation](#installation)\n'
    }
    if (this.usage !== '') {
      myTable += '[Usage](#usage)\n'
    }
    if (this.license !== '') {
      myTable += '[License](#license)\n'
    }
    if (this.contributing !== '') {
      myTable += '[Contributing](#contributing)\n'
    }
    if (this.tests !== '') {
      myTable += '[Tests](#tests)\n'
    }
    myTable += '[Questions](#questions)\n'

    return myTable
  }

  render () {
    md.addh1(this.title)
    md.hr()
    // lisense badge
    md.add(`![License Badge](https://img.shields.io/badge/license-${this.license}-blue.svg)`)
    // table of contents
    md.addh2('Table of Contents')
    md.add(`${this.tableOfContents()}\n`)
    md.hr()
    md.addh2('Description')
    md.add(this.description + '\n')
    md.add('Here is an image of the application in use:\n')
    md.add(`![Application Image](${this.url})`)
    md.hr()
    if (this.installation !== '') {
      md.addh2('Installation')
      md.add(this.installation + '\n')
      md.hr()
    }
    if (this.usage !== '') {
      md.addh2('Usage')
      md.add(this.usage + '\n')
      md.hr()
    }
    if (this.license !== '') {
      md.addh2('License')
      md.add(this.license + '\n')
      md.hr()
    }
    if (this.contributing !== '') {
      md.addh2('Contributing')
      md.add(this.contributing + '\n')
      md.hr()
    }
    if (this.tests !== '') {
      md.addh2('Tests')
      md.add(this.tests + '\n')
      md.hr()
    }
    md.addh2('Questions')
    md.add(`Created by: ${this.username} on GitHub.`)
    md.add(`[GitHub Profile Link](github.com/${this.username})`)
    md.add(`Contact me at ${this.email} if you have any further questions.`)

    return md.create()
  }
}

// Generic Section
const addSection = (type) => {
  const lowType = type.toLowerCase()
  inquirer.prompt([
    {
      type: 'input',
      name: 'response',
      message: `Fill in text content for ${type}.`
    }
  ])
    .then((res) => {
      myData[lowType] = res.response
      ask()
    })
    .catch(err => console.log(err))
}

const askSection = _ => {
  inquirer.prompt([
    {
      type: 'list',
      name: 'type',
      message: 'What type of section do you want to add?',
      choices: [
        'Installation',
        'Usage',
        'License',
        'Contributing',
        'Tests'
      ]
    }
  ])
    .then((answers) => {
      // process answers code here
      // ask again
      switch (answers.type) {
        case 'Installation':
          addSection('Installation')
          break
        case 'Usage':
          addSection('Usage')
          break
        case 'License':
          addSection('License')
          break
        case 'Contributing':
          addSection('Contributing')
          break
        case 'Tests':
          addSection('Tests')
          break
        default:
          break
      }
    })
    .catch(err => console.log(err))
}

// add the title
const askTitle = _ => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'username',
      message: 'What is your GitHub username?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?'
    },
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of the project?'
    },
    {
      type: 'input',
      name: 'desc',
      message: 'Give a description of the project'
    },
    {
      type: 'input',
      name: 'url',
      message: 'Give a url to an image of the project'
    }
  ])
    .then((answers) => {
      myData.title = answers.title
      myData.description = answers.desc
      myData.username = answers.username
      myData.email = answers.email
      myData.url = answers.url
      // add another
      ask()
    })
    .catch(err => console.log(err))
}

// add a section
const ask = _ => {
  inquirer.prompt([
    {
      type: 'confirm',
      name: 'continue',
      message: 'Would you like to add another section?'
    }
  ])
    .then((cont) => {
      if (cont.continue) {
        // add section code
        askSection()
      } else {
        // output writefile
        fs.writeFile('README.md', myData.render(), err => {
          if (err) {
            console.log(err)
          }
          console.log('README.md created!')
        })
      }
    })
    .catch(err => console.log(err))
}

let myData = new ReadData('', '', '', '', '', '', '', '', '', '')
askTitle()
