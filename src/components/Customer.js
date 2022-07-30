import React from "react";

class Customer extends React.Component {
  // React.Component는 라이브러리이자 클래스라고 할 수 있음
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <p>{this.props.birthday}</p>
        <p>{this.props.gender}</p>
        <p>{this.props.job}</p>
      </div>
    );
  }
}

export default Customer;
