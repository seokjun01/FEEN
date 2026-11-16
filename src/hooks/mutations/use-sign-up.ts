import { signUp } from "@/api/auth";
import type { UseMutationCallback } from "@/types";
import { useMutation } from "@tanstack/react-query";

// tanstack Query에서 서버데이터 관련 다루는 훅 ( 조회는 useQuery, 등록/수정/삭제는 useMutation)

export function useSignUp(callbacks?: UseMutationCallback) {
  return useMutation({
    mutationFn: signUp,
    onError: (error) => {
      if (callbacks?.onError) callbacks.onError(error);
    },
  });
}
