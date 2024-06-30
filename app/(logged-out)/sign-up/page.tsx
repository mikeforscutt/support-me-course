"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PersonStandingIcon } from "lucide-react";
import Link from "next/link";
import * as z from 'zod';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";



const formSchema = z.object({
   email: z.string().email(),
   accountType: z.enum(["personal", "company"]),
   companyName: z.string().optional(),
   numberOfEmployees: z.coerce.number().optional()

}).superRefine((data, ctx) => {
   if (data.accountType === "company" && !data.companyName) {
      ctx.addIssue({
         code: z.ZodIssueCode.custom,
         path: ["companyName"],
         message: "Company name is required"
      })
   }
   if (data.accountType === "company" && (!data.numberOfEmployees || data.numberOfEmployees < 1)) {
      ctx.addIssue({
         code: z.ZodIssueCode.custom,
         path: ["numberOfEmployees"],
         message: "Number of employees is required"
      })
   }
})

export default function SignupPage() {
   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         email: "",
      }
   });
   const handleSubmit = () => {
      console.log("login validation passed");
   }

   const accountType = form.watch("accountType");

   return <>
      <PersonStandingIcon size={50} />
      <Card className="w-full max-w-md">
         <CardHeader>
            <CardTitle>
               Sign up
            </CardTitle>
            <CardDescription>
               Sign up for a new SupportMe account
            </CardDescription>
         </CardHeader>
         <CardContent>
            <Form {...form}>
               <form className="flex flex-col gap-4" onSubmit={form.handleSubmit(handleSubmit)}>
                  <FormField
                     control={form.control}
                     name="email"
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>Email</FormLabel>
                           <FormControl>
                              <Input placeholder="john@doe.com" {...field} />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
                  <FormField
                     control={form.control}
                     name="accountType"
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>Account Type</FormLabel>
                           <Select onValueChange={field.onChange}>
                              <FormControl>
                                 <SelectTrigger>
                                    <SelectValue placeholder="Select an account type" />
                                 </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                 <SelectItem value="personal">
                                    Personal
                                 </SelectItem>
                                 <SelectItem value="company">
                                    Company
                                 </SelectItem>
                              </SelectContent>
                           </Select>
                        </FormItem>
                     )}
                  />
                  {accountType === "company" &&
                     <>
                        <FormField
                           control={form.control}
                           name="companyName"
                           render={({ field }) => (
                              <FormItem>
                                 <FormLabel>Company name</FormLabel>
                                 <FormControl>
                                    <Input placeholder="Company name" {...field} />
                                 </FormControl>
                                 <FormMessage />
                              </FormItem>
                           )}
                        />
                        <FormField
                           control={form.control}
                           name="numberOfEmployees"
                           render={({ field }) => (
                              <FormItem>
                                 <FormLabel>Employees</FormLabel>
                                 <FormControl>
                                    <Input type="number" min={0} placeholder="Employees" {...field} />
                                 </FormControl>
                                 <FormMessage />
                              </FormItem>
                           )}
                        />
                     </>
                  }

                  <Button type="submit">Sign up</Button>
               </form>
            </Form>
         </CardContent>
         <CardFooter className="justify-between">
            <small>Already have an account?</small>
            <Button asChild variant="outline" size="sm">
               <Link href="/login">
                  Login
               </Link>
            </Button>
         </CardFooter>

      </Card>
   </>;

}