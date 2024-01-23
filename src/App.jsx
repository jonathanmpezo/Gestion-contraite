import './App.css'

// export default function App() {
//   return (
//     <main>
//       React ⚛️ + Vite ⚡ + Replit
//     </main>
//   )
// }
import {useState} from "react";
import {useForm} from "react-hook-form";

function App(){
  const [formData, setFormData] = useState({
    name:"",
    phone:"",
    email:"",
    age: "18",
    gender:"",
  });
  const {register, handleSubmit, formState: {errors}} = useForm({defaultValues:formData});

  const onSubmit = (data) => {
    console.log(data);
    alert('${data.name} a été enregistré');
  };
  return(
   <form onSubmit ={ handleSubmit(onSubmit)}>
     <div>
       <label>Nom</label>
       <input name="name" type="text"  {... register("name")}/>
       {errors.name && <span style={{color:"red"}}>ce champs est requis</span>}
     </div>
     
     <div>
       <label>Telephone</label>
       <input name="phone" type="text"  {... register("phone")}/>
        {errors.name && <span style={{color:"red"}}>ce champs est requis</span>}
     </div>

     <div>
        <label>Email</label>
        <input  name="mail" type="text"{... register("email")}/>
      </div>

     <div>
       <label>Age</label>
       <input type="number" name="age" {... register("age")}/>
     </div>
     <div>
       <label>Genre</label>
       <seclet name= "gender"{... register("gender")}>
         <option value="female" >Femme</option>
          <option value="Male" >Homme</option>
         <option value="Other" >Autre</option>

       </seclet>
     </div>
   </form>
  )
};
  export default App
  