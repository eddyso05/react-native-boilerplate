import Reactotron from "reactotron-react-native"
import { AsyncStorage } from "@react-native-async-storage/async-storage"
import { mst } from "reactotron-mst"

Reactotron.setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
  .configure({ host: "192.168.1.101" }) // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .use(mst())
  .connect() // let's connect!s
