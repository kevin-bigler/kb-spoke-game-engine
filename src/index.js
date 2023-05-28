function component() {
    const element = document.createElement('div')

    // Lodash, now imported by this script
    element.innerHTML = ['Hello', 'webpack'].join(' ')

    return element
}

document.title = "KB-SPOKE"
document.body.appendChild(component())