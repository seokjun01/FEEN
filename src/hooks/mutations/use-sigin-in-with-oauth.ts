import { signInWithOAuth } from "@/api/auth";
import { useMutation } from "@tanstack/react-query";

export function useSignWithInOAuth() {
  return useMutation({
    mutationFn: signInWithOAuth,
  });
}
