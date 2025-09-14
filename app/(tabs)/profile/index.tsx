import { ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ProfileScreen = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: insets.top }}>
      <ScrollView>
        <Text style={{ color: "white" }}>Profile</Text>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
