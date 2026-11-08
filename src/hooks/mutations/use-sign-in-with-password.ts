import { signInWithPassowrd } from "@/api/auth";
import { useMutation } from "@tanstack/react-query";

export function useSignInWithPassowrd() {
  return useMutation({
    mutationFn: signInWithPassowrd,
  });
}
