import DialogBox from "@/components/ui/dialogbox";
import WelcomeDialog from "@/components/ui/welcomedialog";
import DialogArrowBr from "@/components/ui/dialogarrowbr";
import DialogArrowBl from "@/components/ui/dialogarrowbl";
import DialogArrowTl from "@/components/ui/dialogarrowtl";
import DialogArrowTr from "@/components/ui/dialogarrowtr";

export default function Home() {
  return (
    <div className="flex flex-col m-5 space-y-3 items-start font-mono text-sm">
      <WelcomeDialog />
      <DialogBox />
      <DialogArrowBr />
      <DialogArrowBl />
      <DialogArrowTl />
      <DialogArrowTr />
    </div>
  );
}
