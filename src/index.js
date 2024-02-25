function component() {
    const element = document.createElement('div')

    element.innerHTML = ['yo', 'webpack'].join(' ')

    return element
}

document.title = "kb-spoke-game-engine"
// document.body.appendChild(component())
