const $ = (selector) => {

    const elements = document
        .querySelectorAll(selector);

    return {
        html: (content) => {
            elements.forEach(element => {
                element.innerHTML = content;
            })
        }, 
        append: (content) => {
            elements.forEach(el => {
                if (typeof content === 'string') {
                    el.insertAdjacentHTML('beforeend', content);
                } else {
                    el.appendChild(content);
                }
            })
        }, 
        remove: () => {
            elements.forEach(el => {
                el.remove();
            });
        }, 
        val: (value) => {
            if (value === undefined) {
                return elements[0].value;
            } else {
                elements.forEach(el => {
                    el.value = value;
                })
            }
        }, 
        on: (event, callback) => {
            elements.forEach(el => {
                el.addEventListener(event, callback);
            })
        }
    }
}

$.getJSON = (url, callback) => {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('ajax error')
            }
            return response.json();
        })
        .then(data => callback(data))
        .catch(error => console.log(error));
}