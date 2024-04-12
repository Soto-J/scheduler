"use client";

import { useEffect, useState } from "react";

import { Schedule } from "./Schedule";

import { Calendar } from "../ui/calendar";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";

export const Dashboard = () => {
  const [date, setDate] = useState<Date | undefined>();

  useEffect(() => {
    console.log({ date });
  }, [date, setDate]);

  return (
    <div>
      <Calendar
        selected={date}
        onSelect={setDate}
        onDayClick={setDate}
        className="border rounded-lg mb-4"
      />

      <Dialog>
        <DialogTrigger>
          <Button>Schedule</Button>
        </DialogTrigger>

        <DialogContent>
          <Schedule />
        </DialogContent>
      </Dialog>
    </div>
  );
};
