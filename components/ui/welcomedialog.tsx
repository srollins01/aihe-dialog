import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Image from 'next/image'

export default function WelcomeDialog() {
  return (
    <>
      <Dialog>
        <DialogTrigger>
            Dialog Box - Welcome
        </DialogTrigger>
        <DialogContent>
          <DialogHeader className="flex justify-center items-center">
            <Image
              src="/woman-journal.png"
              width="200"
              height="200"
              alt="Woman illustration with books"
            />
            <DialogTitle className="flex flex-row flex-wrap justify-center text-2xl">
              Welcome to Aihe
            </DialogTitle>
            <DialogDescription className="text-center text-balance">
              Take a quick tour to get familiar with our product.
              We&apos;ll have you up and running in no time.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center">
            <Button variant="outline" className="mr-2">Skip the Tour</Button>
            <Button className="bg-indigo-500 hover:bg-indigo-600">Start a Quick Tour</Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
