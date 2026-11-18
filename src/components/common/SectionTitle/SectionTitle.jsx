// Underlined section heading. `centered` puts it in the middle of the section.
export default function SectionTitle({ children, centered = false, id }) {
  return (
    <h2 id={id} className={`u-title${centered ? ' center-title' : ''}`}>
      {children}
    </h2>
  )
}
