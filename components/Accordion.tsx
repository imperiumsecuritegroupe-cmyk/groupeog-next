'use client'

import { useState } from 'react'

interface AccordionItem {
  question: string
  answer: string
}

export default function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="accordion">
      {items.map((item, i) => (
        <div className="accordion-item" key={i}>
          <button
            className={`accordion-header${openIndex === i ? ' open' : ''}`}
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            {item.question} <span className="accordion-icon">▾</span>
          </button>
          <div className={`accordion-body${openIndex === i ? ' open' : ''}`}>
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  )
}
