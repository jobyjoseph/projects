import styles from "./page.module.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://flyby-router-demo.herokuapp.com/", // GraphQL server endpoint
  cache: new InMemoryCache(),
});

export default function Home() {
  return <main className={styles.main}>Home page</main>;
}
