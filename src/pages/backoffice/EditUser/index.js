import TitlesContainer from '../../../components/TitlesContainer';
import Main from '../../../components/Main';

function EditUser() {

    return (
        <Main>
            <TitlesContainer>
                <h2>backoffice</h2>
                <h1>Editar Usuário</h1>
            </TitlesContainer>

            {/* <section >
                    <form onSubmit={handleSubmit}>
                        <InputContainer className='input-container'>
                            <label htmlFor='name'>Nome</label>
                            <Input type='text' id='name' value={name} onChange={handleChange} required/>
                        </InputContainer>
                        <InputContainer className='input-container'>
                            <label htmlFor='email'>Email</label>
                            <Input type='email' id='email' value={email} onChange={handleChange} required/>
                        </InputContainer>
                        <InputContainer className='input-container'>
                            <label htmlFor='userType'>Tipo de Usuário</label>
                            <Input type='section' id='userType'  value={description} onChange={handleChange} required/>
                        </InputContainer>
                        <AuthButton type='submit' className='sendButton'>Salvar</AuthButton>
                        <AuthButton className='sendButton'>Voltar</AuthButton>
                    </form>
                </section> */}
        </Main>
    );
}

export default EditUser;