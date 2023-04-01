import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";
import { CyclesContext } from "../../../../contexts/CyclesContext";
import { useContext } from "react";
import { useFormContext } from "react-hook-form";

export function NewCycleForm() {

  const { activeCycle } = useContext(CyclesContext)

  const {register} = useFormContext();

  return (
    <>
      <FormContainer>
        <label htmlFor="">Vou trabalhar em</label>
        <TaskInput disabled={!!activeCycle} {...register('task')} list="task-suggestions" placeholder="Dê um nome para o seu projeto" id="task" />

        <datalist id="task-suggestions" >
          <option value="projeto 1" />
          <option value="projeto 2" />
          <option value="projeto 3" />
          <option value="projeto 4" />
          <option value="banana" />
        </datalist>

        <label htmlFor="">durante</label>
        <MinutesAmountInput disabled={!!activeCycle} {...register('minutesAmount', { valueAsNumber: true })} step={5} min={5} max={60} placeholder="00" type="number" id="minutesAmount" />
        <span>minutos</span>
      </FormContainer>
    </>
  );
}