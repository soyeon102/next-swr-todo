import TodoList from "@/features/todos/ui/TodoList";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <div className="flex justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 w-full">
        <Toaster toastOptions={{ position: "top-center" }} />
        <TodoList />
      </main>
    </div>
  );
}
