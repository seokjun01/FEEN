import { signInWithPassowrd } from "@/api/auth";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export function useSignInWithPassowrd(callbacks?: {
  onError: (error: Error) => void;
}) {
  return useMutation({
    mutationFn: signInWithPassowrd,
    onError: (error) => {
      console.error(error);
      toast.error(error.message, {
        position: "top-center",
      });

      if (callbacks?.onError) callbacks.onError(error);
    },
  });
}
