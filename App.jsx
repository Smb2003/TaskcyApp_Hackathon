import { View, Text } from 'react-native'
import React from 'react'
import App_Navigation from './config/App_Navigation/index'
import { Provider } from 'react-redux'
import { store } from './config/Store'

const App = () => {
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        {/* <Text>Hello World</Text> */}
        <App_Navigation/>
      </View>

    </Provider>
  )
}

export default App