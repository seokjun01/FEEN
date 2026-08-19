import { Button } from "@/components/ui/button";
import { useUpdateTodoMutation } from "@/hooks/mutation/use-update-todo-mutation";
import type { Todo } from "@/types";
import { Link } from "react-router";

export default function TodoItem({ id, content, isDone }: Todo) {
  const handleDeleteClick = () => {};
  const { mutate } = useUpdateTodoMutation();
  const handleCheckboxClick = () => {
    mutate({
      id,
      isDone: !isDone,
    });
  };

  return (
    <div className="flex items-center justify-between border p-2">
      <div className="flex gap-5">
        <input
          onChange={handleCheckboxClick}
          type={"checkbox"}
          checked={isDone}
        />
        <Link to={`/todolist/${id}`}>{content}</Link>
      </div>
      <Button onClick={handleDeleteClick} variant={"destructive"}>
        삭제
      </Button>
    </div>
  );
}
