let ano = new Date;
let text = document.querySelectorAll("footer > p");

if(ano.getFullYear() != 2022){
    text[0].innerHTML = `${text[0].innerHTML} 2022 - ${ano.getFullYear()} direitos reservados.`;
} else{
    text[0].innerHTML = `${text[0].innerHTML} ${ano.getFullYear()} direitos reservados.`;
}
