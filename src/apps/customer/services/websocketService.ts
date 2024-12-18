type MessageHandler = (data: any) => void;

export class WebSocketService {
  private socket: WebSocket | null = null;
  private connectionPromise: Promise<WebSocket> | null = null;
  private messageHandlers: Set<MessageHandler> = new Set();
  private url: string | null = null;

  connect(url: string): Promise<WebSocket> {
    if (this.connectionPromise && this.url === url) {
      return this.connectionPromise;
    }

    this.url = url;
    this.connectionPromise = new Promise((resolve, reject) => {
      try {
        if (this.socket) {
          this.socket.close();
        }

        this.socket = new WebSocket(url);

        this.socket.onopen = () => {
          console.log("WebSocket connection established");
          resolve(this.socket!);
        };

        this.socket.onmessage = (event) => {
          const data = JSON.parse(event.data);
          this.messageHandlers.forEach((handler) => handler(data));
        };

        this.socket.onerror = (error) => {
          console.error("WebSocket connection error:", error);
          reject(error);
        };

        this.socket.onclose = () => {
          console.log("WebSocket connection closed");
          this.connectionPromise = null;
          this.url = null;
        };
      } catch (error) {
        reject(error);
      }
    });

    return this.connectionPromise;
  }

  async sendMessage(message: any): Promise<void> {
    if (!this.socket || this.socket.readyState !== WebSocket.OPEN) {
      await this.connect("ws://localhost:8000/ws");
    }

    if (this.socket) {
      this.socket.send(JSON.stringify(message));
    }
  }

  addMessageHandler(handler: MessageHandler): () => void {
    this.messageHandlers.add(handler);
    return () => this.messageHandlers.delete(handler);
  }
}

export const websocketService = new WebSocketService();
