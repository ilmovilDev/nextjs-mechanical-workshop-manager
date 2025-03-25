import React from "react";
import { redirect } from "next/navigation";
import { LogInIcon } from "lucide-react";
import { auth } from "@clerk/nextjs/server";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";

async function Login() {
  const { userId } = await auth();
  if (userId) redirect("/");

  return (
    <main className="flex justify-center items-center h-screen w-full">
      <section className="max-w-xs space-y-6">
        <p className="text-muted-foreground text-center">
          {`"Inicie sessão e gerencie sua oficina com eficiência e inteligência!"`}
        </p>
        <SignInButton>
          <Button className="w-full" aria-label="Log in or create an account">
            <LogInIcon className="mr-1 font-bold" aria-hidden="true" />
            Conecte-se
          </Button>
        </SignInButton>
      </section>
    </main>
  );
}

export default Login;
