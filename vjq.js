//vjq.js
// Vanilla JavaScript jQuery replacement
// in <100 lines of code!
const $ = (selector) => {
    // const elements = document.querySelectorAll(selector);
    const elements = selector === document ? [document] : document.querySelectorAll(selector);

    return {
        html: (content) => {
            elements.forEach(el => el.innerHTML = content);
        },
        on: (event, callback) => {
            elements.forEach(el => el.addEventListener(event, callback));
        },
        addClass: (className) => {
            elements.forEach(el => el.classList.add(className));
        },
        removeClass: (className) => {
            elements.forEach(el => el.classList.remove(className));
        },
        toggleClass: (className) => {
            elements.forEach(el => el.classList.toggle(className));
        }, 
        css: (property, value) => {
            elements.forEach(el => el.style[property] = value);
        }, 
        append: (content) => {
            elements.forEach(el => {
                if (typeof content === "string") {
                    el.insertAdjacentHTML("beforeend", content);
                } else if (content instanceof Node) {
                    el.appendChild(content);
                }
            });
        }, 
        remove: () => {
            elements.forEach(el => el.remove());
        },
        val: (value) => {
            if (value === undefined) {
                return elements[0]?.value; // Get value if no argument is provided
            }
            elements.forEach(el => el.value = value); // Set value
        },
        prop: (property, value) => {
            if (value === undefined) {
                return elements[0]?.[property]; // Get property if no value provided
            }
            elements.forEach(el => el[property] = value); // Set property
        }
    };
};

$.getJSON = (url, callback) => {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => callback(data))
        .catch(error => console.error("Fetch error:", error));
};

$.ajax = (options) => {
    const {
        url,
        type = "GET",
        data = null,
        contentType = "application/json",
        dataType = "json",
        success = () => {},
        error = () => {},
        headers = {}
    } = options;

    fetch(url, {
        method: type.toUpperCase(),
        headers: {
            "Content-Type": contentType,
            ...headers
        },
        body: type.toUpperCase() === "GET" || !data ? null : JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return dataType === "json" ? response.json() : response.text();
    })
    .then(data => success(data))
    .catch(err => error(err));
};

