import styled from 'styled-components'
import Input from '../components/Input'


const StyledForm = styled.form`
`

const Divider = styled.hr`
  border: none;
  height: 3px;
  width: 40%;
  text-align: left;
  background: ${props => props.theme.red};
  margin: 1em 0;
  margin-bottom: 2em;
`

export const FormFields = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.4rem 2.4rem;
  @media (max-width: ${props => props.theme.screenSizeMed}) {
    grid-template-columns: 1fr;
  }
  button {
    margin-top: 1.6rem;
  }
`

// May not need this because we're using display: grid now
const FormFieldRow = styled.div`
`


const FormField = styled.div`
`

const Form = () => (
  <StyledForm>
    <p>We would love for you to join our library! As a patron, you get exclusive 
      crazy once in a life time never before seen vip limited time offer curated 
      privileged access to our vast 8 book collection. Did I look up synonnyms 
      for 'exclusive' after running out? Yes but it wasn't helpful. Could I have 
      used Lorem Ipsum instead? Yes. Is writing all of this a waste of time? 
      Nobody answer that.</p>
    <Divider />

    <FormFields>
      {/* <FormFieldRow> */}

        <FormField>
          <label>First Name *</label><br />
          <Input 
            type="text" 
            placeholder="Michael" 
            name="first-name" 
            id="first-name"
          />
        </FormField>

        <FormField>
          <label>Last Name *</label><br />
          <Input 
            type="text" 
            placeholder="Scott" 
            name="last-name" 
            id="last-name"
          />
        </FormField>

      {/* </FormFieldRow>
      <FormFieldRow> */}

        <FormField>
          <label>Email *</label><br />
          <Input 
            type="email" 
            placeholder="michaelscott@dundermifflin.com" 
            name="email" 
            id="email"
          />
        </FormField>
        <FormField>
          <label>Phone *</label><br />
          <Input 
            type="phone" 
            placeholder="123-456-7890" 
            name="phone" 
            id="phone"
          />
        </FormField>

      {/* </FormFieldRow> */}
    </FormFields>
  </StyledForm>
)

export default Form