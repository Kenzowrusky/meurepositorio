function Projetos()
{
    return (
    <>

       <section id="projetos">
            <h2>Meus Projetos</h2>
            <div className="projetos-grid">
                <div className = "projeto-card">
                    <img src="/projeto1.png" alt="Projeto 1" />
                    <h3>Projeto 1</h3>
                    <p>Meu primeiro projeto foi desenvolvido durante a matéira de SI202, e consiste em um sistema de gerenciamento de agenda de dogsitter, cuidadores de cães, sistema esse responsável por organizar agenda, consumidores, colaboradores e garantindo uma melhora da qualidade para a empresa que oferece esse serviço.</p>
                </div>
                <div className = "projeto-card">
                    <img src="/Projeto2.png" alt="Projeto 2" />
                    <h3>Projeto 2</h3>
                    <p>Meu segundo projeto foi desenvolvido durante a matéria de SI202, e consiste em um programa de manipulação de arquivos, responsável por guardar informações de alunos da faculdade em um banco de dados.</p>
                </div>
            </div>
        </section>
    </>
     );
}

export default Projetos;