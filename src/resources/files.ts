// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { type Uploadable } from '../core/uploads';
import { RequestOptions } from '../internal/request-options';
import { multipartFormRequestOptions } from '../internal/uploads';
import { path } from '../internal/utils/path';

export class Files extends APIResource {
  /**
   * Returns information about a specific uploaded file.
   *
   * Args: request: The FastAPI Request object. file_id: The ID of the file to
   * retrieve. key_record: The validated API key record. files_model: Dependency for
   * file metadata DB operations. key_log_model: Dependency for logging key usage.
   *
   * Returns: Dict[str, Any]: The file metadata record.
   *
   * Raises: HTTPException: 404 If the file is not found. HTTPException: 500 If the
   * retrieval fails.
   */
  retrieve(fileID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(path`/files/${fileID}`, options);
  }

  /**
   * Returns a list of files that belong to the user, optionally filtered by purpose.
   *
   * Args: request: The FastAPI Request object. purpose: Query parameter to filter
   * files. key_record: The validated API key record. files_model: Dependency for
   * file metadata DB operations. key_log_model: Dependency for logging key usage.
   *
   * Returns: dict: A dictionary containing a list of file records.
   *
   * Raises: HTTPException: 500 If the file listing operation fails.
   */
  list(query: FileListParams | null | undefined = {}, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get('/files', { query, ...options });
  }

  /**
   * Deletes a file from both S3 storage and MongoDB metadata.
   *
   * Args: request: The FastAPI Request object. file_id: The ID of the file to
   * delete. key_record: The validated API key record. files_model: Dependency for
   * file metadata DB operations. storage_service: Dependency for S3 interaction.
   * key_log_model: Dependency for logging key usage. db: Dependency providing the
   * database session.
   *
   * Returns: dict: A confirmation dictionary of the deletion.
   *
   * Raises: HTTPException: 404 If the file is not found. HTTPException: 500 If the
   * deletion fails in S3 or MongoDB.
   */
  delete(fileID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.delete(path`/files/${fileID}`, options);
  }

  /**
   * Downloads the content of a specific file by streaming it from S3.
   *
   * Args: request: The FastAPI Request object. file_id: The ID of the file to
   * download. key_record: The validated API key record. files_model: Dependency for
   * file metadata DB operations. storage_service: Dependency for S3 interaction.
   * key_log_model: Dependency for logging key usage.
   *
   * Returns: StreamingResponse: The file content streamed from S3.
   *
   * Raises: HTTPException: 404 If the file is not found in DB or S3. HTTPException:
   * 500 If the retrieval or streaming fails.
   */
  downloadContent(fileID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(path`/files/${fileID}/content`, options);
  }

  /**
   * Uploads a file to external storage (S3) and creates corresponding metadata in
   * MongoDB.
   *
   * Args: request: The FastAPI Request object. file: The file content. purpose: The
   * intended purpose (Form parameter). key_record: The validated API key record.
   * files_model: Dependency for file metadata DB operations. storage_service:
   * Dependency for S3 interaction. key_log_model: Dependency for logging key usage.
   *
   * Returns: Dict[str, Any]: The created file metadata record (OpenAI format).
   *
   * Raises: HTTPException: 500 If the file upload or metadata creation fails.
   */
  upload(body: FileUploadParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/files', multipartFormRequestOptions({ body, ...options }, this._client));
  }
}

export type FileRetrieveResponse = unknown;

export type FileListResponse = unknown;

export type FileDeleteResponse = unknown;

export type FileDownloadContentResponse = unknown;

export type FileUploadResponse = unknown;

export interface FileListParams {
  purpose?: string | null;
}

export interface FileUploadParams {
  file: Uploadable;

  /**
   * The intended purpose of the file
   */
  purpose: string;
}

export declare namespace Files {
  export {
    type FileRetrieveResponse as FileRetrieveResponse,
    type FileListResponse as FileListResponse,
    type FileDeleteResponse as FileDeleteResponse,
    type FileDownloadContentResponse as FileDownloadContentResponse,
    type FileUploadResponse as FileUploadResponse,
    type FileListParams as FileListParams,
    type FileUploadParams as FileUploadParams,
  };
}
