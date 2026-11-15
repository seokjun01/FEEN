import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSignInWithPassowrd } from "@/hooks/mutations/use-sign-in-with-password";
import { useState } from "react";
import { Link } from "react-router";

import githubLogo from "@/assets/github-mark.svg";
import { useSignWithInOAuth } from "@/hooks/mutations/use-sigin-in-with-oauth";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutate: signInWithPassowrd } = useSignInWithPassowrd({
    onError: () => {
      setPassword("");
    },
  });
  const { mutate: signInWithOAuth } = useSignWithInOAuth();

  const handleSignInWithPasswordClick = () => {
    if (email.trim() === "") return;
    if (password.trim() === "") return;

    signInWithPassowrd({ email, password });
  };

  const handleSignInWithGithubClick = () => {
    signInWithOAuth("github");
  };
  return (
    <div className="flex flex-col gap-8">
      <div className="text-axl font-bold">로그인</div>
      <div className="flex flex-col gap-2">
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="py-6"
          type="email"
          placeholder="example@abc.com"
        />
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="py-6"
          type="password"
          placeholder="password"
        />
      </div>
      <div className="gap2 flex flex-col">
        <Button onClick={handleSignInWithPasswordClick} className="w-full">
          로그인
        </Button>
        <Button
          className="w-full"
          variant={"outline"}
          onClick={handleSignInWithGithubClick}
        >
          <img src={githubLogo} className="h-4 w-4" />
          Github 계정으로 로그인
        </Button>
      </div>
      <div>
        <Link className="text-muted-foreground hover:underline" to={"/sign-up"}>
          계정이 없다면? 회원가입
        </Link>
      </div>
    </div>
  );
}
