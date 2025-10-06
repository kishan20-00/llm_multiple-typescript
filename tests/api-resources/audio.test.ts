// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import LlmMultiple, { toFile } from 'llm_multiple';

const client = new LlmMultiple({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource audio', () => {
  // Prism tests are disabled
  test.skip('transcribe: only required params', async () => {
    const responsePromise = client.audio.transcribe({
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('transcribe: required and optional params', async () => {
    const response = await client.audio.transcribe({
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
      model: 'model',
      response_format: 'response_format',
    });
  });
});
