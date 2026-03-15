import { useTaskContext } from "../../contexts/taskContext/useTaskContext"

export default function CountDown(){
    const {state} = useTaskContext();

    return(
        
        <div className="flex justify-center text-9xl font-bold pb-7 md:py-0">
            <span>{state.formatedSecandsEmAndamento}</span>
        </div>
    )
}