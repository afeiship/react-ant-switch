import React,{PureComponent} from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';
import { Switch } from 'antd';
import 'next-return-event';

export default class extends Component{
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.bool,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    value: false,
    onChange: noop
  };
  /*===properties end===*/

  _onChange = e => {
    const { onChange } = this.props;
    onChange( nx.returnEventTarget(e) );
  };

  render(){
    const { className, value, ...props } = this.props;
    return (
      <Switch checked={value} { ...props } className={classNames('react-ant-switch',className)} />
    );
  }
}
