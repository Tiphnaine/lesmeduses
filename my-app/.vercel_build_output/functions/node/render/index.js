var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/cookie/index.js
var require_cookie = __commonJS({
  "node_modules/cookie/index.js"(exports) {
    "use strict";
    exports.parse = parse;
    exports.serialize = serialize;
    var decode = decodeURIComponent;
    var encode = encodeURIComponent;
    var pairSplitRegExp = /; */;
    var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
    function parse(str, options2) {
      if (typeof str !== "string") {
        throw new TypeError("argument str must be a string");
      }
      var obj = {};
      var opt = options2 || {};
      var pairs = str.split(pairSplitRegExp);
      var dec = opt.decode || decode;
      for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i];
        var eq_idx = pair.indexOf("=");
        if (eq_idx < 0) {
          continue;
        }
        var key = pair.substr(0, eq_idx).trim();
        var val = pair.substr(++eq_idx, pair.length).trim();
        if (val[0] == '"') {
          val = val.slice(1, -1);
        }
        if (obj[key] == void 0) {
          obj[key] = tryDecode(val, dec);
        }
      }
      return obj;
    }
    function serialize(name, val, options2) {
      var opt = options2 || {};
      var enc = opt.encode || encode;
      if (typeof enc !== "function") {
        throw new TypeError("option encode is invalid");
      }
      if (!fieldContentRegExp.test(name)) {
        throw new TypeError("argument name is invalid");
      }
      var value = enc(val);
      if (value && !fieldContentRegExp.test(value)) {
        throw new TypeError("argument val is invalid");
      }
      var str = name + "=" + value;
      if (opt.maxAge != null) {
        var maxAge = opt.maxAge - 0;
        if (isNaN(maxAge) || !isFinite(maxAge)) {
          throw new TypeError("option maxAge is invalid");
        }
        str += "; Max-Age=" + Math.floor(maxAge);
      }
      if (opt.domain) {
        if (!fieldContentRegExp.test(opt.domain)) {
          throw new TypeError("option domain is invalid");
        }
        str += "; Domain=" + opt.domain;
      }
      if (opt.path) {
        if (!fieldContentRegExp.test(opt.path)) {
          throw new TypeError("option path is invalid");
        }
        str += "; Path=" + opt.path;
      }
      if (opt.expires) {
        if (typeof opt.expires.toUTCString !== "function") {
          throw new TypeError("option expires is invalid");
        }
        str += "; Expires=" + opt.expires.toUTCString();
      }
      if (opt.httpOnly) {
        str += "; HttpOnly";
      }
      if (opt.secure) {
        str += "; Secure";
      }
      if (opt.sameSite) {
        var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
        switch (sameSite) {
          case true:
            str += "; SameSite=Strict";
            break;
          case "lax":
            str += "; SameSite=Lax";
            break;
          case "strict":
            str += "; SameSite=Strict";
            break;
          case "none":
            str += "; SameSite=None";
            break;
          default:
            throw new TypeError("option sameSite is invalid");
        }
      }
      return str;
    }
    function tryDecode(str, decode2) {
      try {
        return decode2(str);
      } catch (e) {
        return str;
      }
    }
  }
});

// .svelte-kit/vercel/entry.js
__markAsModule(exports);
__export(exports, {
  default: () => entry_default
});

// node_modules/@sveltejs/kit/dist/node.js
function getRawBody(req) {
  return new Promise((fulfil, reject) => {
    const h = req.headers;
    if (!h["content-type"]) {
      return fulfil(null);
    }
    req.on("error", reject);
    const length = Number(h["content-length"]);
    if (isNaN(length) && h["transfer-encoding"] == null) {
      return fulfil(null);
    }
    let data = new Uint8Array(length || 0);
    if (length > 0) {
      let offset = 0;
      req.on("data", (chunk) => {
        const new_len = offset + Buffer.byteLength(chunk);
        if (new_len > length) {
          return reject({
            status: 413,
            reason: 'Exceeded "Content-Length" limit'
          });
        }
        data.set(chunk, offset);
        offset = new_len;
      });
    } else {
      req.on("data", (chunk) => {
        const new_data = new Uint8Array(data.length + chunk.length);
        new_data.set(data, 0);
        new_data.set(chunk, data.length);
        data = new_data;
      });
    }
    req.on("end", () => {
      const [type] = h["content-type"].split(/;\s*/);
      if (type === "application/octet-stream") {
        return fulfil(data);
      }
      const encoding = h["content-encoding"] || "utf-8";
      fulfil(new TextDecoder(encoding).decode(data));
    });
  });
}

