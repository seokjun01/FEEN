import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function TodoEditor() {
  return (
    <div className="flex gap-2">
      <Input placeholder="새로운 할 일을 등록하세요..." />
      <Button></Button>
    </div>
  );
}
