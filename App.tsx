import { SafeAreaView, StyleSheet } from "react-native";
import { SWRConfig } from "swr";
import { StatusBar } from "expo-status-bar";

import { usePosts } from "./src/hooks/posts";
import PostsScreen from "./src/app/PostsScreen";

export default function App() {
  const { posts, error, isLoading } = usePosts();

  return (
    <SafeAreaView style={styles.container}>
      <PostsScreen />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
