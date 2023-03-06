import { FormContainer, CloseButton, ButtonForm } from "./styles";
import { X } from "phosphor-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const sendFeedbackFormSchema = z.object({
  email: z.string().email(),
  content: z.string(),
});

type sendFeedbackFormData = z.infer<typeof sendFeedbackFormSchema>;

export function Form() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<sendFeedbackFormData>({
    resolver: zodResolver(sendFeedbackFormSchema),
  });

  async function handleSendFeedback(data: sendFeedbackFormData) {}

  return (
    <FormContainer onSubmit={handleSubmit(handleSendFeedback)}>
      <header>
        <strong>Deixe seu feedback</strong>
        <CloseButton>
          <X size={15} weight="bold" />
        </CloseButton>
      </header>
      <input
        type="email"
        placeholder="Digite o seu email"
        {...register("email")}
      />
      <textarea placeholder="Enviar alguma pergunta" {...register("content")} />
      <ButtonForm type="submit" disabled={isSubmitting}>
        Enviar Feedback
      </ButtonForm>
    </FormContainer>
  );
}
