import { NativeModules } from "react-native";
import Reactotron, {
  asyncStorage,
  openInEditor,
} from "reactotron-react-native";
import url from "url";

const { hostname: host } = url.parse(NativeModules.SourceCode.scriptURL);

const tron = Reactotron.configure({ host })
  .use(asyncStorage())
  .use(openInEditor())
  .useReactNative()
  .connect();

tron.clear();

console.tron = tron;
