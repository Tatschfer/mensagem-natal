var mensagens = [
    'Que o seu Natal seja repleto de boas energias, paz, amor e felicidade!',
    'O ano que se aproxima carrega consigo a esperança por dias melhores. Neste Natal, reflita sobre como foi seu ano, sobre quem você é e sobre seu futuro. Aproveite o tempo de renovação!',
    'Parabéns pela sua conquista. Você chegou até aqui e isso é incrível. Neste Natal, olhe para a sua caminhada e reflita sobre tudo o que passou para ser a pessoa que és.',
    'Que em 2022, você conquiste tudo o que deseja e que se cure das dores que guarda dentro de ti. Paz, alegria, amor e, sobretudo, esperança!',
    'Só você sabe como foi difícil a sua jornada. Valorize seu esforço e aproveite para celebrar ao lado de quem você ama!',
    'Você superou seus piores dias. Por isso celebre a sua jornada e aproveite o Natal para compartilhar amor, sabedoria e esperança.',
    'Aproveite o Natal para se perdoar pelo que aconteceu no ano que passou. Todos tivemos momentos difíceis, mas chegamos até aqui e somos merecedores de cada minuto de alegria, paz e serenidade que possamos compartilhar neste momento.',
    'Este ano não foi fácil, mas passou! Em 2022, seja a sua melhor versão.'

]

var minhasMensagens = mensagens[Math.floor(Math.random() * mensagens.length)];
document.getElementById(botaoAperte).addEventListener('click');

function abreModal(){
    Swal.fire({
        title: minhasMensagens,
        width: 500,
        padding: '2em',
        color: '#FFFFFF',
        background: '#00000005 url(bgpopup.png)',
        backdrop: `
          rgba(22,83,78,255,0)
          left top
          no-repeat
        `
      });
};

