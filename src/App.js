// src/App.js
import React from 'react';
import { connect } from 'react-redux';
import { fetchDog } from './redux/action/';

class App extends React.Component {
  render() {
    const { isFetching, src, fetchDog } = this.props;
    console.log(this.props)
    return (
      isFetching ? <p>Loading</p>
        : (
          <div style={{ width: 500 }}>
            <button
              style={{ display: 'block' }}
              onClick={fetchDog}
              type="button"
            >
              Novo Doguinho
            </button>
            {src ? <img style={{ width: '100%' }} src={src} alt="dog" /> : <p>Clique no botão! au au</p>}
          </div>
        )
    );
  }
}

const mapStateToProps = (state) => ({
  teste: state,
  src: state.dogReducer.imagePath,
  isFetching: state.dogReducer.isFetching
});

const mapDispatchToProps = (dispatch) => ({
  fetchDog: () => dispatch(fetchDog())});

export default connect(mapStateToProps, mapDispatchToProps)(App);