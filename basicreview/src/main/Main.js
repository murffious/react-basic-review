import React, { Component }from 'react'
import './Main.css'


class Main extends Component  {
constructor (props) {
    super(props)

    this.state = {
        kitties : ["whiskers", "Tom", "Baselford"],
        kitty : ''
    }
    this.inputValue = this.inputValue.bind(this)
}

inputValue(event) {
    this.setState({
        kitties: event.target.value
    })
}

render (){
    const kittiesArr = this.state.kitties.map((kitty, i) => {
        return <h2 key={i}>{kitty}</h2>
    } )
    return (
        <div className="mainsection">
        <input onChange={
            this.inputValue
        } />
        <button>Add Kitty</button>
        {kittiesArr}
        </div>
    )
}
}

export default Main
