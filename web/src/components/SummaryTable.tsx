import dateRangeGenerator from "../utils/dateRangeGenerator"
import HabitDay from "./HabitDay"

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S',]

const summaryDates = dateRangeGenerator()
const minimumSummaryDatesSize = 18 * 7 // 18 weeks
const amountOfDaysToFill = minimumSummaryDatesSize - summaryDates.length


export default function SummaryTable () {
    return (
        <div className="w-full flex">
            <div className="grid grid-rows-7 grid-flow-row gap-3">
                {
                    weekDays.map((weekDay , i) => (
                        <div 
                         key={`weekDay_${weekDay}_${i}`} 
                         className="text-zinc-400 text-xl h-10 w-10 flex items-center justify-center"
                        >
                            {weekDay}
                        </div>
                    ))
                }
            </div>

            <div className="grid grid-rows-7 grid-flow-col gap-3">                
                {
                    summaryDates.map(date => <HabitDay key={date.toDateString()}/>)                    
                }              
                {
                    amountOfDaysToFill > 0 && Array.from({ length: amountOfDaysToFill })
                    .map((_, i) => (
                        <div key={`placeholder-${i}`} className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed">                            
                        </div>
                    ))
                }
            </div>
        </div>
    )
}