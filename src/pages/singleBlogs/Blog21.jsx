import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import NewsLetter from "../../components/NewsLetter";

const Blog21 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Helmet>
        <title>
          Jobs-to-Be-Done Framework – A Practical Guide for
          Product&nbsp;Managers
        </title>
        <meta
          name="description"
          content="Master the Jobs to Be Done (JTBD) framework with this practical guide for product managers. Learn how to uncover customer needs, create valuable products, and drive growth."
        />
        <link
          rel="canonical"
          href="https://theproductspace.in/blogs/jobs-to-be-done-framework-a-practical-guide-for-product-managers"
        />
      </Helmet>
      <div>
        <div className="px-4 flex flex-col items-center pt-4 lg:pt-16 pb-8 lg:pb-16 font-inter bg-white">
          <div className="max-w-4xl w-full flex flex-col gap-8">
            {" "}
            <div className="flex flex-col gap-3">
              <h1 className="text-[24px] lg:text-[36px] font-sans font-bold">
                Jobs-to-Be-Done Framework – A Practical Guide for
                Product&nbsp;Managers
              </h1>
              <div className="text-[16px] text-[#667085]">October 25, 2024</div>
              <div className="flex flex-wrap gap-1">
                <p className="bg-[#E7F7FC] border border-[#013B4D3D] text-black p-2 rounded-lg">
                  Guides &amp; Frameworks{" "}
                </p>
              </div>
            </div>
            <div className="prose prose-lg text-[16px] lg:text-[18px] max-w-4xl mx-auto">
              <p>
                Have you ever paid for a product packed with features, only to
                find that it doesn’t solve your core problem? You’re left
                frustrated and wondering, “What were the PMs thinking?”
              </p>

              <p>
                The truth is, that features alone don’t guarantee success. What
                truly matters is understanding the fundamental reasons why
                customers choose your product – the “jobs” they’re trying to get
                done.
              </p>

              <p>
                This is where the Jobs-to-Be-Done (JTBD) framework comes in.
              </p>

              <h3 className="wp-block-heading">
                <strong>What is the Jobs-to-Be-Done Framework?</strong>
              </h3>

              <p>
                Jobs-to-be-Done theory provides a framework for defining,
                categorizing, capturing, and organizing all your customers’
                needs. This approach focuses on the fundamental “job” that
                customers are trying to accomplish, rather than on the product
                or its features.
              </p>

              <h4 className="wp-block-heading">
                <strong>Understanding JTBD</strong>
              </h4>

              <p>
                At its core, JTBD theory explains that customers don’t buy
                products; they hire them to get a job done. This job represents
                the progress that a customer is trying to make in a particular
                circumstance. By understanding these jobs, product managers can
                create solutions that truly resonate with customers.
              </p>

              <h4 className="wp-block-heading">
                <strong>Key Components</strong>
              </h4>

              <ol className="wp-block-list">
                <li>
                  Functional job: The practical task the customer wants to
                  accomplish.
                </li>

                <li>
                  Emotional job: How the customer wants to feel or avoid
                  feeling.
                </li>

                <li>
                  Social job: How the customer wants to be perceived by others.
                </li>
              </ol>

              <figure className="wp-block-image">
                <a
                  href="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F14030683-4579-4d6b-80aa-fcfb652211b6_553x565.png"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img
                    src="https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F14030683-4579-4d6b-80aa-fcfb652211b6_553x565.png"
                    alt=""
                  />
                </a>
                <figcaption className="wp-element-caption">
                  Image credit: productboard
                </figcaption>
              </figure>

              <h3 className="wp-block-heading">
                <strong>Why use JTBD?</strong>
              </h3>

              <ul className="wp-block-list">
                <li>
                  <strong>
                    Focus on problem-solving, not feature chasing:
                  </strong>
                  &nbsp;Many products get bogged down by feature bloat, adding
                  functionalities that may not actually address customer needs.
                  JTBD helps you shift your focus from “What cool features can
                  we add?” to “What problems are our customers facing?” This
                  ensures you’re building solutions that directly address
                  customer pain points.
                </li>

                <li>
                  <strong>Prioritize features effectively:</strong>&nbsp;With
                  JTBD, you gain a clear understanding of which features matter
                  most to your customers. By mapping features to specific
                  customer jobs, you can prioritize development efforts and
                  allocate resources strategically. This eliminates wasted time
                  and money on features that might not contribute significantly
                  to solving customer problems.
                </li>

                <li>
                  <strong>Gain a competitive edge:</strong>&nbsp;Traditional
                  market research often overlooks unmet customer needs. JTBD
                  helps you delve deeper, uncovering hidden desires and
                  frustrations that your competitors might be missing. This
                  opens doors for innovation and the development of truly
                  differentiating solutions that set you apart in the market.
                </li>

                <li>
                  <strong>Boost user engagement &amp; satisfaction:</strong>
                  &nbsp;When your product directly addresses customer jobs,
                  users become more engaged and satisfied. They see the value
                  proposition clearly and experience the product fulfilling
                  their needs. This translates to higher retention rates,
                  increased usage, and positive word-of-mouth marketing.
                </li>

                <li>
                  <strong>Achieve product-market-fit (PMF):</strong>
                  &nbsp;Launching a product with a strong market fit is
                  essential. JTBD helps validate this fit before launch. Analyze
                  the prevalence and urgency of customer jobs to see if your
                  product solves a significant problem for a sizeable target
                  audience. Focus on core functionalities that address the most
                  critical customer jobs for a successful initial offering.
                </li>
              </ul>

              <h3 className="wp-block-heading">
                <strong>Implementing JTBD in Product Management</strong>
              </h3>

              <ol className="wp-block-list">
                <li>
                  <strong>Identify the job</strong>
                  <ul className="wp-block-list">
                    <li>
                      Conduct customer interviews focused on understanding their
                      goals and challenges, needs, desires, and frustrations.
                    </li>

                    <li>
                      Look for patterns in customer behavior and pain points.
                    </li>

                    <li>
                      Use techniques like the “5 Whys” to uncover underlying
                      motivations.
                    </li>
                  </ul>
                </li>

                <li>
                  <strong>Define job statements</strong>
                  <ul className="wp-block-list">
                    <li>
                      Create clear, actionable statements that describe the job
                      from the customer’s perspective.
                    </li>

                    <li>
                      Example: “Help me quickly automate my workflow processes
                      without falling into technical complications.”
                    </li>
                  </ul>
                </li>

                <li>
                  <strong>Uncover desired outcomes</strong>
                  <ul className="wp-block-list">
                    <li>
                      Identify the metrics customers use to measure success in
                      completing the job.
                    </li>

                    <li>
                      These become the criteria for evaluating potential
                      solutions.
                    </li>
                  </ul>
                </li>

                <li>
                  <strong>Analyze competing solutions</strong>
                  <ul className="wp-block-list">
                    <li>
                      Examine how customers currently accomplish the job,
                      including non-obvious alternatives.
                    </li>

                    <li>
                      Identify opportunities for improvement or disruption.
                    </li>
                  </ul>
                </li>

                <li>
                  <strong>Innovate and prioritize</strong>
                  <ul className="wp-block-list">
                    <li>
                      Generate ideas that address unmet needs within the job.
                    </li>

                    <li>
                      Prioritize features and solutions based on their potential
                      to help customers make progress.
                    </li>
                  </ul>
                </li>

                <li>
                  <strong>Align development and marketing</strong>
                  <ul className="wp-block-list">
                    <li>
                      Use job statements to guide product development and
                      feature prioritization.
                    </li>

                    <li>
                      Frame marketing messages around the job to be done, not
                      just product features.
                    </li>
                  </ul>
                </li>
              </ol>

              <h3 className="wp-block-heading">
                <strong>Case Studies –</strong>
              </h3>

              <h4 className="wp-block-heading">
                <strong>1. The Milkshake Story:</strong>
              </h4>

              <p>
                Clayton Christensen, applied the JTBD framework to help a
                fast-food restaurant improve its milkshake sales. The research
                revealed that many customers were “hiring” milkshakes for an
                unexpected job: making their morning commute more interesting
                and filling.
              </p>

              <p>
                <strong>Key Insight:</strong>&nbsp;The milkshake wasn’t
                competing with other desserts but with bagels, bananas, and
                easy-to-carry &amp; fulfilling food.
              </p>

              <p>
                <strong>Result:</strong>&nbsp;The restaurant adjusted its
                milkshake formula and marketing to better address this job,
                leading to increased sales.
              </p>

              <h4 className="wp-block-heading">
                <strong>
                  2. Snickers’ “You’re not you when you’re hungry” Campaign:
                </strong>
              </h4>

              <p>
                Mars applied JTBD thinking to reposition Snickers, focusing on
                the emotional job of alleviating hunger-induced mood changes.
              </p>

              <p>
                <strong>Key Insight:</strong>&nbsp;People weren’t just buying a
                candy bar; they were hiring Snickers to quickly transform their
                mood and energy levels.
              </p>

              <p>
                <strong>Result:</strong>&nbsp;The campaign resonated globally,
                significantly boosting sales and market share.
              </p>

              <h4 className="wp-block-heading">
                <strong>
                  3. Airbnb’s Shift from Accommodation to Experiences:
                </strong>
              </h4>

              <p>
                Airbnb expanded its focus from just providing accommodations to
                offering local experiences, addressing the job of creating
                memorable travel moments.
              </p>

              <p>
                <strong>Key Insight:</strong>&nbsp;Travelers weren’t just
                looking for a place to stay; they wanted to immerse themselves
                in local culture and create unique memories.
              </p>

              <p>
                <strong>Result:</strong>&nbsp;Airbnb Experiences became a
                significant new revenue stream and differentiator for the
                company.
              </p>

              <h3 className="wp-block-heading">
                <strong>Practical Application Examples –</strong>
              </h3>

              <ol className="wp-block-list">
                <li>
                  <strong>Job Statement:</strong>&nbsp;“Help me quickly find a
                  gift that will impress my colleagues.”&nbsp;
                  <strong>Potential Solution:</strong>&nbsp;An AI-powered gift
                  recommendation service that considers workplace dynamics and
                  personal preferences.
                </li>

                <li>
                  <strong>Job Statement:</strong>&nbsp;“Enable me to maintain a
                  consistent fitness routine despite my busy schedule.”
                  <strong>Potential Solution:</strong>&nbsp;A mobile app that
                  adapts workouts based on available time, location, and
                  equipment, integrating with the user’s calendar.
                </li>

                <li>
                  J<strong>ob Statement:</strong>&nbsp;“Assist me in learning a
                  new language while making the most of my daily commute.”
                  <strong>Potential Solution:</strong>&nbsp;A podcast-style
                  language learning app with hands-free, conversational lessons
                  optimized for commute times.
                </li>
              </ol>

              <h3 className="wp-block-heading">
                <strong>
                  How to Apply JTBD in Your Product Management Practice –
                  (example: Spotify)
                </strong>
              </h3>

              <ol className="wp-block-list">
                <li>
                  <strong>Create job stories:</strong>&nbsp;Instead of user
                  stories, write job stories.For example:
                  <ul className="wp-block-list">
                    <li>
                      “When I’m feeling down, I want to listen to uplifting
                      music so that I can improve my mood and feel more
                      energized.”
                    </li>

                    <li>
                      “When I’m hosting a dinner party, I want to create the
                      perfect playlist effortlessly so that I can set the right
                      atmosphere without spending hours curating songs.”
                    </li>

                    <li>
                      “When I’m working out, I want continuous high-energy music
                      that matches my pace so that I can stay motivated
                      throughout my entire exercise session.”
                    </li>
                  </ul>
                </li>

                <li>
                  <strong>Use job mapping:</strong>&nbsp;Break down complex jobs
                  into steps to identify pain points and opportunities. For the
                  job “discover new music I’ll love”:
                  <ul className="wp-block-list">
                    <li>Decide to explore new music</li>

                    <li>Choose a starting point (genre, artist, mood)</li>

                    <li>Browse or search for options</li>

                    <li>Sample tracks</li>

                    <li>Save liked songs or add them to the playlist</li>

                    <li>Share discoveries with friends</li>

                    <li>Revisit and refine preferences</li>
                  </ul>
                </li>

                <li>
                  <strong>Conduct switch interviews:</strong>&nbsp;Talk to
                  customers who recently switched to or from Spotify to
                  understand the circumstances that prompted the change. For
                  example:
                  <ul className="wp-block-list">
                    <li>
                      Interview users who switched from Apple Music to Spotify
                    </li>

                    <li>
                      Interview users who canceled their Spotify subscription
                    </li>

                    <li>
                      Interview users who upgraded from free to premiumQuestions
                      might include:
                      <ul className="wp-block-list">
                        <li>What triggered your decision to switch?</li>

                        <li>What were you hoping to achieve by switching?</li>

                        <li>
                          How has your music listening experience changed since
                          the switch?
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li>
                  <strong>Leverage quantitative data:</strong>&nbsp;Use
                  analytics to identify patterns in user behavior that might
                  indicate underlying jobs to be done. For Spotify, this could
                  include:
                  <ul className="wp-block-list">
                    <li>
                      Analyze times of day when certain genres are most popular
                    </li>

                    <li>
                      Track how often users skip songs in different contexts
                      (e.g., personalized playlists vs. curated playlists)
                    </li>

                    <li>
                      Measure the correlation between podcast listening and
                      music discovery
                    </li>

                    <li>Examine patterns in playlist creation and sharing</li>

                    <li>
                      Analyze user engagement with different features like
                      lyrics display or canvas videos
                    </li>
                  </ul>
                </li>
              </ol>

              <h4 className="wp-block-heading">
                <strong>
                  Context application of our research in Spotify’s example:
                </strong>
              </h4>

              <p>
                Let’s say Spotify’s product team is working on improving the
                workout music experience. They might:
              </p>

              <ol className="wp-block-list">
                <li>
                  <strong>Create a job story:</strong>&nbsp;“When I’m starting a
                  high-intensity workout, I want music that immediately
                  energizes me so that I can quickly get into the right mindset
                  and pace.”
                </li>

                <li>
                  <strong>Use job mapping</strong>&nbsp;for “have the perfect
                  workout with music”:
                  <ul className="wp-block-list">
                    <li>Decide to work out</li>

                    <li>Choose workout type</li>

                    <li>Select appropriate music</li>

                    <li>Start workout and music simultaneously</li>

                    <li>Maintain energy throughout the workout</li>

                    <li>Cool down with appropriate music</li>

                    <li>Save successful playlists for future use</li>
                  </ul>
                </li>

                <li>
                  <strong>Conduct switch interviews:</strong>&nbsp;Interview
                  users who recently started using Spotify for workouts instead
                  of a competitor, asking questions like:
                  <ul className="wp-block-list">
                    <li>
                      What made you choose Spotify for your workout music?
                    </li>

                    <li>
                      How does Spotify enhance or detract from your workout
                      experience?
                    </li>

                    <li>
                      What features do you wish Spotify had for better workout
                      support?
                    </li>
                  </ul>
                </li>

                <li>
                  <strong>Leverage quantitative data:</strong>
                  <ul className="wp-block-list">
                    <li>
                      Analyze tempo and genre preferences during typical workout
                      hours
                    </li>

                    <li>
                      Track how often users manually change songs during
                      workout-labeled playlists
                    </li>

                    <li>
                      Measure the correlation between consistent workout
                      playlist usage and overall app engagement
                    </li>
                  </ul>
                </li>
              </ol>

              <h4 className="wp-block-heading">
                <strong>Potential Solution to the Gained Insights:</strong>
              </h4>

              <ul className="wp-block-list">
                <li>
                  AI-powered playlist generation that adapts in real-time to
                  workout intensity
                </li>

                <li>
                  Integration with fitness apps to sync music with workout
                  phases
                </li>

                <li>
                  Social features for sharing and competing with workout
                  playlists
                </li>

                <li>
                  Improved voice controls for hands-free playlist management
                  during workouts
                </li>
              </ul>

              <p>
                This approach ensures that product development is driven by
                genuine user needs rather than assumptions, potentially leading
                to more impactful and successful feature releases.
              </p>

              <figure className="wp-block-embed is-type-rich is-provider-embed wp-block-embed-embed">
                <div className="wp-block-embed__wrapper">
                  <a
                    href="https://www.youtube-nocookie.com/embed/Et4H4Ty1qhQ?rel=0&amp;autoplay=0&amp;showinfo=0&amp;enablejsapi=0"
                    rel="nofollow"
                  >
                    https://www.youtube-nocookie.com/embed/Et4H4Ty1qhQ?rel=0&amp;autoplay=0&amp;showinfo=0&amp;enablejsapi=0
                  </a>
                </div>
              </figure>

              <h3 className="wp-block-heading">
                <strong>
                  Challenges and considerations while implementing JTBD –
                </strong>
              </h3>

              <ul className="wp-block-list">
                <li>
                  Requires deep customer understanding, which can be
                  time-consuming to develop.
                </li>

                <li>
                  May challenge existing assumptions about your product or
                  market.
                </li>

                <li>
                  Balancing multiple jobs or competing desired outcomes can be
                  complex.
                </li>
              </ul>

              <h3 className="wp-block-heading">
                <strong>Key Takeaway:</strong>
              </h3>

              <p>
                The Jobs-to-Be-Done framework offers product managers a valuable
                lens for understanding customer needs and driving innovation.
              </p>

              <p>
                By focusing on the progress customers are trying to make in
                their lives, rather than on product features, PMs can create
                solutions that truly resonate and provide lasting value.
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

export default Blog21;
