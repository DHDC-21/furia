
export default function renderHome(req, res){
    const botMessage = `
        <p>Olá furiosos!</p>
        <p>Use o comando <strong>help</strong> para começar a usar o chatbot.</p>
    `;

    res.render('layout.html', {
        title: 'FURIA CS',
        page: 'index',
        botMessage: botMessage,
    });
}
