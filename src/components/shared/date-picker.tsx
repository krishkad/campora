"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export default function DatePicker({
  defaultDate
}: {
  defaultDate?: Date
}) {
  const [date, setDate] = React.useState<Date | undefined>(
    defaultDate ? defaultDate : new Date(new Date())
  )

  React.useEffect(() => {
    if (!defaultDate) return;
    setDate(defaultDate)
  }, [defaultDate])


  console.log(date)

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal rounded-full",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "MMM d yyyy") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={typeof date === undefined ? () => { } : setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
