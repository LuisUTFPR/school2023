export default function NewCourse(){
   async function saveCourse(){
        console.log("Acessou a função.")
    }
    return(
        <div>
        <h1 className ="text=white text=center text-4xl">Cadastrar cursos</h1>
            <form>
                <input type = "text" name="title" placeholder = "digite o titulo do curso"/><br/>
                <input type = "text" name= "description" placeholder= "digite a descrição do curso"/><br/>
                <input type = "text" name = "url" placeholder = "digite a url da imagem"/><br/>
                <button formAction={saveCourse} className="text-white"> Salvar  </button>
            </form>
        </div>
    )



}