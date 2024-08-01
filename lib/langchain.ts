import { auth } from "@clerk/nextjs/server";
import { ChatOpenAI, OpenAIEmbeddings } from "@langchain/openai";
import pineconeClient from "./pinecone";
import { Index, RecordMetadata } from "@pinecone-database/pinecone";

const model = new ChatOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  modelName: "gpt-4o",
});

export const indexName = "chat-with-pdf";

async function namespaceExists(
  index: Index<RecordMetadata>,
  namespace: string,
) {
  if (!namespace) throw new Error("No namespace value provided.");

  const { namespaces } = await index.describeIndexStats();
  return namespaces?.[namespace] !== undefined;
}

export async function generateEmbeddingsInPineconeVectorStore(docId: string) {
  const { userId } = await auth();

  if (!userId) throw new Error("User not found");

  let pineconeVectorStore;

  console.log("--- Generating embeddings for the split documents... ---");
  const embeddings = new OpenAIEmbeddings();
  const index = await pineconeClient.index(indexName);
  const namespaceAlreadyExists = await namespaceExists(index, docId);
}
