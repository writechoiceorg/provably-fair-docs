import React from "react";
import CodeBlock from "@theme/CodeBlock";

export default function DocStepper({ steps }) {
  return (
    <div className="docStepper">
      {steps.map((step, index) => (
        <section key={step.id ?? `${index + 1}-${step.title}`} className="docStepperStep">
          <div className="docStepperIndex">{index + 1}</div>
          <div className="docStepperContent">
            <h4>{step.title}</h4>
            {step.description ? <p>{step.description}</p> : null}
            {step.bullets ? (
              <ul>
                {step.bullets.map((bullet, bulletIndex) => (
                  <li key={`${step.id ?? step.title}-bullet-${bulletIndex}`}>{bullet}</li>
                ))}
              </ul>
            ) : null}
            {step.codeBlocks
              ? step.codeBlocks.map((block, blockIndex) => (
                  <div key={`${step.id ?? step.title}-code-${blockIndex}`}>
                    {block.label ? <p>{block.label}</p> : null}
                    <CodeBlock language={block.language}>{block.code}</CodeBlock>
                  </div>
                ))
              : null}
            {step.note ? <p>{step.note}</p> : null}
          </div>
        </section>
      ))}
    </div>
  );
}
