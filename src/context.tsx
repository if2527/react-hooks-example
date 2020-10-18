import React from "react";

export const Context = React.createContext<{
  clickPost: (id: number) => void;
  closeModal: () => void;
  idActivePost: number | null;
}>({
  clickPost: () => {},
  closeModal: () => {},
  idActivePost: null,
});
