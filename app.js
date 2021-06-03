// README.md generator
// first make title
// table of contents, installation, usage, license, contributing, tests, questions
// title -> sections
// github username links to pf
// license gets a badge(?)

const md = require('./md.js')
const inquirer = require('inquirer')
// const { listenerCount } = require('events')

class ReadData {
  constructor (title, description, username, email, installation, usage, lic, contr, tests) {
    this.title = title
    this.description = description
    this.username = username
    this.email = email
    this.installation = installation
    this.usage = usage
    this.lic = lic
    this.contr = contr
    this.tests = tests
  }

  render () {
    md.addh1(this.title)
    md.hr()
    // lisense badge
    // table of contents
    md.hr()
    md.addh2('Description')
    md.add(this.description)
    md.hr()
    if (this.installation !== '') {
      md.addh2('Installation')
      md.add(this.installation)
      md.hr()
    }
    if (this.usage !== '') {
      md.addh2('Usage')
      md.add(this.usage)
      md.hr()
    }
    if (this.lic !== '') {
      md.addh2('License')
      md.add(this.lic)
      md.hr()
    }
    if (this.contr !== '') {
      md.addh2('Contributing')
      md.add(this.contr)
      md.hr()
    }
    if (this.tests !== '') {
      md.addh2('Tests')
      md.add(this.tests)
      md.hr()
    }
    md.addh2('Questions')
    md.add(`Created by: ${this.username} on GitHub.`)
    md.add(`[GitHub Profile Link](github.com/${this.username})`)
    md.add(`Contact me at ${this.email} if you have any further questions.`)

    return md.create
  }
}

// ToC
const tableOfContents = _ => {
  // table stuff
  // lodash kebab case
}

// Generic Section
const addSection = (type) => {
  //
}

// Questions
const addQuestions = _ => {
  // username + email for contact
}

// License

const addLicense = _ => {
  // add badge near top of the html page ahh how do i do this actually LOL
}

const askSection = _ => {
  inquirer.prompt([
    {
      type: 'list',
      name: 'type',
      message: 'What type of section do you want to add?',
      choices: [
        'Table of Contents',
        'Installation',
        'Usage',
        'License',
        'Contributing',
        'Tests',
        'Questions'
      ]
    }
  ])
    .then((answers) => {
      // process answers code here
      // ask again
      switch(answers.type){
        case 'Table of Contents':
          tableOfContents()
          break
        case 'Installation':
          addSection('Installation')
          break
        case 'Usage':
          addSection('Usage')
          break
        case 'License':
          addLicense()
          break
        case 'Contributing':
          addSection('Contributing')
          break
        case 'Tests':
          addSection('Tests')
          break
        case 'Questions':
          addQuestions()
          break
        default:
          break
      }
      ask()
    })
    .catch(err => console.log(err))
}

// add the title
const askTitle = _ => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of the project?'
    },
    {
      type: 'input',
      name: 'desc',
      message: 'Give a description of the project'
    }
  ])
    .then((answers) => {
      myData.title = answers.title
      myData.description = answers.desc
      // test
      console.log(myData)
      // add another
      ask()
    })
    .catch(err => console.log(err))
}

// add a section?
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
      }
    })
    .catch(err => console.log(err))
}

let myData = new ReadData('', '', '', '', '', '', '', '', '')
askTitle()
