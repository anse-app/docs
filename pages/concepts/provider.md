# Provider

Provider wraps a series of chat models for a platform. A standard Provider contains several [Bots](/concepts/bot), specific logic for connecting to the corresponding platform, and a number of shared configuration items (usually API Keys).

Since each Provider has the same structured interface, it is easy to develop a new Provider to provide support for a new platform.

Currently, we provide two official Providers: [provider-openai](https://github.com/anse-app/anse/tree/main/src/providers/openai), [provider-replicate](https://github.com/anse-app/anse/tree/main/src/providers/replicate).

