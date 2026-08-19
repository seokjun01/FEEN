import { API_URL } from "@/lib/constants";
import type { Todo } from "@/types";

export async function updateTodo(todo: Partial<Todo> & { id: string }) {
  // 수정을 하려면 id 는 필수이기 때문에 교집합 타입선언

  const response = await fetch(`${API_URL}/todos/${todo.id}`, {
    method: "PATCH",
    body: JSON.stringify(todo),
  });

  if (!response.ok) throw new Error("Upadate Todo Failed");
  const data: Todo = await response.json();
  return data;
}
