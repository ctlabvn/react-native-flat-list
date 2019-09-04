import React, { Component } from 'react'
import { requireNativeComponent } from 'react-native'

const NativeRealRecyclerItemView = requireNativeComponent(
  'RealRecyclerItemView',
  RealRecyclerItemView,
  {
    nativeOnly: { onChange: true, onUpdateView: true }
  }
)

class RealRecyclerItemView extends Component {
  static defaultProps = {
    rowID: -1,
    renderRow: undefined
  }

  constructor (props) {
    super(props)

    this.state = {
      innerRowID: this.props.rowID
    }
  }

  componentWillUnmount () {
    this.props.renderRow = undefined
  }

  handleOnUpdateView = (event) => {
    const { rowID } = event.nativeEvent

    if (this.state.innerRowID !== rowID) {
      this.props.rowID = rowID
      this.setState({ innerRowID: rowID })
    }
  }

  render () {
    return (
      <NativeRealRecyclerItemView
        {...this.props}
        onUpdateView={this.handleOnUpdateView}
      >
        {this.props.renderRow(this.state.innerRowID)}
      </NativeRealRecyclerItemView>
    )
  }
}

module.exports = RealRecyclerItemView
