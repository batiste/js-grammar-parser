

function isObject(value) {
  if (value === null || value === undefined) return false;
  else return value.constructor === Object || typeof value === 'object';
}

export function create(state, modificationTable, readOnly=false) {
  let callbacks = []
  function flush() {
    modificationTable = []
  }
  function listen(callback) {
    callbacks.push(callback)
  }
  function trigger (path) {
    callbacks.forEach(fct => fct(path))
  }
  const protectedProp = {
    flush,
    listen,
    trigger
  }
  function handler(currentState, path='', parentState) {
    function hasChanged() {
      return !!modificationTable.find(
        (modification) => modification.path.startsWith(path)
      )
    }
    return {
      get: function(obj, prop) {
        if(isObject(obj[prop])) {
          return new Proxy(currentState[prop], 
            handler(currentState[prop], path + '.' + prop, currentState))
        }
        if(protectedProp[prop]) {
          return protectedProp[prop]
        }
        if(prop === 'hasChanged') {
          return hasChanged
        }
        return obj[prop]
      },
      set: function(obj, prop, value) {
        if(readOnly) {
          throw new Error(`${obj}.${prop} is read only`)
        }
        if(protectedProp[prop]) {
          throw new Error(`You cannot redefine the ${prop} property in a proxied state`)
        }
        modificationTable.push({path: path + '.' + prop, action: 'set', value})
        obj[prop] = value
        trigger(path + '.' + prop)
        return true;
      },
      deleteProperty(target, prop) {
        if(readOnly) {
          throw new Error(`${target}.${prop} is read only`)
        }
        if (prop in target) {
          modificationTable.push({path: path + '.' + prop, action: 'delete'})
          delete target[prop];
        } else {
          return false
        }
        trigger(path + '.' + prop)
        return true
      }
    }
  }
  return new Proxy(state, handler(state));
}
