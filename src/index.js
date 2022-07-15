import nodeFetch, {
  Headers,
  Request,
  Response,
  Blob,
  FormData,
  File
} from 'node-fetch';
import { AbortController } from 'abort-controller';

// @internal
// Provides fetch module along with required Headers, Request, Response
// Blob, Data, File, AbortController object globally
export function registerFetchGlobals() {
  const myGlobalThis =
    typeof globalThis !== 'undefined' && globalThis !== null
      ? globalThis
      : !(typeof global === 'undefined' || global === null)
      ? global
      : !(typeof window === 'undefined' || window === null)
      ? window
      : {};

  //
  if (!myGlobalThis.fetch) {
    myGlobalThis.fetch = nodeFetch;
    myGlobalThis.Headers = Headers;
    myGlobalThis.Request = Request;
    myGlobalThis.Response = Response;
  }

  if (!myGlobalThis.Blob) {
    myGlobalThis.Blob = Blob;
  }

  if (!myGlobalThis.File) {
    myGlobalThis.File = File;
  }

  if (!myGlobalThis.FormData) {
    myGlobalThis.FormData = FormData;
  }

  //
  if (typeof myGlobalThis.AbortController === 'undefined' || myGlobalThis.AbortController === null) {
    myGlobalThis.AbortController = AbortController;
  }

  //
  if (typeof myGlobalThis.AbortSignal === 'undefined' || myGlobalThis.AbortSignal === null) {
    myGlobalThis.AbortSignal = AbortSignal;
  }
}

// Register fetch globals if not present in the global this object
// Especially for node environment, we make use of node-fetch package
// to register global callable fetch object
registerFetchGlobals();
