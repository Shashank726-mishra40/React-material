function customRender(reactElement,mainContainer){
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.traget)

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for(const prop in reactElement.props){
       if(prop==='children') continue;
       else{
        domElement.setAttribute(prop,reactElement.props[prop])
       }
    }

    mainContainer.appendChild(domElement)
}

const reactElement = {
    type : 'a',
    props : {
        href : 'https://google.com',
        traget : '_blank'
    },
    children : 'Click me for visit google'
}

const mainContainer = document.querySelector('#root')


customRender(reactElement , mainContainer)
