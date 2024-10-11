import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import creeper from "../assets/download.jpg"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";


export default function AboutMe() {
  return (
    <div>

            <CardHeader className="mt-10">
                <CardTitle>
                    Hello
                </CardTitle>
                <CardDescription>
                    I am Javen
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Image src={creeper} alt="1" />
                <div className="flex flex-row gap-2"><p className="font-bold">Major:</p>IS</div>
                <div className="flex flex-row gap-2"><p className="font-bold">Hobbies:</p>Playing guitar and climbing</div>
                <div className="flex flex-row gap-2"><p className="font-bold">Fun fact:</p>I am left handed but I play guitar with my right hand</div>
            </CardContent>

        {/* <Alert>
            <Terminal className="h-4 w-4"/>
            <AlertTitle>Heads up</AlertTitle>
            <AlertDescription>I have added an alert</AlertDescription>
        </Alert> */}
    </div>
  );
}