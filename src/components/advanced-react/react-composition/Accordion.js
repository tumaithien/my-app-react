import React from "react";
import { AccordionProvider } from "./accordion-context";
import AccordionContent from "./AccordionContent";
import AccordionHeader from "./AccordionHeader";

const Accordion = ({ header, children, className }) => {
  return (
    <div className={`mb-5 ${className}`}>
      <AccordionProvider>
        <AccordionHeader>{header}</AccordionHeader>
        <AccordionContent>{children}</AccordionContent>
      </AccordionProvider>
    </div>
  );
};

export default Accordion;
