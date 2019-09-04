import React, { Component } from 'react'
import ReactNative, {
  requireNativeComponent,
  UIManager
} from 'react-native'

import RecyclerView from './realRecyclerView.android.js'
const NativeRealRecyclerView = requireNativeComponent(
  'Smartrefresh',
  RealRecyclerView,
  {
    nativeOnly: { onChange: true }
  }
)

class RealRecyclerView extends Component {
  constructor (props) {
    super(props)
  }

  componentWillUnmount () {
    this.props.renderRow = undefined
  }

  scrollToPosition (index) {
    this.refs.RecyclerView.scrollToPosition(index)
  }

  getInnerViewNode () {
    return this.refs.Refreshtheview.getInnerViewNode()
  }

  refreshState (state) {
    UIManager.dispatchViewManagerCommand(
      ReactNative.findNodeHandle(this),
      UIManager.Smartrefresh.Commands.setrefreshstate,
      [state]
    )
  }

  loadinState (state) {
    UIManager.dispatchViewManagerCommand(
      ReactNative.findNodeHandle(this),
      UIManager.Smartrefresh.Commands.setloadstate,
      [state]
    )
  }

  _onChange (event) {
    if (event.nativeEvent.params.type === 'refresh') {
      if (this.props.onRefresh) {
        this.props.onRefresh(event.nativeEvent.params)
      }
    }

    if (event.nativeEvent.params.type === 'loadmore') {
      if (this.props.onLoadmore) {
        this.props.onLoadmore(event.nativeEvent.params)
      }
    }
  }

  render () {
    return (
      <NativeRealRecyclerView
        ref='Refreshtheview'
        springback={this.props.springback}
        canRefresh={this.props.canRefresh}
        canLoadmore={this.props.canLoadmore}
        // refreshState={this.props.refreshState}
        // loadinState={this.props.loadinState}

        onChange={this._onChange.bind(this)}
        style={this.props.style}
      >
        {/* {this.props.children} */}
        <RecyclerView
          ref='RecyclerView'
          onScrollto={this.props.onScrollto}
          onScroll={this.props.onScroll}
          style={this.props.style}
          renderRow={this.props.renderRow}
          numRows={this.props.numRows}
          rowHeight={this.props.rowHeight}
          inserttheway={this.props.reactModuleForCell}
        />
      </NativeRealRecyclerView>
    )
  }
}

module.exports = RealRecyclerView
