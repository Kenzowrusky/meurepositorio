function Projetos()
{
    return (
    <>

       <section id="projetos">
            <h2>Meus Projetos</h2>
            <div className="projetos-grid">
                <div className = "projeto-card">
                    <img src="https://moodle.ggte.unicamp.br/pluginfile.php/4070889/user/icon/boost/f1?rev=24034989" alt="Foto cadeia 1" />
                    <h3>Projeto 1</h3>
                    <p>Descrição do projeto 1.</p>
                </div>
                <div className = "projeto-card">
                    <img src="https://th.bing.com/th/id/OIP.ZKyFnEcxUfX022tBCe7y7gHaEK?w=293&h=180&c=7&r=0&o=7&pid=1.7&rm=3" />
                    <h3>Projeto 2</h3>
                    <p>Descrição do projeto 2.</p>
                </div>
                <div className = "projeto-card">
                    <img src="https://th.bing.com/th/id/OIP.FvZGKkQoUoakCfENT0HdnAHaE8?w=272&h=181&c=7&r=0&o=7&pid=1.7&rm=3" />
                    <h3>Projeto 3</h3>
                    <p>Descrição do projeto 3.</p>
                </div>
            </div>
        </section>
    </>
     );
}

export default Projetos;