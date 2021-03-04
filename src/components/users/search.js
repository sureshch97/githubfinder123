import React,{useState , useContext} from 'react';
import GithubContext from '../../context/github/githubcontext';
import AlertContext from '../../context/Alert/alertContext';

const Search = () => {

    const githubContext  = useContext(GithubContext);
    const alertContext  = useContext(AlertContext);
  
    const [text , setText] = useState('');

    const onSubmit = e =>{
      
        e.preventDefault();

        if(text === '')

            {

            alertContext.setAlert('Please Enter Something....' , 'light');

            }

        else

           {
         
            githubContext.searchUsers(text);
            setText('');


           }
    };

   const onChange = e =>  setText(e.target.value);
      
       return(

           <div> 
                    <form onSubmit={onSubmit} className="form">

                        <input type='text'
                                name='text'
                                placeholder='Serach users....'
                                value={text}
                                onChange={onChange}
                         />

                        <input 
                        type='submit'
                        name='search' 
                        className="btn btn-dark btn-block "
                        />

                   </form>

                { githubContext.users.length > 0 &&
                <button 
                 onClick={githubContext.clearUsers}
                  className='btn btn-light btn-block'>Clear</button>
                }   
           </div>

       );


};

export default Search;