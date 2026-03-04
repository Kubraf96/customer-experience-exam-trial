import { useState } from "react";

export default function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={() => setOpen(!open)}>
        <h4>{title}</h4>
        <span>{open ? "-" : "+"}</span>
      </div>

      {open && <div className="accordion-content">{children}</div>}
    </div>
  );
}
