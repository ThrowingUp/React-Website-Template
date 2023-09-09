import React, { useState, useEffect } from "react";
import OpenAI from "openai";
import parse from "html-react-parser"; // Import the html-react-parser library

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

        const apiResponse = await openai.chat.completions.create({
          model: "ft:gpt-3.5-turbo-0613:personal::7vp20Rid",
          messages: [
            {
              role: "user",
              content:
                "Create me a persona for medium sized business who is in need of Sustainability solutions in Vancouver, Canada"
            },
          ],
          temperature: 1,
          // max_tokens: 1963,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0,
        });

        if (apiResponse) {
          const content = apiResponse.choices[0].message.content;
          console.log("Content", content)
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

  // Function to render the parsed HTML content
  const renderHtml = () => {
    if (response) {
      console.log("responce", response)
      return parse(response);
    }
    return null;
  };

  return (
    <div className=" w-[70%]">
      {error ? (
        <div>
          <h2>Error:</h2>
          <p>{error}</p>
        </div>
      ) : (
        <div>
          <h2>Your OpenAI Response:</h2>
          {renderHtml()} {/* Render the parsed HTML content */}
        </div>
      )}
    </div>
  );
};

export default OpenAiTextCompletion;
