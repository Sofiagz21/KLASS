/*PAGINA regiter*/
import {useState} from 'react'

const Register =()=>{
    const [name,setName]= useState(" ");
    const [secondName,setSecondName]= useState(" ");
        
    const [lastName,setLastName]= useState(" ");
    const [secondLastName,setSecondLastName]= useState(" ");
    
    const [email,setEmail]= useState(" ");
    const [password,setPassword]= useState(" ");
    
    const [adulto,setAdulto]= useState(" ");
    const [nino,setNino]= useState(" ");
    
    const handleSubmit= e =>{
        /*lo primero que debe hacer es usar el evento o evitar la función predeterminada 
        para que la base no se vuelva a cargar porque de forma predeterminada, 
        cuando se envía el formulario, la página se recarga*/ 
        e.preventDefault();
        /* luego íbamos a enviar toda esta información,
         a nuestro backend para que podamos el usuario en la base de datos*/
        console.table({name,secondName,lastName,secondLastName,email,password,adulto,nino})
    };
    
    return(
        <>
            <h1 className="jumbotron text-center bg-primary square ">Register</h1>
            <div className="container col-md-4 offset-md-4 pb-5">
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        className="form-control mb-4 p-4" 
                        value={name} 
                        onChange={(e)=> setName(e.target.value)} 
                        placeholder="Primer nombre"
                        required
                    />
                     <input 
                        type="text" 
                        className="form-control mb-4 p-4" 
                        value={secondName} 
                        onChange={(e)=> setSecondName(e.target.value)} 
                        placeholder="Segundo nombre"
                    />
                     <input 
                        type="text" 
                        className="form-control mb-4 p-4" 
                        value={lastName} 
                        onChange={(e)=> setLastName(e.target.value)} 
                        placeholder="Primer apellido"
                        required
                    />
                    <input 
                        type="text" 
                        className="form-control mb-4 p-4" 
                        value={secondLastName} 
                        onChange={(e)=> setSecondLastName(e.target.value)} 
                        placeholder="Segundo apellido"
                        required
                    />
                    <input 
                        type="email" 
                        className="form-control mb-4 p-4" 
                        value={email} 
                        onChange={(e)=> setEmail(e.target.value)} 
                        placeholder="Ingresa tu email"
                        required
                    />
                    <input 
                        type="password" 
                        className="form-control mb-4 p-4" 
                        value={password} 
                        onChange={(e)=> setPassword(e.target.value)} 
                        placeholder="Ingresa tu contraseña"
                        required
                    />
                    <label for="options">Selecciona el modo</label>
                    <select id="options" name="options">
                        <option
                            className="form-control mb-2 p-4"
                            value={adulto} 
                            onChange={(e)=> setAdulto(e.target.value)} 
                        >Adulto</option>
                        <option
                            className="form-control mb-2 p-4"
                            value={nino} 
                            onChange={(e)=> setNino(e.target.value)} 
                        >Niño</option>
                    </select>
                    <button type="submit" className="btn btn-bloack btn-primary p-2">
                        Crear Cuenta
                    </button>
                   

                        
                
                
                </form>
            </div>

        </>
    );
};

export default Register;