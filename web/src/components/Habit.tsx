interface HabitProps {
    completed: number
  }
  
  export default function Habit(props:HabitProps) {  
    return (
     <p
      className="bg-zinc-900 w-10 h-10 m-2 text-white rounded text-center flex items-center justify-center"
     >{props.completed}</p>
    )
  }
  
  