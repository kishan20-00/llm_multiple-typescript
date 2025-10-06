// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { LlmMultiple } from '../client';

export abstract class APIResource {
  protected _client: LlmMultiple;

  constructor(client: LlmMultiple) {
    this._client = client;
  }
}
