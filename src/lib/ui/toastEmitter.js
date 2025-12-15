import { createStandaloneToast } from "@chakra-ui/react";
import theme from "@/styles/theme";

const { toast } = createStandaloneToast({ theme });

export function emitToast({
  title,
  description,
  status = "info",
  duration = 4000,
  isClosable = true,
  position = "top",
}) {
  return toast({
    title,
    description,
    status,
    duration,
    isClosable,
    position,
    variant: "top-accent",
  });
}

export const toastSuccess = (title, description) =>
  emitToast({ title, description, status: "success" });

export const toastError = (title, description) =>
  emitToast({ title, description, status: "error", duration: 6000 });

export const toastInfo = (title, description) =>
  emitToast({ title, description, status: "info" });

export const toastWarning = (title, description) =>
  emitToast({ title, description, status: "warning" });
