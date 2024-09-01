import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Sparkles } from 'lucide-react';

export default function DialogArrowTl() {
  return (
    <>
      <Dialog>
        <DialogTrigger>
            Dialog Box - Arrow Top Left
        </DialogTrigger>
        <DialogContent className="top-arrow left">
          <DialogHeader>
            <DialogTitle className="flex flex-row flex-wrap justify-between">
              <div className="flex flex-row">
                <Sparkles color="#6366f1" className="m-2"/>
                <p className="self-center">Edit AI Feedback and Score</p>
              </div>
              <p className="bg-gray-300 self-center text-white rounded-sm px-2 py-1 text-sm">4 / 5</p>
            </DialogTitle>
            <DialogDescription className="text-pretty">
              Adjust the AI-generated feedback and scores as needed.
              Make sure they accurately reflect the student&apos;s performance.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end">
            <Button variant="outline" className="mr-2">Back</Button>
            <Button className="bg-indigo-500 hover:bg-indigo-600">Next</Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
