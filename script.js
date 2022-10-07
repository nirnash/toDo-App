const task = document.getElementById('task')
const next = document.getElementById('next')
next.onclick = () => add()

const nextItem = () => {
  
}

const add = () => {
  const node = document.createElement('ul')
  const textnode = document.createElement('input')
  textnode.placeholder = 'Enter Task'
  const checknode = document.createElement('input')
  checknode.type = 'checkbox'
  // node.appendChild(textnode)
  // textnode.appendChild(checknode)  
  // document.getElementById('list').appendChild(node)
  document.querySelector('ul').append(node, textnode, checknode)
}

// const listElement = document.getElementById('list')
// listElement.append(node, textnode, checknode)