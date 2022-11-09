import { useForm } from 'react-hook-form';
import './buscador.scss';

export default function Header(){
    const {register, handleSubmit } = useForm();
    
    const onSubmit = (data) => {
        console.log(data)
    }

  return (
    <div className="nav">
      
    <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name
        <input type="text" {...register("name")} />
        </label>
        <button>Enviar</button>
    </form>
    <p>Barra buscadora, idiomas</p>
    </div>

  )
}
