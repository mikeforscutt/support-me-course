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

const handleSubmit = () => {
   console.log("login validation passed");
}

const formSchema = z.object({
   email: z.string().email(),
   password: z.string(),

})

export default function LoginPage() {
   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         email: "",
         password: ""
      }
   });

   return <>
      <PersonStandingIcon size={50} />
      <Card className="w-full max-w-md">
         <CardHeader>
            <CardTitle>
               Login
            </CardTitle>
            <CardDescription>
               Login to your SupportMe account
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
                           <FormDescription>
                              This is the email you signed up to SupportMe with
                           </FormDescription>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
                  <FormField
                     control={form.control}
                     name="Password"
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>Email</FormLabel>
                           <FormControl>
                              <Input placeholder="password" {...field} />
                           </FormControl>

                           <FormMessage />
                        </FormItem>
                     )}
                  />
                  <Button type="submit">Login</Button>
               </form>
            </Form>
         </CardContent>
         <CardFooter className="justify-between">
            <small>Don't have an account?</small>
            <Button asChild variant="outline" size="sm">
               <Link href="/sign-up">
                  Sign up
               </Link>
            </Button>
         </CardFooter>

      </Card>
   </>;

}