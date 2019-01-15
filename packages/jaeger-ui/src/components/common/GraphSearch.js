// @flow

// Copyright (c) 2019 Uber Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as React from 'react';
import { Icon, Input } from 'antd';

import UIFindInput from './UIFindInput';

import './GraphSearch.css';

export default class UnconnectedGraphSearch extends React.PureComponent<{}> {
  _uiFindInputRef: { current: Input | null };

  constructor(props: {}) {
    super(props);

    this._uiFindInputRef = React.createRef();
  }

  handleIconClick = () => {
    if (this._uiFindInputRef.current) this._uiFindInputRef.current.focus();
  };

  render() {
    return (
      <div className="GraphSearch">
        <UIFindInput forwardedRef={this._uiFindInputRef} />
        <Icon className="GraphSearch--icon" onClick={this.handleIconClick} type="search" />
      </div>
    );
  }
}
