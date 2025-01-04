import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const BlogP1 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Helmet>
        <title>
          Large Language Models (LLMs): A guide for Product&nbsp;Managers
        </title>
        <link
          rel="canonical"
          href="https://theproductspace.in/blogs/large-language-models-llms-a-guide-for-product-managers"
        />
      </Helmet>
      <div className="px-4 flex flex-col items-center pt-4 lg:pt-16 pb-8 lg:pb-16 font-inter bg-white">
        <div className="max-w-4xl w-full flex flex-col gap-8">
          {" "}
          <div className="flex flex-col gap-3">
            <h1 className="text-[24px] lg:text-[36px] font-sans font-bold">
              Large Language Models (LLMs): A guide for Product&nbsp;Managers
            </h1>
            <div className="text-[16px] text-[#667085]">November 21, 2024</div>
            <div className="flex flex-wrap gap-1">
              <p className="bg-[#E7F7FC] border border-[#013B4D3D] text-black p-2 rounded-lg">
                Product Management{" "}
              </p>
            </div>
          </div>
          <div className="prose prose-lg text-[16px] lg:text-[18px] max-w-4xl mx-auto">
            <h4 className="wp-block-heading">What’s Inside –</h4>

            <ul className="wp-block-list">
              <li>What are LLMs and its types?</li>

              <li>Companies and types of LLMs</li>

              <li>Technology enabling LLMs</li>

              <li>Making your first LLM project</li>

              <li>Checklist for LLM apps</li>
            </ul>

            <h3 className="wp-block-heading">What are LLMs?</h3>

            <figure className="wp-block-image size-large">
              <img
                data-attachment-id="4104"
                data-permalink="https://productspaceorgin.wordpress.com/?attachment_id=4104"
                data-orig-file="https://productspaceorgin.wordpress.com/wp-content/uploads/2024/11/screenshot-2024-11-21-104258.png"
                data-orig-size="898,276"
                data-comments-opened="1"
                data-image-meta='{"aperture":"0","credit":"","camera":"","caption":"","created_timestamp":"0","copyright":"","focal_length":"0","iso":"0","shutter_speed":"0","title":"","orientation":"0"}'
                data-image-title="Screenshot 2024-11-21 104258"
                data-image-description=""
                data-image-caption=""
                data-medium-file="https://productspaceorgin.wordpress.com/wp-content/uploads/2024/11/screenshot-2024-11-21-104258.png?w=300"
                data-large-file="https://productspaceorgin.wordpress.com/wp-content/uploads/2024/11/screenshot-2024-11-21-104258.png?w=898"
                loading="lazy"
                width="898"
                height="276"
                src="https://productspaceorgin.wordpress.com/wp-content/uploads/2024/11/screenshot-2024-11-21-104258.png?w=898"
                alt=""
                className="wp-image-4104"
              />
            </figure>

            <p>
              <strong>Large language models (LLMs)</strong> are advanced AI
              systems designed to understand the intricacies of human language
              and to generate intelligent, creative responses when queried.
              Successful LLMs are trained on enormous data sets typically
              measured in petabytes (a million gigabytes).
            </p>

            <p>
              Some models handle images and other media along with text. These
              are often referred to as{" "}
              <strong>multimodal language models.</strong>
            </p>

            <p>
              Data used to train the LLMs is the most important element of LLM
              setup. Data can be <strong>structured</strong> tabular data;{" "}
              <strong>semistructured</strong> data from IoT devices, weblogs,
              and other sources; or <strong>unstructured</strong> data, such as
              image files and PDF documents.
            </p>

            <h3 className="wp-block-heading">Applications of LLMs</h3>

            <ul className="wp-block-list">
              <li>
                <strong>LLMs for content generation:</strong>
                <strong> </strong>Gen AI can streamline content creation by
                generating various types of media, including text, sound, and
                images.
              </li>

              <li>
                <strong>LLMs as logical reasoning engines: </strong>Within the
                field of AI, natural language understanding (NLU) focuses on
                comprehending the intricate meaning in human communication.
              </li>

              <li>
                <strong>LLMs as translation engines: </strong>LLMs have
                transformed text translation between languages, making it easier
                for people to communicate across linguistic barriers.
              </li>

              <li>
                <strong>
                  LLMs for text retrieval, summarization, and search:{" "}
                </strong>
                LLMs are pretrained on vast amounts of text data, allowing them
                to grasp the nuances of language and comprehend the meaning of
                text.
              </li>
            </ul>

            <figure className="wp-block-image size-large">
              <img
                data-attachment-id="4106"
                data-permalink="https://productspaceorgin.wordpress.com/?attachment_id=4106"
                data-orig-file="https://productspaceorgin.wordpress.com/wp-content/uploads/2024/11/screenshot-2024-11-21-104645.png"
                data-orig-size="905,205"
                data-comments-opened="1"
                data-image-meta='{"aperture":"0","credit":"","camera":"","caption":"","created_timestamp":"0","copyright":"","focal_length":"0","iso":"0","shutter_speed":"0","title":"","orientation":"0"}'
                data-image-title="Screenshot 2024-11-21 104645"
                data-image-description=""
                data-image-caption=""
                data-medium-file="https://productspaceorgin.wordpress.com/wp-content/uploads/2024/11/screenshot-2024-11-21-104645.png?w=300"
                data-large-file="https://productspaceorgin.wordpress.com/wp-content/uploads/2024/11/screenshot-2024-11-21-104645.png?w=905"
                loading="lazy"
                width="905"
                height="205"
                src="https://productspaceorgin.wordpress.com/wp-content/uploads/2024/11/screenshot-2024-11-21-104645.png?w=905"
                alt=""
                className="wp-image-4106"
              />
            </figure>

            <h3 className="wp-block-heading">Types of LLMs</h3>

            <ul className="wp-block-list">
              <li>
                <strong>General purpose LLMs </strong>
                <strong>:</strong>
                <strong> </strong>General-purpose LLMs handle a wide range of
                tasks and understand a broad spectrum of languages — both
                natural languages and computer languages.
              </li>

              <li>
                <strong>Foundational LLMs: </strong>Foundation models are a
                class of generative AI (gen AI) models, these models can be
                specialized, trained, or modified for specific applications.Here
                are two subtypes of these;
                <ul className="wp-block-list">
                  <li>
                    <strong>Task specific LLMs: </strong>such as Meta’s Code
                    Llama specialize in unique, highly targeted tasks like
                    generating software code.
                  </li>

                  <li>
                    <strong>Domain specific LLMs</strong>
                    <strong>: </strong>apply gen AI technology to specific
                    subjects and industries. For example, NVIDIA’s BioBERT,
                    which has been trained on biomedical text, helps researchers
                    understand scientific literature.
                  </li>
                </ul>
              </li>
            </ul>

            <h3 className="wp-block-heading">Industry Leaders</h3>

            <figure className="wp-block-image size-large">
              <img
                data-attachment-id="4109"
                data-permalink="https://productspaceorgin.wordpress.com/?attachment_id=4109"
                data-orig-file="https://productspaceorgin.wordpress.com/wp-content/uploads/2024/11/screenshot-2024-11-21-104809.png"
                data-orig-size="906,350"
                data-comments-opened="1"
                data-image-meta='{"aperture":"0","credit":"","camera":"","caption":"","created_timestamp":"0","copyright":"","focal_length":"0","iso":"0","shutter_speed":"0","title":"","orientation":"0"}'
                data-image-title="Screenshot 2024-11-21 104809"
                data-image-description=""
                data-image-caption=""
                data-medium-file="https://productspaceorgin.wordpress.com/wp-content/uploads/2024/11/screenshot-2024-11-21-104809.png?w=300"
                data-large-file="https://productspaceorgin.wordpress.com/wp-content/uploads/2024/11/screenshot-2024-11-21-104809.png?w=906"
                loading="lazy"
                width="906"
                height="350"
                src="https://productspaceorgin.wordpress.com/wp-content/uploads/2024/11/screenshot-2024-11-21-104809.png?w=906"
                alt=""
                className="wp-image-4109"
              />
            </figure>

            <h3 className="wp-block-heading">Technology enabling LLMs</h3>

            <p>
              Today’s LLMs are easy to use. Rather than requiring formal code to
              communicate with software libraries and application program ming
              interfaces (APIs), they can understand natural language or human
              instructions and perform tasks similar to a human.
            </p>

            <ol className="wp-block-list">
              <li>
                <strong>Vector Embeddings</strong> – LLMs deal with large and
                complex data sets. By representing these data sets in vector
                form, where words are represented by numbers in a
                multidimensional space, it becomes easier for the LLM models to
                compare and analyze information.{" "}
                <strong>Vector databases </strong>store data as mathematical
                representations that can be easily parsed by ML models.
              </li>

              <li>
                <strong>Vector Search Functionality –</strong> This can handle
                essential gen AI tasks that help you contextualize LLMs with
                your data, such as retrieval-augmented generation (RAG),
                in-context learning (ICL), and vector similarity search (VSS).
              </li>

              <li>
                <strong>Developer Tools and framework –</strong> For non-tech
                folks to leverage to build LLM based applications data-science
                experts have build frame works that assist with text
                classification, sentiment analysis, text generation, and other
                gen AI tasks including;
                <ol className="wp-block-list">
                  <li>
                    <strong>OpenAI GPT Playground:</strong> OpenAI provides
                    pretrained language models, such as GPT-3, which can be
                    accessed via APIs for various languages and text-generation
                    tasks.
                  </li>

                  <li>
                    <strong>Hugging Face Transformer Library:</strong> An
                    open-source library that offers a high-level API for working
                    with pretrained language models like BERT and GPT.
                  </li>
                </ol>
              </li>

              <li>
                <strong>Cloud data platform</strong> – A comprehensive cloud
                data platform allows you to work with LLMs within a protected
                environment. Rather than “taking your data to the processing
                engine,” it allows you to “bring your processing to the data,”
                where you can control user access to corporate data sources and
                enforce security and governance policies.
              </li>

              <li>
                <strong>Orchestration library –</strong> All gen AI applications
                must perform the basic function of pass ing input to the LLM and
                returning the results or completions. This is often done through
                an orchestration library that simplifies access to external data
                sources and connects to APIs within other applications.
              </li>
            </ol>

            <h3 className="wp-block-heading">Create your first LLM Project</h3>

            <h4 className="wp-block-heading">
              <strong>Question 1: Type of LLM</strong>
            </h4>

            <p>
              <strong>Hosted LLMs</strong> – such as Chat GPT and Bard are
              provided as a service that anybody can access, via a user
              interface or via APIs.
            </p>

            <p>
              <strong>Opensource LLMs – </strong>like Llama are freely available
              for download / modification, and can be deployed in local
              environment. But it requires you to set up &amp; maintain
              underlying infrastructure.
            </p>

            <h4 className="wp-block-heading">
              <strong>Question 2: Small / Large</strong>
            </h4>

            <p>
              <strong>Smaller LLMs</strong> have fewer parameters and thus
              consume less compute resources and are faster to fine-tune and
              deploy.
            </p>

            <p>
              <strong>Large LLMs</strong> have a higher number of parameters
              (typically 10 billion or more) and learn more nuanced language
              patterns, they provide more accurate and contextually relevant
              outputs for a wider range of scenarios.
            </p>

            <h4 className="wp-block-heading">
              <strong>Question 3: Efficiency</strong>
            </h4>

            <ul className="wp-block-list">
              <li>
                <strong>Task alignment: </strong>Choose an LLM that aligns to
                the task, such as GPT for conversational applications.
              </li>

              <li>
                <strong>Training data:</strong> Evaluate whether the LLM has
                been trained on data that matches the domain or context of the
                project.
              </li>

              <li>
                <strong>Adapting and tuning: </strong>Determine if the chosen
                LLM can be effectively contextualized with prompts or
                fine-tuning.
              </li>
            </ul>

            <h3 className="wp-block-heading">Make your LLMs More Accurate</h3>

            <p>
              There are two known ways how you can programtically make your LLMs
              more customized and better. One if Prompt engineering and Two is
              Fine-tuning a LLM model.
            </p>

            <p>
              <strong>What is a Prompt?</strong>
            </p>

            <p>
              LLM performance is influenced not only by the training data but
              also by the context provided by these user inputs — the prompts.
            </p>

            <ol className="wp-block-list">
              <li>
                <strong>What is Prompt Engineering?</strong>
              </li>
            </ol>

            <p>
              Prompt engineering involves carefully crafting prompts to coax the
              language model toward a desired outcome based on explicit
              instructions and context. Different types of prompt engineering
              are;
            </p>

            <ul className="wp-block-list">
              <li>
                <strong>Zero-shot prompting</strong> is the default; you simply
                issue a question and rely on the LLM’s pretrained information to
                answer it
              </li>

              <li>
                <strong>With one-shot prompting,</strong> you include an example
                of the desired output to help the model understand the desired
                output.
              </li>

              <li>
                <strong>Few-shot prompting</strong> takes it a step further by
                providing multiple examples to more clearly teach the LLM the
                desired output structure and language
              </li>
            </ul>

            <p>
              <strong>2. What is fine-tuning a model?</strong>
            </p>

            <p>
              Fine-tuning allows you to adjust a model’s parameters to achieve
              better results.{" "}
              <strong>Reinforcement learning from human feedback (RLHF)</strong>{" "}
              is a form of fine-tuning that you can use to guide the learning
              process and further enhance the performance and behavior of your
              model, with the goal of improving its responses over time.
            </p>

            <h3 className="wp-block-heading">
              Checklist for applications built using LLMs
            </h3>

            <ol className="wp-block-list">
              <li>
                <strong>User Interface –</strong> here you basically have the
                below options
                <ol className="wp-block-list">
                  <li>
                    <strong>Web apps</strong> are the most common type of front
                    end for gen AI apps because they’re relatively easy to
                    develop and can be accessed from any device with a web
                    browser.
                  </li>

                  <li>
                    <strong>Mobile apps </strong>tailored to specific devices,
                    such as tablets and smartphones, offer a more immersive and
                    engaging experience for users. They can take advantage of
                    the unique aspects of each platform and can{" "}
                    <strong>cache data for offline use.</strong>
                  </li>

                  <li>
                    <strong>Chat interface</strong>
                    <strong>s</strong> are used in gen AI apps when the app
                    needs to converse with the user, such as to answer questions
                    or assist with certain tasks.
                  </li>

                  <li>
                    <strong>Desktop apps</strong>
                    <strong> </strong>are useful for gen AI apps that require a
                    lot of processing power, or that need to access local
                    resources.
                  </li>

                  <li>
                    <strong>Command-line interfaces (CLIs)</strong> are
                    sometimes used for gen AI apps that are accessed by
                    developers and data scientists, such as to empower software
                    engineers to generate code.
                  </li>
                </ol>
              </li>

              <li>
                <strong>Optimize LLM Performance</strong>
                <strong> –</strong> For applications that run on LLMs ensuring
                that response to user queries is in-depth, latest, fast and
                accurate can be achieved if we follow the below{" "}
                <strong>FIL</strong> implementation method;
                <ol className="wp-block-list">
                  <li>
                    <strong>(F) </strong>
                    <strong>Fast – Enable semantic caching</strong> allows AI
                    systems to generate responses more quickly and efficiently
                    by having relevant data easily accessible for computations.
                  </li>

                  <li>
                    <strong>(I) In-depth – Inject features</strong> – By
                    introducing features that are relevant to a specific prompt,
                    LLMs can gain a deeper understanding of the data and can
                    better capture complex patterns and relationships
                  </li>

                  <li>
                    <strong>(L) </strong>
                    <strong>Latest – Value your data pipelines</strong> – Data
                    pipelines play a critical role in gen AI initiatives by
                    facilitating the smooth flow of data, including efficient
                    data ingestion, preprocessing, training, and inference.
                  </li>
                </ol>
              </li>

              <li>
                <strong>Cost Optimizations</strong>
                <strong> </strong>– Calculate the COST of running an LLM based
                application
                <ol className="wp-block-list">
                  <li>
                    The cost of using a cloud data platform is typically based
                    on three interrelated metrics: data transfer volume, data
                    storage consumption, and compute resources.
                  </li>

                  <li>
                    <strong>PRO TIP </strong>– Paying for a set amount of
                    storage and computing power, commonly known as{" "}
                    <strong>subscription-based pricing (NO), </strong>can cause
                    you to incur significant costs and requires regular
                    management. To ensure that you don’t pay for more capacity
                    than you need, your cloud data platform should offer{" "}
                    <strong>usage-based pricing(YES),</strong> with billing in
                    per-second increments.
                  </li>
                </ol>
              </li>
            </ol>

            <h3 className="wp-block-heading">
              LLMs to get started – which one suits you best?
            </h3>

            <ul className="wp-block-list">
              <li>
                <strong>GPT-4:</strong> Best for creative{" "}
                <strong>content generation, </strong>chatbots, and applications
                requiring high levels of language generation capabilities.
              </li>

              <li>
                <strong>BERT: </strong>Ideal for tasks needing deep
                understanding of context such as{" "}
                <strong>sentiment analysis</strong> or named entity recognition.
              </li>

              <li>
                <strong>Claude: </strong>Suitable for customer service chatbots
                where <strong>nuanced understanding and safety </strong>are
                priorities.
              </li>

              <li>
                <strong>PaLM</strong>: Recommended for complex reasoning tasks
                or specialized applications in fields like{" "}
                <strong>healthcare or cybersecurity.</strong>
              </li>

              <li>
                <strong>Cohere</strong>: Best utilized in enterprise
                environments where customization and integration with existing
                systems are crucial.
              </li>

              <li>
                <strong>Llama</strong>: An excellent choice for
                <strong> researchers needing an open-source </strong>model that
                can be adapted for various experiments.
              </li>

              <li>
                <strong>Gemini</strong>: Appropriate for projects requiring
                multimodal capabilities that integrate text with other forms of
                media
              </li>
            </ul>

            <h3 className="wp-block-heading">
              Tips for Product Managers with LLMs
            </h3>

            <p>
              As product managers increasingly integrate Large Language Models
              (LLMs) into their workflows, understanding how to effectively
              leverage these tools is crucial. Here are some key strategies and
              tips to maximize the potential of LLMs in product management:
            </p>

            <p>
              <strong>Understand Prompt Engineering</strong>
            </p>

            <ul className="wp-block-list">
              <li>
                <strong>Craft Effective Prompts: </strong>The quality of output
                from an LLM heavily depends on how well prompts are structured.
                Developing a library of effective prompts can streamline
                interactions with the model and enhance output relevance and
                quality.
              </li>

              <li>
                <strong>Iterate on Prompts:</strong> Experiment with different
                phrasing and structures to see which prompts yield the best
                results. This iterative process can help refine how you query
                the model for specific tasks, such as generating reports or
                summarizing data.
              </li>
            </ul>

            <p>
              <strong>Leverage LLMs for Data Analysis</strong>
            </p>

            <ul className="wp-block-list">
              <li>
                <strong>Analyze Customer Feedback:</strong> Use LLMs to process
                and analyze large volumes of customer feedback quickly. This can
                help identify trends, pain points, and opportunities for product
                improvement
              </li>

              <li>
                <strong>Summarization:</strong> Implement LLMs to summarize
                lengthy documents or user feedback, saving time and allowing for
                quicker decision-making
              </li>
            </ul>

            <p>
              <strong>Enhance Communication and Collaboration</strong>
            </p>

            <ul className="wp-block-list">
              <li>
                <strong>Streamline Team Communication:</strong> Utilize LLMs to
                generate meeting notes, project updates, or collaborative
                documents, ensuring that all team members are on the same page
                and reducing administrative overhead
              </li>

              <li>
                <strong>Create User-Centric Narratives: </strong>Employ LLMs to
                craft compelling narratives around product features or user
                stories, which can be beneficial in presentations and marketing
                materials
              </li>
            </ul>

            <p>
              <strong>Focus on User Experience</strong>
            </p>

            <ul className="wp-block-list">
              <li>
                <strong>Optimize User Interactions: </strong>Use LLMs to power
                chatbots or virtual assistants that enhance user experience by
                providing instant support or information retrieval
              </li>

              <li>
                <strong>Monitor Latency and Performance: </strong>Ensure that
                the response times from LLM applications meet user expectations.
                Optimize for speed while balancing accuracy to maintain a
                positive user experience
              </li>
            </ul>

            <p>
              <strong>Iterate Based on Feedback</strong>
            </p>

            <ul className="wp-block-list">
              <li>
                <strong>Set Clear Metrics</strong>
                <strong>: </strong>Define success metrics for your LLM
                applications early on. This includes establishing benchmarks for
                response accuracy and user satisfaction
              </li>

              <li>
                <strong>Continuous Learning:</strong> Collect feedback from
                users post-launch to identify areas for improvement. Use this
                data to refine prompts and enhance the model’s performance over
                time
              </li>
            </ul>

            <h3 className="wp-block-heading">
              Ethical considerations with LLMs
            </h3>

            <ul className="wp-block-list">
              <li>
                <strong>Data Privacy and Security</strong>
                <strong> – </strong>LLMs are trained on medical data, there is a
                risk that personal health information could be exposed or
                improperly handled, leading to violations of privacy laws such
                as HIPAA in the United States.
              </li>

              <li>
                <strong>Algorithmic Bias</strong>
                <strong> – </strong>A language model trained predominantly on
                text from certain demographics may produce biased results
                against underrepresented groups, leading to unfair treatment in
                applications like hiring algorithms or customer service
                chatbots.
              </li>

              <li>
                <strong>Misinformtion and hallucination</strong>
                <strong> – </strong>An LLM might confidently provide incorrect
                medical advice or legal information, potentially leading users
                to make harmful decisions based on false outputs.
              </li>

              <li>
                <strong>Intellectual Property Issue</strong>
                <strong> – </strong>If an LLM generates a text passage that is
                nearly identical to a copyrighted book or article, it could lead
                to legal challenges for the developers or users of the model.
              </li>

              <li>
                <strong>Transparency and Accountability – </strong>In scenarios
                where an LLM provides a biased recommendation, it may be
                challenging to trace back the decision-making process to
                identify the source of bias or error.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogP1;
