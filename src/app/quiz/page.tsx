"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useToast } from "@/hooks/use-toast"


// const questions = [{
//   id: 1,
//   question: "What are the side effects of using heroin?",
//   options:["Depression", "Insomnia", "Liver and kidney disease", "Seizures", "All of the above"],
//   answer: "All of the above",
// },
// ]

const formSchema = z.object({
  Name: z.string().min(2, {
    message: "Your name should be at least 2 characters.",
  }),
  question1: z.coerce.number({
    required_error: "number is required"
  }),
  question2: z.enum(["Depression", "Insomnia", "Liver and kidney disease", "Seizures", "All"], {
    required_error: "You need to select an option!",
  }),
  question3: z.enum(["Seek", "Join", "Ignore", "Police"],{
    required_error: "You need to select an option!!"
  }),

  })
export default function Quiz() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Name: "",
    },
  })

  const { toast } = useToast();
  
  type Answers = {
    Name: string;
    question1: number;
    question2: "Depression" | "Insomnia" | "Liver and kidney disease" | "Seizures" | "All";
    question3: "Seek" | "Join" | "Ignore" | "Police";
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);

    let score = 0;

    const answers ={
      "name":"name",
      "question1":500,
      "question2":"All",
      "question3":"Seek"
    }
    for (const key in answers) {
      if (key in values && values[key as keyof Answers] === answers[key]) {
        score += 1; // Increment score for each correct answer
      }
    }
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(`Your score: ${score} out of ${Object.keys(answers).length}`);
    toast({
      title: `Results:`,
      description: `${values.Name}, your score is ${score} out of 3.`, // Use backticks for template literals
    });
  }
  return (
    
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-10 ml-5">
          <FormField
            control={form.control}
            name="Name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What's your name?</FormLabel>
                <FormControl>
                  <Input placeholder="First name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="question1"
            render={({ field }) => (
              <FormItem>
                <FormLabel>1. Whats is the minimum amount of marijuana before incurring the death penalty?</FormLabel>
                <FormControl>
                  <Input placeholder="Amount in Grams(g)" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="question2"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>2. Which is a side effect of taking heroin?</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="Depression" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Depression
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="Insomnia" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Insomnia
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="Liver and kidney disease" />
                      </FormControl>
                      <FormLabel className="font-normal"></FormLabel>
                      Liver and kidney disease
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="Seizures" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Seizures
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="All" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        All of the above
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="question3"
            render={({ field }) => (
              <FormItem>
                <FormLabel>3. What should you do if you see your friend taking drugs? </FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="Seek" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Seek advice from an adult or teacher.
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="Join" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Join them and take the drugs with them.
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="Ignore" />
                      </FormControl>
                      <FormLabel className="font-normal"></FormLabel>
                      Ignore them and let them continue.
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Call the police
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
              
            )}
          />
          <Button type="submit" className="text-black">Submit</Button>
        </form>
      </Form>
    // mcq


  );
}