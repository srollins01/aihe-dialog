import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChartPie } from 'lucide-react';

export default function DialogArrowBl() {
  return (
    <>
      <Dialog>
        <DialogTrigger>
            Dialog Box - Arrow Bottom Left
        </DialogTrigger>
        <DialogContent className="bottom-arrow left">
          <DialogHeader>
            <DialogTitle className="flex flex-row flex-wrap justify-between">
              <div className="flex flex-row">
                <ChartPie color="#6366f1" className="m-2"/>
                <p className="self-center">Review Question Insights</p>
              </div>
              <p className="bg-gray-300 self-center text-white rounded-sm px-2 py-1 text-sm">3 / 5</p>
            </DialogTitle>
            <DialogDescription className="text-pretty">
              Dive into insights for each question.
              Understand the student&apos;s approach and spot areas for improvement.
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
