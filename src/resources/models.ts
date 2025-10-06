// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Models extends APIResource {
  /**
   * Returns details for a specific model in OpenAI-compatible format.
   *
   * Args: model_id: The OpenAI-compatible ID of the model (e.g., 'deepseek-chat').
   * key_record: The validated API key record. key_log_model: Dependency for logging
   * key usage.
   *
   * Returns: dict: The model details.
   *
   * Raises: HTTPException: 404 If the model is not found or not configured.
   * HTTPException: 500 For internal server errors.
   */
  retrieve(modelID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(path`/models/${modelID}`, options);
  }

  /**
   * Returns a list of available models in OpenAI-compatible format.
   *
   * Args: key_record: The validated API key record. key_log_model: Dependency for
   * logging key usage.
   *
   * Returns: dict: A dictionary containing the list of available models and
   * metadata.
   *
   * Raises: HTTPException: 500 For unexpected errors during model list retrieval.
   */
  list(options?: RequestOptions): APIPromise<unknown> {
    return this._client.get('/models', options);
  }
}

export type ModelRetrieveResponse = unknown;

export type ModelListResponse = unknown;

export declare namespace Models {
  export { type ModelRetrieveResponse as ModelRetrieveResponse, type ModelListResponse as ModelListResponse };
}
