import Layout from "@/components/layout/layout";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

async function Technical() {
  const { userId } = await auth();
  if (!userId) redirect("/login");
  return <Layout>Technical</Layout>;
}

export default Technical;
