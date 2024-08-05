// src/directives/loading.js
export default {
    bind(el, binding) {
        // Create a loading spinner element
        const spinner = document.createElement('div');
        spinner.className = 'loading-spinner';
        spinner.style.display = 'none'; // Initially hidden

        // Append the spinner to the target element
        el.appendChild(spinner);

        // Store the spinner element in the target element's dataset
        el.dataset.spinner = spinner;

        // Show or hide the spinner based on the binding value
        if (binding.value) {
            spinner.style.display = 'block';
        } else {
            spinner.style.display = 'none';
        }
    },
    update(el, binding) {
        const spinner = el.dataset.spinner;
        if (binding.value) {
            spinner.style.display = 'block';
        } else {
            spinner.style.display = 'none';
        }
    },
    unbind(el) {
        const spinner = el.dataset.spinner;
        if (spinner) {
            el.removeChild(spinner);
        }
    }
};