// node_modules/@sveltejs/kit/dist/install-fetch.js
var import_http = __toModule(require("http"));
var import_https = __toModule(require("https"));
var import_zlib = __toModule(require("zlib"));
var import_stream = __toModule(require("stream"));
var import_util = __toModule(require("util"));
var import_crypto = __toModule(require("crypto"));
var import_url = __toModule(require("url"));
function dataUriToBuffer(uri) {
  if (!/^data:/i.test(uri)) {
    throw new TypeError('`uri` does not appear to be a Data URI (must begin with "data:")');
  }
  uri = uri.replace(/\r?\n/g, "");
  const firstComma = uri.indexOf(",");
  if (firstComma === -1 || firstComma <= 4) {
    throw new TypeError("malformed data: URI");
  }
  const meta = uri.substring(5, firstComma).split(";");
  let charset = "";
  let base64 = false;
  const type = meta[0] || "text/plain";
  let typeFull = type;
  for (let i = 1; i < meta.length; i++) {
    if (meta[i] === "base64") {
      base64 = true;
    } else {
      typeFull += `;${meta[i]}`;
      if (meta[i].indexOf("charset=") === 0) {
        charset = meta[i].substring(8);
      }
    }
  }
  if (!meta[0] && !charset.length) {
    typeFull += ";charset=US-ASCII";
    charset = "US-ASCII";
  }
  const encoding = base64 ? "base64" : "ascii";
  const data = unescape(uri.substring(firstComma + 1));
  const buffer = Buffer.from(data, encoding);
  buffer.type = type;
  buffer.typeFull = typeFull;
  buffer.charset = charset;
  return buffer;
}
var src = dataUriToBuffer;
var { Readable } = import_stream.default;
var wm = new WeakMap();
async function* read(parts) {
  for (const part of parts) {
    if ("stream" in part) {
      yield* part.stream();
    } else {
      yield part;
    }
  }
}
var Blob = class {
  constructor(blobParts = [], options2 = {}) {
    let size = 0;
    const parts = blobParts.map((element) => {
      let buffer;
      if (element instanceof Buffer) {
        buffer = element;
      } else if (ArrayBuffer.isView(element)) {
        buffer = Buffer.from(element.buffer, element.byteOffset, element.byteLength);
      } else if (element instanceof ArrayBuffer) {
        buffer = Buffer.from(element);
      } else if (element instanceof Blob) {
        buffer = element;
      } else {
        buffer = Buffer.from(typeof element === "string" ? element : String(element));
      }
      size += buffer.length || buffer.size || 0;
      return buffer;
    });
    const type = options2.type === void 0 ? "" : String(options2.type).toLowerCase();
    wm.set(this, {
      type: /[^\u0020-\u007E]/.test(type) ? "" : type,
      size,
      parts
    });
  }
  get size() {
    return wm.get(this).size;
  }
  get type() {
    return wm.get(this).type;
  }
  async text() {
    return Buffer.from(await this.arrayBuffer()).toString();
  }
  async arrayBuffer() {
    const data = new Uint8Array(this.size);
    let offset = 0;
    for await (const chunk of this.stream()) {
      data.set(chunk, offset);
      offset += chunk.length;
    }
    return data.buffer;
  }
  stream() {
    return Readable.from(read(wm.get(this).parts));
  }
  slice(start = 0, end = this.size, type = "") {
    const { size } = this;
    let relativeStart = start < 0 ? Math.max(size + start, 0) : Math.min(start, size);
    let relativeEnd = end < 0 ? Math.max(size + end, 0) : Math.min(end, size);
    const span = Math.max(relativeEnd - relativeStart, 0);
    const parts = wm.get(this).parts.values();
    const blobParts = [];
    let added = 0;
    for (const part of parts) {
      const size2 = ArrayBuffer.isView(part) ? part.byteLength : part.size;
      if (relativeStart && size2 <= relativeStart) {
        relativeStart -= size2;
        relativeEnd -= size2;
      } else {
        const chunk = part.slice(relativeStart, Math.min(size2, relativeEnd));
        blobParts.push(chunk);
        added += ArrayBuffer.isView(chunk) ? chunk.byteLength : chunk.size;
        relativeStart = 0;
        if (added >= span) {
          break;
        }
      }
    }
    const blob = new Blob([], { type: String(type).toLowerCase() });
    Object.assign(wm.get(blob), { size: span, parts: blobParts });
    return blob;
  }
  get [Symbol.toStringTag]() {
    return "Blob";
  }
  static [Symbol.hasInstance](object) {
    return object && typeof object === "object" && typeof object.stream === "function" && object.stream.length === 0 && typeof object.constructor === "function" && /^(Blob|File)$/.test(object[Symbol.toStringTag]);
  }
};
Object.defineProperties(Blob.prototype, {
  size: { enumerable: true },
  type: { enumerable: true },
  slice: { enumerable: true }
});
var fetchBlob = Blob;
var FetchBaseError = class extends Error {
  constructor(message, type) {
    super(message);
    Error.captureStackTrace(this, this.constructor);
    this.type = type;
  }
  get name() {
    return this.constructor.name;
  }
  get [Symbol.toStringTag]() {
    return this.constructor.name;
  }
};
var FetchError = class extends FetchBaseError {
  constructor(message, type, systemError) {
    super(message, type);
    if (systemError) {
      this.code = this.errno = systemError.code;
      this.erroredSysCall = systemError.syscall;
    }
  }
};
var NAME = Symbol.toStringTag;
var isURLSearchParameters = (object) => {
  return typeof object === "object" && typeof object.append === "function" && typeof object.delete === "function" && typeof object.get === "function" && typeof object.getAll === "function" && typeof object.has === "function" && typeof object.set === "function" && typeof object.sort === "function" && object[NAME] === "URLSearchParams";
};
var isBlob = (object) => {
  return typeof object === "object" && typeof object.arrayBuffer === "function" && typeof object.type === "string" && typeof object.stream === "function" && typeof object.constructor === "function" && /^(Blob|File)$/.test(object[NAME]);
};
function isFormData(object) {
  return typeof object === "object" && typeof object.append === "function" && typeof object.set === "function" && typeof object.get === "function" && typeof object.getAll === "function" && typeof object.delete === "function" && typeof object.keys === "function" && typeof object.values === "function" && typeof object.entries === "function" && typeof object.constructor === "function" && object[NAME] === "FormData";
}
var isAbortSignal = (object) => {
  return typeof object === "object" && object[NAME] === "AbortSignal";
};
var carriage = "\r\n";
var dashes = "-".repeat(2);
var carriageLength = Buffer.byteLength(carriage);
var getFooter = (boundary) => `${dashes}${boundary}${dashes}${carriage.repeat(2)}`;
function getHeader(boundary, name, field) {
  let header = "";
  header += `${dashes}${boundary}${carriage}`;
  header += `Content-Disposition: form-data; name="${name}"`;
  if (isBlob(field)) {
    header += `; filename="${field.name}"${carriage}`;
    header += `Content-Type: ${field.type || "application/octet-stream"}`;
  }
  return `${header}${carriage.repeat(2)}`;
}
var getBoundary = () => (0, import_crypto.randomBytes)(8).toString("hex");
async function* formDataIterator(form, boundary) {
  for (const [name, value] of form) {
    yield getHeader(boundary, name, value);
    if (isBlob(value)) {
      yield* value.stream();
    } else {
      yield value;
    }
    yield carriage;
  }
  yield getFooter(boundary);
}
function getFormDataLength(form, boundary) {
  let length = 0;
  for (const [name, value] of form) {
    length += Buffer.byteLength(getHeader(boundary, name, value));
    if (isBlob(value)) {
      length += value.size;
    } else {
      length += Buffer.byteLength(String(value));
    }
    length += carriageLength;
  }
  length += Buffer.byteLength(getFooter(boundary));
  return length;
}
var INTERNALS$2 = Symbol("Body internals");
var Body = class {
  constructor(body, {
    size = 0
  } = {}) {
    let boundary = null;
    if (body === null) {
      body = null;
    } else if (isURLSearchParameters(body)) {
      body = Buffer.from(body.toString());
    } else if (isBlob(body))
      ;
    else if (Buffer.isBuffer(body))
      ;
    else if (import_util.types.isAnyArrayBuffer(body)) {
      body = Buffer.from(body);
    } else if (ArrayBuffer.isView(body)) {
      body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
    } else if (body instanceof import_stream.default)
      ;
    else if (isFormData(body)) {
      boundary = `NodeFetchFormDataBoundary${getBoundary()}`;
      body = import_stream.default.Readable.from(formDataIterator(body, boundary));
    } else {
      body = Buffer.from(String(body));
    }
    this[INTERNALS$2] = {
      body,
      boundary,
      disturbed: false,
      error: null
    };
    this.size = size;
    if (body instanceof import_stream.default) {
      body.on("error", (err) => {
        const error3 = err instanceof FetchBaseError ? err : new FetchError(`Invalid response body while trying to fetch ${this.url}: ${err.message}`, "system", err);
        this[INTERNALS$2].error = error3;
      });
    }
  }
  get body() {
    return this[INTERNALS$2].body;
  }
  get bodyUsed() {
    return this[INTERNALS$2].disturbed;
  }
  async arrayBuffer() {
    const { buffer, byteOffset, byteLength } = await consumeBody(this);
    return buffer.slice(byteOffset, byteOffset + byteLength);
  }
  async blob() {
    const ct = this.headers && this.headers.get("content-type") || this[INTERNALS$2].body && this[INTERNALS$2].body.type || "";
    const buf = await this.buffer();
    return new fetchBlob([buf], {
      type: ct
    });
  }
  async json() {
    const buffer = await consumeBody(this);
    return JSON.parse(buffer.toString());
  }
  async text() {
    const buffer = await consumeBody(this);
    return buffer.toString();
  }
  buffer() {
    return consumeBody(this);
  }
};
Object.defineProperties(Body.prototype, {
  body: { enumerable: true },
  bodyUsed: { enumerable: true },
  arrayBuffer: { enumerable: true },
  blob: { enumerable: true },
  json: { enumerable: true },
  text: { enumerable: true }
});
async function consumeBody(data) {
  if (data[INTERNALS$2].disturbed) {
    throw new TypeError(`body used already for: ${data.url}`);
  }
  data[INTERNALS$2].disturbed = true;
  if (data[INTERNALS$2].error) {
    throw data[INTERNALS$2].error;
  }
  let { body } = data;
  if (body === null) {
    return Buffer.alloc(0);
  }
  if (isBlob(body)) {
    body = body.stream();
  }
  if (Buffer.isBuffer(body)) {
    return body;
  }
  if (!(body instanceof import_stream.default)) {
    return Buffer.alloc(0);
  }
  const accum = [];
  let accumBytes = 0;
  try {
    for await (const chunk of body) {
      if (data.size > 0 && accumBytes + chunk.length > data.size) {
        const err = new FetchError(`content size at ${data.url} over limit: ${data.size}`, "max-size");
        body.destroy(err);
        throw err;
      }
      accumBytes += chunk.length;
      accum.push(chunk);
    }
  } catch (error3) {
    if (error3 instanceof FetchBaseError) {
      throw error3;
    } else {
      throw new FetchError(`Invalid response body while trying to fetch ${data.url}: ${error3.message}`, "system", error3);
    }
  }
  if (body.readableEnded === true || body._readableState.ended === true) {
    try {
      if (accum.every((c) => typeof c === "string")) {
        return Buffer.from(accum.join(""));
      }
      return Buffer.concat(accum, accumBytes);
    } catch (error3) {
      throw new FetchError(`Could not create Buffer from response body for ${data.url}: ${error3.message}`, "system", error3);
    }
  } else {
    throw new FetchError(`Premature close of server response while trying to fetch ${data.url}`);
  }
}
var clone = (instance, highWaterMark) => {
  let p1;
  let p2;
  let { body } = instance;
  if (instance.bodyUsed) {
    throw new Error("cannot clone body after it is used");
  }
  if (body instanceof import_stream.default && typeof body.getBoundary !== "function") {
    p1 = new import_stream.PassThrough({ highWaterMark });
    p2 = new import_stream.PassThrough({ highWaterMark });
    body.pipe(p1);
    body.pipe(p2);
    instance[INTERNALS$2].body = p1;
    body = p2;
  }
  return body;
};
var extractContentType = (body, request) => {
  if (body === null) {
    return null;
  }
  if (typeof body === "string") {
    return "text/plain;charset=UTF-8";
  }
  if (isURLSearchParameters(body)) {
    return "application/x-www-form-urlencoded;charset=UTF-8";
  }
  if (isBlob(body)) {
    return body.type || null;
  }
  if (Buffer.isBuffer(body) || import_util.types.isAnyArrayBuffer(body) || ArrayBuffer.isView(body)) {
    return null;
  }
  if (body && typeof body.getBoundary === "function") {
    return `multipart/form-data;boundary=${body.getBoundary()}`;
  }
  if (isFormData(body)) {
    return `multipart/form-data; boundary=${request[INTERNALS$2].boundary}`;
  }
  if (body instanceof import_stream.default) {
    return null;
  }
  return "text/plain;charset=UTF-8";
};
var getTotalBytes = (request) => {
  const { body } = request;
  if (body === null) {
    return 0;
  }
  if (isBlob(body)) {
    return body.size;
  }
  if (Buffer.isBuffer(body)) {
    return body.length;
  }
  if (body && typeof body.getLengthSync === "function") {
    return body.hasKnownLength && body.hasKnownLength() ? body.getLengthSync() : null;
  }
  if (isFormData(body)) {
    return getFormDataLength(request[INTERNALS$2].boundary);
  }
  return null;
};
var writeToStream = (dest, { body }) => {
  if (body === null) {
    dest.end();
  } else if (isBlob(body)) {
    body.stream().pipe(dest);
  } else if (Buffer.isBuffer(body)) {
    dest.write(body);
    dest.end();
  } else {
    body.pipe(dest);
  }
};
var validateHeaderName = typeof import_http.default.validateHeaderName === "function" ? import_http.default.validateHeaderName : (name) => {
  if (!/^[\^`\-\w!#$%&'*+.|~]+$/.test(name)) {
    const err = new TypeError(`Header name must be a valid HTTP token [${name}]`);
    Object.defineProperty(err, "code", { value: "ERR_INVALID_HTTP_TOKEN" });
    throw err;
  }
};
var validateHeaderValue = typeof import_http.default.validateHeaderValue === "function" ? import_http.default.validateHeaderValue : (name, value) => {
  if (/[^\t\u0020-\u007E\u0080-\u00FF]/.test(value)) {
    const err = new TypeError(`Invalid character in header content ["${name}"]`);
    Object.defineProperty(err, "code", { value: "ERR_INVALID_CHAR" });
    throw err;
  }
};
var Headers = class extends URLSearchParams {
  constructor(init2) {
    let result = [];
    if (init2 instanceof Headers) {
      const raw = init2.raw();
      for (const [name, values] of Object.entries(raw)) {
        result.push(...values.map((value) => [name, value]));
      }
    } else if (init2 == null)
      ;
    else if (typeof init2 === "object" && !import_util.types.isBoxedPrimitive(init2)) {
      const method = init2[Symbol.iterator];
      if (method == null) {
        result.push(...Object.entries(init2));
      } else {
        if (typeof method !== "function") {
          throw new TypeError("Header pairs must be iterable");
        }
        result = [...init2].map((pair) => {
          if (typeof pair !== "object" || import_util.types.isBoxedPrimitive(pair)) {
            throw new TypeError("Each header pair must be an iterable object");
          }
          return [...pair];
        }).map((pair) => {
          if (pair.length !== 2) {
            throw new TypeError("Each header pair must be a name/value tuple");
          }
          return [...pair];
        });
      }
    } else {
      throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");
    }
    result = result.length > 0 ? result.map(([name, value]) => {
      validateHeaderName(name);
      validateHeaderValue(name, String(value));
      return [String(name).toLowerCase(), String(value)];
    }) : void 0;
    super(result);
    return new Proxy(this, {
      get(target, p, receiver) {
        switch (p) {
          case "append":
          case "set":
            return (name, value) => {
              validateHeaderName(name);
              validateHeaderValue(name, String(value));
              return URLSearchParams.prototype[p].call(receiver, String(name).toLowerCase(), String(value));
            };
          case "delete":
          case "has":
          case "getAll":
            return (name) => {
              validateHeaderName(name);
              return URLSearchParams.prototype[p].call(receiver, String(name).toLowerCase());
            };
          case "keys":
            return () => {
              target.sort();
              return new Set(URLSearchParams.prototype.keys.call(target)).keys();
            };
          default:
            return Reflect.get(target, p, receiver);
        }
      }
    });
  }
  get [Symbol.toStringTag]() {
    return this.constructor.name;
  }
  toString() {
    return Object.prototype.toString.call(this);
  }
  get(name) {
    const values = this.getAll(name);
    if (values.length === 0) {
      return null;
    }
    let value = values.join(", ");
    if (/^content-encoding$/i.test(name)) {
      value = value.toLowerCase();
    }
    return value;
  }
  forEach(callback) {
    for (const name of this.keys()) {
      callback(this.get(name), name);
    }
  }
  *values() {
    for (const name of this.keys()) {
      yield this.get(name);
    }
  }
  *entries() {
    for (const name of this.keys()) {
      yield [name, this.get(name)];
    }
  }
  [Symbol.iterator]() {
    return this.entries();
  }
  raw() {
    return [...this.keys()].reduce((result, key) => {
      result[key] = this.getAll(key);
      return result;
    }, {});
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return [...this.keys()].reduce((result, key) => {
      const values = this.getAll(key);
      if (key === "host") {
        result[key] = values[0];
      } else {
        result[key] = values.length > 1 ? values : values[0];
      }
      return result;
    }, {});
  }
};
Object.defineProperties(Headers.prototype, ["get", "entries", "forEach", "values"].reduce((result, property) => {
  result[property] = { enumerable: true };
  return result;
}, {}));
function fromRawHeaders(headers = []) {
  return new Headers(headers.reduce((result, value, index2, array) => {
    if (index2 % 2 === 0) {
      result.push(array.slice(index2, index2 + 2));
    }
    return result;
  }, []).filter(([name, value]) => {
    try {
      validateHeaderName(name);
      validateHeaderValue(name, String(value));
      return true;
    } catch {
      return false;
    }
  }));
}
var redirectStatus = new Set([301, 302, 303, 307, 308]);
var isRedirect = (code) => {
  return redirectStatus.has(code);
};
var INTERNALS$1 = Symbol("Response internals");
var Response2 = class extends Body {
  constructor(body = null, options2 = {}) {
    super(body, options2);
    const status = options2.status || 200;
    const headers = new Headers(options2.headers);
    if (body !== null && !headers.has("Content-Type")) {
      const contentType = extractContentType(body);
      if (contentType) {
        headers.append("Content-Type", contentType);
      }
    }
    this[INTERNALS$1] = {
      url: options2.url,
      status,
      statusText: options2.statusText || "",
      headers,
      counter: options2.counter,
      highWaterMark: options2.highWaterMark
    };
  }
  get url() {
    return this[INTERNALS$1].url || "";
  }
  get status() {
    return this[INTERNALS$1].status;
  }
  get ok() {
    return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
  }
  get redirected() {
    return this[INTERNALS$1].counter > 0;
  }
  get statusText() {
    return this[INTERNALS$1].statusText;
  }
  get headers() {
    return this[INTERNALS$1].headers;
  }
  get highWaterMark() {
    return this[INTERNALS$1].highWaterMark;
  }
  clone() {
    return new Response2(clone(this, this.highWaterMark), {
      url: this.url,
      status: this.status,
      statusText: this.statusText,
      headers: this.headers,
      ok: this.ok,
      redirected: this.redirected,
      size: this.size
    });
  }
  static redirect(url, status = 302) {
    if (!isRedirect(status)) {
      throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');
    }
    return new Response2(null, {
      headers: {
        location: new URL(url).toString()
      },
      status
    });
  }
  get [Symbol.toStringTag]() {
    return "Response";
  }
};
Object.defineProperties(Response2.prototype, {
  url: { enumerable: true },
  status: { enumerable: true },
  ok: { enumerable: true },
  redirected: { enumerable: true },
  statusText: { enumerable: true },
  headers: { enumerable: true },
  clone: { enumerable: true }
});
var getSearch = (parsedURL) => {
  if (parsedURL.search) {
    return parsedURL.search;
  }
  const lastOffset = parsedURL.href.length - 1;
  const hash2 = parsedURL.hash || (parsedURL.href[lastOffset] === "#" ? "#" : "");
  return parsedURL.href[lastOffset - hash2.length] === "?" ? "?" : "";
};
var INTERNALS = Symbol("Request internals");
var isRequest = (object) => {
  return typeof object === "object" && typeof object[INTERNALS] === "object";
};
var Request = class extends Body {
  constructor(input, init2 = {}) {
    let parsedURL;
    if (isRequest(input)) {
      parsedURL = new URL(input.url);
    } else {
      parsedURL = new URL(input);
      input = {};
    }
    let method = init2.method || input.method || "GET";
    method = method.toUpperCase();
    if ((init2.body != null || isRequest(input)) && input.body !== null && (method === "GET" || method === "HEAD")) {
      throw new TypeError("Request with GET/HEAD method cannot have body");
    }
    const inputBody = init2.body ? init2.body : isRequest(input) && input.body !== null ? clone(input) : null;
    super(inputBody, {
      size: init2.size || input.size || 0
    });
    const headers = new Headers(init2.headers || input.headers || {});
    if (inputBody !== null && !headers.has("Content-Type")) {
      const contentType = extractContentType(inputBody, this);
      if (contentType) {
        headers.append("Content-Type", contentType);
      }
    }
    let signal = isRequest(input) ? input.signal : null;
    if ("signal" in init2) {
      signal = init2.signal;
    }
    if (signal !== null && !isAbortSignal(signal)) {
      throw new TypeError("Expected signal to be an instanceof AbortSignal");
    }
    this[INTERNALS] = {
      method,
      redirect: init2.redirect || input.redirect || "follow",
      headers,
      parsedURL,
      signal
    };
    this.follow = init2.follow === void 0 ? input.follow === void 0 ? 20 : input.follow : init2.follow;
    this.compress = init2.compress === void 0 ? input.compress === void 0 ? true : input.compress : init2.compress;
    this.counter = init2.counter || input.counter || 0;
    this.agent = init2.agent || input.agent;
    this.highWaterMark = init2.highWaterMark || input.highWaterMark || 16384;
    this.insecureHTTPParser = init2.insecureHTTPParser || input.insecureHTTPParser || false;
  }
  get method() {
    return this[INTERNALS].method;
  }
  get url() {
    return (0, import_url.format)(this[INTERNALS].parsedURL);
  }
  get headers() {
    return this[INTERNALS].headers;
  }
  get redirect() {
    return this[INTERNALS].redirect;
  }
  get signal() {
    return this[INTERNALS].signal;
  }
  clone() {
    return new Request(this);
  }
  get [Symbol.toStringTag]() {
    return "Request";
  }
};
Object.defineProperties(Request.prototype, {
  method: { enumerable: true },
  url: { enumerable: true },
  headers: { enumerable: true },
  redirect: { enumerable: true },
  clone: { enumerable: true },
  signal: { enumerable: true }
});
var getNodeRequestOptions = (request) => {
  const { parsedURL } = request[INTERNALS];
  const headers = new Headers(request[INTERNALS].headers);
  if (!headers.has("Accept")) {
    headers.set("Accept", "*/*");
  }
  let contentLengthValue = null;
  if (request.body === null && /^(post|put)$/i.test(request.method)) {
    contentLengthValue = "0";
  }
  if (request.body !== null) {
    const totalBytes = getTotalBytes(request);
    if (typeof totalBytes === "number" && !Number.isNaN(totalBytes)) {
      contentLengthValue = String(totalBytes);
    }
  }
  if (contentLengthValue) {
    headers.set("Content-Length", contentLengthValue);
  }
  if (!headers.has("User-Agent")) {
    headers.set("User-Agent", "node-fetch");
  }
  if (request.compress && !headers.has("Accept-Encoding")) {
    headers.set("Accept-Encoding", "gzip,deflate,br");
  }
  let { agent } = request;
  if (typeof agent === "function") {
    agent = agent(parsedURL);
  }
  if (!headers.has("Connection") && !agent) {
    headers.set("Connection", "close");
  }
  const search = getSearch(parsedURL);
  const requestOptions = {
    path: parsedURL.pathname + search,
    pathname: parsedURL.pathname,
    hostname: parsedURL.hostname,
    protocol: parsedURL.protocol,
    port: parsedURL.port,
    hash: parsedURL.hash,
    search: parsedURL.search,
    query: parsedURL.query,
    href: parsedURL.href,
    method: request.method,
    headers: headers[Symbol.for("nodejs.util.inspect.custom")](),
    insecureHTTPParser: request.insecureHTTPParser,
    agent
  };
  return requestOptions;
};
var AbortError = class extends FetchBaseError {
  constructor(message, type = "aborted") {
    super(message, type);
  }
};
var supportedSchemas = new Set(["data:", "http:", "https:"]);
async function fetch2(url, options_) {
  return new Promise((resolve2, reject) => {
    const request = new Request(url, options_);
    const options2 = getNodeRequestOptions(request);
    if (!supportedSchemas.has(options2.protocol)) {
      throw new TypeError(`node-fetch cannot load ${url}. URL scheme "${options2.protocol.replace(/:$/, "")}" is not supported.`);
    }
    if (options2.protocol === "data:") {
      const data = src(request.url);
      const response2 = new Response2(data, { headers: { "Content-Type": data.typeFull } });
      resolve2(response2);
      return;
    }
    const send = (options2.protocol === "https:" ? import_https.default : import_http.default).request;
    const { signal } = request;
    let response = null;
    const abort = () => {
      const error3 = new AbortError("The operation was aborted.");
      reject(error3);
      if (request.body && request.body instanceof import_stream.default.Readable) {
        request.body.destroy(error3);
      }
      if (!response || !response.body) {
        return;
      }
      response.body.emit("error", error3);
    };
    if (signal && signal.aborted) {
      abort();
      return;
    }
    const abortAndFinalize = () => {
      abort();
      finalize();
    };
    const request_ = send(options2);
    if (signal) {
      signal.addEventListener("abort", abortAndFinalize);
    }
    const finalize = () => {
      request_.abort();
      if (signal) {
        signal.removeEventListener("abort", abortAndFinalize);
      }
    };
    request_.on("error", (err) => {
      reject(new FetchError(`request to ${request.url} failed, reason: ${err.message}`, "system", err));
      finalize();
    });
    request_.on("response", (response_) => {
      request_.setTimeout(0);
      const headers = fromRawHeaders(response_.rawHeaders);
      if (isRedirect(response_.statusCode)) {
        const location = headers.get("Location");
        const locationURL = location === null ? null : new URL(location, request.url);
        switch (request.redirect) {
          case "error":
            reject(new FetchError(`uri requested responds with a redirect, redirect mode is set to error: ${request.url}`, "no-redirect"));
            finalize();
            return;
          case "manual":
            if (locationURL !== null) {
              try {
                headers.set("Location", locationURL);
              } catch (error3) {
                reject(error3);
              }
            }
            break;
          case "follow": {
            if (locationURL === null) {
              break;
            }
            if (request.counter >= request.follow) {
              reject(new FetchError(`maximum redirect reached at: ${request.url}`, "max-redirect"));
              finalize();
              return;
            }
            const requestOptions = {
              headers: new Headers(request.headers),
              follow: request.follow,
              counter: request.counter + 1,
              agent: request.agent,
              compress: request.compress,
              method: request.method,
              body: request.body,
              signal: request.signal,
              size: request.size
            };
            if (response_.statusCode !== 303 && request.body && options_.body instanceof import_stream.default.Readable) {
              reject(new FetchError("Cannot follow redirect with body being a readable stream", "unsupported-redirect"));
              finalize();
              return;
            }
            if (response_.statusCode === 303 || (response_.statusCode === 301 || response_.statusCode === 302) && request.method === "POST") {
              requestOptions.method = "GET";
              requestOptions.body = void 0;
              requestOptions.headers.delete("content-length");
            }
            resolve2(fetch2(new Request(locationURL, requestOptions)));
            finalize();
            return;
          }
        }
      }
      response_.once("end", () => {
        if (signal) {
          signal.removeEventListener("abort", abortAndFinalize);
        }
      });
      let body = (0, import_stream.pipeline)(response_, new import_stream.PassThrough(), (error3) => {
        reject(error3);
      });
      if (process.version < "v12.10") {
        response_.on("aborted", abortAndFinalize);
      }
      const responseOptions = {
        url: request.url,
        status: response_.statusCode,
        statusText: response_.statusMessage,
        headers,
        size: request.size,
        counter: request.counter,
        highWaterMark: request.highWaterMark
      };
      const codings = headers.get("Content-Encoding");
      if (!request.compress || request.method === "HEAD" || codings === null || response_.statusCode === 204 || response_.statusCode === 304) {
        response = new Response2(body, responseOptions);
        resolve2(response);
        return;
      }
      const zlibOptions = {
        flush: import_zlib.default.Z_SYNC_FLUSH,
        finishFlush: import_zlib.default.Z_SYNC_FLUSH
      };
      if (codings === "gzip" || codings === "x-gzip") {
        body = (0, import_stream.pipeline)(body, import_zlib.default.createGunzip(zlibOptions), (error3) => {
          reject(error3);
        });
        response = new Response2(body, responseOptions);
        resolve2(response);
        return;
      }
      if (codings === "deflate" || codings === "x-deflate") {
        const raw = (0, import_stream.pipeline)(response_, new import_stream.PassThrough(), (error3) => {
          reject(error3);
        });
        raw.once("data", (chunk) => {
          if ((chunk[0] & 15) === 8) {
            body = (0, import_stream.pipeline)(body, import_zlib.default.createInflate(), (error3) => {
              reject(error3);
            });
          } else {
            body = (0, import_stream.pipeline)(body, import_zlib.default.createInflateRaw(), (error3) => {
              reject(error3);
            });
          }
          response = new Response2(body, responseOptions);
          resolve2(response);
        });
        return;
      }
      if (codings === "br") {
        body = (0, import_stream.pipeline)(body, import_zlib.default.createBrotliDecompress(), (error3) => {
          reject(error3);
        });
        response = new Response2(body, responseOptions);
        resolve2(response);
        return;
      }
      response = new Response2(body, responseOptions);
      resolve2(response);
    });
    writeToStream(request_, request);
  });
}
globalThis.fetch = fetch2;
globalThis.Response = Response2;
globalThis.Request = Request;
globalThis.Headers = Headers;

// node_modules/@sveltejs/kit/dist/ssr.js
var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
var unsafeChars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
var escaped$1 = {
  "<": "\\u003C",
  ">": "\\u003E",
  "/": "\\u002F",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\0": "\\0",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var objectProtoOwnPropertyNames = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function devalue(value) {
  var counts = new Map();
  function walk(thing) {
    if (typeof thing === "function") {
      throw new Error("Cannot stringify a function");
    }
    if (counts.has(thing)) {
      counts.set(thing, counts.get(thing) + 1);
      return;
    }
    counts.set(thing, 1);
    if (!isPrimitive(thing)) {
      var type = getType(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
          return;
        case "Array":
          thing.forEach(walk);
          break;
        case "Set":
        case "Map":
          Array.from(thing).forEach(walk);
          break;
        default:
          var proto = Object.getPrototypeOf(thing);
          if (proto !== Object.prototype && proto !== null && Object.getOwnPropertyNames(proto).sort().join("\0") !== objectProtoOwnPropertyNames) {
            throw new Error("Cannot stringify arbitrary non-POJOs");
          }
          if (Object.getOwnPropertySymbols(thing).length > 0) {
            throw new Error("Cannot stringify POJOs with symbolic keys");
          }
          Object.keys(thing).forEach(function(key) {
            return walk(thing[key]);
          });
      }
    }
  }
  walk(value);
  var names = new Map();
  Array.from(counts).filter(function(entry) {
    return entry[1] > 1;
  }).sort(function(a, b) {
    return b[1] - a[1];
  }).forEach(function(entry, i) {
    names.set(entry[0], getName(i));
  });
  function stringify(thing) {
    if (names.has(thing)) {
      return names.get(thing);
    }
    if (isPrimitive(thing)) {
      return stringifyPrimitive(thing);
    }
    var type = getType(thing);
    switch (type) {
      case "Number":
      case "String":
      case "Boolean":
        return "Object(" + stringify(thing.valueOf()) + ")";
      case "RegExp":
        return "new RegExp(" + stringifyString(thing.source) + ', "' + thing.flags + '")';
      case "Date":
        return "new Date(" + thing.getTime() + ")";
      case "Array":
        var members = thing.map(function(v, i) {
          return i in thing ? stringify(v) : "";
        });
        var tail = thing.length === 0 || thing.length - 1 in thing ? "" : ",";
        return "[" + members.join(",") + tail + "]";
      case "Set":
      case "Map":
        return "new " + type + "([" + Array.from(thing).map(stringify).join(",") + "])";
      default:
        var obj = "{" + Object.keys(thing).map(function(key) {
          return safeKey(key) + ":" + stringify(thing[key]);
        }).join(",") + "}";
        var proto = Object.getPrototypeOf(thing);
        if (proto === null) {
          return Object.keys(thing).length > 0 ? "Object.assign(Object.create(null)," + obj + ")" : "Object.create(null)";
        }
        return obj;
    }
  }
  var str = stringify(value);
  if (names.size) {
    var params_1 = [];
    var statements_1 = [];
    var values_1 = [];
    names.forEach(function(name, thing) {
      params_1.push(name);
      if (isPrimitive(thing)) {
        values_1.push(stringifyPrimitive(thing));
        return;
      }
      var type = getType(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          values_1.push("Object(" + stringify(thing.valueOf()) + ")");
          break;
        case "RegExp":
          values_1.push(thing.toString());
          break;
        case "Date":
          values_1.push("new Date(" + thing.getTime() + ")");
          break;
        case "Array":
          values_1.push("Array(" + thing.length + ")");
          thing.forEach(function(v, i) {
            statements_1.push(name + "[" + i + "]=" + stringify(v));
          });
          break;
        case "Set":
          values_1.push("new Set");
          statements_1.push(name + "." + Array.from(thing).map(function(v) {
            return "add(" + stringify(v) + ")";
          }).join("."));
          break;
        case "Map":
          values_1.push("new Map");
          statements_1.push(name + "." + Array.from(thing).map(function(_a) {
            var k = _a[0], v = _a[1];
            return "set(" + stringify(k) + ", " + stringify(v) + ")";
          }).join("."));
          break;
        default:
          values_1.push(Object.getPrototypeOf(thing) === null ? "Object.create(null)" : "{}");
          Object.keys(thing).forEach(function(key) {
            statements_1.push("" + name + safeProp(key) + "=" + stringify(thing[key]));
          });
      }
    });
    statements_1.push("return " + str);
    return "(function(" + params_1.join(",") + "){" + statements_1.join(";") + "}(" + values_1.join(",") + "))";
  } else {
    return str;
  }
}
function getName(num) {
  var name = "";
  do {
    name = chars[num % chars.length] + name;
    num = ~~(num / chars.length) - 1;
  } while (num >= 0);
  return reserved.test(name) ? name + "_" : name;
}
function isPrimitive(thing) {
  return Object(thing) !== thing;
}
function stringifyPrimitive(thing) {
  if (typeof thing === "string")
    return stringifyString(thing);
  if (thing === void 0)
    return "void 0";
  if (thing === 0 && 1 / thing < 0)
    return "-0";
  var str = String(thing);
  if (typeof thing === "number")
    return str.replace(/^(-)?0\./, "$1.");
  return str;
}
function getType(thing) {
  return Object.prototype.toString.call(thing).slice(8, -1);
}
function escapeUnsafeChar(c) {
  return escaped$1[c] || c;
}
function escapeUnsafeChars(str) {
  return str.replace(unsafeChars, escapeUnsafeChar);
}
function safeKey(key) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? key : escapeUnsafeChars(JSON.stringify(key));
}
function safeProp(key) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? "." + key : "[" + escapeUnsafeChars(JSON.stringify(key)) + "]";
}
function stringifyString(str) {
  var result = '"';
  for (var i = 0; i < str.length; i += 1) {
    var char = str.charAt(i);
    var code = char.charCodeAt(0);
    if (char === '"') {
      result += '\\"';
    } else if (char in escaped$1) {
      result += escaped$1[char];
    } else if (code >= 55296 && code <= 57343) {
      var next = str.charCodeAt(i + 1);
      if (code <= 56319 && (next >= 56320 && next <= 57343)) {
        result += char + str[++i];
      } else {
        result += "\\u" + code.toString(16).toUpperCase();
      }
    } else {
      result += char;
    }
  }
  result += '"';
  return result;
}
function noop() {
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
}
var subscriber_queue = [];
function writable(value, start = noop) {
  let stop;
  const subscribers = [];
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (let i = 0; i < subscribers.length; i += 1) {
          const s2 = subscribers[i];
          s2[1]();
          subscriber_queue.push(s2, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run2, invalidate = noop) {
    const subscriber = [run2, invalidate];
    subscribers.push(subscriber);
    if (subscribers.length === 1) {
      stop = start(set) || noop;
    }
    run2(value);
    return () => {
      const index2 = subscribers.indexOf(subscriber);
      if (index2 !== -1) {
        subscribers.splice(index2, 1);
      }
      if (subscribers.length === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
function hash(value) {
  let hash2 = 5381;
  let i = value.length;
  if (typeof value === "string") {
    while (i)
      hash2 = hash2 * 33 ^ value.charCodeAt(--i);
  } else {
    while (i)
      hash2 = hash2 * 33 ^ value[--i];
  }
  return (hash2 >>> 0).toString(36);
}
var s$1 = JSON.stringify;
async function render_response({
  options: options2,
  $session,
  page_config,
  status,
  error: error3,
  branch,
  page
}) {
  const css2 = new Set(options2.entry.css);
  const js = new Set(options2.entry.js);
  const styles = new Set();
  const serialized_data = [];
  let rendered;
  let is_private = false;
  let maxage;
  if (error3) {
    error3.stack = options2.get_stack(error3);
  }
  if (branch) {
    branch.forEach(({ node, loaded, fetched, uses_credentials }) => {
      if (node.css)
        node.css.forEach((url) => css2.add(url));
      if (node.js)
        node.js.forEach((url) => js.add(url));
      if (node.styles)
        node.styles.forEach((content) => styles.add(content));
      if (fetched && page_config.hydrate)
        serialized_data.push(...fetched);
      if (uses_credentials)
        is_private = true;
      maxage = loaded.maxage;
    });
    const session = writable($session);
    const props = {
      stores: {
        page: writable(null),
        navigating: writable(null),
        session
      },
      page,
      components: branch.map(({ node }) => node.module.default)
    };
    for (let i = 0; i < branch.length; i += 1) {
      props[`props_${i}`] = await branch[i].loaded.props;
    }
    let session_tracking_active = false;
    const unsubscribe = session.subscribe(() => {
      if (session_tracking_active)
        is_private = true;
    });
    session_tracking_active = true;
    try {
      rendered = options2.root.render(props);
    } finally {
      unsubscribe();
    }
  } else {
    rendered = { head: "", html: "", css: { code: "", map: null } };
  }
  const include_js = page_config.router || page_config.hydrate;
  if (!include_js)
    js.clear();
  const links = options2.amp ? styles.size > 0 || rendered.css.code.length > 0 ? `<style amp-custom>${Array.from(styles).concat(rendered.css.code).join("\n")}</style>` : "" : [
    ...Array.from(js).map((dep) => `<link rel="modulepreload" href="${dep}">`),
    ...Array.from(css2).map((dep) => `<link rel="stylesheet" href="${dep}">`)
  ].join("\n		");
  let init2 = "";
  if (options2.amp) {
    init2 = `
		<style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style>
		<noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
		<script async src="https://cdn.ampproject.org/v0.js"><\/script>`;
  } else if (include_js) {
    init2 = `<script type="module">
			import { start } from ${s$1(options2.entry.file)};
			start({
				target: ${options2.target ? `document.querySelector(${s$1(options2.target)})` : "document.body"},
				paths: ${s$1(options2.paths)},
				session: ${try_serialize($session, (error4) => {
      throw new Error(`Failed to serialize session data: ${error4.message}`);
    })},
				host: ${page && page.host ? s$1(page.host) : "location.host"},
				route: ${!!page_config.router},
				spa: ${!page_config.ssr},
				trailing_slash: ${s$1(options2.trailing_slash)},
				hydrate: ${page_config.ssr && page_config.hydrate ? `{
					status: ${status},
					error: ${serialize_error(error3)},
					nodes: [
						${branch.map(({ node }) => `import(${s$1(node.entry)})`).join(",\n						")}
					],
					page: {
						host: ${page.host ? s$1(page.host) : "location.host"}, // TODO this is redundant
						path: ${s$1(page.path)},
						query: new URLSearchParams(${s$1(page.query.toString())}),
						params: ${s$1(page.params)}
					}
				}` : "null"}
			});
		<\/script>`;
  }
  const head = [
    rendered.head,
    styles.size && !options2.amp ? `<style data-svelte>${Array.from(styles).join("\n")}</style>` : "",
    links,
    init2
  ].join("\n\n		");
  const body = options2.amp ? rendered.html : `${rendered.html}

			${serialized_data.map(({ url, body: body2, json }) => {
    return body2 ? `<script type="svelte-data" url="${url}" body="${hash(body2)}">${json}<\/script>` : `<script type="svelte-data" url="${url}">${json}<\/script>`;
  }).join("\n\n			")}
		`.replace(/^\t{2}/gm, "");
  const headers = {
    "content-type": "text/html"
  };
  if (maxage) {
    headers["cache-control"] = `${is_private ? "private" : "public"}, max-age=${maxage}`;
  }
  if (!options2.floc) {
    headers["permissions-policy"] = "interest-cohort=()";
  }
  return {
    status,
    headers,
    body: options2.template({ head, body })
  };
}
function try_serialize(data, fail) {
  try {
    return devalue(data);
  } catch (err) {
    if (fail)
      fail(err);
    return null;
  }
}
function serialize_error(error3) {
  if (!error3)
    return null;
  let serialized = try_serialize(error3);
  if (!serialized) {
    const { name, message, stack } = error3;
    serialized = try_serialize({ name, message, stack });
  }
  if (!serialized) {
    serialized = "{}";
  }
  return serialized;
}
function normalize(loaded) {
  if (loaded.error) {
    const error3 = typeof loaded.error === "string" ? new Error(loaded.error) : loaded.error;
    const status = loaded.status;
    if (!(error3 instanceof Error)) {
      return {
        status: 500,
        error: new Error(`"error" property returned from load() must be a string or instance of Error, received type "${typeof error3}"`)
      };
    }
    if (!status || status < 400 || status > 599) {
      console.warn('"error" returned from load() without a valid status code \u2014 defaulting to 500');
      return { status: 500, error: error3 };
    }
    return { status, error: error3 };
  }
  if (loaded.redirect) {
    if (!loaded.status || Math.floor(loaded.status / 100) !== 3) {
      return {
        status: 500,
        error: new Error('"redirect" property returned from load() must be accompanied by a 3xx status code')
      };
    }
    if (typeof loaded.redirect !== "string") {
      return {
        status: 500,
        error: new Error('"redirect" property returned from load() must be a string')
      };
    }
  }
  return loaded;
}
function resolve(base, path) {
  const baseparts = path[0] === "/" ? [] : base.slice(1).split("/");
  const pathparts = path[0] === "/" ? path.slice(1).split("/") : path.split("/");
  baseparts.pop();
  for (let i = 0; i < pathparts.length; i += 1) {
    const part = pathparts[i];
    if (part === ".")
      continue;
    else if (part === "..")
      baseparts.pop();
    else
      baseparts.push(part);
  }
  return `/${baseparts.join("/")}`;
}
var s = JSON.stringify;
async function load_node({
  request,
  options: options2,
  state,
  route,
  page,
  node,
  $session,
  context,
  is_leaf,
  is_error,
  status,
  error: error3
}) {
  const { module: module2 } = node;
  let uses_credentials = false;
  const fetched = [];
  let loaded;
  if (module2.load) {
    const load_input = {
      page,
      get session() {
        uses_credentials = true;
        return $session;
      },
      fetch: async (resource, opts = {}) => {
        let url;
        if (typeof resource === "string") {
          url = resource;
        } else {
          url = resource.url;
          opts = {
            method: resource.method,
            headers: resource.headers,
            body: resource.body,
            mode: resource.mode,
            credentials: resource.credentials,
            cache: resource.cache,
            redirect: resource.redirect,
            referrer: resource.referrer,
            integrity: resource.integrity,
            ...opts
          };
        }
        if (options2.read && url.startsWith(options2.paths.assets)) {
          url = url.replace(options2.paths.assets, "");
        }
        if (url.startsWith("//")) {
          throw new Error(`Cannot request protocol-relative URL (${url}) in server-side fetch`);
        }
        let response;
        if (/^[a-zA-Z]+:/.test(url)) {
          response = await fetch(url, opts);
        } else {
          const [path, search] = url.split("?");
          const resolved = resolve(request.path, path);
          const filename = resolved.slice(1);
          const filename_html = `${filename}/index.html`;
          const asset = options2.manifest.assets.find((d) => d.file === filename || d.file === filename_html);
          if (asset) {
            if (options2.read) {
              response = new Response(options2.read(asset.file), {
                headers: {
                  "content-type": asset.type
                }
              });
            } else {
              response = await fetch(`http://${page.host}/${asset.file}`, opts);
            }
          }
          if (!response) {
            const headers = { ...opts.headers };
            if (opts.credentials !== "omit") {
              uses_credentials = true;
              headers.cookie = request.headers.cookie;
              if (!headers.authorization) {
                headers.authorization = request.headers.authorization;
              }
            }
            if (opts.body && typeof opts.body !== "string") {
              throw new Error("Request body must be a string");
            }
            const rendered = await respond({
              host: request.host,
              method: opts.method || "GET",
              headers,
              path: resolved,
              rawBody: opts.body,
              query: new URLSearchParams(search)
            }, options2, {
              fetched: url,
              initiator: route
            });
            if (rendered) {
              if (state.prerender) {
                state.prerender.dependencies.set(resolved, rendered);
              }
              response = new Response(rendered.body, {
                status: rendered.status,
                headers: rendered.headers
              });
            }
          }
        }
        if (response) {
          const proxy = new Proxy(response, {
            get(response2, key, receiver) {
              async function text() {
                const body = await response2.text();
                const headers = {};
                for (const [key2, value] of response2.headers) {
                  if (key2 !== "etag" && key2 !== "set-cookie")
                    headers[key2] = value;
                }
                if (!opts.body || typeof opts.body === "string") {
                  fetched.push({
                    url,
                    body: opts.body,
                    json: `{"status":${response2.status},"statusText":${s(response2.statusText)},"headers":${s(headers)},"body":${escape(body)}}`
                  });
                }
                return body;
              }
              if (key === "text") {
                return text;
              }
              if (key === "json") {
                return async () => {
                  return JSON.parse(await text());
                };
              }
              return Reflect.get(response2, key, response2);
            }
          });
          return proxy;
        }
        return response || new Response("Not found", {
          status: 404
        });
      },
      context: { ...context }
    };
    if (is_error) {
      load_input.status = status;
      load_input.error = error3;
    }
    loaded = await module2.load.call(null, load_input);
  } else {
    loaded = {};
  }
  if (!loaded && is_leaf && !is_error)
    return;
  return {
    node,
    loaded: normalize(loaded),
    context: loaded.context || context,
    fetched,
    uses_credentials
  };
}
var escaped = {
  "<": "\\u003C",
  ">": "\\u003E",
  "/": "\\u002F",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\0": "\\0",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
function escape(str) {
  let result = '"';
  for (let i = 0; i < str.length; i += 1) {
    const char = str.charAt(i);
    const code = char.charCodeAt(0);
    if (char === '"') {
      result += '\\"';
    } else if (char in escaped) {
      result += escaped[char];
    } else if (code >= 55296 && code <= 57343) {
      const next = str.charCodeAt(i + 1);
      if (code <= 56319 && next >= 56320 && next <= 57343) {
        result += char + str[++i];
      } else {
        result += `\\u${code.toString(16).toUpperCase()}`;
      }
    } else {
      result += char;
    }
  }
  result += '"';
  return result;
}
async function respond_with_error({ request, options: options2, state, $session, status, error: error3 }) {
  const default_layout = await options2.load_component(options2.manifest.layout);
  const default_error = await options2.load_component(options2.manifest.error);
  const page = {
    host: request.host,
    path: request.path,
    query: request.query,
    params: {}
  };
  const loaded = await load_node({
    request,
    options: options2,
    state,
    route: null,
    page,
    node: default_layout,
    $session,
    context: {},
    is_leaf: false,
    is_error: false
  });
  const branch = [
    loaded,
    await load_node({
      request,
      options: options2,
      state,
      route: null,
      page,
      node: default_error,
      $session,
      context: loaded.context,
      is_leaf: false,
      is_error: true,
      status,
      error: error3
    })
  ];
  try {
    return await render_response({
      options: options2,
      $session,
      page_config: {
        hydrate: options2.hydrate,
        router: options2.router,
        ssr: options2.ssr
      },
      status,
      error: error3,
      branch,
      page
    });
  } catch (error4) {
    options2.handle_error(error4);
    return {
      status: 500,
      headers: {},
      body: error4.stack
    };
  }
}
async function respond$1({ request, options: options2, state, $session, route }) {
  const match = route.pattern.exec(request.path);
  const params = route.params(match);
  const page = {
    host: request.host,
    path: request.path,
    query: request.query,
    params
  };
  let nodes;
  try {
    nodes = await Promise.all(route.a.map((id) => id && options2.load_component(id)));
  } catch (error4) {
    options2.handle_error(error4);
    return await respond_with_error({
      request,
      options: options2,
      state,
      $session,
      status: 500,
      error: error4
    });
  }
  const leaf = nodes[nodes.length - 1].module;
  const page_config = {
    ssr: "ssr" in leaf ? leaf.ssr : options2.ssr,
    router: "router" in leaf ? leaf.router : options2.router,
    hydrate: "hydrate" in leaf ? leaf.hydrate : options2.hydrate
  };
  if (!leaf.prerender && state.prerender && !state.prerender.all) {
    return {
      status: 204,
      headers: {},
      body: null
    };
  }
  let branch;
  let status = 200;
  let error3;
  ssr:
    if (page_config.ssr) {
      let context = {};
      branch = [];
      for (let i = 0; i < nodes.length; i += 1) {
        const node = nodes[i];
        let loaded;
        if (node) {
          try {
            loaded = await load_node({
              request,
              options: options2,
              state,
              route,
              page,
              node,
              $session,
              context,
              is_leaf: i === nodes.length - 1,
              is_error: false
            });
            if (!loaded)
              return;
            if (loaded.loaded.redirect) {
              return {
                status: loaded.loaded.status,
                headers: {
                  location: encodeURI(loaded.loaded.redirect)
                }
              };
            }
            if (loaded.loaded.error) {
              ({ status, error: error3 } = loaded.loaded);
            }
          } catch (e) {
            options2.handle_error(e);
            status = 500;
            error3 = e;
          }
          if (error3) {
            while (i--) {
              if (route.b[i]) {
                const error_node = await options2.load_component(route.b[i]);
                let error_loaded;
                let node_loaded;
                let j = i;
                while (!(node_loaded = branch[j])) {
                  j -= 1;
                }
                try {
                  error_loaded = await load_node({
                    request,
                    options: options2,
                    state,
                    route,
                    page,
                    node: error_node,
                    $session,
                    context: node_loaded.context,
                    is_leaf: false,
                    is_error: true,
                    status,
                    error: error3
                  });
                  if (error_loaded.loaded.error) {
                    continue;
                  }
                  branch = branch.slice(0, j + 1).concat(error_loaded);
                  break ssr;
                } catch (e) {
                  options2.handle_error(e);
                  continue;
                }
              }
            }
            return await respond_with_error({
              request,
              options: options2,
              state,
              $session,
              status,
              error: error3
            });
          }
        }
        branch.push(loaded);
        if (loaded && loaded.loaded.context) {
          context = {
            ...context,
            ...loaded.loaded.context
          };
        }
      }
    }
  try {
    return await render_response({
      options: options2,
      $session,
      page_config,
      status,
      error: error3,
      branch: branch && branch.filter(Boolean),
      page
    });
  } catch (error4) {
    options2.handle_error(error4);
    return await respond_with_error({
      request,
      options: options2,
      state,
      $session,
      status: 500,
      error: error4
    });
  }
}
async function render_page(request, route, options2, state) {
  if (state.initiator === route) {
    return {
      status: 404,
      headers: {},
      body: `Not found: ${request.path}`
    };
  }
  const $session = await options2.hooks.getSession(request);
  if (route) {
    const response = await respond$1({
      request,
      options: options2,
      state,
      $session,
      route
    });
    if (response) {
      return response;
    }
    if (state.fetched) {
      return {
        status: 500,
        headers: {},
        body: `Bad request in load function: failed to fetch ${state.fetched}`
      };
    }
  } else {
    return await respond_with_error({
      request,
      options: options2,
      state,
      $session,
      status: 404,
      error: new Error(`Not found: ${request.path}`)
    });
  }
}
function lowercase_keys(obj) {
  const clone2 = {};
  for (const key in obj) {
    clone2[key.toLowerCase()] = obj[key];
  }
  return clone2;
}
function error(body) {
  return {
    status: 500,
    body,
    headers: {}
  };
}
async function render_route(request, route) {
  const mod = await route.load();
  const handler = mod[request.method.toLowerCase().replace("delete", "del")];
  if (handler) {
    const match = route.pattern.exec(request.path);
    const params = route.params(match);
    const response = await handler({ ...request, params });
    if (response) {
      if (typeof response !== "object") {
        return error(`Invalid response from route ${request.path}: expected an object, got ${typeof response}`);
      }
      let { status = 200, body, headers = {} } = response;
      headers = lowercase_keys(headers);
      const type = headers["content-type"];
      if (type === "application/octet-stream" && !(body instanceof Uint8Array)) {
        return error(`Invalid response from route ${request.path}: body must be an instance of Uint8Array if content type is application/octet-stream`);
      }
      if (body instanceof Uint8Array && type !== "application/octet-stream") {
        return error(`Invalid response from route ${request.path}: Uint8Array body must be accompanied by content-type: application/octet-stream header`);
      }
      let normalized_body;
      if (typeof body === "object" && (!type || type === "application/json")) {
        headers = { ...headers, "content-type": "application/json" };
        normalized_body = JSON.stringify(body);
      } else {
        normalized_body = body;
      }
      return { status, body: normalized_body, headers };
    }
  }
}
function read_only_form_data() {
  const map = new Map();
  return {
    append(key, value) {
      if (map.has(key)) {
        map.get(key).push(value);
      } else {
        map.set(key, [value]);
      }
    },
    data: new ReadOnlyFormData(map)
  };
}
var ReadOnlyFormData = class {
  #map;
  constructor(map) {
    this.#map = map;
  }
  get(key) {
    const value = this.#map.get(key);
    return value && value[0];
  }
  getAll(key) {
    return this.#map.get(key);
  }
  has(key) {
    return this.#map.has(key);
  }
  *[Symbol.iterator]() {
    for (const [key, value] of this.#map) {
      for (let i = 0; i < value.length; i += 1) {
        yield [key, value[i]];
      }
    }
  }
  *entries() {
    for (const [key, value] of this.#map) {
      for (let i = 0; i < value.length; i += 1) {
        yield [key, value[i]];
      }
    }
  }
  *keys() {
    for (const [key, value] of this.#map) {
      for (let i = 0; i < value.length; i += 1) {
        yield key;
      }
    }
  }
  *values() {
    for (const [, value] of this.#map) {
      for (let i = 0; i < value.length; i += 1) {
        yield value;
      }
    }
  }
};
function parse_body(raw, headers) {
  if (!raw)
    return raw;
  const [type, ...directives] = headers["content-type"].split(/;\s*/);
  if (typeof raw === "string") {
    switch (type) {
      case "text/plain":
        return raw;
      case "application/json":
        return JSON.parse(raw);
      case "application/x-www-form-urlencoded":
        return get_urlencoded(raw);
      case "multipart/form-data": {
        const boundary = directives.find((directive) => directive.startsWith("boundary="));
        if (!boundary)
          throw new Error("Missing boundary");
        return get_multipart(raw, boundary.slice("boundary=".length));
      }
      default:
        throw new Error(`Invalid Content-Type ${type}`);
    }
  }
  return raw;
}
function get_urlencoded(text) {
  const { data, append } = read_only_form_data();
  text.replace(/\+/g, " ").split("&").forEach((str) => {
    const [key, value] = str.split("=");
    append(decodeURIComponent(key), decodeURIComponent(value));
  });
  return data;
}
function get_multipart(text, boundary) {
  const parts = text.split(`--${boundary}`);
  const nope = () => {
    throw new Error("Malformed form data");
  };
  if (parts[0] !== "" || parts[parts.length - 1].trim() !== "--") {
    nope();
  }
  const { data, append } = read_only_form_data();
  parts.slice(1, -1).forEach((part) => {
    const match = /\s*([\s\S]+?)\r\n\r\n([\s\S]*)\s*/.exec(part);
    const raw_headers = match[1];
    const body = match[2].trim();
    let key;
    raw_headers.split("\r\n").forEach((str) => {
      const [raw_header, ...raw_directives] = str.split("; ");
      let [name, value] = raw_header.split(": ");
      name = name.toLowerCase();
      const directives = {};
      raw_directives.forEach((raw_directive) => {
        const [name2, value2] = raw_directive.split("=");
        directives[name2] = JSON.parse(value2);
      });
      if (name === "content-disposition") {
        if (value !== "form-data")
          nope();
        if (directives.filename) {
          throw new Error("File upload is not yet implemented");
        }
        if (directives.name) {
          key = directives.name;
        }
      }
    });
    if (!key)
      nope();
    append(key, body);
  });
  return data;
}
async function respond(incoming, options2, state = {}) {
  if (incoming.path !== "/" && options2.trailing_slash !== "ignore") {
    const has_trailing_slash = incoming.path.endsWith("/");
    if (has_trailing_slash && options2.trailing_slash === "never" || !has_trailing_slash && options2.trailing_slash === "always" && !incoming.path.split("/").pop().includes(".")) {
      const path = has_trailing_slash ? incoming.path.slice(0, -1) : incoming.path + "/";
      const q = incoming.query.toString();
      return {
        status: 301,
        headers: {
          location: encodeURI(path + (q ? `?${q}` : ""))
        }
      };
    }
  }
  try {
    const headers = lowercase_keys(incoming.headers);
    return await options2.hooks.handle({
      request: {
        ...incoming,
        headers,
        body: parse_body(incoming.rawBody, headers),
        params: null,
        locals: {}
      },
      resolve: async (request) => {
        if (state.prerender && state.prerender.fallback) {
          return await render_response({
            options: options2,
            $session: await options2.hooks.getSession(request),
            page_config: { ssr: false, router: true, hydrate: true },
            status: 200,
            error: null,
            branch: [],
            page: null
          });
        }
        for (const route of options2.manifest.routes) {
          if (!route.pattern.test(request.path))
            continue;
          const response = route.type === "endpoint" ? await render_route(request, route) : await render_page(request, route, options2, state);
          if (response) {
            if (response.status === 200) {
              if (!/(no-store|immutable)/.test(response.headers["cache-control"])) {
                const etag = `"${hash(response.body)}"`;
                if (request.headers["if-none-match"] === etag) {
                  return {
                    status: 304,
                    headers: {},
                    body: null
                  };
                }
                response.headers["etag"] = etag;
              }
            }
            return response;
          }
        }
        return await render_page(request, null, options2, state);
      }
    });
  } catch (e) {
    options2.handle_error(e);
    return {
      status: 500,
      headers: {},
      body: options2.dev ? e.stack : e.message
    };
  }
}

// node_modules/svelte/internal/index.mjs
function noop2() {
}
function run(fn) {
  return fn();
}
function blank_object() {
  return Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
function is_function(thing) {
  return typeof thing === "function";
}
function safe_not_equal2(a, b) {
  return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
}
function is_empty(obj) {
  return Object.keys(obj).length === 0;
}
function subscribe(store, ...callbacks) {
  if (store == null) {
    return noop2;
  }
  const unsub = store.subscribe(...callbacks);
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
var is_client = typeof window !== "undefined";
var now = is_client ? () => window.performance.now() : () => Date.now();
var raf = is_client ? (cb) => requestAnimationFrame(cb) : noop2;
var tasks = new Set();
function run_tasks(now2) {
  tasks.forEach((task) => {
    if (!task.c(now2)) {
      tasks.delete(task);
      task.f();
    }
  });
  if (tasks.size !== 0)
    raf(run_tasks);
}
function loop(callback) {
  let task;
  if (tasks.size === 0)
    raf(run_tasks);
  return {
    promise: new Promise((fulfill) => {
      tasks.add(task = { c: callback, f: fulfill });
    }),
    abort() {
      tasks.delete(task);
    }
  };
}
var active_docs = new Set();
var current_component;
function set_current_component(component) {
  current_component = component;
}
function get_current_component() {
  if (!current_component)
    throw new Error("Function called outside component initialization");
  return current_component;
}
function onMount(fn) {
  get_current_component().$$.on_mount.push(fn);
}
function afterUpdate(fn) {
  get_current_component().$$.after_update.push(fn);
}
function setContext(key, context) {
  get_current_component().$$.context.set(key, context);
}
var resolved_promise = Promise.resolve();
var seen_callbacks = new Set();
var outroing = new Set();
var globals = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : global;
var boolean_attributes = new Set([
  "allowfullscreen",
  "allowpaymentrequest",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "controls",
  "default",
  "defer",
  "disabled",
  "formnovalidate",
  "hidden",
  "ismap",
  "loop",
  "multiple",
  "muted",
  "nomodule",
  "novalidate",
  "open",
  "playsinline",
  "readonly",
  "required",
  "reversed",
  "selected"
]);
var escaped2 = {
  '"': "&quot;",
  "'": "&#39;",
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;"
};
function escape2(html) {
  return String(html).replace(/["'&<>]/g, (match) => escaped2[match]);
}
var missing_component = {
  $$render: () => ""
};
function validate_component(component, name) {
  if (!component || !component.$$render) {
    if (name === "svelte:component")
      name += " this={...}";
    throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
  }
  return component;
}
var on_destroy;
function create_ssr_component(fn) {
  function $$render(result, props, bindings, slots, context) {
    const parent_component = current_component;
    const $$ = {
      on_destroy,
      context: new Map(parent_component ? parent_component.$$.context : context || []),
      on_mount: [],
      before_update: [],
      after_update: [],
      callbacks: blank_object()
    };
    set_current_component({ $$ });
    const html = fn(result, props, bindings, slots);
    set_current_component(parent_component);
    return html;
  }
  return {
    render: (props = {}, { $$slots = {}, context = new Map() } = {}) => {
      on_destroy = [];
      const result = { title: "", head: "", css: new Set() };
      const html = $$render(result, props, {}, $$slots, context);
      run_all(on_destroy);
      return {
        html,
        css: {
          code: Array.from(result.css).map((css2) => css2.code).join("\n"),
          map: null
        },
        head: result.title + result.head
      };
    },
    $$render
  };
}
function add_attribute(name, value, boolean) {
  if (value == null || boolean && !value)
    return "";
  return ` ${name}${value === true ? "" : `=${typeof value === "string" ? JSON.stringify(escape2(value)) : `"${value}"`}`}`;
}
function destroy_component(component, detaching) {
  const $$ = component.$$;
  if ($$.fragment !== null) {
    run_all($$.on_destroy);
    $$.fragment && $$.fragment.d(detaching);
    $$.on_destroy = $$.fragment = null;
    $$.ctx = [];
  }
}
var SvelteElement;
if (typeof HTMLElement === "function") {
  SvelteElement = class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      const { on_mount } = this.$$;
      this.$$.on_disconnect = on_mount.map(run).filter(is_function);
      for (const key in this.$$.slotted) {
        this.appendChild(this.$$.slotted[key]);
      }
    }
    attributeChangedCallback(attr, _oldValue, newValue) {
      this[attr] = newValue;
    }
    disconnectedCallback() {
      run_all(this.$$.on_disconnect);
    }
    $destroy() {
      destroy_component(this, 1);
      this.$destroy = noop2;
    }
    $on(type, callback) {
      const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
      callbacks.push(callback);
      return () => {
        const index2 = callbacks.indexOf(callback);
        if (index2 !== -1)
          callbacks.splice(index2, 1);
      };
    }
    $set($$props) {
      if (this.$$set && !is_empty($$props)) {
        this.$$.skip_bound = true;
        this.$$set($$props);
        this.$$.skip_bound = false;
      }
    }
  };
}

// .svelte-kit/output/server/app.js
var import_cookie = __toModule(require_cookie());

// node_modules/@lukeed/uuid/dist/index.mjs
var IDX = 256;
var HEX = [];
var BUFFER;
while (IDX--)
  HEX[IDX] = (IDX + 256).toString(16).substring(1);
function v4() {
  var i = 0, num, out = "";
  if (!BUFFER || IDX + 16 > 256) {
    BUFFER = Array(i = 256);
    while (i--)
      BUFFER[i] = 256 * Math.random() | 0;
    i = IDX = 0;
  }
  for (; i < 16; i++) {
    num = BUFFER[IDX + i];
    if (i == 6)
      out += HEX[num & 15 | 64];
    else if (i == 8)
      out += HEX[num & 63 | 128];
    else
      out += HEX[num];
    if (i & 1 && i > 1 && i < 11)
      out += "-";
  }
  IDX++;
  return out;
}

// node_modules/svelte/store/index.mjs
var subscriber_queue2 = [];
function writable2(value, start = noop2) {
  let stop;
  const subscribers = [];
  function set(new_value) {
    if (safe_not_equal2(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue2.length;
        for (let i = 0; i < subscribers.length; i += 1) {
          const s2 = subscribers[i];
          s2[1]();
          subscriber_queue2.push(s2, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue2.length; i += 2) {
            subscriber_queue2[i][0](subscriber_queue2[i + 1]);
          }
          subscriber_queue2.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run2, invalidate = noop2) {
    const subscriber = [run2, invalidate];
    subscribers.push(subscriber);
    if (subscribers.length === 1) {
      stop = start(set) || noop2;
    }
    run2(value);
    return () => {
      const index2 = subscribers.indexOf(subscriber);
      if (index2 !== -1) {
        subscribers.splice(index2, 1);
      }
      if (subscribers.length === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}

// node_modules/svelte/motion/index.mjs
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function tick_spring(ctx, last_value, current_value, target_value) {
  if (typeof current_value === "number" || is_date(current_value)) {
    const delta = target_value - current_value;
    const velocity = (current_value - last_value) / (ctx.dt || 1 / 60);
    const spring2 = ctx.opts.stiffness * delta;
    const damper = ctx.opts.damping * velocity;
    const acceleration = (spring2 - damper) * ctx.inv_mass;
    const d = (velocity + acceleration) * ctx.dt;
    if (Math.abs(d) < ctx.opts.precision && Math.abs(delta) < ctx.opts.precision) {
      return target_value;
    } else {
      ctx.settled = false;
      return is_date(current_value) ? new Date(current_value.getTime() + d) : current_value + d;
    }
  } else if (Array.isArray(current_value)) {
    return current_value.map((_, i) => tick_spring(ctx, last_value[i], current_value[i], target_value[i]));
  } else if (typeof current_value === "object") {
    const next_value = {};
    for (const k in current_value) {
      next_value[k] = tick_spring(ctx, last_value[k], current_value[k], target_value[k]);
    }
    return next_value;
  } else {
    throw new Error(`Cannot spring ${typeof current_value} values`);
  }
}
function spring(value, opts = {}) {
  const store = writable2(value);
  const { stiffness = 0.15, damping = 0.8, precision = 0.01 } = opts;
  let last_time;
  let task;
  let current_token;
  let last_value = value;
  let target_value = value;
  let inv_mass = 1;
  let inv_mass_recovery_rate = 0;
  let cancel_task = false;
  function set(new_value, opts2 = {}) {
    target_value = new_value;
    const token = current_token = {};
    if (value == null || opts2.hard || spring2.stiffness >= 1 && spring2.damping >= 1) {
      cancel_task = true;
      last_time = now();
      last_value = new_value;
      store.set(value = target_value);
      return Promise.resolve();
    } else if (opts2.soft) {
      const rate = opts2.soft === true ? 0.5 : +opts2.soft;
      inv_mass_recovery_rate = 1 / (rate * 60);
      inv_mass = 0;
    }
    if (!task) {
      last_time = now();
      cancel_task = false;
      task = loop((now2) => {
        if (cancel_task) {
          cancel_task = false;
          task = null;
          return false;
        }
        inv_mass = Math.min(inv_mass + inv_mass_recovery_rate, 1);
        const ctx = {
          inv_mass,
          opts: spring2,
          settled: true,
          dt: (now2 - last_time) * 60 / 1e3
        };
        const next_value = tick_spring(ctx, last_value, value, target_value);
        last_time = now2;
        last_value = value;
        store.set(value = next_value);
        if (ctx.settled) {
          task = null;
        }
        return !ctx.settled;
      });
    }
    return new Promise((fulfil) => {
      task.promise.then(() => {
        if (token === current_token)
          fulfil();
      });
    });
  }
  const spring2 = {
    set,
    update: (fn, opts2) => set(fn(target_value, value), opts2),
    subscribe: store.subscribe,
    stiffness,
    damping,
    precision
  };
  return spring2;
}

// .svelte-kit/output/server/app.js
var css$5 = {
  code: "#svelte-announcer.svelte-qsqr7k{position:absolute;left:0;top:0;clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}",
  map: `{"version":3,"file":"root.svelte","sources":["root.svelte"],"sourcesContent":["<!-- This file is generated by @sveltejs/kit \u2014 do not edit it! -->\\n<script>\\n\\timport { setContext, afterUpdate, onMount } from 'svelte';\\n\\n\\t// stores\\n\\texport let stores;\\n\\texport let page;\\n\\n\\texport let components;\\n\\texport let props_0 = null;\\n\\texport let props_1 = null;\\n\\texport let props_2 = null;\\n\\n\\tsetContext('__svelte__', stores);\\n\\n\\t$: stores.page.set(page);\\n\\tafterUpdate(stores.page.notify);\\n\\n\\tlet mounted = false;\\n\\tlet navigated = false;\\n\\tlet title = null;\\n\\n\\tonMount(() => {\\n\\t\\tconst unsubscribe = stores.page.subscribe(() => {\\n\\t\\t\\tif (mounted) {\\n\\t\\t\\t\\tnavigated = true;\\n\\t\\t\\t\\ttitle = document.title || 'untitled page';\\n\\t\\t\\t}\\n\\t\\t});\\n\\n\\t\\tmounted = true;\\n\\t\\treturn unsubscribe;\\n\\t});\\n<\/script>\\n\\n<svelte:component this={components[0]} {...(props_0 || {})}>\\n\\t{#if components[1]}\\n\\t\\t<svelte:component this={components[1]} {...(props_1 || {})}>\\n\\t\\t\\t{#if components[2]}\\n\\t\\t\\t\\t<svelte:component this={components[2]} {...(props_2 || {})}/>\\n\\t\\t\\t{/if}\\n\\t\\t</svelte:component>\\n\\t{/if}\\n</svelte:component>\\n\\n{#if mounted}\\n\\t<div id=\\"svelte-announcer\\" aria-live=\\"assertive\\" aria-atomic=\\"true\\">\\n\\t\\t{#if navigated}\\n\\t\\t\\t{title}\\n\\t\\t{/if}\\n\\t</div>\\n{/if}\\n\\n<style>#svelte-announcer {\\n  position: absolute;\\n  left: 0;\\n  top: 0;\\n  clip: rect(0 0 0 0);\\n  -webkit-clip-path: inset(50%);\\n          clip-path: inset(50%);\\n  overflow: hidden;\\n  white-space: nowrap;\\n  width: 1px;\\n  height: 1px;\\n}</style>"],"names":[],"mappings":"AAqDO,iBAAiB,cAAC,CAAC,AACxB,QAAQ,CAAE,QAAQ,CAClB,IAAI,CAAE,CAAC,CACP,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACnB,iBAAiB,CAAE,MAAM,GAAG,CAAC,CACrB,SAAS,CAAE,MAAM,GAAG,CAAC,CAC7B,QAAQ,CAAE,MAAM,CAChB,WAAW,CAAE,MAAM,CACnB,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,GAAG,AACb,CAAC"}`
};
var Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page } = $$props;
  let { components } = $$props;
  let { props_0 = null } = $$props;
  let { props_1 = null } = $$props;
  let { props_2 = null } = $$props;
  setContext("__svelte__", stores);
  afterUpdate(stores.page.notify);
  let mounted = false;
  let navigated = false;
  let title = null;
  onMount(() => {
    const unsubscribe = stores.page.subscribe(() => {
      if (mounted) {
        navigated = true;
        title = document.title || "untitled page";
      }
    });
    mounted = true;
    return unsubscribe;
  });
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.props_0 === void 0 && $$bindings.props_0 && props_0 !== void 0)
    $$bindings.props_0(props_0);
  if ($$props.props_1 === void 0 && $$bindings.props_1 && props_1 !== void 0)
    $$bindings.props_1(props_1);
  if ($$props.props_2 === void 0 && $$bindings.props_2 && props_2 !== void 0)
    $$bindings.props_2(props_2);
  $$result.css.add(css$5);
  {
    stores.page.set(page);
  }
  return `


${validate_component(components[0] || missing_component, "svelte:component").$$render($$result, Object.assign(props_0 || {}), {}, {
    default: () => `${components[1] ? `${validate_component(components[1] || missing_component, "svelte:component").$$render($$result, Object.assign(props_1 || {}), {}, {
      default: () => `${components[2] ? `${validate_component(components[2] || missing_component, "svelte:component").$$render($$result, Object.assign(props_2 || {}), {}, {})}` : ``}`
    })}` : ``}`
  })}

${mounted ? `<div id="${"svelte-announcer"}" aria-live="${"assertive"}" aria-atomic="${"true"}" class="${"svelte-qsqr7k"}">${navigated ? `${escape2(title)}` : ``}</div>` : ``}`;
});
function set_paths(paths) {
}
function set_prerendering(value) {
}
var handle = async ({ request, resolve: resolve2 }) => {
  const cookies = import_cookie.default.parse(request.headers.cookie || "");
  request.locals.userid = cookies.userid || v4();
  if (request.query.has("_method")) {
    request.method = request.query.get("_method").toUpperCase();
  }
  const response = await resolve2(request);
  if (!cookies.userid) {
    response.headers["set-cookie"] = `userid=${request.locals.userid}; Path=/; HttpOnly`;
  }
  return response;
};
var user_hooks = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  handle
});
var template = ({ head, body }) => '<!DOCTYPE html>\r\n<html lang="en">\r\n	<head>\r\n		<meta charset="utf-8" />\r\n		<link rel="icon" href="https://www.zupimages.net/up/21/22/8o3k.png" />\r\n		<meta name="viewport" content="width=device-width, initial-scale=1" />\r\n\r\n		' + head + '\r\n	</head>\r\n	<body>\r\n		<div id="svelte">' + body + "</div>\r\n	</body>\r\n</html>\r\n";
var options = null;
function init(settings) {
  set_paths(settings.paths);
  set_prerendering(settings.prerendering || false);
  options = {
    amp: false,
    dev: false,
    entry: {
      file: "/./_app/start-995206b3.js",
      css: ["/./_app/assets/start-230d6437.css"],
      js: ["/./_app/start-995206b3.js", "/./_app/chunks/vendor-f1e8a4fb.js"]
    },
    fetched: void 0,
    floc: false,
    get_component_path: (id) => "/./_app/" + entry_lookup[id],
    get_stack: (error22) => String(error22),
    handle_error: (error22) => {
      console.error(error22.stack);
      error22.stack = options.get_stack(error22);
    },
    hooks: get_hooks(user_hooks),
    hydrate: true,
    initiator: void 0,
    load_component,
    manifest,
    paths: settings.paths,
    read: settings.read,
    root: Root,
    router: true,
    ssr: true,
    target: "#svelte",
    template,
    trailing_slash: "never"
  };
}
var empty = () => ({});
var manifest = {
  assets: [{ "file": "favicon.ico", "size": 1150, "type": "image/vnd.microsoft.icon" }, { "file": "robots.txt", "size": 70, "type": "text/plain" }, { "file": "svelte-welcome.png", "size": 360807, "type": "image/png" }, { "file": "svelte-welcome.webp", "size": 115470, "type": "image/webp" }],
  layout: "src/routes/__layout.svelte",
  error: ".svelte-kit/build/components/error.svelte",
  routes: [
    {
      type: "page",
      pattern: /^\/$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/index.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/donation\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/donation.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/contact\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/contact.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/team\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/team.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    }
  ]
};
var get_hooks = (hooks) => ({
  getSession: hooks.getSession || (() => ({})),
  handle: hooks.handle || (({ request, resolve: resolve2 }) => resolve2(request))
});
var module_lookup = {
  "src/routes/__layout.svelte": () => Promise.resolve().then(function() {
    return __layout;
  }),
  ".svelte-kit/build/components/error.svelte": () => Promise.resolve().then(function() {
    return error2;
  }),
  "src/routes/index.svelte": () => Promise.resolve().then(function() {
    return index;
  }),
  "src/routes/donation.svelte": () => Promise.resolve().then(function() {
    return donation;
  }),
  "src/routes/contact.svelte": () => Promise.resolve().then(function() {
    return contact;
  }),
  "src/routes/team.svelte": () => Promise.resolve().then(function() {
    return team;
  })
};
var metadata_lookup = { "src/routes/__layout.svelte": { "entry": "/./_app/pages/__layout.svelte-e7ba1377.js", "css": ["/./_app/assets/pages/__layout.svelte-91ebddaa.css"], "js": ["/./_app/pages/__layout.svelte-e7ba1377.js", "/./_app/chunks/vendor-f1e8a4fb.js"], "styles": null }, ".svelte-kit/build/components/error.svelte": { "entry": "/./_app/error.svelte-7079a491.js", "css": [], "js": ["/./_app/error.svelte-7079a491.js", "/./_app/chunks/vendor-f1e8a4fb.js"], "styles": null }, "src/routes/index.svelte": { "entry": "/./_app/pages/index.svelte-82781817.js", "css": ["/./_app/assets/pages/index.svelte-ef393222.css"], "js": ["/./_app/pages/index.svelte-82781817.js", "/./_app/chunks/vendor-f1e8a4fb.js"], "styles": null }, "src/routes/donation.svelte": { "entry": "/./_app/pages/donation.svelte-4dbc63a0.js", "css": [], "js": ["/./_app/pages/donation.svelte-4dbc63a0.js", "/./_app/chunks/vendor-f1e8a4fb.js"], "styles": null }, "src/routes/contact.svelte": { "entry": "/./_app/pages/contact.svelte-8210935d.js", "css": ["/./_app/assets/pages/contact.svelte-9649b4b4.css"], "js": ["/./_app/pages/contact.svelte-8210935d.js", "/./_app/chunks/vendor-f1e8a4fb.js"], "styles": null }, "src/routes/team.svelte": { "entry": "/./_app/pages/team.svelte-702378d6.js", "css": [], "js": ["/./_app/pages/team.svelte-702378d6.js", "/./_app/chunks/vendor-f1e8a4fb.js"], "styles": null } };
async function load_component(file) {
  return {
    module: await module_lookup[file](),
    ...metadata_lookup[file]
  };
}
init({ paths: { "base": "", "assets": "/." } });
function render(request, {
  prerender: prerender2
} = {}) {
  const host = request.headers["host"];
  return respond({ ...request, host }, options, { prerender: prerender2 });
}
var css$4 = {
  code: "header.svelte-rxcimr.svelte-rxcimr{display:flex;justify-content:space-between}nav.svelte-rxcimr.svelte-rxcimr{display:flex;justify-content:center;--background:rgb(255, 255, 255)}nav.svelte-rxcimr a.svelte-rxcimr{display:flex;height:100%;align-items:center;padding:0 1em;color:var(--heading-color);font-weight:600;letter-spacing:10%;text-decoration:none;transition:color 0.2s linear}a.svelte-rxcimr.svelte-rxcimr:hover{color:#B366A4}",
  map: `{"version":3,"file":"index.svelte","sources":["index.svelte"],"sourcesContent":["<script>\\r\\n\\timport { page } from '$app/stores';\\r\\n\\timport logo from './svelte-logo.svg';\\r\\n<\/script>\\r\\n\\r\\n<header class=\\"text-gray-600 body-font\\">\\r\\n\\t<div class=\\"container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center\\">\\r\\n\\t  <a class=\\"font-sans flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0\\">\\r\\n\\t\\t<!-- <svg xmlns=\\"http://www.w3.org/2000/svg\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" class=\\"w-10 h-10 text-white p-2 bg-purple-500 rounded-full\\" viewBox=\\"0 0 24 24\\">\\r\\n\\t\\t  <path d=\\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\\"></path>\\r\\n\\t\\t</svg> -->\\r\\n\\t\\t<img src=\\"https://zupimages.net/up/21/22/8o3k.png\\" alt=\\"Les M\xE9duses\\" class=\\"max-h-9 max-w-9\\" />\\r\\n\\t\\t<span class=\\"ml-3 text-xl\\">Les M\xE9duses</span>\\r\\n\\t  </a>\\r\\n\\t  <nav class=\\"md:ml-auto flex flex-wrap items-center text-base justify-center\\">\\r\\n\\t\\t<a sveltekit:prefetch href=\\"/\\" class=\\"font-sans mr-5 hover:text-gray-900\\">Homepage</a>\\r\\n\\t\\t<a sveltekit:prefetch href=\\"/donation\\" class=\\"font-sans mr-5 hover:text-gray-900\\">Donations</a>\\r\\n\\t\\t<a sveltekit:prefetch href=\\"/team\\" class=\\"font-sans mr-5 hover:text-gray-900 font-sans\\">Team</a>\\r\\n\\t  </nav>\\r\\n\\t  <button class=\\"font-sans inline-flex items-center bg-gray-100 border-0 py-3 px-7 focus:outline-none hover:bg-gray-200 rounded-full text-base mt-4 md:mt-0\\"><a sveltekit:prefetch href=\\"/contact\\" class=\\"font-sans hover:text-gray-900 text-gray-500\\">Contact</a></button>\\r\\n</div>\\r\\n</header>\\r\\n\\r\\n<!-- <header>\\r\\n\\t<div class=\\"corner\\">\\r\\n\\t\\t<a href=\\"https://kit.svelte.dev\\">\\r\\n\\t\\t\\t<img src={logo} alt=\\"SvelteKit\\" />\\r\\n\\t\\t</a>\\r\\n\\t</div>\\r\\n\\r\\n\\t<nav>\\r\\n\\t\\t<svg viewBox=\\"0 0 2 3\\" aria-hidden=\\"true\\">\\r\\n\\t\\t\\t<path d=\\"M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z\\" />\\r\\n\\t\\t</svg>\\r\\n\\t\\t<ul>\\r\\n\\t\\t\\t<li class:active={$page.path === '/'}><a sveltekit:prefetch href=\\"/\\">Home</a></li>\\r\\n\\t\\t\\t<li class:active={$page.path === '/about'}><a sveltekit:prefetch href=\\"/about\\">About</a></li>\\r\\n\\t\\t\\t<li class:active={$page.path === '/todos'}><a sveltekit:prefetch href=\\"/todos\\">Todos</a></li>\\r\\n\\t\\t</ul>\\r\\n\\t\\t<svg viewBox=\\"0 0 2 3\\" aria-hidden=\\"true\\">\\r\\n\\t\\t\\t<path d=\\"M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z\\" />\\r\\n\\t\\t</svg>\\r\\n\\t</nav>\\r\\n\\r\\n\\t<div class=\\"corner\\">\\r\\n\\t</div>\\r\\n</header> -->\\r\\n\\r\\n<style>header {\\n  display: flex;\\n  justify-content: space-between;\\n}\\n\\n.corner {\\n  width: 3em;\\n  height: 3em;\\n}\\n\\n.corner a {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  width: 100%;\\n  height: 100%;\\n}\\n\\n.corner img {\\n  width: 2em;\\n  height: 2em;\\n  -o-object-fit: contain;\\n     object-fit: contain;\\n}\\n\\nnav {\\n  display: flex;\\n  justify-content: center;\\n  --background: rgb(255, 255, 255);\\n}\\n\\nsvg {\\n  width: 2em;\\n  height: 3em;\\n  display: block;\\n}\\n\\npath {\\n  fill: var(--background);\\n}\\n\\nul {\\n  position: relative;\\n  padding: 0;\\n  margin: 0;\\n  height: 3em;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  list-style: none;\\n  background: var(--background);\\n  background-size: contain;\\n}\\n\\nli {\\n  position: relative;\\n  height: 100%;\\n}\\n\\nli.active::before {\\n  --size: 6px;\\n  content: '';\\n  width: 0;\\n  height: 0;\\n  position: absolute;\\n  top: 0;\\n  left: calc(50% - var(--size));\\n  border: var(--size) solid transparent;\\n  border-top: var(--size) solid var(--accent-color);\\n}\\n\\nnav a {\\n  display: flex;\\n  height: 100%;\\n  align-items: center;\\n  padding: 0 1em;\\n  color: var(--heading-color);\\n  font-weight: 600;\\n  /* font-size: 0.8rem; */\\n  /* text-transform: uppercase; */\\n  letter-spacing: 10%;\\n  text-decoration: none;\\n  transition: color 0.2s linear;\\n}\\n\\na:hover {\\n  color: #B366A4;\\n}</style>\\r\\n"],"names":[],"mappings":"AAgDO,MAAM,4BAAC,CAAC,AACb,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,aAAa,AAChC,CAAC,AAsBD,GAAG,4BAAC,CAAC,AACH,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,YAAY,CAAE,kBAAkB,AAClC,CAAC,AA0CD,iBAAG,CAAC,CAAC,cAAC,CAAC,AACL,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,IAAI,CACZ,WAAW,CAAE,MAAM,CACnB,OAAO,CAAE,CAAC,CAAC,GAAG,CACd,KAAK,CAAE,IAAI,eAAe,CAAC,CAC3B,WAAW,CAAE,GAAG,CAGhB,cAAc,CAAE,GAAG,CACnB,eAAe,CAAE,IAAI,CACrB,UAAU,CAAE,KAAK,CAAC,IAAI,CAAC,MAAM,AAC/B,CAAC,AAED,6BAAC,MAAM,AAAC,CAAC,AACP,KAAK,CAAE,OAAO,AAChB,CAAC"}`
};
var Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<header class="${"text-gray-600 body-font svelte-rxcimr"}"><div class="${"container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"}"><a class="${"font-sans flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 svelte-rxcimr"}">
		<img src="${"https://zupimages.net/up/21/22/8o3k.png"}" alt="${"Les M\xE9duses"}" class="${"max-h-9 max-w-9"}">
		<span class="${"ml-3 text-xl"}">Les M\xE9duses</span></a>
	  <nav class="${"md:ml-auto flex flex-wrap items-center text-base justify-center svelte-rxcimr"}"><a sveltekit:prefetch href="${"/"}" class="${"font-sans mr-5 hover:text-gray-900 svelte-rxcimr"}">Homepage</a>
		<a sveltekit:prefetch href="${"/donation"}" class="${"font-sans mr-5 hover:text-gray-900 svelte-rxcimr"}">Donations</a>
		<a sveltekit:prefetch href="${"/team"}" class="${"font-sans mr-5 hover:text-gray-900 font-sans svelte-rxcimr"}">Team</a></nav>
	  <button class="${"font-sans inline-flex items-center bg-gray-100 border-0 py-3 px-7 focus:outline-none hover:bg-gray-200 rounded-full text-base mt-4 md:mt-0"}"><a sveltekit:prefetch href="${"/contact"}" class="${"font-sans hover:text-gray-900 text-gray-500 svelte-rxcimr"}">Contact</a></button></div></header>

`;
});
var css$3 = {
  code: "main.svelte-1i5iwkv.svelte-1i5iwkv{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:1024px;margin:0 auto;box-sizing:border-box}footer.svelte-1i5iwkv.svelte-1i5iwkv{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:40px}footer.svelte-1i5iwkv a.svelte-1i5iwkv{font-weight:bold}@media(min-width: 480px){footer.svelte-1i5iwkv.svelte-1i5iwkv{padding:40px 0}}",
  map: `{"version":3,"file":"__layout.svelte","sources":["__layout.svelte"],"sourcesContent":["<script>\\r\\n\\timport Header from '$lib/Header/index.svelte';\\r\\n\\timport '../app.postcss';\\r\\n<\/script>\\r\\n\\r\\n<Header />\\r\\n\\r\\n<main>\\r\\n\\t<slot />\\r\\n</main>\\r\\n\\r\\n<footer>\\r\\n\\t<p>visit <a href=\\"https://kit.svelte.dev\\">kit.svelte.dev</a> to learn SvelteKit</p>\\r\\n</footer>\\r\\n\\r\\n<style>main {\\n  flex: 1;\\n  display: flex;\\n  flex-direction: column;\\n  padding: 1rem;\\n  width: 100%;\\n  max-width: 1024px;\\n  margin: 0 auto;\\n  box-sizing: border-box;\\n}\\n\\nfooter {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  padding: 40px;\\n}\\n\\nfooter a {\\n  font-weight: bold;\\n}\\n\\n@media (min-width: 480px) {\\n  footer {\\n    padding: 40px 0;\\n  }\\n}</style>\\r\\n"],"names":[],"mappings":"AAeO,IAAI,8BAAC,CAAC,AACX,IAAI,CAAE,CAAC,CACP,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,MAAM,CACjB,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,UAAU,CAAE,UAAU,AACxB,CAAC,AAED,MAAM,8BAAC,CAAC,AACN,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,OAAO,CAAE,IAAI,AACf,CAAC,AAED,qBAAM,CAAC,CAAC,eAAC,CAAC,AACR,WAAW,CAAE,IAAI,AACnB,CAAC,AAED,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AACzB,MAAM,8BAAC,CAAC,AACN,OAAO,CAAE,IAAI,CAAC,CAAC,AACjB,CAAC,AACH,CAAC"}`
};
var _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

<main class="${"svelte-1i5iwkv"}">${slots.default ? slots.default({}) : ``}</main>

<footer class="${"svelte-1i5iwkv"}"><p>visit <a href="${"https://kit.svelte.dev"}" class="${"svelte-1i5iwkv"}">kit.svelte.dev</a> to learn SvelteKit</p>
</footer>`;
});
var __layout = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _layout
});
function load({ error: error22, status }) {
  return { props: { error: error22, status } };
}
var Error2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { status } = $$props;
  let { error: error22 } = $$props;
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  if ($$props.error === void 0 && $$bindings.error && error22 !== void 0)
    $$bindings.error(error22);
  return `<h1>${escape2(status)}</h1>

<p>${escape2(error22.message)}</p>


${error22.stack ? `<pre>${escape2(error22.stack)}</pre>` : ``}`;
});
var error2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Error2,
  load
});
var css$2 = {
  code: ".counter.svelte-1h15l14.svelte-1h15l14{display:flex;border-top:1px solid rgba(0, 0, 0, 0.1);border-bottom:1px solid rgba(0, 0, 0, 0.1);margin:1rem 0}.counter.svelte-1h15l14 button.svelte-1h15l14{width:2em;padding:0;display:flex;align-items:center;justify-content:center;border:0;background-color:transparent;color:var(--text-color);font-size:2rem}.counter.svelte-1h15l14 button.svelte-1h15l14:hover{background-color:var(--secondary-color)}svg.svelte-1h15l14.svelte-1h15l14{width:25%;height:25%}path.svelte-1h15l14.svelte-1h15l14{vector-effect:non-scaling-stroke;stroke-width:2px;stroke:var(--text-color)}.counter-viewport.svelte-1h15l14.svelte-1h15l14{width:8em;height:4em;overflow:hidden;text-align:center;position:relative}.counter-viewport.svelte-1h15l14 strong.svelte-1h15l14{position:absolute;display:block;width:100%;height:100%;font-weight:400;color:var(--accent-color);font-size:4rem;display:flex;align-items:center;justify-content:center}.counter-digits.svelte-1h15l14.svelte-1h15l14{position:absolute;width:100%;height:100%}",
  map: `{"version":3,"file":"index.svelte","sources":["index.svelte"],"sourcesContent":["<script>\\r\\n\\timport { spring } from 'svelte/motion';\\r\\n\\r\\n\\tlet count = 0;\\r\\n\\r\\n\\tconst displayed_count = spring();\\r\\n\\t$: displayed_count.set(count);\\r\\n\\t$: offset = modulo($displayed_count, 1);\\r\\n\\r\\n\\tfunction modulo(n, m) {\\r\\n\\t\\t// handle negative numbers\\r\\n\\t\\treturn ((n % m) + m) % m;\\r\\n\\t}\\r\\n<\/script>\\r\\n\\r\\n<div class=\\"counter\\">\\r\\n\\t<button on:click={() => (count -= 1)} aria-label=\\"Decrease the counter by one\\">\\r\\n\\t\\t<svg aria-hidden=\\"true\\" viewBox=\\"0 0 1 1\\">\\r\\n\\t\\t\\t<path d=\\"M0,0.5 L1,0.5\\" />\\r\\n\\t\\t</svg>\\r\\n\\t</button>\\r\\n\\r\\n\\t<div class=\\"counter-viewport\\">\\r\\n\\t\\t<div class=\\"counter-digits\\" style=\\"transform: translate(0, {100 * offset}%)\\">\\r\\n\\t\\t\\t<strong style=\\"top: -100%\\" aria-hidden=\\"true\\">{Math.floor($displayed_count + 1)}</strong>\\r\\n\\t\\t\\t<strong>{Math.floor($displayed_count)}</strong>\\r\\n\\t\\t</div>\\r\\n\\t</div>\\r\\n\\r\\n\\t<button on:click={() => (count += 1)} aria-label=\\"Increase the counter by one\\">\\r\\n\\t\\t<svg aria-hidden=\\"true\\" viewBox=\\"0 0 1 1\\">\\r\\n\\t\\t\\t<path d=\\"M0,0.5 L1,0.5 M0.5,0 L0.5,1\\" />\\r\\n\\t\\t</svg>\\r\\n\\t</button>\\r\\n</div>\\r\\n\\r\\n<style>.counter {\\n  display: flex;\\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\\n  margin: 1rem 0;\\n}\\n\\n.counter button {\\n  width: 2em;\\n  padding: 0;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  border: 0;\\n  background-color: transparent;\\n  color: var(--text-color);\\n  font-size: 2rem;\\n}\\n\\n.counter button:hover {\\n  background-color: var(--secondary-color);\\n}\\n\\nsvg {\\n  width: 25%;\\n  height: 25%;\\n}\\n\\npath {\\n  vector-effect: non-scaling-stroke;\\n  stroke-width: 2px;\\n  stroke: var(--text-color);\\n}\\n\\n.counter-viewport {\\n  width: 8em;\\n  height: 4em;\\n  overflow: hidden;\\n  text-align: center;\\n  position: relative;\\n}\\n\\n.counter-viewport strong {\\n  position: absolute;\\n  display: block;\\n  width: 100%;\\n  height: 100%;\\n  font-weight: 400;\\n  color: var(--accent-color);\\n  font-size: 4rem;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n}\\n\\n.counter-digits {\\n  position: absolute;\\n  width: 100%;\\n  height: 100%;\\n}</style>\\r\\n"],"names":[],"mappings":"AAoCO,QAAQ,8BAAC,CAAC,AACf,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CACxC,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAC3C,MAAM,CAAE,IAAI,CAAC,CAAC,AAChB,CAAC,AAED,uBAAQ,CAAC,MAAM,eAAC,CAAC,AACf,KAAK,CAAE,GAAG,CACV,OAAO,CAAE,CAAC,CACV,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,MAAM,CAAE,CAAC,CACT,gBAAgB,CAAE,WAAW,CAC7B,KAAK,CAAE,IAAI,YAAY,CAAC,CACxB,SAAS,CAAE,IAAI,AACjB,CAAC,AAED,uBAAQ,CAAC,qBAAM,MAAM,AAAC,CAAC,AACrB,gBAAgB,CAAE,IAAI,iBAAiB,CAAC,AAC1C,CAAC,AAED,GAAG,8BAAC,CAAC,AACH,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,GAAG,AACb,CAAC,AAED,IAAI,8BAAC,CAAC,AACJ,aAAa,CAAE,kBAAkB,CACjC,YAAY,CAAE,GAAG,CACjB,MAAM,CAAE,IAAI,YAAY,CAAC,AAC3B,CAAC,AAED,iBAAiB,8BAAC,CAAC,AACjB,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,GAAG,CACX,QAAQ,CAAE,MAAM,CAChB,UAAU,CAAE,MAAM,CAClB,QAAQ,CAAE,QAAQ,AACpB,CAAC,AAED,gCAAiB,CAAC,MAAM,eAAC,CAAC,AACxB,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,KAAK,CACd,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,WAAW,CAAE,GAAG,CAChB,KAAK,CAAE,IAAI,cAAc,CAAC,CAC1B,SAAS,CAAE,IAAI,CACf,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,AACzB,CAAC,AAED,eAAe,8BAAC,CAAC,AACf,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,AACd,CAAC"}`
};
function modulo(n, m) {
  return (n % m + m) % m;
}
create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let offset;
  let $displayed_count, $$unsubscribe_displayed_count;
  let count = 0;
  const displayed_count = spring();
  $$unsubscribe_displayed_count = subscribe(displayed_count, (value) => $displayed_count = value);
  $$result.css.add(css$2);
  {
    displayed_count.set(count);
  }
  offset = modulo($displayed_count, 1);
  $$unsubscribe_displayed_count();
  return `<div class="${"counter svelte-1h15l14"}"><button aria-label="${"Decrease the counter by one"}" class="${"svelte-1h15l14"}"><svg aria-hidden="${"true"}" viewBox="${"0 0 1 1"}" class="${"svelte-1h15l14"}"><path d="${"M0,0.5 L1,0.5"}" class="${"svelte-1h15l14"}"></path></svg></button>

	<div class="${"counter-viewport svelte-1h15l14"}"><div class="${"counter-digits svelte-1h15l14"}" style="${"transform: translate(0, " + escape2(100 * offset) + "%)"}"><strong style="${"top: -100%"}" aria-hidden="${"true"}" class="${"svelte-1h15l14"}">${escape2(Math.floor($displayed_count + 1))}</strong>
			<strong class="${"svelte-1h15l14"}">${escape2(Math.floor($displayed_count))}</strong></div></div>

	<button aria-label="${"Increase the counter by one"}" class="${"svelte-1h15l14"}"><svg aria-hidden="${"true"}" viewBox="${"0 0 1 1"}" class="${"svelte-1h15l14"}"><path d="${"M0,0.5 L1,0.5 M0.5,0 L0.5,1"}" class="${"svelte-1h15l14"}"></path></svg></button>
</div>`;
});
var css$1 = {
  code: "section.svelte-1lg7s1b{display:flex;flex-direction:column;justify-content:center;align-items:center;flex:1}h1.svelte-1lg7s1b{width:100%}.welcome.svelte-1lg7s1b{position:absolute;width:200px;height:200px}",
  map: `{"version":3,"file":"index.svelte","sources":["index.svelte"],"sourcesContent":["<script context=\\"module\\">\\r\\n\\texport const prerender = true;\\r\\n<\/script>\\r\\n\\r\\n<script>\\r\\n\\timport Counter from '$lib/Counter/index.svelte';\\r\\n<\/script>\\r\\n\\r\\n<svelte:head>\\r\\n\\t<title>Homepage</title>\\r\\n</svelte:head>\\r\\n\\r\\n<section>\\r\\n\\t<h1>\\r\\n\\t\\t<div class=\\"welcome\\">\\r\\n\\t\\t\\t<picture>\\r\\n\\t\\t\\t\\t<img class= \\"object-left-top\\" src=\\"https://www.zupimages.net/up/21/22/8o3k.png?fbclid=IwAR1pB6euzVFT6imo5Lx9AYLDbLTqi_NSc9l1nGp5zPGJdJZp4eMSs489Sk8\\" alt=\\"Les M\xE9duses\\" />\\r\\n        <img class= \\"object-right-top\\" src=\\"https://www.zupimages.net/up/21/22/8o3k.png?fbclid=IwAR1pB6euzVFT6imo5Lx9AYLDbLTqi_NSc9l1nGp5zPGJdJZp4eMSs489Sk8\\" alt=\\"Les M\xE9duses\\" />\\r\\n\\t\\t\\t</picture>\\r\\n\\t\\t</div>\\r\\n\\r\\n\\t\\tLes M\xE9duses<br />\\r\\n\\t</h1>\\r\\n\\r\\n\\t<h2>\\r\\n\\t\\tAn ESSEC Initiative\\r\\n\\t</h2>\\r\\n\\r\\n</section>\\r\\n<section class=\\"text-indigo-600 font\\">\\r\\n  <div class=\\"container px-5 py-24 mx-auto\\">\\r\\n    <div class=\\"text-center mb-20\\">\\r\\n      <h1 class=\\"sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4\\">Who we are</h1>\\r\\n      <p class=\\"text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s\\">Les M\xE9duses is involved in various working groups dealing with Sexual and Sexist Violence (SSV). Each working group analyses the existing dispositives and works with the school administration in question to propose recommendations.</p>\\r\\n      <div class=\\"flex mt-6 justify-center\\">\\r\\n        <div class=\\"w-16 h-1 rounded-full bg-purple-500 inline-flex\\"></div>\\r\\n      </div>\\r\\n    </div>\\r\\n  </section>\\r\\n<section class=\\"text-gray-600 body-font\\"> \\r\\n    <!-- This example requires Tailwind CSS v2.0+ -->\\r\\n<div class=\\"py-12 bg-white\\">\\r\\n  <div class=\\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\\">\\r\\n    <div class=\\"lg:text-center\\">\\r\\n      <h2 class=\\"text-base text-indigo-600 font-semibold tracking-wide uppercase\\">Our objectives</h2>\\r\\n      <p class=\\"mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl\\">\\r\\n        A better comprehension of Sexist and Sexual Violence\\r\\n      </p>\\r\\n      <p class=\\"mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto\\">\\r\\n        Discover the pillars of our actions\\r\\n      </p>\\r\\n    </div>\\r\\n\\r\\n    <div class=\\"mt-10\\">\\r\\n      <dl class=\\"space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10\\">\\r\\n        <div class=\\"relative\\">\\r\\n          <dt>\\r\\n            <div class=\\"absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white\\">\\r\\n              <!-- Heroicon name: outline/globe-alt -->\\r\\n              <svg class=\\"h-6 w-6\\" xmlns=\\"http://www.w3.org/2000/svg\\" fill=\\"none\\" viewBox=\\"0 0 24 24\\" stroke=\\"currentColor\\" aria-hidden=\\"true\\">\\r\\n                <path stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9\\" />\\r\\n              </svg>\\r\\n            </div>\\r\\n            <p class=\\"ml-16 text-lg leading-6 font-medium text-gray-900\\">Raise awareness and overcome taboos</p>\\r\\n          </dt>\\r\\n          <dd class=\\"mt-2 ml-16 text-base text-gray-500\\">\\r\\n            We want to raise awareness of SSV issues among students through more appropriate formats and communication.\\r\\n          </dd>\\r\\n        </div>\\r\\n\\r\\n        <div class=\\"relative\\">\\r\\n          <dt>\\r\\n            <div class=\\"absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white\\">\\r\\n              <!-- Heroicon name: outline/scale -->\\r\\n              <svg class=\\"h-6 w-6\\" xmlns=\\"http://www.w3.org/2000/svg\\" fill=\\"none\\" viewBox=\\"0 0 24 24\\" stroke=\\"currentColor\\" aria-hidden=\\"true\\">\\r\\n                <path stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3\\" />\\r\\n              </svg>\\r\\n            </div>\\r\\n            <p class=\\"ml-16 text-lg leading-6 font-medium text-gray-900\\">Support Structures</p>\\r\\n          </dt>\\r\\n          <dd class=\\"mt-2 ml-16 text-base text-gray-500\\">\\r\\n            Create supportive and understandable support structures available to every student and promote them to students.\\r\\n          </dd>\\r\\n        </div>\\r\\n\\r\\n        <div class=\\"relative\\">\\r\\n          <dt>\\r\\n            <div class=\\"absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white\\">\\r\\n              <!-- Heroicon name: outline/lightning-bolt -->\\r\\n              <svg class=\\"h-6 w-6\\" xmlns=\\"http://www.w3.org/2000/svg\\" fill=\\"none\\" viewBox=\\"0 0 24 24\\" stroke=\\"currentColor\\" aria-hidden=\\"true\\">\\r\\n                <path stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M13 10V3L4 14h7v7l9-11h-7z\\" />\\r\\n              </svg>\\r\\n            </div>\\r\\n            <p class=\\"ml-16 text-lg leading-6 font-medium text-gray-900\\"> Student training</p>\\r\\n          </dt>\\r\\n          <dd class=\\"mt-2 ml-16 text-base text-gray-500\\">\\r\\n            In order to be able to recognise and react to SSV, it is important to provide all students with appropriate and up-to-date training.\\r\\n          </dd>\\r\\n        </div>\\r\\n\\r\\n        <div class=\\"relative\\">\\r\\n          <dt>\\r\\n            <div class=\\"absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white\\">\\r\\n              <!-- Heroicon name: outline/annotation -->\\r\\n              <svg class=\\"h-6 w-6\\" xmlns=\\"http://www.w3.org/2000/svg\\" fill=\\"none\\" viewBox=\\"0 0 24 24\\" stroke=\\"currentColor\\" aria-hidden=\\"true\\">\\r\\n                <path stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z\\" />\\r\\n              </svg>\\r\\n            </div>\\r\\n            <p class=\\"ml-16 text-lg leading-6 font-medium text-gray-900\\">SSV in the working environment</p>\\r\\n          </dt>\\r\\n          <dd class=\\"mt-2 ml-16 text-base text-gray-500\\">\\r\\n            Preparing and accompanying students to the existence of SSV in the professional world.\\r\\n          </dd>\\r\\n        </div>\\r\\n      </dl>\\r\\n    </div>\\r\\n  </div>\\r\\n</div>\\r\\n  </section>\\r\\n  <section class=\\"text-gray-600 body-font relative\\">\\r\\n    <div class=\\"container px-5 py-24 mx-auto\\">\\r\\n      <div class=\\"flex flex-col text-center w-full mb-12\\">\\r\\n        <h1 class=\\"sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900\\">Contact Us</h1>\\r\\n        <p class=\\"lg:w-2/3 mx-auto leading-relaxed text-base\\">Please do not hesitate to reach us !</p>\\r\\n      </div>\\r\\n      <div class=\\"lg:w-1/2 md:w-2/3 mx-auto\\">\\r\\n        <div class=\\"flex flex-wrap -m-2\\">\\r\\n          <div class=\\"p-2 w-1/2\\">\\r\\n            <div class=\\"relative\\">\\r\\n              <label for=\\"name\\" class=\\"leading-7 text-sm text-gray-600\\">Name</label>\\r\\n              <input type=\\"text\\" id=\\"name\\" name=\\"name\\" class=\\"w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out\\">\\r\\n            </div>\\r\\n          </div>\\r\\n          <div class=\\"p-2 w-1/2\\">\\r\\n            <div class=\\"relative\\">\\r\\n              <label for=\\"email\\" class=\\"leading-7 text-sm text-gray-600\\">Email</label>\\r\\n              <input type=\\"email\\" id=\\"email\\" name=\\"email\\" class=\\"w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out\\">\\r\\n            </div>\\r\\n          </div>\\r\\n          <div class=\\"p-2 w-full\\">\\r\\n            <div class=\\"relative\\">\\r\\n              <label for=\\"message\\" class=\\"leading-7 text-sm text-gray-600\\">Message</label>\\r\\n              <textarea id=\\"message\\" name=\\"message\\" class=\\"w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out\\"></textarea>\\r\\n            </div>\\r\\n          </div>\\r\\n          <div class=\\"p-2 w-full\\">\\r\\n            <button class=\\"flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg\\">Button</button>\\r\\n          </div>\\r\\n          <div class=\\"p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center\\">\\r\\n            <a class=\\"text-indigo-500\\">example@email.com</a>\\r\\n            <p class=\\"leading-normal my-5\\">49 Smith St.\\r\\n              <br>Saint Cloud, MN 56301\\r\\n            </p>\\r\\n            <span class=\\"inline-flex\\">\\r\\n              <a class=\\"text-gray-500\\">\\r\\n                <svg fill=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" class=\\"w-5 h-5\\" viewBox=\\"0 0 24 24\\">\\r\\n                  <path d=\\"M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z\\"></path>\\r\\n                </svg>\\r\\n              </a>\\r\\n              <a class=\\"ml-4 text-gray-500\\">\\r\\n                <svg fill=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" class=\\"w-5 h-5\\" viewBox=\\"0 0 24 24\\">\\r\\n                  <path d=\\"M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z\\"></path>\\r\\n                </svg>\\r\\n              </a>\\r\\n              <a class=\\"ml-4 text-gray-500\\">\\r\\n                <svg fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" class=\\"w-5 h-5\\" viewBox=\\"0 0 24 24\\">\\r\\n                  <rect width=\\"20\\" height=\\"20\\" x=\\"2\\" y=\\"2\\" rx=\\"5\\" ry=\\"5\\"></rect>\\r\\n                  <path d=\\"M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01\\"></path>\\r\\n                </svg>\\r\\n              </a>\\r\\n              <a class=\\"ml-4 text-gray-500\\">\\r\\n                <svg fill=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" class=\\"w-5 h-5\\" viewBox=\\"0 0 24 24\\">\\r\\n                  <path d=\\"M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z\\"></path>\\r\\n                </svg>\\r\\n              </a>\\r\\n            </span>\\r\\n          </div>\\r\\n        </div>\\r\\n      </div>\\r\\n    </div>\\r\\n  </section>\\r\\n\\r\\n<style>section {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  flex: 1;\\n}\\n\\nh1 {\\n  width: 100%;\\n}\\n\\n.welcome {\\n  position: absolute;\\n  width: 200px;\\n  height: 200px;\\n}</style>\\r\\n"],"names":[],"mappings":"AAsLO,OAAO,eAAC,CAAC,AACd,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,IAAI,CAAE,CAAC,AACT,CAAC,AAED,EAAE,eAAC,CAAC,AACF,KAAK,CAAE,IAAI,AACb,CAAC,AAED,QAAQ,eAAC,CAAC,AACR,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,AACf,CAAC"}`
};
var prerender = true;
var Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `${$$result.head += `${$$result.title = `<title>Homepage</title>`, ""}`, ""}

<section class="${"svelte-1lg7s1b"}"><h1 class="${"svelte-1lg7s1b"}"><div class="${"welcome svelte-1lg7s1b"}"><picture><img class="${"object-left-top"}" src="${"https://www.zupimages.net/up/21/22/8o3k.png?fbclid=IwAR1pB6euzVFT6imo5Lx9AYLDbLTqi_NSc9l1nGp5zPGJdJZp4eMSs489Sk8"}" alt="${"Les M\xE9duses"}">
        <img class="${"object-right-top"}" src="${"https://www.zupimages.net/up/21/22/8o3k.png?fbclid=IwAR1pB6euzVFT6imo5Lx9AYLDbLTqi_NSc9l1nGp5zPGJdJZp4eMSs489Sk8"}" alt="${"Les M\xE9duses"}"></picture></div>

		Les M\xE9duses<br></h1>

	<h2>An ESSEC Initiative
	</h2></section>
<section class="${"text-indigo-600 font svelte-1lg7s1b"}"><div class="${"container px-5 py-24 mx-auto"}"><div class="${"text-center mb-20"}"><h1 class="${"sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4 svelte-1lg7s1b"}">Who we are</h1>
      <p class="${"text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s"}">Les M\xE9duses is involved in various working groups dealing with Sexual and Sexist Violence (SSV). Each working group analyses the existing dispositives and works with the school administration in question to propose recommendations.</p>
      <div class="${"flex mt-6 justify-center"}"><div class="${"w-16 h-1 rounded-full bg-purple-500 inline-flex"}"></div></div></div></div></section>
<section class="${"text-gray-600 body-font svelte-1lg7s1b"}">
<div class="${"py-12 bg-white"}"><div class="${"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"}"><div class="${"lg:text-center"}"><h2 class="${"text-base text-indigo-600 font-semibold tracking-wide uppercase"}">Our objectives</h2>
      <p class="${"mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"}">A better comprehension of Sexist and Sexual Violence
      </p>
      <p class="${"mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto"}">Discover the pillars of our actions
      </p></div>

    <div class="${"mt-10"}"><dl class="${"space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10"}"><div class="${"relative"}"><dt><div class="${"absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"}">
              <svg class="${"h-6 w-6"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}" aria-hidden="${"true"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"}"></path></svg></div>
            <p class="${"ml-16 text-lg leading-6 font-medium text-gray-900"}">Raise awareness and overcome taboos</p></dt>
          <dd class="${"mt-2 ml-16 text-base text-gray-500"}">We want to raise awareness of SSV issues among students through more appropriate formats and communication.
          </dd>
        </div><div class="${"relative"}"><dt><div class="${"absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"}">
              <svg class="${"h-6 w-6"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}" aria-hidden="${"true"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"}"></path></svg></div>
            <p class="${"ml-16 text-lg leading-6 font-medium text-gray-900"}">Support Structures</p></dt>
          <dd class="${"mt-2 ml-16 text-base text-gray-500"}">Create supportive and understandable support structures available to every student and promote them to students.
          </dd>
        </div><div class="${"relative"}"><dt><div class="${"absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"}">
              <svg class="${"h-6 w-6"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}" aria-hidden="${"true"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M13 10V3L4 14h7v7l9-11h-7z"}"></path></svg></div>
            <p class="${"ml-16 text-lg leading-6 font-medium text-gray-900"}">Student training</p></dt>
          <dd class="${"mt-2 ml-16 text-base text-gray-500"}">In order to be able to recognise and react to SSV, it is important to provide all students with appropriate and up-to-date training.
          </dd>
        </div><div class="${"relative"}"><dt><div class="${"absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"}">
              <svg class="${"h-6 w-6"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}" aria-hidden="${"true"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"}"></path></svg></div>
            <p class="${"ml-16 text-lg leading-6 font-medium text-gray-900"}">SSV in the working environment</p></dt>
          <dd class="${"mt-2 ml-16 text-base text-gray-500"}">Preparing and accompanying students to the existence of SSV in the professional world.
          </dd></div></dl></div></div></div></section>
  <section class="${"text-gray-600 body-font relative svelte-1lg7s1b"}"><div class="${"container px-5 py-24 mx-auto"}"><div class="${"flex flex-col text-center w-full mb-12"}"><h1 class="${"sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 svelte-1lg7s1b"}">Contact Us</h1>
        <p class="${"lg:w-2/3 mx-auto leading-relaxed text-base"}">Please do not hesitate to reach us !</p></div>
      <div class="${"lg:w-1/2 md:w-2/3 mx-auto"}"><div class="${"flex flex-wrap -m-2"}"><div class="${"p-2 w-1/2"}"><div class="${"relative"}"><label for="${"name"}" class="${"leading-7 text-sm text-gray-600"}">Name</label>
              <input type="${"text"}" id="${"name"}" name="${"name"}" class="${"w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"}"></div></div>
          <div class="${"p-2 w-1/2"}"><div class="${"relative"}"><label for="${"email"}" class="${"leading-7 text-sm text-gray-600"}">Email</label>
              <input type="${"email"}" id="${"email"}" name="${"email"}" class="${"w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"}"></div></div>
          <div class="${"p-2 w-full"}"><div class="${"relative"}"><label for="${"message"}" class="${"leading-7 text-sm text-gray-600"}">Message</label>
              <textarea id="${"message"}" name="${"message"}" class="${"w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"}"></textarea></div></div>
          <div class="${"p-2 w-full"}"><button class="${"flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"}">Button</button></div>
          <div class="${"p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center"}"><a class="${"text-indigo-500"}">example@email.com</a>
            <p class="${"leading-normal my-5"}">49 Smith St.
              <br>Saint Cloud, MN 56301
            </p>
            <span class="${"inline-flex"}"><a class="${"text-gray-500"}"><svg fill="${"currentColor"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" class="${"w-5 h-5"}" viewBox="${"0 0 24 24"}"><path d="${"M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"}"></path></svg></a>
              <a class="${"ml-4 text-gray-500"}"><svg fill="${"currentColor"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" class="${"w-5 h-5"}" viewBox="${"0 0 24 24"}"><path d="${"M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"}"></path></svg></a>
              <a class="${"ml-4 text-gray-500"}"><svg fill="${"none"}" stroke="${"currentColor"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" class="${"w-5 h-5"}" viewBox="${"0 0 24 24"}"><rect width="${"20"}" height="${"20"}" x="${"2"}" y="${"2"}" rx="${"5"}" ry="${"5"}"></rect><path d="${"M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"}"></path></svg></a>
              <a class="${"ml-4 text-gray-500"}"><svg fill="${"currentColor"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" class="${"w-5 h-5"}" viewBox="${"0 0 24 24"}"><path d="${"M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"}"></path></svg></a></span></div></div></div></div>
  </section>`;
});
var index = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Routes,
  prerender
});
var Donation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>To make a donation</title>`, ""}`, ""}

 

	<section class="${"text-gray-600 body-font"}"><div class="${"container px-5 py-24 mx-auto flex flex-wrap"}"><h2 class="${"sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5"}">This portal doesn&#39;t work for now as we are not available to take any donations for the moment, but thank you for thinking of us !</h2>
		  <div class="${"md:w-3/5 md:pl-6"}"><p class="${"leading-relaxed text-base"}">The association Les M\xE9duses needs your donations
				To allow us to create events and train the different members of ESSEC we need funds !</p>
			<div class="${"flex md:mt-4 mt-6"}"><a href="${"https://www.facebook.com/collectiflesmeduses"}" class="${"text-indigo-500 inline-flex items-center ml-4"}">Learn More
				<svg fill="${"none"}" stroke="${"currentColor"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" class="${"w-4 h-4 ml-2"}" viewBox="${"0 0 24 24"}"><path d="${"M5 12h14M12 5l7 7-7 7"}"></path></svg></a></div></div></div></section>`;
});
var donation = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Donation
});
var css = {
  code: "button.svelte-1gxh5l{background-color:#FFFFFF;color:#552B4D}button.svelte-1gxh5l:hover{background-color:#B366A4;color:#FFFFFF}",
  map: '{"version":3,"file":"contact.svelte","sources":["contact.svelte"],"sourcesContent":["<script>\\r\\n    let name;\\r\\n    let email;\\r\\n    let message;\\r\\n    const handleSubmit = () => {\\r\\n      console.log(name, email, message);\\r\\n      // alert(\\"Le message a bien \xE9t\xE9 envoy\xE9.\\");\\r\\n    }\\r\\n  <\/script>\\r\\n    \\r\\n  <!-- preventDefault or else the page will refresh when we submit. -->\\r\\n  <form on:submit={handleSubmit} action=\\"https://formsubmit.co/tiphaine.hersemeule@essec.edu\\" method=\\"POST\\">\\r\\n  \\r\\n    <div class=\\"container px-5 py-5 mx-auto\\">\\r\\n      <div class=\\"flex flex-col text-center w-full mb-12 \\">\\r\\n        <h1 class=\\"font-sans sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-600\\">Contact Us</h1>\\r\\n        <p class=\\"font-sans lg:w-2/3 mx-auto leading-relaxed text-base text-gray-600\\">Write your questions/requests on this form, we will answer you by mail as soon as possible.</p>\\r\\n      </div>\\r\\n      <div class=\\"lg:w-1/2 md:w-2/3 mx-auto \\">\\r\\n        <div class=\\"flex flex-wrap -m-2\\">\\r\\n          <div class=\\"p-2 w-1/2\\">\\r\\n            <div class=\\"relative\\">\\r\\n              <label for=\\"name\\" class=\\"font-sans leading-7 text-sm text-gray-600\\">First & last name</label>\\r\\n              <input type=\\"text\\" id=\\"name\\" name=\\"name\\" placeholder=\\"...\\" bind:value={name} required\\r\\n              class=\\"w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out\\">\\r\\n            </div>\\r\\n          </div>\\r\\n          <div class=\\"p-2 w-1/2\\">\\r\\n            <div class=\\"relative\\">\\r\\n              <label for=\\"email\\" class=\\"font-sans leading-7 text-sm text-gray-600\\">Email</label>\\r\\n              <input type=\\"email\\" id=\\"email\\" name=\\"email\\" placeholder=\\"...\\" bind:value={email} required\\r\\n              class=\\"w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out\\">\\r\\n            </div>\\r\\n          </div>\\r\\n          <div class=\\"p-2 w-full\\">\\r\\n            <div class=\\"relative\\">\\r\\n              <label for=\\"message\\" class=\\"font-sans leading-7 text-sm text-gray-600\\">Message</label>\\r\\n              <textarea id=\\"message\\" name=\\"message\\" placeholder=\\"...\\" bind:value={message} required\\r\\n               class=\\"w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out\\"></textarea>\\r\\n            </div>\\r\\n          </div>\\r\\n          <div class=\\"p-2 w-full\\">\\r\\n            <button type=\\"submit\\" class=\\"font-sans inline-flex items-center bg-gray-100 border-0 py-3 px-7 focus:outline-none hover:bg-gray-200 rounded-full text-base mt-4 md:mt-0 flex mx-auto\\">Send</button>\\r\\n          </div>\\r\\n          <!-- <input type=\\"hidden\\" name=\\"_next\\" value=\\"https://yourdomain.co/thanks.html\\"> -->\\r\\n          \\r\\n        </div>\\r\\n      </div>\\r\\n    </div>\\r\\n  </form>\\r\\n  <style>button {\\n  background-color: #FFFFFF;\\n  color:#552B4D;\\n}\\n\\nbutton:hover {\\n  background-color: #B366A4;\\n  color:#FFFFFF;\\n}</style>"],"names":[],"mappings":"AAkDS,MAAM,cAAC,CAAC,AACf,gBAAgB,CAAE,OAAO,CACzB,MAAM,OAAO,AACf,CAAC,AAED,oBAAM,MAAM,AAAC,CAAC,AACZ,gBAAgB,CAAE,OAAO,CACzB,MAAM,OAAO,AACf,CAAC"}'
};
var Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let name;
  let email;
  $$result.css.add(css);
  return `
  <form action="${"https://formsubmit.co/tiphaine.hersemeule@essec.edu"}" method="${"POST"}"><div class="${"container px-5 py-5 mx-auto"}"><div class="${"flex flex-col text-center w-full mb-12 "}"><h1 class="${"font-sans sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-600"}">Contact Us</h1>
        <p class="${"font-sans lg:w-2/3 mx-auto leading-relaxed text-base text-gray-600"}">Write your questions/requests on this form, we will answer you by mail as soon as possible.</p></div>
      <div class="${"lg:w-1/2 md:w-2/3 mx-auto "}"><div class="${"flex flex-wrap -m-2"}"><div class="${"p-2 w-1/2"}"><div class="${"relative"}"><label for="${"name"}" class="${"font-sans leading-7 text-sm text-gray-600"}">First &amp; last name</label>
              <input type="${"text"}" id="${"name"}" name="${"name"}" placeholder="${"..."}" required class="${"w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"}"${add_attribute("value", name, 1)}></div></div>
          <div class="${"p-2 w-1/2"}"><div class="${"relative"}"><label for="${"email"}" class="${"font-sans leading-7 text-sm text-gray-600"}">Email</label>
              <input type="${"email"}" id="${"email"}" name="${"email"}" placeholder="${"..."}" required class="${"w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"}"${add_attribute("value", email, 1)}></div></div>
          <div class="${"p-2 w-full"}"><div class="${"relative"}"><label for="${"message"}" class="${"font-sans leading-7 text-sm text-gray-600"}">Message</label>
              <textarea id="${"message"}" name="${"message"}" placeholder="${"..."}" required class="${"w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"}">${""}</textarea></div></div>
          <div class="${"p-2 w-full"}"><button type="${"submit"}" class="${"font-sans inline-flex items-center bg-gray-100 border-0 py-3 px-7 focus:outline-none hover:bg-gray-200 rounded-full text-base mt-4 md:mt-0 flex mx-auto svelte-1gxh5l"}">Send</button></div>
          </div></div></div>
  </form>`;
});
var contact = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Contact
});
var Team = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ``;
});
var team = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Team
});

// .svelte-kit/vercel/entry.js
var entry_default = async (req, res) => {
  const { pathname, searchParams } = new URL(req.url || "", "http://localhost");
  let body;
  try {
    body = await getRawBody(req);
  } catch (err) {
    res.statusCode = err.status || 400;
    return res.end(err.reason || "Invalid request body");
  }
  const rendered = await render({
    method: req.method,
    headers: req.headers,
    path: pathname,
    query: searchParams,
    rawBody: body
  });
  if (rendered) {
    const { status, headers, body: body2 } = rendered;
    return res.writeHead(status, headers).end(body2);
  }
  return res.writeHead(404).end();
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
