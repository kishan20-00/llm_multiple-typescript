// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Images extends APIResource {
  /**
   * Proxies an OpenAI image generation request to the configured internal LLM
   * endpoint. Supports polling for SDM-3.5 and direct generation for SDXL. Logs
   * usage and returns the image content.
   *
   * Args: request: The FastAPI Request object. openai_payload: The request body
   * containing the image generation parameters (OpenAI format). key_record: The
   * validated API key record. key_log_model: Dependency for logging key usage.
   *
   * Returns: Response: The generated image file content.
   *
   * Raises: HTTPException: 400 If the requested model is not supported.
   * HTTPException: 504 If the polling process times out. HTTPException: 502 For LLM
   * API, transport, or polling errors.
   */
  generate(params: ImageGenerateParams, options?: RequestOptions): APIPromise<unknown> {
    const { body } = params;
    return this._client.post('/images/generations', { body: body, ...options });
  }
}

export type ImageGenerateResponse = unknown;

export interface ImageGenerateParams {
  body: { [key: string]: unknown };
}

export declare namespace Images {
  export {
    type ImageGenerateResponse as ImageGenerateResponse,
    type ImageGenerateParams as ImageGenerateParams,
  };
}
