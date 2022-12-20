import { isDev, Message, PORT } from './utils'

if (isDev) {
  const ws = new WebSocket(`ws://localhost:${PORT}`)
  ws.addEventListener('message', (event) => {
    if (event.data === Message.FileChange) {
      // Close the websocket since it will reconnect after reloading.
      ws.close()

      chrome.runtime.sendMessage(Message.Reload)
    }
  })
}
