
const useCutomCookie = () => {
  const store = new Map();
  Object.defineProperty(document, "MyCookie", {
    configurable: true,
    set: (val) => {
      //console.log(val);
      const { key, value, options } = parseCookieString(val);

      let expiry = Infinity;
      if (options["max-age"]) {
        expiry = Date.now() + options["max-age"] * 1000;
      }

      store.set(key, { value, expiry });
      
    },
    get: (val) => {
      const time = Date.now();
      const cookies = [];
      
      for (let [key, { value, expiry }] of store) {
        
        if (expiry <= time) {
          store.delete[key];
        } else {
          cookies.push(`${key}=${value}`);
        }
      }

      return cookies.join("; ");
    },
  });

  const parseCookieString = (str) => {
    const [nameValue, ...rest] = str.split(";");
    const [key, value] = seperateKeyValue(nameValue);

    const options = {};
    for (let option of rest) {
      const [key, value] = seperateKeyValue(option);
      options[key] = value;
    }

    return { key, value, options };
  };

  const seperateKeyValue = (str) => {
    return str.split("=").map((s) => s.trim());
  };
};
useCutomCookie();

document.MyCookie = "name=rash; max-age=1";
document.MyCookie = "blog=learner";

console.log(document.MyCookie);
setTimeout(() => {
  console.log(document.MyCookie);
}, 1500);