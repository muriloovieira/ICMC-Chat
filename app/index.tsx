import { Redirect } from "expo-router"
import { Text, View} from 'react-native';

export default function Index() {
  return (
    <View>
    <Text>aaaaa</Text>
    <Redirect href={"./screens/login"} />
    </View>
  );
}
