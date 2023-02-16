
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useAddUserMutation } from "../Feature/userSlice";

const Data = () => {
const [addUser]=useAddUserMutation()
console.log(addUser)

  const handleSubmit = (e) => {
    e.preventDefault();
    // code to submit the form goes here
  
    const {name:{value:valuename},email:{value:valueeemail},age:{value:valueage},} = e.target.elements;
    addUser({
        name:valuename,
        email:valueeemail,
        age:valueage,
    })
    }
  

  return (
    <>
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input
        id="valuename"
          type="text"
          name="name"
          placeholder="Enter your name"
        
        
        />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input
          type="email"
          name="email"
          id="valueemail"
          placeholder="Enter your email"
         
        />
      </FormGroup>
      <FormGroup>
        <Label for="age">Age</Label>
        <Input
          type="number"
          name="age"
          id="valueage"
          placeholder="Enter your age"
          
        />
      </FormGroup>
      <Button color="primary" type="submit">
        Submit
      </Button>
    </Form>


    </>
  );
};

export default Data;
