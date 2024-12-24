import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import {
  AlertTriangleIcon,
  BadgeCheck,
  BadgeCheckIcon,
  LaptopIcon,
  PartyPopperIcon,
  UserCheck2Icon,
  UserIcon,
  UserRoundXIcon,
} from "lucide-react";
import Link from "next/link";
import cm from "@/public/images/cm.jpg";
import Image from "next/image";
import WorkLocationTrends from "./work-location-trends";

export default function EmployeesStats() {
  const totalEmployees = 100;
  const employeesPresent = 80;
  const employeesPresentPercentage = (employeesPresent / totalEmployees) * 100;
  return (
    <>
      <div className='grid lg:grid-cols-3 gap-4'>
        <Card>
          <CardHeader>
            <CardTitle className='text-base'>Total Employees</CardTitle>
          </CardHeader>
          <CardContent className='flex justify-between items-center'>
            <div className='flex gap-2'>
              <UserIcon />
              <div className='text-5xl font-bold'>{totalEmployees}</div>
            </div>
            <div>
              <Button size='xs' asChild>
                <Link href='/dashboard/employees'>View all</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className='text-base'>Employees Present</CardTitle>
          </CardHeader>
          <CardContent className='flex justify-between items-center'>
            <div className='flex gap-2'>
              {employeesPresentPercentage > 75 ? (
                <UserCheck2Icon />
              ) : (
                <UserRoundXIcon />
              )}
              <div className='text-5xl font-bold'>{employeesPresent}</div>
            </div>
          </CardContent>
          <CardFooter>
            {employeesPresentPercentage > 75 ? (
              <span className='text-xs text-green-500 flex gap-1 items-center'>
                <BadgeCheckIcon />
                {employeesPresentPercentage}% of employees are present
              </span>
            ) : (
              <span className='text-xs text-red-500 flex gap-1 items-center'>
                <AlertTriangleIcon />
                Only {employeesPresentPercentage}% of employees are present
              </span>
            )}
          </CardFooter>
        </Card>
        <Card className='border-pink-500 flex flex-col'>
          <CardHeader className='pb-2'>
            <CardTitle className='text-base'>Employee of The Month</CardTitle>
          </CardHeader>
          <CardContent className='flex gap-1 items-center'>
            <Avatar>
              <Image
                className='rounded-full w-10 h-10 object-cover'
                src={cm}
                alt='Employee of the month avatar'
              />
            </Avatar>
            <span className='text-base'>Colin McMillan</span>
          </CardContent>
          <CardFooter className='flex gap-2 items-center text-muted-foreground mt-auto'>
            <PartyPopperIcon className='text-pink-500' />
            <span className='text-xs'>Congratulations, Colin!</span>
          </CardFooter>
        </Card>
      </div>
      <Card className='my-4'>
        <CardHeader>
          <CardTitle className='text-lg flex gap-2 items-center'>
            <LaptopIcon className='text-pink-500' />
            <span>Check out our new dashboard</span>
          </CardTitle>
        </CardHeader>
        <CardContent className='pl-0'>
          <WorkLocationTrends />
        </CardContent>
      </Card>
    </>
  );
}