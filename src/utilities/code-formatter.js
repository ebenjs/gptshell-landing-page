const keywords = ['curl', 'git', 'cd', 'npm', 'sudo', 'chmod', 'copy', 'gpts']
export const formatCode = (code) => {
  const formatedCode = code.split('\n').map((line) => {
    const firstWord = line.split(' ')[0]
    if (keywords.includes(firstWord)) {
      return `<span class="keyword">${line}</span>`
    }
    return line
  })
  return formatedCode.join('\n')
}
