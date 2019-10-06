const a = <div>{testA ? <p>Aa</p> : testAb ? <p>Ab</p> : <p>Ac</p>}</div>;

const b = (
  <div
    style={{
      display: testB ? undefined : "none"
    }}>
    B
  </div>
);

const c = list.map(item => <div>{item}</div>);

class D {
  render() {
    return (
      <input
        value={this.state.testD}
        onChange={(..._args) => {
          let _value =
            _args[0] && _args[0].target && typeof _args[0].target === "object"
              ? _args[0].target.value
              : _args[0];

          this.setState(_prevState => {
            return {
              testD: _value
            };
          });
        }}/>
    );
  }
}
