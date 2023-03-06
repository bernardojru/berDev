import { Overlay, FeedbackContainer } from "./styles";
import * as Dialog from "@radix-ui/react-dialog";
import { Form } from "./Form";
import { SuccessForm } from "./SucessForm";

export function Feedback() {
  const isSubmit = true;
  return (
    <Dialog.Portal>
      <Overlay />
      <FeedbackContainer>
        {isSubmit ? <Form /> : <SuccessForm />}
      </FeedbackContainer>
    </Dialog.Portal>
  );
}
