import Layout from "@/components/layout/layout";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

async function Orders() {
  const { userId } = await auth();
  if (!userId) redirect("/login");
  return <Layout>Orders</Layout>;
}

export default Orders;
