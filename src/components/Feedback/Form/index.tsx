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
        <CloseButton>
          <X size={15} weight="bold" />
        </CloseButton>
      </header>
      <strong>Deixe aqui a sua ideia de projeto</strong>
      <span>
        Vamos por a mão na massa? Conte me sobre o seu projeto. Vou te responder
        em breve. 👇
      </span>
      <input
        type="email"
        placeholder="Digite o seu email"
        {...register("email")}
      />
      <textarea
        placeholder="Fale sobre o projeto ..."
        {...register("content")}
      />
      <ButtonForm type="submit" disabled={isSubmitting}>
        Enviar Feedback
      </ButtonForm>
    </FormContainer>
  );
}
