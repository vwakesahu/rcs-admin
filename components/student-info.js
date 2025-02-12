import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, X } from "lucide-react";
import { useState } from "react";

export function AlertDialogForStudentInfo({ row }) {
  const [Open, setOpen] = useState(false);
  const {
    firstName,
    lastName,
    email,
    gender,
    dob,
    boarding,
    destination,
    status,
    feesReceipt,
  } = row.original;

  const handleAccept = (e) => {
    e.preventDefault();
    console.log("Accepted");
    setOpen(false);
  };

  const handleReject = (e) => {
    e.preventDefault();
    console.log("Rejected");
    setOpen(false);
  };

  return (
    <AlertDialog open={Open} onOpenChange={(e) => setOpen(e)}>
      <AlertDialogTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <div className="flex items-center justify-between w-full">
            <AlertDialogTitle>Student Information</AlertDialogTitle>
            <X className="cursor-pointer" onClick={() => setOpen(false)} />
          </div>

          <AlertDialogDescription>
            Here are the details of the student:
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="space-y-2">
          <div>
            <strong>First Name:</strong> {firstName}
          </div>
          <div>
            <strong>Last Name:</strong> {lastName}
          </div>
          <div>
            <strong>Email:</strong> {email}
          </div>
          <div>
            <strong>Gender:</strong> {gender}
          </div>
          <div>
            <strong>Date of Birth:</strong> {dob}
          </div>
          <div>
            <strong>Boarding:</strong> {boarding}
          </div>
          <div>
            <strong>Destination:</strong> {destination}
          </div>
          <div>
            <strong>Status:</strong> {status}
          </div>
          <div>
            <strong>Fees Receipt:</strong>{" "}
            <img src={feesReceipt} target="_blank" rel="noopener noreferrer" />
          </div>
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={(e) => handleReject(e)}>
            Reject
          </AlertDialogCancel>
          <AlertDialogAction onClick={(e) => handleAccept(e)}>
            Accept
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
