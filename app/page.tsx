import DialogBox from "@/components/ui/dialogbox";
import WelcomeDialog from "@/components/ui/welcomedialog";

export default function Home() {
  return (
    <div className="flex flex-col m-5 space-y-3 items-start font-mono text-sm">
      <WelcomeDialog />
      <DialogBox />
    </div>
  );
}
