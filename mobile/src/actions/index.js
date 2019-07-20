import store from './../store'

let actions = {
  setUser (user) {
    store.dispatch({ type: 'SET_USER', user })
  }
}

export default actions