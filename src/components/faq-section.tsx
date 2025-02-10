"use client"

import {Tag} from "@/components/ui/tag";
import {cn} from "@/lib/utils";

const FAQS = [
  {
    question: "How is Layers different from other design tools?",
    answer: "Unlike traditional design tools, Layers prioritizes speed and simplicity without sacrificing power. Our intelligent interface adapts to your workflow, reducing clicks and keeping you in your creative flow."
  },
  {
    question:
      "Is there a learning curve?",
    answer: "Layers is designed to feel intuitive from day one. Most designers are productive within hours, not weeks. We also provide interactive tutorials and comprehensive documentation to help you get started."
  },
  {
    question: "How do you handle version control?",
    answer: ""
  },
  {
    question: "Can I work offline?",
    answer: ""
  },
  {
    question: "How does Layers handle collaboration?",
    answer: "Layers is built for collaboration. You can invite"
  },
]

export function FAQSection() {
  const selectedIndex = 0

  return (
    <section className="py-24">
      <div className="container flex flex-col items-center justify-center">
        <Tag>Faqs</Tag>
        <h2 className="text-6xl font-medium text-center max-w-xl mt-6">
          Questions? We've got <span className="text-lime-400">answers</span>
        </h2>
        <div className="mt-12 flex flex-col gap-6 max-w-3xl">
          {FAQS.map((faq, index) => (
            <div key={index} className="bg-neutral-900 rounded-2xl border border-foreground/10 p-6">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-lg">{faq.question}</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className={cn("feather feather-plus text-lime-400 shrink-0", selectedIndex === index && "rotate-45 transition-transform")}
                >
                  <line x1="12" y1="5" x2="12" y2="19"/>
                  <line x1="5" y1="12" x2="19" y2="12"/>
                </svg>
              </div>
              <div className={cn("mt-4", selectedIndex !== index && "hidden")}>
                <p className="text-muted-foreground ">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}