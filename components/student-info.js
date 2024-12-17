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
import axios from "axios";
import { MoreHorizontal, X } from "lucide-react";
import { useEffect, useState } from "react";

export function AlertDialogForStudentInfo({ row }) {
  const [Open, setOpen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState(null);
  const {
    form,
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
  const instance = axios.create({
    withCredentials: true,
    baseURL: '/api/concession/admin'
  })
  useEffect(() => {
    const fetchFile = async () => {
      try {
        const response = await fetch(feesReceipt);
        const arrayBuffer = await response.arrayBuffer();
        const blob = new Blob([arrayBuffer], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        setPdfUrl(url);
      } catch (error) {
        console.error('Error fetching file:', error);
      }
    };

    fetchFile();
  }, [feesReceipt]);

  const handleAccept = async (e) => {
    e.preventDefault();
    try {
      await instance.post(
        `/approved-status/${form}/approved`,
      ).then(() => {
        setOpen(false);
      })
    } catch (error) {
      console.log(error);
    }
  };

  const handleReject = async (e) => {
    e.preventDefault();
    try {
      await instance.post(
        `/approved-status/${form}/rejected`
      ).then(() => {
        setOpen(false);
      })
    } catch (error) {
      console.log(error);
    }
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
            <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-500">Click to view</a>
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
