# react-ant-switch
> React ant switch.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @feizheng/react-ant-switch
```

## update
```shell
npm update @feizheng/react-ant-switch
```

## properties
| Name         | Type   | Required | Default | Description                           |
| ------------ | ------ | -------- | ------- | ------------------------------------- |
| className    | string | false    | -       | The extended className for component. |
| value        | bool   | false    | -       | The runtime value.                    |
| defaultValue | bool   | false    | -       | Default value.                        |
| onChange     | func   | false    | noop    | The change handler.                   |


## usage
1. import css
  ```scss
  @import "~@feizheng/react-ant-switch/dist/style.scss";

  // customize your styles:
  $react-ant-switch-options: ()
  ```
2. import js
  ```js
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactAntSwitch from '@feizheng/react-ant-switch';
  import './assets/style.scss';

  class App extends React.Component {
    componentDidMount() {}
    render() {
      return (
        <div className="app-container">
          <ReactAntSwitch
            onChange={(e) => {
              console.log('value:', e.target.value);
            }}
          />
        </div>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-ant-switch/


## license
Code released under [the MIT license](https://github.com/afeiship/react-ant-switch/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@feizheng/react-ant-switch
[version-url]: https://npmjs.org/package/@feizheng/react-ant-switch

[license-image]: https://img.shields.io/npm/l/@feizheng/react-ant-switch
[license-url]: https://github.com/afeiship/react-ant-switch/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@feizheng/react-ant-switch
[size-url]: https://github.com/afeiship/react-ant-switch/blob/master/dist/react-ant-switch.min.js

[download-image]: https://img.shields.io/npm/dm/@feizheng/react-ant-switch
[download-url]: https://www.npmjs.com/package/@feizheng/react-ant-switch
