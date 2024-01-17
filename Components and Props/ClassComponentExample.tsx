import React from "react";

interface ClassComponentProps {
  title: string;
}

class ClassComponent extends React.Component<ClassComponentProps> {
  constructor(props: ClassComponentProps) {
    super(props);
    this.state = { count: 0 };
  }

  state: { count: number };

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>Counter: {this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

export default ClassComponent;
