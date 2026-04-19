import { Button } from "@/src/components/button";

export default function Home() {
  return (
    <main className="flex items-start gap-4 p-10">
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button size="large">Large Button</Button>
    </main>
  );
}