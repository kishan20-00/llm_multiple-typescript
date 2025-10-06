// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Batches extends APIResource {
  /**
   * Creates a new batch job and submits it to a background Celery worker for
   * processing.
   *
   * Args: request: The FastAPI Request object. batch_request: The Pydantic model
   * containing batch configuration (file_id, endpoint, etc.). key_record: The
   * validated API key record. key_log_model: Dependency for logging key usage.
   * batch_model: Dependency for batch DB operations. files_model: Dependency for
   * file DB validation. storage_service: Dependency for S3 interaction (passed to
   * model). authorization: The 'Bearer <key>' header string (used by worker).
   *
   * Returns: BatchResponse: The initial batch record with status 'validating'.
   *
   * Raises: HTTPException: 404 If the input file is not found. HTTPException: 400 If
   * file validation fails. HTTPException: 500 For internal server errors during
   * submission.
   */
  create(body: BatchCreateParams, options?: RequestOptions): APIPromise<BatchCreateResponse> {
    return this._client.post('/batches', { body, ...options });
  }

  /**
   * Returns information about a specific batch job by its ID.
   *
   * Args: request: The FastAPI Request object. batch_id: The ID of the batch job.
   * key_record: The validated API key record. batch_model: Dependency for batch DB
   * operations. key_log_model: Dependency for logging key usage.
   *
   * Returns: dict: The batch job record.
   *
   * Raises: HTTPException: 404 If the batch is not found. HTTPException: 500 For
   * errors during retrieval.
   */
  retrieve(batchID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(path`/batches/${batchID}`, options);
  }

  /**
   * Returns a paginated list of batches.
   *
   * Args: request: The FastAPI Request object. limit: Query parameter for pagination
   * size. after: Query parameter for pagination cursor. key_record: The validated
   * API key record. batch_model: Dependency for batch DB operations. key_log_model:
   * Dependency for logging key usage.
   *
   * Returns: dict: A dictionary containing the list of batches and pagination info.
   *
   * Raises: HTTPException: 500 For errors during list retrieval.
   */
  list(query: BatchListParams | null | undefined = {}, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get('/batches', { query, ...options });
  }

  /**
   * Initiates the cancellation of a running batch job.
   *
   * Args: request: The FastAPI Request object. batch_id: The ID of the batch job to
   * cancel. key_record: The validated API key record. batch_model: Dependency for
   * batch DB operations. key_log_model: Dependency for logging key usage.
   *
   * Returns: BatchCancelResponse: A response confirming the cancellation attempt.
   *
   * Raises: HTTPException: 400 If the batch is in a non-cancellable state.
   * HTTPException: 404 If the batch is not found. HTTPException: 500 For internal
   * server errors.
   */
  cancel(batchID: string, options?: RequestOptions): APIPromise<BatchCancelResponse> {
    return this._client.post(path`/batches/${batchID}/cancel`, options);
  }
}

/**
 * The response schema returned upon creating or retrieving a batch job.
 */
export interface BatchCreateResponse {
  /**
   * The batch ID.
   */
  id: string;

  /**
   * The time frame for the batch completion.
   */
  completion_window: string;

  /**
   * The creation timestamp in Unix format.
   */
  created_at: number;

  /**
   * The endpoint for the batch requests.
   */
  endpoint: string;

  /**
   * The expiration timestamp in Unix format.
   */
  expires_at: number;

  /**
   * The ID of the input file.
   */
  input_file_id: string;

  cancelled_at?: string | null;

  cancelling_at?: string | null;

  completed_at?: string | null;

  error_file_id?: string | null;

  errors?: string | null;

  expired_at?: string | null;

  failed_at?: string | null;

  finalizing_at?: string | null;

  in_progress_at?: string | null;

  metadata?: { [key: string]: string } | null;

  /**
   * The object type, always 'batch'.
   */
  object?: string;

  output_file_id?: string | null;

  /**
   * A model to track the total, completed, and failed requests within a batch job.
   */
  request_counts?: BatchCreateResponse.RequestCounts;

  /**
   * The status of the batch job.
   */
  status?: string;
}

export namespace BatchCreateResponse {
  /**
   * A model to track the total, completed, and failed requests within a batch job.
   */
  export interface RequestCounts {
    completed?: number;

    failed?: number;

    total?: number;
  }
}

export type BatchRetrieveResponse = unknown;

export type BatchListResponse = unknown;

/**
 * The response schema returned when attempting to cancel a batch job.
 */
export interface BatchCancelResponse {
  /**
   * The batch ID
   */
  batch_id: string;

  /**
   * Cancellation status message
   */
  message: string;

  /**
   * The status before cancellation
   */
  previous_status: string;

  /**
   * The new status of the batch
   */
  status: string;

  /**
   * Whether task cancellation was attempted
   */
  task_cancellation_attempted: boolean;
}

export interface BatchCreateParams {
  /**
   * The time frame for the batch completion, e.g., '24h'.
   */
  completion_window: string;

  /**
   * The endpoint for the batch requests, e.g., '/v1/chat/completions'.
   */
  endpoint: string;

  /**
   * The ID of the file to be processed.
   */
  input_file_id: string;

  metadata?: { [key: string]: string } | null;
}

export interface BatchListParams {
  after?: string | null;

  limit?: number;
}

export declare namespace Batches {
  export {
    type BatchCreateResponse as BatchCreateResponse,
    type BatchRetrieveResponse as BatchRetrieveResponse,
    type BatchListResponse as BatchListResponse,
    type BatchCancelResponse as BatchCancelResponse,
    type BatchCreateParams as BatchCreateParams,
    type BatchListParams as BatchListParams,
  };
}
