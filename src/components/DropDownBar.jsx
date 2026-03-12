import { useState } from "react";

export default function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);

  // Dette er vores dropdown menu, som vi bruger i detalje siden.
  // Den henter dens data fra JSON filen når exporteret til detaljeSide.jsx
  // Den har en state der hedder open, som er false som default.
  // = Det betyder, at den kun åbnes ved brug af et onClick function.

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
