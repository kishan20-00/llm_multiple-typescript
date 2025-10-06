// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Chat extends APIResource {
  /**
   * Proxies an OpenAI chat completion request to the configured internal LLM
   * endpoint. Handles both streaming and non-streaming responses, and logs key
   * usage.
   *
   * Args: request: The FastAPI Request object. openai_payload: The request body
   * containing the chat completion parameters. key_record: The validated API key
   * record. key_log_model: Dependency for logging key usage.
   *
   * Returns: Union[StreamingResponse, Response]: The LLM response, potentially
   * streaming.
   *
   * Raises: HTTPException: 400 If the requested model is not supported.
   * HTTPException: 401 If the API key is invalid (from dependency). HTTPException:
   * 504 If the connection times out. HTTPException: 502 For LLM API or transport
   * errors.
   */
  createCompletion(params: ChatCreateCompletionParams, options?: RequestOptions): APIPromise<unknown> {
    const { body } = params;
    return this._client.post('/chat/completions', { body: body, ...options });
  }
}

export type ChatCreateCompletionResponse = unknown;

export interface ChatCreateCompletionParams {
  body: { [key: string]: unknown };
}

export declare namespace Chat {
  export {
    type ChatCreateCompletionResponse as ChatCreateCompletionResponse,
    type ChatCreateCompletionParams as ChatCreateCompletionParams,
  };
}
