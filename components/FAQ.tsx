import { ReactNode } from "react";

function Question({ q, children }: { q: string; children: ReactNode }) {
  return (
    <div className="bg-[#F7F7FF] p-6 rounded border shadow-lg">
      <h3 className="text-xl font-medium mb-2">{q}</h3>
      <p className="text-lg">{children}</p>
    </div>
  );
}

export function FAQ() {
  return (
    <div>
      <div className="faq py-4 px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        <Question q="Am I eligible to participate?">
          This event is open to Cadettes, Seniors, and Ambassadors, and it&apos;s for
          middle and high school students.
        </Question>
        <Question q="Is this free?">
          Lonestar is completely free, thanks to support from Hack Club 
          and the Girl Scouts of Southwest Texas!
        </Question>
        <Question q="I&apos;ve never coded before!">
          We&apos;ll have workshops to guide beginners 
          throughout the hackathon. We invite attendees from all levels.
        </Question>
        <Question q="Do I need a team?">
          We highly encourage participants to form teams. We&apos;ll 
          have activities to make sure no hacker is left out.
        </Question>
        <Question q="What should I bring?">
          Bring your laptop and charger if you have them, as well as 
          a water bottle. Meals and snacks will be covered!
        </Question>
        <Question q="I have another question!">
          You can find us in the #lonestar channel on{" "}
          <a
            className="text-[#e3a254] underline"
            href="https://hackclub.com/slack/?event=Lonestar"
            target="_blank"
            rel="noreferrer"
          >Slack</a>,
          or email us at{" "}
          <a className="text-[#e3a254] underline" href="mailto:lonestar@hackclub.com">lonestar@hackclub.com</a>.
        </Question>
      </div>
    </div>
  );
}