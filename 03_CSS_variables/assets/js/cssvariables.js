// jshint esversion:6
(function () {
    window.onload = function () {
        const inputs = document.querySelectorAll('.controls input');

        function handleUpdate() {
            const suffix = this.dataset.suffix || '';
            document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
            console.log(this.name);
        }

        inputs.forEach(input => input.addEventListener('change', handleUpdate));
        inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
    };
})();
