import { Button } from "@/components/ui/button";
import { useDecrease, useIncrease } from "@/store/count";

export default function Controller() {
  const increase = useIncrease();
  const decrease = useDecrease();
  return (
    <div>
      <Button onClick={increase}>+</Button>
      <Button onClick={decrease}>-</Button>
    </div>
  );
}
