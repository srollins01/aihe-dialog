import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Users } from 'lucide-react';

export default function DialogArrowBr() {
  return (
    <>
      <Dialog>
        <DialogTrigger>
            Dialog Box - Arrow Bottom Right
        </DialogTrigger>
        <DialogContent className="bottom-arrow right">
          <DialogHeader>
            <DialogTitle className="flex flex-row flex-wrap justify-between">
              <div className="flex flex-row">
                <Users color="#6366f1" className="m-2"/>
                <p className="self-center">Review Individual Answers</p>
              </div>
              <p className="bg-gray-300 self-center text-white rounded-sm px-2 py-1 text-sm">2 / 5</p>
            </DialogTitle>
            <DialogDescription className="text-pretty">
              Check each of the student&apos;s answers.
              Our AI provides detailed feedback for each response.
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
