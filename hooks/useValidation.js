import { useForm } from "react-hook-form";

export default function useValidation() {
  const { register, handleSubmit, formState, reset } = useForm();

  return {
    registerInput: register,
    wrapHandleSubmit: handleSubmit,
    errors: formState.errors,
    reset,
  };
}
