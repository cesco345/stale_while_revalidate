import { useReducer } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { useUser } from "../hooks/users";

const PostListItem = ({ post }) => {
  const { user, isLoading, error } = useUser(post.userId);
  console.log(user);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{user?.name}</Text>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.body}>{post.body}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingTop: 30,
    padding: 5,
    marginLeft: 5,

    borderRadius: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  body: {
    color: "gray",
    padding: 5,
    paddingBottom: 10,
  },
});

export default PostListItem;
