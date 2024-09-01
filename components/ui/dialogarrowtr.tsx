import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Mail } from 'lucide-react';

export default function DialogArrowTr() {
  return (
    <>
      <Dialog>
        <DialogTrigger>
            Dialog Box - Arrow Top Right
        </DialogTrigger>
        <DialogContent className="top-arrow right">
          <DialogHeader>
            <DialogTitle className="flex flex-row flex-wrap justify-between">
              <div className="flex flex-row">
                <Mail color="#6366f1" className="m-2"/>
                <p className="self-center">Send Results to Students</p>
              </div>
              <p className="bg-gray-300 self-center text-white rounded-sm px-2 py-1 text-sm">5 / 5</p>
            </DialogTitle>
            <DialogDescription className="text-pretty">
              Finally, share the results with the student.
              Include the feedback and scores you&apos;ve reviewed and approved.
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
