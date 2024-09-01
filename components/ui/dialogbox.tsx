import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Building2 } from 'lucide-react';

export default function DialogBox() {
  return (
    <>
      <Dialog>
        <DialogTrigger>
            Dialog Box - Standard
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex flex-row flex-wrap justify-between">
              <div className="flex flex-row">
                <Building2 color="#6366f1" className="m-2"/>
                <p className="self-center">Review Overview</p>
              </div>
              <p className="bg-gray-300 self-center text-white rounded-sm px-2 py-1 text-sm">1 / 5</p>
            </DialogTitle>
            <DialogDescription>
              Start by reviewing the overall summary of the student&apos;s performance.
              You&apos;ll see a preliminary score and general feedback provided by our AI.
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
