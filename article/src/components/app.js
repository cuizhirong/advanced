import '../style/index.less';

import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: props.posts,
      isAdd: false
    }
  }

  onClick() {
    this.setState({
      isAdd: !this.state.isAdd
    });
  }

  onClickPost(id) {

  }

  onAdd() {
    
  }

  render() {
    let state = this.state;
    return <div className="app">
      <div className="main" style={{ display: state.isAdd ? 'none' : 'block'}}>
        <a onClick={this.onClick.bind(this)}>Add A Posts</a>
        <h2>Posts</h2>
        <ul>
          {state.posts.map(post => <li key={post.id}>
            <a onClick={this.onClickPost.bind(this, post.id)}>{post.name}</a>
          </li>)}
        </ul>
      </div>
      <div className="create" style={{ display: state.isAdd ? 'block' : 'none'}}>
        <div><p>Title:</p> <input /></div>
        <div><p>Content: </p><textarea /></div>
        <div className="btn">
          <button onClick={this.onAdd.bind(this)}>添加</button>
          <button onClick={this.onClick.bind(this)}>取消</button>
        </div>
      </div>
    </div>;
  }
}

const mapStateToProps = function(state) {
  return {
    posts: state.posts
  };
}

export default connect(mapStateToProps)(App);