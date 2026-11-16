import { signInWithPassowrd } from "@/api/auth";
import type { UseMutationCallback } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export function useSignInWithPassowrd(callbacks?: UseMutationCallback) {
  return useMutation({
    mutationFn: signInWithPassowrd,
    onError: (error) => {
      console.error(error);
      if (callbacks?.onError) callbacks.onError(error);
    },
  });
}
