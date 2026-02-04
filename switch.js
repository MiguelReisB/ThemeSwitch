const themeToggle = document.getElementById('checkbox');
//Busca o elemento cuja classe é 'checkbox'
const body = document.body;

const setTema = (theme) => {
    if (theme === 'dark') {
        body.classList.add('dark');
        if (themeToggle) themeToggle.checked = true;
    } else {
        body.classList.remove('dark');
        if (themeToggle) themeToggle.checked = false;
    }
};
//Caso checkbox estiver marcado = aplica tema 'dark', se não estiver, remove o tema 'dark'

const temaSalvo = localStorage.getItem('tema') || 'light'; 
// 'light' como padrão
setTema(temaSalvo);

if (themeToggle) {
    themeToggle.addEventListener('change', () => {
        const novoTema = themeToggle.checked ? 'dark' : 'light';
        localStorage.setItem('tema', novoTema);
        setTema(novoTema);
    });
}
//e salva a última escolha de tema do usuário ao atualizar a página