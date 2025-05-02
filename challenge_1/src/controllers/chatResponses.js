export default function chatResponses(userMessage) {
   
    let cleanMessage = userMessage.trim().toLowerCase();

    // Comando help
    if (cleanMessage.includes('help')) {
        return `
        Aqui estão os comandos disponíveis para o FuriaBot:
        <ul class="list-group list-group-flush">
            <li class="list-group-item"><strong>help</strong> – Lista todos os comandos disponíveis.</li>
            <li class="list-group-item"><strong>furia</strong> – Mostra informações sobre o time FURIA.</li>
            <li class="list-group-item"><strong>jogadores</strong> – Exibe os jogadores atuais do time.</li>
            <li class="list-group-item"><strong>partida</strong> – Informa quando será a próxima partida.</li>
            <li class="list-group-item"><strong>redes</strong> – Mostra os links das redes sociais da FURIA.</li>
        </ul>
        Use os comandos com sabedoria, furioso!
        `;

    }

    // Informações sobre a FURIA
    else if (cleanMessage.includes("furia")) {
        return `
            <p>A <strong>FURIA</strong> é uma organização brasileira de eSports conhecida principalmente pelo seu time de <strong>CS:GO</strong>. Fundada em 2017, ela rapidamente se destacou no cenário internacional com um estilo de jogo agressivo e apaixonado.</p>
        `;
    }

    // Jogadores atuais do time
    else if (cleanMessage.includes("jogadores")) {
        return `
            <p>Os jogadores atuais da FURIA são:</p>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><strong>yuurih</strong> – Rifler</li>
                <li class="list-group-item"><strong>kscerato</strong> – Rifler</li>
                <li class="list-group-item"><strong>arT</strong> – Capitão / Entry</li>
                <li class="list-group-item"><strong>chelo</strong> – Lurker</li>
                <li class="list-group-item"><strong>fallen</strong> – AWPer / IGL</li>
            </ul>
        `;
    }

    // Próxima partida
    else if (cleanMessage.includes("partida")) {
        return `
            <p>A próxima partida da <strong>FURIA</strong> será em breve! Fique ligado nas redes sociais e no calendário oficial para atualizações sobre os torneios e horários.</p>
        `;
    }

    // Redes sociais da FURIA
    else if (cleanMessage.includes("redes")) {
        return `
            <p>Siga a FURIA nas redes sociais:</p>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><a href="https://twitter.com/FURIA" target="_blank">Twitter</a></li>
                <li class="list-group-item"><a href="https://www.instagram.com/furiagg/" target="_blank">Instagram</a></li>
                <li class="list-group-item"><a href="https://www.twitch.tv/furiagg" target="_blank">Twitch</a></li>
                <li class="list-group-item"><a href="https://www.youtube.com/@FURIA" target="_blank">YouTube</a></li>
            </ul>
        `;
    }

    // Comandos diversos
    else if (cleanMessage.includes('olá') || cleanMessage.includes('ola')) {
        return 'Olá mundo!';
    }
    else if (cleanMessage.includes('hello')) {
        return 'Hello world!';
    }
    
    else {
        return 'Desculpe, eu não entendi sua pergunta! <br> Use o comando <strong>help</strong> para ver todos os comandos.';
    }
}
