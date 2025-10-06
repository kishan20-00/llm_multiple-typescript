# Chat

Types:

- <code><a href="./src/resources/chat.ts">ChatCreateCompletionResponse</a></code>

Methods:

- <code title="post /chat/completions">client.chat.<a href="./src/resources/chat.ts">createCompletion</a>({ ...params }) -> unknown</code>

# Audio

Types:

- <code><a href="./src/resources/audio.ts">AudioTranscribeResponse</a></code>

Methods:

- <code title="post /audio/transcriptions">client.audio.<a href="./src/resources/audio.ts">transcribe</a>({ ...params }) -> unknown</code>

# Images

Types:

- <code><a href="./src/resources/images.ts">ImageGenerateResponse</a></code>

Methods:

- <code title="post /images/generations">client.images.<a href="./src/resources/images.ts">generate</a>({ ...params }) -> unknown</code>

# Models

Types:

- <code><a href="./src/resources/models.ts">ModelRetrieveResponse</a></code>
- <code><a href="./src/resources/models.ts">ModelListResponse</a></code>

Methods:

- <code title="get /models/{model_id}">client.models.<a href="./src/resources/models.ts">retrieve</a>(modelID) -> unknown</code>
- <code title="get /models">client.models.<a href="./src/resources/models.ts">list</a>() -> unknown</code>

# Files

Types:

- <code><a href="./src/resources/files.ts">FileRetrieveResponse</a></code>
- <code><a href="./src/resources/files.ts">FileListResponse</a></code>
- <code><a href="./src/resources/files.ts">FileDeleteResponse</a></code>
- <code><a href="./src/resources/files.ts">FileDownloadContentResponse</a></code>
- <code><a href="./src/resources/files.ts">FileUploadResponse</a></code>

Methods:

- <code title="get /files/{file_id}">client.files.<a href="./src/resources/files.ts">retrieve</a>(fileID) -> unknown</code>
- <code title="get /files">client.files.<a href="./src/resources/files.ts">list</a>({ ...params }) -> unknown</code>
- <code title="delete /files/{file_id}">client.files.<a href="./src/resources/files.ts">delete</a>(fileID) -> unknown</code>
- <code title="get /files/{file_id}/content">client.files.<a href="./src/resources/files.ts">downloadContent</a>(fileID) -> unknown</code>
- <code title="post /files">client.files.<a href="./src/resources/files.ts">upload</a>({ ...params }) -> unknown</code>

# Health

Types:

- <code><a href="./src/resources/health.ts">HealthRetrieveResponse</a></code>
- <code><a href="./src/resources/health.ts">HealthCheckResponse</a></code>

Methods:

- <code title="get /">client.health.<a href="./src/resources/health.ts">retrieve</a>() -> unknown</code>
- <code title="get /health">client.health.<a href="./src/resources/health.ts">check</a>() -> unknown</code>

# Batches

Types:

- <code><a href="./src/resources/batches.ts">BatchCreateResponse</a></code>
- <code><a href="./src/resources/batches.ts">BatchRetrieveResponse</a></code>
- <code><a href="./src/resources/batches.ts">BatchListResponse</a></code>
- <code><a href="./src/resources/batches.ts">BatchCancelResponse</a></code>

Methods:

- <code title="post /batches">client.batches.<a href="./src/resources/batches.ts">create</a>({ ...params }) -> BatchCreateResponse</code>
- <code title="get /batches/{batch_id}">client.batches.<a href="./src/resources/batches.ts">retrieve</a>(batchID) -> unknown</code>
- <code title="get /batches">client.batches.<a href="./src/resources/batches.ts">list</a>({ ...params }) -> unknown</code>
- <code title="post /batches/{batch_id}/cancel">client.batches.<a href="./src/resources/batches.ts">cancel</a>(batchID) -> BatchCancelResponse</code>
