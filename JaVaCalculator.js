
        function appendToResult(value) {
            document.getElementById('result').value += value;
        }

        function calculate() {
            try {
                document.getElementById('result').value = eval(document.getElementById('result').value);
            } catch (error) {
                alert("Invalid input");
            }
        }

        function clearResult() {
            document.getElementById('result').value = '';
        }
