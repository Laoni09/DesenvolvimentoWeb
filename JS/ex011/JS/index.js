var frase = window.prompt("Digite uma frase: ")
document.write(frase + '<br>')
tamanho = frase.length
for(var i=0; i < tamanho;){
    document.write("<br>Caractere na posição " + i + " : " + frase.charAt(i))
    i++;
}
document.write("<br><br>Primeiro caractere: " + frase.charAt(0) + "<br />")
document.write("Último caractere: " + frase.charAt(frase.length-1) + "<br>")
/*o método chaAr() retorna o caractere da posição especificada na string (do indice especificado)*/

hoje = new Date();
document.write("Data e hora completa: " + hoje)
document.write("<br>Apenas o dia: " + hoje.getDate())
document.write("<br>Apenas o mês: " + hoje.getMonth())
document.write("<br>Apenas o ano: " + hoje.getFullYear())
document.write("<br>Apenas o dia da semana: " + hoje.getDay())
document.write("<br>Apenas a hora: " + hoje.getHours() + ":" + hoje.getMinutes())