const inputText = document.getElementById("inputText");
        const outputText = document.getElementById("outputText");

        inputText.addEventListener("input", () => {
            const input = inputText.value;
            let output = "";
            
            for (let i = 0; i < input.length; i++) {
                output += i % 2 === 0 ? input[i].toLowerCase() : input[i].toUpperCase();
            }
            
            outputText.value = output;
        });

        function copyText() {
            outputText.select();
            document.execCommand("copy");
            alert("Texte copié dans le presse-papiers !");
        }
        function downloadImage() {
            const link = document.createElement("a");
            link.href = "/src/Mocking-Spongebob.jpg"; 
            link.download = "Mocking-Spongebob.jpg";  
            link.click(); 
        }