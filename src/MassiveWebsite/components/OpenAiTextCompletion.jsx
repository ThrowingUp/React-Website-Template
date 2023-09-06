import React, { useState, useEffect } from "react";
import OpenAI from "openai";

const OpenAiTextCompletion = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOpenAIResponse = async () => {
      try {
        const openai = new OpenAI({
          apiKey: import.meta.env.VITE_OPEN_AI_KEY,
          dangerouslyAllowBrowser: true,
        });

        console.log("request send");

        const apiResponse = await openai.chat.completions.create({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "user",
              content:
                // ' You are a marketing researcher that speaks and writes fluent English and in a professional in writing markdown text.\\n            Your task is to generate a detailed USER PERSONA for a small business that want to start with SEO optimalization in The Netherlands [MARKET]. \\n\\n            Structure your response in 4 separate tables.\\n            Above the first table write \\"USER PERSONA [BUSINESS]\\n            and replace [BUSINESS] by small business that want to start with SEO optimalization in The Netherlands\\n           Please output in the following format: ',
                "hoi"
            },
          ],
          temperature: 1,
          max_tokens: 1963,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0,
        });

        console.log("API Response:", apiResponse);

        if (apiResponse) {
          const content = apiResponse.choices[0].message.content;
          setResponse(content);
        } else {
          setError("No valid response content found in API response.");
        }
      } catch (error) {
        console.error("Error fetching data from OpenAI:", error);
        setError("An error occurred while fetching data from OpenAI.");
      }
    };

    fetchOpenAIResponse();
  }, []);

  return (
    <div>
      {error ? (
        <div>
          <h2>Error:</h2>
          <p>{error}</p>
        </div>
      ) : response ? (
        <div>
          <h2>Your OpenAI Response:</h2>
          <p>{response}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default OpenAiTextCompletion;
