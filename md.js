const md = {
  body: [],

  addh1 (string) {
    this.body.push('# ' + string)
  },
  addh2 (string) {
    this.body.push('## ' + string)
  },
  addh3 (string) {
    this.body.push('### ' + string)
  },
  addh4 (string) {
    this.body.push('#### ' + string)
  },
  add (string) {
    this.body.push(string)
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
  }

}

module.exports = md