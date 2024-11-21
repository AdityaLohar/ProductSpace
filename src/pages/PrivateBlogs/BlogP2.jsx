
const BlogP2 = () => {
  return (
    <div><div className="px-4 flex flex-col items-center pt-4 lg:pt-16 pb-8 lg:pb-16 font-inter bg-white"><div className="max-w-4xl w-full flex flex-col gap-8"> <div className="flex flex-col gap-3"><h1 className="text-[24px] lg:text-[36px] font-sans font-bold">GenAI 101: A Guide for Product&nbsp;Managers</h1><div className="text-[16px] text-[#667085]">November 21, 2024</div><div className="flex flex-wrap gap-1"><p className="bg-[#E7F7FC] border border-[#013B4D3D] text-black p-2 rounded-lg">Guides &amp; Frameworks  </p></div></div><div className="prose prose-lg text-[16px] lg:text-[18px] max-w-4xl mx-auto">
<h3 className="wp-block-heading">Traditional vs Gen-AI</h3>



<p>Traditional AI, often referred to as machine learning (ML), has primarily focused on analytic tasks like classification and prediction. Generative AI (gen AI) goes a step further with its ability to create new, original content.</p>



<p>We’re excited to launch our new smart device, and this campaign will highlight all the new features our team tirelessly worked on. We’ll demonstrate how our new technology is easy to integrate, simplifies tasks, and enhances productivity for our community.</p>



<h3 className="wp-block-heading">History of AI</h3>



<p>Gen AI is a type of artificial intelligence that uses <strong>neural networks and deep learning algorithms </strong>to identify patterns within existing data as a basis for generating original content.</p>



<p><strong>Milestones</strong></p>



<ul className="wp-block-list">
<li>1950s – 1980s – Saw emergence of rules based engines. The 1980s saw rise of <strong>neural networks – </strong>inspired by the structure and functioning of the human brain. These software systems use interconnected nodes (neurons) to process information.</li>



<li>Early 2000s – <strong>Deep learning</strong> employs multiple layers of interconnected neurons, allowing for more sophisticated learning and representation of data. This breakthrough led to significant advancements in computer vision, speech recognition, and natural language processing (NLP), launching the era of general-purpose AI bots such as Siri and Alexa.</li>



<li>2017- 2020s – Google Brain team introduced the <strong>transformer</strong> architecture, a deep learning model that replaced traditional recurrent and convolutional structures. Best-known example is OpenAI’s Chat<strong>GPT</strong>, which stands for chatbot <strong>G</strong>-generative <strong>P</strong>– pretrained <strong>T-</strong>transformer.</li>
</ul>



<p><strong>Type of Neural Networks:</strong></p>



<ul className="wp-block-list">
<li>Convolutional neural networks (CNNs) proved themselves to be particularly successful at computer vision tasks, while</li>



<li>Recurrent neural networks (RNNs) excelled in sequential data processing, such as language modeling.</li>
</ul>



<h4 className="wp-block-heading">Tech enablers of Gen-AI</h4>



<ul className="wp-block-list">
<li><strong>GPUs – </strong>Graphics processing units; Transformers use GPUs to process multiple threads of information, leading to faster training of AI models that effectively handle not just text but also images, audio, and video content.</li>



<li><strong>Data</strong> – Gen AI applications that have been built on public data can’t realize their full potential in the enterprise until they’re coupled with enterprise data stores. Companies have three type of data:</li>
</ul>



<figure className="wp-block-table is-style-stripes"><table className="has-fixed-layout"><tbody><tr><td><strong>First Party Data</strong></td><td>is internal data produced via everyday business interactions with customers and prospects.</td></tr><tr><td><strong>Second Party Data</strong></td><td>is produced by or in collaboration with partners, such as product inventory data shared with an e-commerce or retail sales channel.</td></tr><tr><td><strong>Third Party Data</strong></td><td>can be acquired from external sources to enrich internal data sets.</td></tr></tbody></table></figure>



<ul className="wp-block-list">
<li><strong>Vector Embeddings</strong> – LLMs deal with large and complex data sets. By representing these data sets in vector form, where words are represented by numbers in a multidimensional space, it becomes easier for the LLM models to compare and analyze information. <strong>Vector databases </strong>store data as mathematical representations that can be easily parsed by ML models.</li>



<li><strong>Cloud data platform</strong> – A cloud data platform is a specialized cloud service optimized for storing, analyzing, and sharing large and diverse volumes of data. It unifies data security and data governance activities by ensuring that all users leverage a single copy of data. You can easily provision and effortlessly scale compute resources for each type of data, such as GPUs for model training, fine-tuning, and inference activities.</li>



<li><strong>LLMs</strong> –</li>



<li><strong>Orchestration Library </strong>– All gen AI applications must perform the basic function of passing input to the LLM and returning the results or completions. This is often done through an orchestration library that simplifies access to external data sources and connects to APIs within other applications.</li>
</ul>



<h3 className="wp-block-heading">Concepts of Gen-AI</h3>



<ul className="wp-block-list">
<li><strong>Concept 1</strong>: <strong>Prompt</strong> – The text you provide to a language model is called a prompt. The prompt is given to the model, which then generates an answer. The result produced by the model is known as a <strong>completion</strong>, and the process of using the model to generate text is called <strong>inference</strong>.</li>
</ul>



<p>The below concepts make the Gen-AI more accurate than traditional MLs based on CNNs/RNNs –</p>



<ul className="wp-block-list">
<li><strong>Concept 2: RLHF </strong>– users can influence the learning process by providing well-crafted prompts or by using techniques such as <strong>reinforcement learning with human feedback (RLHF) </strong>to guide the model’s output.</li>



<li><strong>Concept 3:</strong> <strong>Prompt Engineering </strong>– Prompt engineering and in-context learning (ICL), allows you to guide the model at inference time, as well as how to fine-tune input parameters as you instruct the LLM to generate relevant outputs specific to your private data.</li>



<li><strong>Concept 4: In-context learning (ICL)</strong> – involves training a language model with a data set that aligns with the desired context or domain. By exposing the model to contextual information it becomes better equipped to generate accurate and coherent responses within that context.</li>



<li><strong>Concept 5:</strong> <strong>Retrieval-augmented generation (RAG)</strong> -RAG accesses up-to-date information by retrieving relevant data stored as vectors, such as current news, to bring the model up to date with recent events or domain-specific content from a particular industry or market.</li>



<li><strong>Concept 6:</strong> <strong>Generative Models (GANs) </strong>– These are algorithms designed to generate new data instances that resemble the training data. Common types include Generative Adversarial Networks (GANs), Variational Autoencoders (VAEs), and autoregressive models. GANs are often used in image generation, where two neural networks (the generator and the discriminator) compete against each other to produce realistic images.</li>



<li><strong>Concept 7:</strong> <strong>Synthetic Data Generation (SDG) </strong>– Generative AI can create synthetic datasets that mimic real-world data without compromising privacy. This is particularly useful when real data is scarce or sensitive.</li>



<li><strong>Concept 8:</strong> <strong>Natural Language Processing (NLP)</strong> – Generative AI plays a crucial role in NLP by enabling machines to understand and generate human language. This includes tasks like text generation, translation, and summarization.</li>
</ul>



<h3 className="wp-block-heading"><strong>What makes a good prompt?</strong></h3>



<figure className="wp-block-table is-style-stripes">
  <table className="has-fixed-layout">
    <tbody>
      <tr>
        <td><strong>Clarity and Specificity</strong></td>
        <td>Instead of asking, “Tell me about climate change,” a more specific prompt would be, “Explain the primary causes of climate change and its impact on global sea levels.”</td>
      </tr>
      <tr>
        <td><strong>Provide Full Context</strong></td>
        <td>Instead of asking, “Tell me about climate change,” a more specific prompt would be, “Explain the primary causes of climate change and its impact on global sea levels.”</td>
      </tr>
      <tr>
        <td><strong>Know your prompt type</strong></td>
        <td>
          Different types of prompts can be used based on the desired outcome:<br />
          – Direct Prompting: Simple commands or questions.<br />
          – Prompting with Examples: Including examples to guide the model.<br />
          – Role Prompting: Assigning a role to the model (e.g., “You are an expert in environmental science”).<br />
          – Example: “As a climate scientist, explain how carbon emissions contribute to global warming.”
        </td>
      </tr>
      <tr>
        <td><strong>Be clear with your output format</strong></td>
        <td>
          Specifying the format of the expected output can help guide the model’s response.<br />
          Example: “List five strategies for reducing carbon footprints in bullet points.”
        </td>
      </tr>
    </tbody>
  </table>
</figure>




<h3 className="wp-block-heading">Use cases and prompts for Product Managers</h3>



<figure className="wp-block-table is-style-stripes"><table className="has-fixed-layout"><tbody><tr><td><strong>Name of the tool</strong></td><td><strong>What does the tool do?</strong></td><td><strong>How can PMs use it?</strong></td><td><strong>Sample prompts</strong></td><td><strong>Other Alternate Tools for This Job</strong></td></tr><tr><td>ChatGPT</td><td>A conversational AI that generates human-like text responses.</td><td>Drafts emails, generates reports, brainstorms product ideas, and analyzes customer feedback.</td><td>“Generate a product requirements document for a new app.”</td><td>Google Bard, Jasper</td></tr><tr><td>Gemini</td><td>An AI writing assistant that provides insights and generates diverse content types.</td><td>Generates reports, analyzes user behavior, and assists in project planning.</td><td>“Summarize the latest market trends in our industry.”</td><td>ChatGPT, Microsoft Copilot</td></tr><tr><td>Zeda.io</td><td>An AI-powered tool for product discovery and strategy, automating feedback management and analysis.</td><td>Organizes customer feedback, prioritizes features, and creates necessary documents like PRDs.</td><td>“Categorize this user feedback into actionable insights.”</td><td>Productboard, Aha!</td></tr><tr><td>Jasper</td><td>A content generation tool focused on marketing and copywriting.</td><td>Creates marketing copy, blog posts, and social media content efficiently.</td><td>“Write a blog post about the benefits of sustainable products.”</td><td>Copy.ai, Writesonic</td></tr><tr><td>H20.ai</td><td>A platform for predictive modeling and machine learning insights.</td><td>Analyzes data trends to inform product decisions and forecasts customer behavior.</td><td>“Predict user engagement based on past data trends.”</td><td>DataRobot, RapidMiner</td></tr><tr><td>LogRocket</td><td>An AI tool that helps identify bugs in code and suggests fixes.</td><td>Streamlines communication with engineering teams by providing quick solutions to technical issues.</td><td>“List the top three bugs reported this week.”</td><td>Sentry, Jam</td></tr><tr><td>Collato</td><td>A knowledge management tool that organizes product information across various documents.</td><td>Assists in creating promotional videos or product demos without extensive resources.</td><td>“Find all documents related to our last product launch.”</td><td>Notion, Confluence</td></tr><tr><td>Zendesk</td><td>A customer service platform with AI capabilities for managing inquiries and support tickets.</td><td>Automates customer support tasks and analyzes customer sentiment to improve service quality.</td><td>“Summarize customer feedback from the last quarter.”</td><td>Freshdesk, Help Scout</td></tr><tr><td>RunwayML</td><td>A creative tool for generating and editing videos using AI technology.</td><td>Assists in creating promotional videos or product demos without extensive resources.</td><td>“Create a video ad script for our new product launch.”</td><td>Synthesia, Pictory</td></tr><tr><td>ElevenLabs</td><td>An AI voice generator that creates realistic voiceovers from text input.</td><td>Produces audio content for presentations or marketing materials quickly and easily.</td><td>“Generate a voiceover script for our training video.”</td><td></td></tr></tbody></table></figure>



<h3 className="wp-block-heading">Some interesting B2B business use cases of Gen-AI</h3>



<figure className="wp-block-table is-style-stripes"><table className="has-fixed-layout"><tbody><tr><td><strong>Company name</strong></td><td><strong>What the PM is Using it For</strong></td><td><strong>Which Product it Impacts</strong></td><td><strong>How it Impacts Products</strong></td></tr><tr><td>Adaptyv Bio</td><td>Developing medications and sustainable materials through AI.</td><td>Protein engineering foundry</td><td>Accelerates drug discovery and innovation in sustainable materials, improving efficiency in biotech.</td></tr><tr><td>Insilico Medicine</td><td>Creating AI-driven medications for clinical trials.</td><td>INS018_055 medication</td><td>Accelerates drug discovery and innovation in sustainable materials, improving efficiency in biotech.</td></tr><tr><td>Nike &amp; Autodesk</td><td>Designing optimized footwear using generative design techniques.</td><td>Footwear products</td><td>Streamlines drug development processes, leading to faster clinical trials for rare diseases.</td></tr><tr><td>Airbus</td><td>Creating lighter aircraft components through AI optimization.</td><td>Aircraft manufacturing</td><td>Reduces material use by 50%, leading to significant fuel savings and improved efficiency in aviation.</td></tr><tr><td>Wells Fargo</td><td>Providing customer support through a virtual assistant.</td><td>Fargo virtual assistant</td><td>Improves customer engagement and service efficiency by handling millions of inquiries automatically.</td></tr><tr><td>Morgan Stanley</td><td>Offering financial advisors quick access to research documents.</td><td>Financial advisory services</td><td>Enhances decision-making speed by providing instant access to a vast database of reports and documents.</td></tr><tr><td>Toyota</td><td>Designing new vehicles using generative AI models for shape optimization.</td><td>Vehicle design</td><td>Speeds up the design process while ensuring safety and performance standards are met effectively.</td></tr><tr><td>Amazon</td><td>Summarizing customer reviews to enhance shopping experience.</td><td>E-commerce platform</td><td>Improves customer decision-making by providing concise summaries of product feedback, boosting sales conversions.</td></tr></tbody></table></figure>



<h3 className="wp-block-heading">What is Responsible AI (RAI)?</h3>



<p>Responsible AI refers to the ethical and legal frameworks guiding the development, deployment, and use of artificial intelligence systems. The goal is to ensure that AI technologies are designed and implemented in ways that are fair, transparent, accountable, and beneficial to society. </p>



<p>This approach emphasizes minimizing harm while maximizing positive outcomes for individuals and communities.</p>



<figure className="wp-block-table"><table className="has-fixed-layout"><tbody><tr><td><strong>Fairness</strong></td><td><strong>Transparency</strong></td><td><strong>Accountability</strong></td><td><strong>Privacy and Security</strong></td></tr><tr><td>Ensuring that AI systems do not discriminate against any group.</td><td>Making the workings of AI systems understandable to users.</td><td>Establishing clear responsibility for AI decisions and outcomes.</td><td>Protecting user data and ensuring secure handling of information.</td></tr></tbody></table></figure>



<h3 className="wp-block-heading">Some companies leading the RAI race</h3>



<figure className="wp-block-table is-style-stripes"><table className="has-fixed-layout"><tbody><tr><td><strong>Company Name</strong></td><td><strong>What They Are Doing?</strong></td><td><strong>Impact on Society</strong></td></tr><tr><td>IBM</td><td>Using Watson Health for disease diagnosis.</td><td>Improves early disease detection while respecting patient privacy.</td></tr><tr><td>Microsoft</td><td>Implementing a Responsible AI Standard across products.</td><td>Ensures ethical use of AI in tools like Azure and Office 365.</td></tr><tr><td>Google</td><td>Developing guidelines for ethical AI practices.</td><td>Promotes human-centered design and continuous monitoring of AI systems.</td></tr><tr><td>NVIDIA</td><td>Founding the Coalition for Secure AI (CoSAI).</td><td>Encourages sharing of responsible AI frameworks across organizations.</td></tr></tbody></table></figure>



<p></p>
</div></div></div></div>
  )
}

export default BlogP2
