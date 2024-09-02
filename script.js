function analyzeSentiment() {
    const text = document.getElementById('user-input').value;
    const result = document.getElementById('result');
  
    if (text.trim() === '') {
      result.innerHTML = 'Please enter some text to analyze.';
      result.style.backgroundColor = '#f8d7da';
      result.style.color = '#721c24';
      return;
    }
  
    // Use Sentiment.js library
    const sentiment = Sentiment.analyze(text);
    let analysis, backgroundColor, color;
  
    if (sentiment.score > 0.6) {
      analysis = 'Positive';
      backgroundColor = '#d4edda';
      color = '#155724';
    } else if (sentiment.score < 0.4) {
      analysis = 'Negative';
      backgroundColor = '#f8d7da';
      color = '#721c24';
    } else {
      analysis = 'Neutral';
      backgroundColor = '#fff3cd';
      color = '#856404';
    }
  
    result.innerHTML = `Sentiment Analysis: ${analysis}`;
    result.style.backgroundColor = backgroundColor;
    result.style.color = color;
  }
