const md = {
  body: [],

  addh1 (string) {
    this.body.push('# ' + string + '\n') // either new line character or <br> here. figure it out later
  },
  addh2 (string) {
    this.body.push('## ' + string + '\n')
  },
  addh3 (string) {
    this.body.push('### ' + string + '\n')
  },
  addh4 (string) {
    this.body.push('#### ' + string + '\n')
  },
  add (string) {
    this.body.push(string + '\n')
    this.body.push('---' + '\n')
  },
  create () {
    let final = ''
    this.body.forEach(string => {
      final += string
    })
    return final
  },
  title (s1, s2) {
    this.addh1(s1)
    this.add(s2)
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