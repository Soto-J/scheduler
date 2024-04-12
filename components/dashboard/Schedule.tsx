"use client";

import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from "../ui/select";

type ScheduleProps = {
  date: Date | undefined;
};

export const Schedule = ({ date }: ScheduleProps) => {
  const readableDate = date?.toLocaleDateString("en-US") || "No date selected";

  return (
    <div>
      <h2>Date: {readableDate}</h2>

      <div className="flex gap-x-3 pt-4 items-center">
        <h3>Available timeslots:</h3>

        <Select>
          <SelectTrigger>Choose a time slot...</SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Time Slots</SelectLabel>
              <SelectItem value="9">9</SelectItem>
              <SelectItem value="11">11</SelectItem>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="3">3</SelectItem>
              <SelectItem value="5">5</SelectItem>
            </SelectGroup>
          </SelectContent>

          <Button type="button">Submit</Button>
        </Select>
      </div>
    </div>
  );
};
