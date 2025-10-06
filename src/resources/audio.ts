// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { type Uploadable } from '../core/uploads';
import { RequestOptions } from '../internal/request-options';
import { multipartFormRequestOptions } from '../internal/uploads';

export class Audio extends APIResource {
  /**
   * Proxies an OpenAI audio transcription request, handling audio conversion and
   * logging.
   *
   * Args: request: The FastAPI Request object. file: The audio file to be
   * transcribed. model: Form parameter specifying the transcription model.
   * response_format: Form parameter specifying the desired response format (e.g.,
   * json). key_record: The validated API key record. key_log_model: Dependency for
   * logging key usage.
   *
   * Returns: Dict[str, Any]: The transcription result from the LLM.
   *
   * Raises: HTTPException: 400 If the model is not supported or file format is
   * invalid/conversion fails. HTTPException: 504/502/4xx/5xx For LLM API, transport,
   * or timeout errors.
   */
  transcribe(body: AudioTranscribeParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post(
      '/audio/transcriptions',
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }
}

export type AudioTranscribeResponse = unknown;

export interface AudioTranscribeParams {
  file: Uploadable;

  model?: string;

  response_format?: string;
}

export declare namespace Audio {
  export {
    type AudioTranscribeResponse as AudioTranscribeResponse,
    type AudioTranscribeParams as AudioTranscribeParams,
  };
}
