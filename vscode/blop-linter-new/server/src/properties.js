module.exports = {
  'DTRACE_NET_SERVER_CONNECTION': ['length', 'name', 'arguments', 'caller', 'prototype'],
  'DTRACE_NET_STREAM_END': ['length', 'name', 'arguments', 'caller', 'prototype'],
  'DTRACE_HTTP_SERVER_REQUEST': ['length', 'name', 'arguments', 'caller', 'prototype'],
  'DTRACE_HTTP_SERVER_RESPONSE': ['length', 'name', 'arguments', 'caller', 'prototype'],
  'DTRACE_HTTP_CLIENT_REQUEST': ['length', 'name', 'arguments', 'caller', 'prototype'],
  'DTRACE_HTTP_CLIENT_RESPONSE': ['length', 'name', 'arguments', 'caller', 'prototype'],
  'global': ['Object', 'Function', 'Array', 'Number', 'parseFloat', 'parseInt', 'Infinity', 'NaN', 'undefined', 'Boolean', 'String', 'Symbol', 'Date', 'Promise', 'RegExp', 'Error', 'EvalError', 'RangeError', 'ReferenceError', 'SyntaxError', 'TypeError', 'URIError', 'JSON', 'Math', 'console', 'Intl', 'ArrayBuffer', 'Uint8Array', 'Int8Array', 'Uint16Array', 'Int16Array', 'Uint32Array', 'Int32Array', 'Float32Array', 'Float64Array', 'Uint8ClampedArray', 'BigUint64Array', 'BigInt64Array', 'DataView', 'Map', 'Set', 'WeakMap', 'WeakSet', 'Proxy', 'Reflect', 'decodeURI', 'decodeURIComponent', 'encodeURI', 'encodeURIComponent', 'escape', 'unescape', 'eval', 'isFinite', 'isNaN', 'SharedArrayBuffer', 'Atomics', 'BigInt', 'WebAssembly', 'DTRACE_NET_SERVER_CONNECTION', 'DTRACE_NET_STREAM_END', 'DTRACE_HTTP_SERVER_REQUEST', 'DTRACE_HTTP_SERVER_RESPONSE', 'DTRACE_HTTP_CLIENT_REQUEST', 'DTRACE_HTTP_CLIENT_RESPONSE', 'global', 'process', 'GLOBAL', 'root', 'Buffer', 'clearImmediate', 'clearInterval', 'clearTimeout', 'setImmediate', 'setInterval', 'setTimeout', 'URL', 'URLSearchParams'],
  'process': ['title', 'version', 'versions', 'arch', 'platform', 'release', 'argv', 'execArgv', 'env', 'pid', 'features', 'ppid', 'execPath', 'debugPort', '_debugProcess', '_debugEnd', '_startProfilerIdleNotifier', '_stopProfilerIdleNotifier', 'abort', 'chdir', 'umask', '_getActiveRequests', '_getActiveHandles', '_kill', 'cwd', 'dlopen', 'reallyExit', 'uptime', 'getuid', 'geteuid', 'getgid', 'getegid', 'getgroups', '_rawDebug', 'moduleLoadList', 'binding', '_linkedBinding', '_events', '_eventsCount', '_maxListeners', '_fatalException', 'domain', '_exiting', 'assert', 'config', 'setUncaughtExceptionCaptureCallback', 'hasUncaughtExceptionCaptureCallback', 'emitWarning', 'nextTick', '_tickCallback', 'stdout', 'stderr', 'stdin', 'openStdin', 'initgroups', 'setegid', 'seteuid', 'setgid', 'setuid', 'setgroups', 'hrtime', 'cpuUsage', 'memoryUsage', 'exit', 'kill', 'argv0', 'allowedNodeEnvironmentFlags', 'mainModule'],
  'Buffer': ['length', 'name', 'prototype', 'poolSize', 'from', 'of', 'alloc', 'allocUnsafe', 'allocUnsafeSlow', 'isBuffer', 'compare', 'isEncoding', 'concat', 'byteLength'],
  'clearImmediate': ['length', 'name', 'prototype'],
  'clearInterval': ['length', 'name', 'prototype'],
  'clearTimeout': ['length', 'name', 'prototype'],
  'setImmediate': ['length', 'name', 'prototype'],
  'setInterval': ['length', 'name', 'prototype'],
  'setTimeout': ['length', 'name', 'prototype'],
  'Infinity': [],
  'eval': ['length', 'name'],
  'isFinite': ['length', 'name'],
  'isNaN': ['length', 'name'],
  'parseFloat': ['length', 'name'],
  'parseInt': ['length', 'name'],
  'decodeURI': ['length', 'name'],
  'decodeURIComponent': ['length', 'name'],
  'encodeURI': ['length', 'name'],
  'encodeURIComponent': ['length', 'name'],
  'escape': ['length', 'name'],
  'unescape': ['length', 'name'],
  'Object': ['length', 'name', 'prototype', 'assign', 'getOwnPropertyDescriptor', 'getOwnPropertyDescriptors', 'getOwnPropertyNames', 'getOwnPropertySymbols', 'is', 'preventExtensions', 'seal', 'create', 'defineProperties', 'defineProperty', 'freeze', 'getPrototypeOf', 'setPrototypeOf', 'isExtensible', 'isFrozen', 'isSealed', 'keys', 'entries', 'values'],
  'Function': ['length', 'name', 'prototype'],
  'Boolean': ['length', 'name', 'prototype'],
  'Symbol': ['length', 'name', 'prototype', 'for', 'keyFor', 'asyncIterator', 'hasInstance', 'isConcatSpreadable', 'iterator', 'match', 'replace', 'search', 'species', 'split', 'toPrimitive', 'toStringTag', 'unscopables'],
  'Error': ['length', 'name', 'prototype', 'captureStackTrace', 'stackTraceLimit'],
  'EvalError': ['length', 'name', 'prototype'],
  'RangeError': ['length', 'name', 'prototype'],
  'ReferenceError': ['length', 'name', 'prototype'],
  'SyntaxError': ['length', 'name', 'prototype'],
  'TypeError': ['length', 'name', 'prototype'],
  'URIError': ['length', 'name', 'prototype'],
  'Number': ['length', 'name', 'prototype', 'isFinite', 'isInteger', 'isNaN', 'isSafeInteger', 'parseFloat', 'parseInt', 'MAX_VALUE', 'MIN_VALUE', 'NaN', 'NEGATIVE_INFINITY', 'POSITIVE_INFINITY', 'MAX_SAFE_INTEGER', 'MIN_SAFE_INTEGER', 'EPSILON'],
  'Math': ['abs', 'acos', 'acosh', 'asin', 'asinh', 'atan', 'atanh', 'atan2', 'ceil', 'cbrt', 'expm1', 'clz32', 'cos', 'cosh', 'exp', 'floor', 'fround', 'hypot', 'imul', 'log', 'log1p', 'log2', 'log10', 'max', 'min', 'pow', 'random', 'round', 'sign', 'sin', 'sinh', 'sqrt', 'tan', 'tanh', 'trunc', 'E', 'LN10', 'LN2', 'LOG10E', 'LOG2E', 'PI', 'SQRT1_2', 'SQRT2'],
  'Date': ['length', 'name', 'prototype', 'now', 'parse', 'UTC'],
  'String': ['length', 'name', 'prototype', 'fromCharCode', 'fromCodePoint', 'raw'],
  'RegExp': ['length', 'name', 'prototype', 'input', '$_', 'lastMatch', '$&', 'lastParen', '$+', 'leftContext', '$`', 'rightContext', '$\'', '$1', '$2', '$3', '$4', '$5', '$6', '$7', '$8', '$9'],
  'Array': ['length', 'name', 'prototype', 'isArray', 'from', 'of'],
  'Int8Array': ['length', 'name', 'prototype', 'BYTES_PER_ELEMENT'],
  'Uint8Array': ['length', 'name', 'prototype', 'BYTES_PER_ELEMENT'],
  'Uint8ClampedArray': ['length', 'name', 'prototype', 'BYTES_PER_ELEMENT'],
  'Int16Array': ['length', 'name', 'prototype', 'BYTES_PER_ELEMENT'],
  'Uint16Array': ['length', 'name', 'prototype', 'BYTES_PER_ELEMENT'],
  'Int32Array': ['length', 'name', 'prototype', 'BYTES_PER_ELEMENT'],
  'Uint32Array': ['length', 'name', 'prototype', 'BYTES_PER_ELEMENT'],
  'Float32Array': ['length', 'name', 'prototype', 'BYTES_PER_ELEMENT'],
  'Float64Array': ['length', 'name', 'prototype', 'BYTES_PER_ELEMENT'],
  'Map': ['length', 'name', 'prototype'],
  'Set': ['length', 'name', 'prototype'],
  'WeakMap': ['length', 'name', 'prototype'],
  'WeakSet': ['length', 'name', 'prototype'],
  'Promise': ['length', 'name', 'prototype', 'all', 'race', 'resolve', 'reject'],
  'Reflect': ['defineProperty', 'deleteProperty', 'apply', 'construct', 'get', 'getOwnPropertyDescriptor', 'getPrototypeOf', 'has', 'isExtensible', 'ownKeys', 'preventExtensions', 'set', 'setPrototypeOf'],
  'Proxy': ['length', 'name', 'revocable'],
  'ArrayBuffer': ['length', 'name', 'prototype', 'isView'],
  'SharedArrayBuffer': ['length', 'name', 'prototype'],
  'Atomics': ['load', 'store', 'add', 'sub', 'and', 'or', 'xor', 'exchange', 'compareExchange', 'isLockFree', 'wait', 'wake', 'notify'],
  'DataView': ['length', 'name', 'prototype'],
  'JSON': ['parse', 'stringify'],
  'console': ['_stdout', '_stderr', '_ignoreErrors', '_times', '_stdoutErrorHandler', '_stderrErrorHandler', 'log', 'debug', 'info', 'dirxml', 'warn', 'error', 'dir', 'time', 'timeEnd', 'timeLog', 'trace', 'assert', 'clear', 'count', 'countReset', 'group', 'groupCollapsed', 'groupEnd', 'table', 'Console', 'markTimeline', 'profile', 'profileEnd', 'timeline', 'timelineEnd', 'timeStamp', 'context'],
};