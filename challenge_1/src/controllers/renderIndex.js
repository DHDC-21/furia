
export default function renderHome(req, res){
    res.render('layout.html', {
        title: 'FURIA CS',
        page: 'index'
    });
}
