# LiveKit Voice AI Agent with Composio Integration

This agent demonstrates how to use Composio for quick tool integration with LiveKit for a voice AI agent that can check Google Calendar events and send emails.

## Prerequisites

- Python 3.9 or later
- LiveKit server (Cloud or self-hosted)
- API keys for:
  - LiveKit (API key, API secret, and server URL)
  - Deepgram (for STT)
  - OpenAI (for LLM)
  - Cartesia (for TTS)
  - Composio (for tool integration)
- Google account with Calendar and Gmail access

## Setup

1. Install the required packages:
   ```bash
   pip install -r requirements.txt
   ```

2. Copy the `.env.example` file to `.env` and fill in your API keys:
   ```bash
   cp .env.example .env
   ```

3. Connect your Google account to Composio:
   ```bash
   composio login
   composio add googlecalendar
   composio add gmail
   ```

4. Download the required model files:
   ```bash
   python main.py download-files
   ```

## Running the Agent

### Console Mode (for testing)
Run the agent directly in your terminal for local audio input and output:
```bash
python main.py console
```

### Development Mode
Connect your agent to your LiveKit server:
```bash
python main.py dev
```

### Production Mode
Run the agent optimized for production deployment:
```bash
python main.py
```

## Using the Agent

Once the agent is running, you can:
1. Ask it to check your calendar: "What events do I have today?"
2. Search for specific events: "Do I have any meetings with John this week?"
3. Request to move events: "Can you move my 2pm meeting to 4pm?"
4. Ask it to send emails: "Send an email to the participants of my 3pm meeting that I'll be 10 minutes late"

The agent will use the Composio tools to interact with your Google Calendar and Gmail accounts to fulfill these requests.
