import Layout from "@/components/layout/layout";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

async function Cars() {
  const { userId } = await auth();
  if (!userId) redirect("/login");
  return <Layout>Cars</Layout>;
}

export default Cars;
