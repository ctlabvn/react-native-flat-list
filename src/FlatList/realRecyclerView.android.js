import React, { Component } from 'react'
import ReactNative, {
  requireNativeComponent,
  UIManager
} from 'react-native'

const NativeRealRecyclerView = requireNativeComponent(
  'RealRecyclerView',
  RealRecyclerView,
  {
    nativeOnly: { onChange: true }
  }
)

type Props = {
  ref: Any,
  renderRow: React.ReactNode,
  onLoadmore?: Function,
  onScroll?: Function,
  onRefresh?: Function,
  onScrollto?: Function,
}
class RealRecyclerView extends Component<Props> {
  constructor (props: Props) {
    super(props)

    if (this.props.ref) {
      this.props.ref(this)
    }
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleOnScroll = this.handleOnScroll.bind(this)
  }

  componentWillUnmount () {
    this.props.renderRow = undefined
  }

  handleOnChange = (event) => {
    if (event.nativeEvent.params.type === 'refresh' && this.props.onRefresh) {
      this.props.onRefresh(event.nativeEvent.params)
    }

    if (event.nativeEvent.params.type === 'loadmore' && this.props.onLoadmore) {
      this.props.onLoadmore(event.nativeEvent.params)
    }
  }

  handleOnScroll = e => {
    e.nativeEvent.contentOffset = {
      x: e.nativeEvent.x,
      y: e.nativeEvent.y,
      nx: e.nativeEvent.nx,
      ny: e.nativeEvent.nx
    }
    if (this.props.onScroll) {
      this.props.onScroll(e)
    }
  }

  scrollToPosition = (index) => {
    UIManager.dispatchViewManagerCommand(
      ReactNative.findNodeHandle(this),
      UIManager.RealRecyclerView.Commands.scrollToIndex,
      [index]
    )
  }

  render () {
    return (
      <NativeRealRecyclerView
        {...this.props}
        onChange={this.handleOnChange}
        onScroll={this.handleOnScroll}
        onScrollto={e => {
          if (this.props.onScrollto) {
            this.props.onScrollto(e.nativeEvent)
          }
        }}
      >
        {/* {items} */}
      </NativeRealRecyclerView>
    )
  }
}

module.exports = RealRecyclerView
