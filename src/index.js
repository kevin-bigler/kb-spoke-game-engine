function component() {
    const element = document.createElement('div')

    element.innerHTML = ['yo', 'webpack'].join(' ')

    return element
}

document.title = "webpack-typescript-base-setup"
document.body.appendChild(component())
