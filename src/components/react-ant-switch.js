import React,{PureComponent} from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';
import { Switch } from 'antd';


export default class extends PureComponent{
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.bool,
  };

  static defaultProps = {
    value: false
  };
  /*===properties end===*/

  render(){
    const { className, value, ...props } = this.props;
    return (
      <Switch checked={value} {...props} className={classNames('react-ant-switch',className)} />
    );
  }
}
