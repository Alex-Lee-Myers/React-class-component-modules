import React, {Component} from 'react';

export default class ClassComponentsProps extends Component {
    // Component's state to include two properties: The first is an arary prepoulated with some fruites. The second is a property called "newFruit". The initial value for this property should be an empty string.
    // The component's render method should return a list of fruits. Each fruit should be a list item.
    constructor(props) {
        super(props);
        this.state = {
            fruits: ['Apple', 'Banana', 'Orange'],
            newFruit: ''
        };
    }

    // The component's render method should return a list of fruits. Each fruit should be a list item.

    render() {
        return (
            <div>
                <h1>Fruits</h1>
                <ul>
                    {this.state.fruits.map((fruit, index) => {
                        return <li key={index}>{fruit}</li>
                    }
                    )}
                </ul>
                <h1>Add a Fruit</h1>
                <input type="text" value={this.state.newFruit} onChange={this.handleChange}/>
                <button onClick={this.handleClick}>Add Fruit</button>
            </div>
        );
    }
}