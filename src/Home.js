import React, { Component } from 'react';
import'./Home.css';
import fire from './Fire';
import axios from "axios";
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

const url="http://4523934ca65e.ngrok.io/api/v1/users";
const urld="http://4523934ca65e.ngrok.io/api/v1/users/";



// function Home (props) {


//             // super(props);
//             // this.logout = this.logout.bind(this);

            

  


//       return (
//               <div className="">
//              {/* <h1>Welcome</h1>
//              <button onClick={this.logout}>logout</button> */}

//              <table id="tabla" className="table">
//              class="thead-dark"
//       <thead className="thead-dark">
//         <tr>
//           <th scope="col">#Mesa</th>
//           <th scope="col">Pedido</th>
//           <th scope="col">Acompañado</th>
//           <th scope="col">Bebida</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <th scope="row">1</th>
//             <td></td>
//             <td>{props.Tacos_de_res}</td>
//           <td>Co</td>
//         </tr>
     
//       </tbody>
//     </table>
//              </div>

             

         
// );

  

// }

// export default Home;

class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
       
    }


    logout() {
        fire.auth().signOut();
    }

    state={
      data:[],
      modalInsertar: false,
      modalEliminar: false,
      form:{
        id: '',
        Nombre: '', 
        Mesa: '',
        Bebida: '',
        Salsa: '',
        Numero_telefonico: '',
        Direccion:'',
        Referencia: '',
        Obserbaciones:'' ,
        Taco_de_res: '',
        Taco_de_pastor: '',
        Taco_de_puerco: '',
        Taco_de_tripa:'',
        Torta_de_res: '',
        Torta_de_pastor: '',
        Torta_de_puerco:'' ,
        tipoModal: '',
      }
    }
    
    
    peticionGet=()=>{
    axios.get(url).then(response=>{
      this.setState({data: response.data});
    }).catch(error=>{
      console.log(error.message);
    })
    }
    
    peticionPost=async()=>{
      delete this.state.form._id;
     await axios.post(url,this.state.form).then(response=>{
        this.modalInsertar();
        this.peticionGet();
      }).catch(error=>{
        console.log(error.message);
      })
    }
    
    peticionPut=()=>{
      axios.put(urld+this.state.form.id, this.state.form).then(response=>{
        this.modalInsertar();
        this.peticionGet();
      })
    }
    
    peticionDelete=()=>{
      axios.delete(urld+this.state.form.id).then(response=>{
        this.setState({modalEliminar: false});
        this.peticionGet();
      }).catch(error=>{
        console.log('Que onda',error.message);
      })
    }
    
    modalInsertar=()=>{
      this.setState({modalInsertar: !this.state.modalInsertar});
    }
    
    seleccionarEmpresa=(users)=>{
      this.setState({
        tipoModal: 'actualizar',
        form: {
          id: users._id,
          Nombre: users.Nombre,
          Mesa: users. Mesa,
          Numero_telefonico: users. Numero_telefonico,
          Direccion: users.Direccion,
          Referencia: users.Referencia,
          Obserbaciones: users.Obserbaciones,
          Bebida: users.Bebida,
          Salsa: users.Salsa,
          Taco_de_res: users.Taco_de_res,
          Taco_de_pastor: users.Taco_de_pastor,
          Taco_de_puerco: users.Torta_de_puerco,
          Taco_de_tripa: users.Taco_de_tripa,
          Torta_de_tripa: users.Torta_de_tripa,
          Torta_de_res: users.Tacos_de_res,
          Torta_de_pastor: users.Torta_de_pastor,
          Torta_de_puerco: users.Torta_de_puerco,
    
        }
      })
    }
    
    
    
    handleChange=async e=>{
    e.persist();
    await this.setState({
      form:{
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
    console.log(this.state.form);
    }
    
      componentDidMount() {
        this.peticionGet();
      }
      

    render() {

      
        return (
                <div className="App-home">
                  <br></br>
               <h1>MESA 1</h1>
               {/* <button ClassName="btn btn-danger" onClick={this.logout}>logout</button> */}
               <button type="button" class="btn btn-danger" onClick={this.logout}>Salir</button>

               <table className="table ">
      <thead>
        <tr>
          {/* <th>ID</th> */}
          <th>Nombre</th>
          <th>Tacos de Res</th>
          <th>Tacos de Pastor</th>
          <th>Tacos de Tripa</th>
          <th>Tacos de Puerco</th>
          <th>Tacos de Res</th>
          <th>Tacos de Pastor</th>
          <th>Tacos de Tripa</th>
          <th>Tacos de Puerco</th>
          <th>Acompañado</th>
          <th>Observaciones</th>
          <th>Cuenta</th>
          <th>Realizado</th>
        
        </tr>
      </thead>
      <tbody>
        {this.state.data.map(users=>{
          return(
            <tr>
          {/* <td>{users._id}</td> */}
          <td>{users.Nombre}</td>
          <td>{users.Taco_de_res}</td>
          <td>{users.Taco_de_pastor}</td>
          <td>{users.Taco_de_tripa}</td>
          <td>{users.Taco_de_puerco}</td>
          <td>{users.Torta_de_res}</td>
          <td>{users.Torta_de_pastor}</td>
          <td>{users.Torta_de_tripa}</td>
          <td>{users.Torta_de_puerco}</td>
          <td>{users.Bebida}</td>
          <td>{users.Obserbaciones}</td>
          <td>$100</td>
          {/* <td>{new Intl.NumberFormat("en-EN").format(users.capital_bursatil)}</td> */}
          <td>
                <button className="btn btn-primary" onClick={()=>{this.seleccionarEmpresa(users); this.modalInsertar()}}></button>
                {"   "}
                <button className="btn btn-danger" onClick={()=>{this.seleccionarEmpresa(users); this.setState({modalEliminar: true})}}></button>
                </td>
          </tr>
          )
        })}
      </tbody>
    </table> 

    

         
               </div>

               

           
);

    }

}

export default Home;