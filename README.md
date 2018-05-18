# react-ant-switch
> React ant switch.


## properties:
```javascript

  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.bool,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    value: false,
    onChange: noop
  };
  
```

## usage:
```jsx

// install: npm install afeiship/react-ant-switch --save
// import : import ReactAntSwitch from 'react-ant-switch'

class App extends React.Component{
  state = {
    value: false
  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  _onChange =e =>{
    console.log(e);
    this.setState({ value: e.target.value})
  };

  render(){
    return (
      <div className="hello-react-ant-switch">
        <ReactAntSwitch value={this.state.value} onChange={this._onChange} ref='rc' />
      </div>
    );
  }
}

```

## customize style:
```scss
// customize your styles:
$react-ant-switch-options:(
);

@import '~node_modules/react-ant-switch/style.scss';
```
