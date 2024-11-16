import { Helmet } from "react-helmet-async";
import NewsLetter from "../../components/NewsLetter";

const Blog9 = () => {
  return (
    <div>
      <Helmet>
        <title>5 WHYs Framework for Product&nbsp;Managers</title>
        <meta
          name="description"
          content="The 5 WHYs Framework is a tool used by most product managers to peel back the layers of a problem and get to its root cause."
        />
      </Helmet>

      <div>
        <div className="px-4 flex flex-col items-center pt-4 lg:pt-16 pb-8 lg:pb-16 font-inter bg-white">
          <div className="max-w-4xl w-full flex flex-col gap-8">
            {" "}
            <div className="flex flex-col gap-3">
              <h1 className="text-[24px] lg:text-[36px] font-sans font-bold">
                5 WHYs Framework for Product&nbsp;Managers
              </h1>
              <div className="text-[16px] text-[#667085]">October 15, 2024</div>
              <div className="flex flex-wrap gap-1">
                <p className="bg-[#E7F7FC] border border-[#013B4D3D] text-black p-2 rounded-lg">
                  Guides &amp; Frameworks{" "}
                </p>
              </div>
            </div>
            <div className="prose prose-lg text-[16px] lg:text-[18px] max-w-4xl mx-auto">
              <p>
                Let’s talk about one of the most important things in a product
                manager’s day-to-day job – getting to the bottom of things,
                product problems to be exact. We all deal with them, from low
                user engagement to pesky bugs. But how often do we really
                understand the core reason behind the issue?
              </p>

              <p>
                That’s where the&nbsp;<strong>5 WHYs Framework</strong>
                &nbsp;comes in. It is a tool used by most product managers to
                peel back the layers of a problem and get to its root cause.
              </p>

              <p>
                It’s a simple yet powerful technique that helps move beyond
                surface-level issues and identify the underlying factors causing
                them.{" "}
              </p>

              <h3 className="wp-block-heading">How it works</h3>

              <ol className="wp-block-list">
                <li>
                  <strong>Start with the problem:</strong>&nbsp;Identify the
                  initial issue you’re facing. It could be anything from low
                  user engagement to a bug in your product. Is it a drop in user
                  sign-ups? A confusing feature? Be specific!
                </li>

                <li>
                  <strong>Ask “Why?” five times:</strong>&nbsp;For each answer
                  you get, ask “Why” again to dig deeper. Don’t stop at the
                  first explanation; keep questioning until you reach the core
                  reason behind the problem.
                </li>
              </ol>

              <p>
                <strong>For Example:</strong>&nbsp;Let’s say user engagement is
                low. Here’s how the 5 Whys might play out:
              </p>

              <ul className="wp-block-list">
                <li>
                  Why is user engagement low? – Users aren’t finding the value
                  they expected.
                </li>

                <li>
                  Why aren’t they finding value? – The core features are
                  confusing or difficult to use.
                </li>

                <li>
                  Why are the features confusing? – The onboarding process
                  doesn’t adequately explain their functionality.
                </li>

                <li>
                  Why doesn’t the onboarding process explain it well? – The
                  onboarding content is lacking or outdated.
                </li>

                <li>
                  Why is the onboarding content lacking? – The product team
                  hasn’t prioritized creating clear onboarding materials.
                </li>
              </ul>

              <figure className="wp-block-image">
                <a
                  href="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F872a4485-2d6e-40f6-bcc2-651c5575cdbb_1276x764.png"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img
                    src="https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F872a4485-2d6e-40f6-bcc2-651c5575cdbb_1276x764.png"
                    alt=""
                  />
                </a>
              </figure>

              <p>
                See where this is going? By the fifth “Why,” we’ve identified
                that the root cause of low engagement is a lack of focus on user
                education during product onboarding.
              </p>

              <h3 className="wp-block-heading">
                <strong>How it benefits Product Managers</strong>
              </h3>

              <p>
                This framework equips you to tackle problems head-on and make
                smarter decisions like:
              </p>

              <ul className="wp-block-list">
                <li>
                  <strong>To uncover root causes:</strong>&nbsp;The 5 WHYs help
                  move past symptoms and identify the fundamental reasons behind
                  problems.
                </li>

                <li>
                  <strong>For better decision-making:</strong>&nbsp;By
                  understanding the root cause, product managers can make more
                  informed decisions about solutions and improvements.
                </li>

                <li>
                  <strong>Improved problem-solving:</strong>&nbsp;This framework
                  encourages critical thinking and a systematic approach to
                  tackling product issues.
                </li>

                <li>
                  <strong>In collaboration:</strong>&nbsp;The 5 WHYs can be used
                  in group discussions to get various perspectives and reach a
                  deeper understanding of the problem.
                </li>
              </ul>

              <h3 className="wp-block-heading">
                <strong>Best practices for adopting this framework</strong>
              </h3>

              <p>
                To maximize the effectiveness of the 5 WHYs, there are some key
                practices to keep in mind:
              </p>

              <ul className="wp-block-list">
                <li>
                  <strong>Focus on open-ended questions:</strong>&nbsp;Instead
                  of yes/no answers, ask questions that prompt discussion and
                  exploration of the issue.
                </li>

                <li>
                  <strong>Challenge assumptions:</strong>&nbsp;Don’t take
                  initial explanations at face value. Encourage critical
                  thinking to ensure you’re not missing anything.
                </li>

                <li>
                  <strong>Listen actively:</strong>&nbsp;Pay close attention to
                  the reasoning behind each answer. This will help you formulate
                  better follow-up questions.
                </li>

                <li>
                  <strong>Iterate and refine:</strong>&nbsp;The 5 WHYs is an
                  iterative process. As you uncover new information, revisit
                  earlier answers to see if they need refinement.
                </li>

                <li>
                  <strong>Collaboration is key:</strong>&nbsp;Involve
                  stakeholders from different areas (design, engineering, etc.)
                  This allows for a more comprehensive understanding of the
                  problem.
                </li>
              </ul>

              <h3 className="wp-block-heading">
                <strong>When to use this Framework</strong>
              </h3>

              <p>
                Here are some situations where it can be particularly effective:
              </p>

              <ul className="wp-block-list">
                <li>
                  <strong>Understanding user behavior:</strong>&nbsp;When user
                  feedback indicates confusion or dissatisfaction, use the 5
                  WHYs to understand the underlying reasons.
                </li>

                <li>
                  <strong>Analyzing product issues:</strong>&nbsp;Is a feature
                  not performing as expected? The 5 WHYs can help pinpoint the
                  root cause behind bugs or functionality problems.
                </li>

                <li>
                  <strong>Making data-driven decisions:</strong>&nbsp;Don’t just
                  react to data; use the 5 WHYs to understand the “why” behind
                  trends and user behavior.
                </li>
              </ul>

              <h3 className="wp-block-heading">
                <strong>Limitations of the 5 WHYs Framework</strong>
              </h3>

              <p>
                While it’s a valuable tool, it’s important to be aware of the
                following considerations:
              </p>

              <ul className="wp-block-list">
                <li>
                  <strong>Not a one-size-fits-all solution:</strong>
                  &nbsp;Complex problems might require a combination of
                  techniques for a complete picture.
                </li>

                <li>
                  <strong>Beware of confirmation bias:</strong>&nbsp;Our
                  existing beliefs can influence the direction of questioning.
                  Be mindful of this and strive for objectivity.
                </li>

                <li>
                  <strong>
                    Limited to uncovering “why,” not “how” to fix:
                  </strong>
                  &nbsp;While the 5 WHYs identifies the root cause, it doesn’t
                  necessarily provide solutions. You’ll need additional
                  brainstorming or problem-solving techniques to develop
                  solutions.
                </li>
              </ul>

              <p>
                So, the next time you face a product mystery, remember the 5
                WHYs framework! It’s a simple but powerful tool that can help
                you dig deeper and uncover the root cause of problems and build
                better products.
              </p>

              <p></p>
            </div>
          </div>
        </div>
      </div>

      <NewsLetter />
    </div>
  );
};

export default Blog9;
