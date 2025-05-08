# Knotie - Personal Assistant with Composio Integration

![Knotie AI](https://knotie-ai.pro)

This project showcases a powerful personal assistant using LiveKit and Composio integration for Google Calendar and Gmail functionality. The assistant can manage your calendar events, schedule appointments, and send emails through natural voice conversations.

## 🚀 Introducing Knotie-AI Pro

**We've launched [Knotie-AI Pro](https://knotie-ai.pro) (public beta)!** 

This is not just another Voice AI Builder Platform. We're building the **BEST Voice AI Product for Agencies** in the market.

### 🌟 Become a Knotie-AI Pro Family Member

Help us achieve our dream and in return, we're offering a one-time special deal right now on our website.

**[Visit Knotie-AI Pro](https://knotie-ai.pro)** to learn more and join our community!

## Project Structure

This demo project consists of two main components:

1. **Agent**: A Python-based LiveKit voice AI agent that uses Composio tools to interact with Google Calendar and Gmail.
2. **Frontend**: A Next.js web application that provides a conversational interface for interacting with the LiveKit agent.

## Features

- **Natural Conversations**: The assistant uses backchanneling and speech normalization for more natural interactions
- **Calendar Management**: Check, create, update, and delete Google Calendar events
- **Email Integration**: Send emails through Gmail with voice commands
- **Real-time Voice Communication**: Powered by LiveKit for high-quality audio streaming
- **Modern UI**: Clean, responsive interface with visual feedback

## Prerequisites

- Python 3.9 or later
- Node.js 18 or later
- LiveKit server (Cloud or self-hosted)
- API keys for:
  - LiveKit (API key, API secret, and server URL)
  - Deepgram (for STT)
  - OpenAI (for LLM)
  - Cartesia (for TTS)
  - Composio (for tool integration)
- Google account with Calendar and Gmail access

## Setup and Usage

### 1. Agent Setup

Navigate to the `agent` directory and follow these steps to set up and run the agent:

```bash
cd agent
pip install -r requirements.txt
cp .env.example .env
# Edit .env with your API keys
```

Connect your Google account to Composio:

```bash
composio login
composio add googlecalendar
composio add gmail
```

Download model files and run the agent:

```bash
python main.py download-files
python main.py dev
```

### 2. Frontend Setup

Navigate to the `frontend` directory and set up the web interface:

```bash
cd frontend
npm install
cp .env.example .env.local
# Edit .env.local with your LiveKit API keys
npm run dev
```

Open the application in your browser at `http://localhost:3000` or `http://localhost:3001`.

## Example Voice Commands

Once connected, you can have natural conversations with Knotie. Try these examples:

### Calendar Management
- "What meetings do I have today?"
- "Do I have any appointments with John this week?"
- "Schedule a team meeting tomorrow at 2pm"
- "Move my 3pm meeting to 4:30pm"
- "Cancel my lunch appointment on Friday"

### Email Functionality
- "Send an email to Sarah about the project update"
- "Email the team that I'll be 10 minutes late for the meeting"
- "Draft a message to my boss about the quarterly results"

Knotie uses Composio tools to seamlessly interact with your Google Calendar and Gmail accounts.

## How It Works

1. **Voice Processing**: LiveKit and Deepgram convert your voice to text with high accuracy
2. **AI Understanding**: OpenAI's GPT-4o processes your requests and determines the appropriate actions
3. **Tool Integration**: Composio provides seamless access to Google Calendar and Gmail
4. **Natural Response**: Cartesia TTS converts the AI's response to natural-sounding speech
5. **Real-time Communication**: LiveKit handles the WebRTC connection for low-latency audio

## Enhanced Conversational Features

- **Backchanneling**: Knotie acknowledges your input with phrases like "I see," "Got it," making conversations feel more natural
- **Speech Normalization**: The system removes filler words and corrects minor grammatical errors
- **Context Awareness**: Knotie maintains context throughout the conversation for more coherent interactions
- **Date & Time Awareness**: Always up-to-date with the current date and time for accurate scheduling

## YouTube Tutorial

Watch our step-by-step tutorial on how to build this project:

[![Build a Personal Assistant with LiveKit and Composio](https://img.youtube.com/vi/1t9nfRSK-Nw/0.jpg)](https://youtu.be/1t9nfRSK-Nw)

*Click the image above to watch the tutorial on YouTube*

## Subscribe to Kno2gether

For more AI tutorials and projects like this one, subscribe to our [YouTube channel](https://www.youtube.com/@Kno2gether).

## Try Knotie-AI Pro

Ready to take your voice AI experience to the next level? Visit [knotie-ai.pro](https://knotie-ai.pro) to access our full-featured platform designed specifically for agencies.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
