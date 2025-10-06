// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Health extends APIResource {
  /**
   * Root
   */
  retrieve(options?: RequestOptions): APIPromise<unknown> {
    return this._client.get('/', options);
  }

  /**
   * Health Check
   */
  check(options?: RequestOptions): APIPromise<unknown> {
    return this._client.get('/health', options);
  }
}

export type HealthRetrieveResponse = unknown;

export type HealthCheckResponse = unknown;

export declare namespace Health {
  export {
    type HealthRetrieveResponse as HealthRetrieveResponse,
    type HealthCheckResponse as HealthCheckResponse,
  };
}
