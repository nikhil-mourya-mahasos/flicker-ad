const loading = {
    mounted(el, binding) {
        
        // Create a loading spinner element
        const spinnerParent = document.createElement('div');
        spinnerParent.className = 'relative h-full';

        const spinner = document.createElement('div');
        spinner.className = 'loading-spinner ';
        
        spinnerParent.appendChild(spinner);
       
        spinnerParent.style.display = 'none'; // Initially hidden

        el.appendChild(spinnerParent);

        // Store the spinner element in the target element's dataset
        el.dataset.spinner = spinnerParent;

        if (binding.value) {
            spinnerParent.style.display = 'block';
        } else {
            spinnerParent.style.display = 'none';
        }
    },
    updated(el, binding) {
        const spinner = el.dataset.spinner;
        if (binding.value) {
            spinner.style.display = 'block';
        } else {
            spinner.style.display = 'none';
        }
    },
    unMounted(el) {
        const spinner = el.dataset.spinner;
        if (spinner) {
            el.removeChild(spinner);
        }
    }
}
export default loading
