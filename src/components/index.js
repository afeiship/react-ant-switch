import noop from '@feizheng/noop';
import { Switch } from 'antd';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

const CLASS_NAME = 'react-ant-switch';

export default class ReactAntSwitch extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * The runtime value.
     */
    value: PropTypes.bool,
    /**
     * Default value.
     */
    defaultValue: PropTypes.bool,
    /**
     * The change handler.
     */
    onChange: PropTypes.func
  };

  static defaultProps = {
    onChange: noop
  };

  handleChange = (inValue) => {
    const { onChange } = this.props;
    onChange({ target: { value: inValue } });
  };

  render() {
    const { className, value, defaultValue, onChange, ...props } = this.props;
    return (
      <Switch
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        checked={value}
        defaultChecked={defaultValue}
        onChange={this.handleChange}
        {...props}
      />
    );
  }
}
