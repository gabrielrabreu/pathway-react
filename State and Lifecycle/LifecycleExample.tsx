import React from "react";

interface LifecycleComponentProps {
  message: string;
}

interface LifecycleComponentState {
  timestamp: Date;
}

class LifecycleComponent extends React.Component<
  LifecycleComponentProps,
  LifecycleComponentState
> {
  state: LifecycleComponentState = {
    timestamp: new Date(),
  };

  componentDidMount() {
    console.log("Component mounted with message:", this.props.message);
  }

  componentDidUpdate() {
    console.log("Component updated at", new Date());
  }

  componentWillUnmount() {
    console.log("Component will unmount");
  }

  render() {
    return <p>Current time: {this.state.timestamp.toLocaleTimeString()}</p>;
  }
}

export default LifecycleComponent;
