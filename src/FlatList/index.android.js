import React, { Component } from 'react'
import RealRecyclerView from './SmartrefreshView'

type Props = {
    dataSource: Array<Any>,
    refreshState?: Boolean,
    loadinState?: Boolean,
    ref?: Function,
}
export default class List extends Component<Props> {
  constructor (props: Props) {
    super(props)
    this.state = {
      dataSource: this.props.dataSource
    }
    this.refreshState = this.props.refreshState
    this.loadinState = this.props.loadinState

    if (this.props.ref) {
      this.props.ref(this)
    }
  }

  scrollToPosition (index) {
    this.refs.listView.scrollToPosition(index)
  }

  static defaultProps = {
    inserttheway: 1
  }

  componentWillReceiveProps (newprops) {
    const li = newprops.dataSource
    // alert(JSON.stringify(li));
    this.refreshState = newprops.refreshState
    if (this.refs.listView) {
      if (this.refreshState) {
        this.refs.listView.refreshState(true)
      } else {
        this.refs.listView.refreshState(false)
      }
    }

    this.loadinState = newprops.loadinState
    if (this.refs.listView) {
      if (this.loadinState) {
        this.refs.listView.loadinState(true)
      } else {
        this.refs.listView.loadinState(false)
      }
    }

    this.setState({
      dataSource: li
    })
  }

  componentDidMount () {
    if (this.refs.listView) {
      // 自动刷新
      if (this.refreshState) {
        this.refs.listView.refreshState(true)
      }
      // 自动加载
      if (this.loadinState) {
        this.refs.listView.loadinState(true)
      }
    }
  }

  //   Converthighly (obj) {
  //     const list = []
  //     obj.map(d => {
  //       list.push(d.height)
  //     })
  //     return list
  //   }

  handleOnRefresh = () => {
    if (this.props.onRefresh) {
      this.props.onRefresh()
    }
  }

  handleOnLoadmore = () => {
    if (this.props.onLoadmore) {
      this.props.onLoadmore()
    }
  }

  render () {
    return (
      <RealRecyclerView
        ref='listView'
        onScroll={this.props.onScroll}
        springback={false}
        canRefresh={this.props.canRefresh}
        canLoadmore={this.props.canLoadmore}
        // refresh status control
        reactModuleForCell={this.props.reactModuleForCell}
        onScrollto={this.props.onScrollto}
        onRefresh={this.handleOnRefresh}
        onLoadmore={this.handleOnLoadmore}
        style={this.props.style}
        numRows={this.state.dataSource}
        rowHeight={this.props.rowHeight ? this.props.rowHeight : 80}
      />
    )
  }
}
