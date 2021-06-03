// README.md generator
// first make title
// table of contents, installation, usage, license, contributing, tests, questions
// title -> sections
// github username links to pf
// license gets a badge(?)

const md = require('./md.js')
const inquirer = require('inquirer')
// const { listenerCount } = require('events')

// ToC
const tableOfContents = _ => {
  // table stuff
  // lodash kebab case
}

// Generic Section
const addSection = (type) => {
  //
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
          addSection('License')
          break
        case 'Contributing':
          addSection('Contributing')
          break
        case 'Tests':
          break
        case 'Questions':
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
      // then stuff goes here
      console.log(answers.title)
      console.log(answers.desc)
      md.title(answers.title, answers.desc)
      // test output
      console.log(md.create())
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

askTitle()
