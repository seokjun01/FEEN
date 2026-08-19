import { deleteTodo } from "@/api/delete-todo";
import { QUERY_KEYS } from "@/lib/constants";
import type { Todo } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useDeleteTodoMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTodo,
    // 고민 : 삭제의 상황에서는 어떤 선택지가 좋을까?
    // 1. 캐시 무효화 (invalidateQueries) -> 전부 리페칭함
    // 2. 수정 요청에 응답값을 활용 (onSuccess)
    // 3. 낙관적 업데이트 활용 (onMutate-> onError, onSettled)
    onSuccess: (deletedTodo) => {
      queryClient.setQueryData<Todo[]>(QUERY_KEYS.todo.list, (prevTodos) => {
        if (!prevTodos) return [];
        return prevTodos.filter((prevTodo) => prevTodo.id === deletedTodo.id);
      });
    },
  });
}
