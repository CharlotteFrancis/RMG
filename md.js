const md = {
  body: [],

  addh1 (string) {
    this.body.push('# ' + string + '\n') // either new line character or <br> here. figure it out later
  },
  addh2 (string) {
    this.body.push('## ' + string + '\n')
  },
  add (string) {
    this.body.push(string + '\n')
  },
  hr () {
    this.body.push('---' + '\n')
  },
  create () {
    let final = ''
    this.body.forEach(string => {
      final += string
    })
    return final
  },
  section (s1, s2) {
    this.addh2(s1)
    this.add(s2)
  },
  blockSection (s1, s2) {
    this.addh2(s1)
    this.add('> ' + s2)
  }
}

// md.title('hello ', 'world')
// console.log(md.create())

module.exports = md