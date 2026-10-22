 async function runAI() {

  const prompt =
    document.getElementById("prompt").value;

  document.getElementById("output").innerHTML =
    "Analyzing...";

  const API_KEY = "AQ.Ab8RN6JCdon42YpcWLQ9IT4dZu26e4L1BTFPCnqjpHSQ5VGNlA";

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: prompt
          }]
        }]
      })
    }
  );

  const data = await response.json();

  document.getElementById("output").innerHTML =
    data.candidates[0].content.parts[0].text;
}
    const data = await response.json();

    return Response.json(data);
  }
}
