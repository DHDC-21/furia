import chatResponses from "./chatResponses.js";

export default function sendMessage(req,res){
    // console.log("Rota '/chat' acionada!");
    
    const userMessage = req.body.inputMessage;
    
    if (userMessage.trim()==(null || undefined || "")) {
        console.log("Recebido uma mensagem nula!")
        return
    } else {
        console.log('Mensagem recebida: ', userMessage);
        
        let botMessage = chatResponses(userMessage);
        
        res.render('chat/message',{
            userMessage: userMessage,
            botMessage: botMessage,
        })
    }
}