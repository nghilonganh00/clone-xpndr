import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ProfileScreen = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: insets.top }}>
      <Text style={{ color: "white" }}>Profile</Text>
    </View>
  );
};

export default ProfileScreen;
