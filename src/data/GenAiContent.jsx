import netflix from "../assets/netflix.svg";
import notion from "../assets/notion-logo.svg";
import jira from "../assets/jira-logo.svg";

import uber from "../assets/uber-logo.svg";
import slack from "../assets/slack-logo.svg";
import zomato from "../assets/zomato-logo.svg";

import cricket from "../assets/cricket-logo.svg";
import cred from "../assets/cred-logo1.png";
import youtube from "../assets/youtube-logo.jpg";

import google from "../assets/google-logo.png";
import paytm from "../assets/paytm-logo.jpg";
import lazypay from "../assets/lazypay-logo.png";

import moengage from "../assets/moengage-logo.png";
import canva from "../assets/canva.svg";

import perplexity from "../assets/aitool2.svg";
import chatgpt from "../assets/aitool3.svg";
import midjourney from "../assets/aitool6.svg";
import miro from "../assets/miro.svg";
import figma from "../assets/figma-logo.svg";
import airtable from "../assets/airtable.png";
import msPowerBi from "../assets/ms-power-bi.png";
import googleAnalytics from "../assets/google-analytics.png";
import jupyter from "../assets/jupyter-notebook.png";
import ibm from "../assets/ibm-watson.webp";
import tableau from "../assets/tableau.png";
import ethics from "../assets/ethics.png";
import slides from "../assets/google-slides.png";
import mixpanel from "../assets/mixpanel.png";
import powerpoint from "../assets/powerpoint.png";
import googleCollab from "../assets/google-collab.png";

// import googleCollab from "https://colab.research.google.com/img/colab_favicon_256px.png";

const tinder =
  "https://logodownload.org/wp-content/uploads/2020/09/tinder-logo.png";
const github = "https://pngimg.com/uploads/github/github_PNG23.png";
const postman =
  "https://upload.wikimedia.org/wikipedia/commons/c/c2/Postman_%28software%29.png";
const sql =
  "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png";

const GenAIContent = [
  {
    week: "1",
    title: "01 Introduction to AI Fundamentals",
    desc: [
      "Learn about symbolic systems and reactive machines.",
      "Understand the evolution of AI and the advent of machine learning.",
      "Explore the development of neural networks including RNNs and CNNs.",
      "Dive into artificial neural networks and deep learning.",
      "Learn about foundation models and generative AI.",
      "Understand the applications of discriminative, predictive, and generative models.",
      "Discuss the ethics and privacy concerns in AI.",
    ],
    toolsLearned: [],
  },
  {
    week: "2",
    title: "02 LLM Fundamentals",
    desc: [
      "Understand the core components of Large Language Models (LLMs).",
      "Explore different types of LLMs and their unique features.",
      "Learn about the capabilities and limitations of LLMs in solving complex problems.",
      "Examine the architecture of GPT as a practical example of an LLM in action.",
    ],
    toolsLearned: [],
  },
  {
    week: "3",
    title: "03 Fine-Tuning LLMs",
    desc: [
      "Understand what fine-tuning is and why it is needed.",
      "Learn how to fine-tune an LLM for specific use cases.",
      "Study case examples of fine-tuned LLMs in real-world applications.",
      "Consider model selection factors like size, pre-training, and limitations.",
      "Prepare datasets for effective fine-tuning.",
      "Train models using Python libraries and evaluate their performance using metrics like ROUGE.",
    ],
    toolsLearned: ["GitHub", "Hugging Face"],
  },
  {
    week: "4",
    title: "04 Mastering Prompts",
    desc: [
      "Learn prompt engineering to craft effective prompts for LLM performance.",
      "Practice through hands-on exercises to refine your prompt design skills.",
      "Enhance productivity by creating optimized prompts.",
    ],
    toolsLearned: [],
  },
  {
    week: "5",
    title: "05 Advanced Prompting",
    desc: [
      "Use the TCRPFT framework for better prompting.",
      "Learn single/multi-shot prompting to guide models with examples.",
      "Explore zero-shot prompting, instruction tuning, and RLHF.",
      "Understand Tree of Thought and Chain of Thought approaches for reasoning.",
      "Study adversarial prompting, including jailbreaks and prompt leaking.",
    ],
    toolsLearned: [],
  },
  {
    week: "6",
    title: "06 Prompt Engineering for PMs",
    desc: [
      "Use AI-driven tools for creating product requirement documents (PRDs).",
      "Plan roadmaps using AI-assisted tools.",
      "Conduct research and competitive analysis with AI for deeper insights.",
      "Automate tasks to streamline product management workflows.",
    ],
    toolsLearned: [],
  },
  {
    week: "7",
    title: "07 Retrieval-Augmented Generation (RAG) & Agents",
    desc: [
      "Learn about the RAG architecture and its components.",
      "Understand retrieval systems and knowledge bases.",
      "Incorporate retrieved information into AI-generated outputs.",
      "Explore techniques to improve AI accuracy and relevance.",
      "Study practical applications of RAG, such as enhancing chatbots, improving product recommendations, and e-commerce support.",
      "Understand the building blocks of agentic AI.",
    ],
    toolsLearned: [],
  },
  {
    week: "8",
    title: "08 Video and Audio Content Creation with GANs",
    desc: [
      "Understand GAN fundamentals and how they work.",
      "Generate realistic video and audio content using GANs.",
      "Explore applications like art generation, data augmentation, and synthetic media creation.",
      "Learn adversarial training techniques to improve GANs through feedback loops.",
    ],
    toolsLearned: [],
  },
  {
    week: "9",
    title: "09 Ethical Considerations & Responsible AI (RAI)",
    desc: [
      "Identify and mitigate biases in training data and models.",
      "Learn fairness metrics and evaluation techniques.",
      "Address privacy and security concerns in model training and deployment.",
      "Understand guidelines for responsible AI development.",
      "Ensure transparency and explainability in LLMs.",
    ],
    toolsLearned: [],
  },
  {
    week: "10",
    title: "10 Certification Exam",
    desc: [
      "Prepare for a comprehensive certification exam covering all modules.",
      "Complete written and/or practical components to demonstrate mastery.",
    ],
    toolsLearned: [],
  },
  {
    week: "11",
    title: "11 Capstone Project - My Chatbot CV",
    desc: [
      "Design and build a personalized chatbot to showcase your career journey.",
      "Fine-tune an LLM to handle queries about your CV and experiences.",
      "Develop a functional chatbot interface and evaluate its performance.",
    ],
    toolsLearned: [],
  },
];

export default GenAIContent;
