import Service from '../services/auth'
import { Actions } from 'react-native-router-flux'
import actions from '../actions'

export default ({email, password}) => {
  Service.auth(email, password)
    .then(({data}) => {
      actions.setUser(data)
      Actions.pageHome()
    })
    .catch(err => console.log(err))
}