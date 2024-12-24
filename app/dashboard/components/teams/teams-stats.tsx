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
  ListChecksIcon,
  PartyPopperIcon,
  PieChartIcon,
  StarIcon,
  UsersIcon,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import cm from "@/public/images/cm.jpg";
import tf from "@/public/images/tf.jpg";
import rl from "@/public/images/rl.jpg";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import TeamDistrubutionCharts from "./team-distrubution-charts";
import SupportTicketsResolved from "./support-tickets-resolved";

const teamLeaders = [
  {
    firstName: "Colin",
    lastName: "Murray",
    avatar: cm,
  },
  {
    firstName: "Tom",
    lastName: "Phillips",
  },
  {
    firstName: "Liam",
    lastName: "Fuentes",
  },
  {
    firstName: "Tina",
    lastName: "Fey",
    avatar: tf,
  },
  {
    firstName: "Katie",
    lastName: "Johnson",
  },
  {
    firstName: "Tina",
    lastName: "Jones",
  },
  {
    firstName: "Amy",
    lastName: "Adams",
  },
  {
    firstName: "Ryan",
    lastName: "Lopez",
    avatar: rl,
  },
  {
    firstName: "Jenny",
    lastName: "Jones",
  },
];

export default function TeamsStats() {
  return (
    <>
      <div className='grid lg:grid-cols-3 gap-4'>
        <Card>
          <CardHeader>
            <CardTitle className='text-base'>Total teams</CardTitle>
          </CardHeader>
          <CardContent className='flex justify-between items-center'>
            <div className='flex gap-2'>
              <UsersIcon />
              <div className='text-5xl font-bold'>8</div>
            </div>
            <div>
              <Button size='xs' asChild>
                <Link href='/dashboard/teams'>View all</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className='pb-2'>
            <CardTitle className='text-base flex justify-between items-center'>
              <span>Team leaders</span>
              <StarIcon className='text-yellow-500' />
            </CardTitle>
          </CardHeader>
          <CardContent className='flex flex-wrap gap-2'>
            {teamLeaders.map((leader, index) => (
              <TooltipProvider key={index}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Avatar className='h-10 w-10 bg-zinc-800 rounded-full flex items-center justify-center overflow-hidden cursor-pointer'>
                      {leader.avatar ? (
                        <Image
                          src={leader.avatar}
                          alt={`${leader.firstName} ${leader.lastName}`}
                        />
                      ) : (
                        <AvatarFallback>
                          {leader.firstName[0]}
                          {leader.lastName[0]}
                        </AvatarFallback>
                      )}
                    </Avatar>
                  </TooltipTrigger>
                  <TooltipContent>
                    {leader.firstName} {leader.lastName}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </CardContent>
        </Card>
        <Card className='border-pink-500 flex flex-col'>
          <CardHeader className='pb-2'>
            <CardTitle className='text-base flex justify-between items-center'>
              <span>Team distrubution</span>
              <PieChartIcon className='text-pink-500' />
            </CardTitle>
          </CardHeader>
          <CardContent className='pb-0'>
            <TeamDistrubutionCharts />
          </CardContent>
        </Card>
      </div>
      <Card className='my-4'>
        <CardHeader>
          <CardTitle className='text-lg flex gap-2 items-center'>
            <ListChecksIcon />
            <span>Support tickets resolved</span>
          </CardTitle>
        </CardHeader>
        <CardContent className='pl-0'>
          <SupportTicketsResolved />
        </CardContent>
      </Card>
    </>
  );
}
