import { ActivityIndicator, FlatList, Text } from "react-native";

import PostListItem from "../components/PostListItem";
import { usePosts } from "../hooks/posts";

export default function PostsScreen() {
  const { posts, error, isLoading } = usePosts();

  if (isLoading) {
    return <ActivityIndicator />;
  }
  if (error) {
    return <Text>failed to load. {error.message}</Text>;
  }

  return (
    <FlatList
      data={posts}
      contentContainerStyle={{ gap: 10, padding: 10 }}
      renderItem={({ item }) => <PostListItem post={item} />}
    />
  );
}
